# Render the speaking pictures (S3/S4 scene, S5 three options, S8 object) of a test file to one PNG contact sheet.
# Usage: python3 tools/render_svgs.py tests/mock_test_B.js out.png
import asyncio, sys, pathlib
from playwright.async_api import async_playwright

async def main(js, out):
    src = pathlib.Path(js).read_text(encoding='utf-8')
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={'width': 1300, 'height': 600})
        await pg.set_content('<body style="margin:0;background:#fff"></body>')
        await pg.add_script_tag(content='window.MOCK_TESTS=[];' + src)
        html = await pg.evaluate("""()=>{const T=MOCK_TESTS[MOCK_TESTS.length-1].speaking.tasks; const s5=T[4];
          const lab=t=>'<div style="font:14px sans-serif;padding:2px">'+t+'</div>';
          return '<div style="display:flex;gap:8px"><div style="width:640px">'+lab('S3/S4 scene')+T[2].image+'</div><div style="width:640px">'+lab('S8 object')+T[7].image+'</div></div>'
            +'<div style="display:flex;gap:8px;width:640px">'+[s5.choices[0],s5.choices[1],s5.third].map(c=>'<div style="width:210px">'+lab(c.title)+c.image+'</div>').join('')+'</div>';}""")
        await pg.set_content('<body style="margin:0;background:#fff">' + html + '</body>')
        h = await pg.evaluate('document.body.scrollHeight')
        await pg.set_viewport_size({'width': 1300, 'height': h})
        await pg.screenshot(path=out)
        await b.close()

asyncio.run(main(sys.argv[1], sys.argv[2]))
print('saved', sys.argv[2])
