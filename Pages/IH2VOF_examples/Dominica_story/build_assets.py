"""Dominica story page: copy the high-quality videos and cut one poster frame from each.
Folder: C:\\Users\\ramne\\Documents\\GitHub\\Storymaps\\Pages\\IH2VOF_examples\\Dominica_story
Reads : C:\\IH2VOF\\CASES\\Dominica_design_runs\\04_hq_videos\\<case>\\<case>_HQ.mp4
Writes: videos\\<id>.mp4, posters\\<id>.jpg in this folder.   Run: python build_assets.py   (needs ffmpeg on the path)
The poster time is the model time of the largest wave group (model seconds / 10 = video seconds)."""
import os, shutil, subprocess, sys
HERE = os.path.dirname(os.path.abspath(__file__))
HQ = sys.argv[1] if len(sys.argv) > 1 else r'C:\IH2VOF\CASES\Dominica_design_runs\04_hq_videos'
V = [('sh-s01', 'SH0080_S01_existing_WL078_basin', 547), ('sh-s02', 'SH0080_S02_proposed_hard_WL078_basin', 547), ('sh-s03', 'SH0080_S03_reef_only_WL078_basin', 547),
     ('sh-s04', 'SH0080_S04_nourish_only_WL078_basin', 547), ('sh-s05', 'SH0080_S05_marsh_draped_WL078_basin', 547), ('sh-s06', 'SH0080_S06_veg_only_WL078_basin', 547),
     ('sh-s07', 'SH0080_S07_hybrid_draped_WL078_basin', 547), ('sh-s01-high', 'SH0080_S01_existing_WL148_flood', 547), ('sh-s02-high', 'SH0080_S02_proposed_hard_WL148_flood', 547),
     ('pot-existing', 'Pottersville_0035_existing_WL078_basin', 477), ('pot-proposed', 'Pottersville_0035_proposed_WL078_basin', 477),
     ('pm-existing-high', 'Portsmouth_0150_existing_WL148_basin', 559), ('pm-proposed-high', 'Portsmouth_0150_proposed_WL148_basin', 559),
     ('sd1-existing-high', 'Portsmouth_SD1_existing_WL148', 209), ('sd1-proposed-high', 'Portsmouth_SD1_proposed_WL148', 209),
     ('sd2-existing-high', 'Portsmouth_SD2_existing_WL148', 210), ('sd2-proposed-high', 'Portsmouth_SD2_proposed_WL148', 210)]
for vid, case, t in V:
    src = os.path.join(HQ, case, case + '_HQ.mp4'); dst = os.path.join(HERE, 'videos', vid + '.mp4')
    if not os.path.exists(dst) or os.path.getsize(dst) != os.path.getsize(src): shutil.copy2(src, dst)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-ss', '%.1f' % (t / 10), '-i', dst, '-frames:v', '1', '-vf', 'scale=1280:-2', '-q:v', '4',
                    os.path.join(HERE, 'posters', vid + '.jpg')], check=True)
    print(vid, os.path.getsize(dst) // 1024, 'kB')
