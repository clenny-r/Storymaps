"""
Parse Hymns-10_2021.pdf extracted text into songs.json
"""

import re
import json

# ── READ EXTRACTED TEXT ──────────────────────────────────────────────────────
with open('extracted_raw.txt', 'r', encoding='utf-8') as f:
    raw_text = f.read()

# Replace the Th-ligature character (U+E053) with "Th" everywhere
raw_text = raw_text.replace('\ue053', 'Th')

# ── SPLIT INTO PAGES ─────────────────────────────────────────────────────────
parts = re.split(r'=== PAGE (\d+) ===\n?', raw_text)
pages = {}
for i in range(1, len(parts), 2):
    pnum = int(parts[i])
    ptext = parts[i+1].strip() if i + 1 < len(parts) else ''
    pages[pnum] = ptext

# ── TABLE OF CONTENTS ────────────────────────────────────────────────────────
TITLES = {
    1: "Blessed Assurance", 2: "We're Marching to Zion",
    3: "What a Friend We Have in Jesus", 4: "O Worship the King",
    5: "All the Way My Savior Leads Me", 6: "Come, Thou Almighty King",
    7: "Holy, Holy, Holy", 8: "Jerusalem the Golden",
    9: "Trust and Obey", 10: "It is Well with My Soul",
    11: "Victory Through Grace", 12: "Onward, Christian Soldiers",
    13: "Doxology", 14: "Crown Him with Many Crowns",
    15: "Jesus Loves Me", 16: "Hark! The Herald Angels Sing",
    17: "Ring the Bells of Heaven", 18: "Christ Arose!",
    19: "Joy to the World", 20: "Be Still, My Soul",
    21: "Brighten the Corner Where You Are",
    22: "Come, Thou Fount of Every Blessing",
    23: "Count Your Blessings", 24: "Faith of Our Fathers",
    25: "A Mighty Fortress", 26: "Jesus Shall Reign",
    27: "All People That on Earth Do Dwell",
    28: "O Come, All Ye Faithful", 29: "The Bridegroom Comes",
    30: "Rise Up, O Men of God", 31: "O for a Thousand Tongues",
    32: "Glory Be to the Father", 33: "Glory Be to the Father",
    34: "Jesus, the Very Thought of Thee",
    35: "Though Your Sins Be as Scarlet", 36: "The Solid Rock",
    37: "Safe in the Arms of Jesus",
    38: "I Know Whom I Have Believed", 39: "To God Be the Glory",
    40: "Rock of Ages", 41: "Just As I Am", 42: "Abide With Me",
    43: "Nearer, My God, to Thee",
    44: "Praise, My Soul, the King of Heaven",
    45: "All Hail the Power of Jesus' Name",
    46: "Be Thou My Vision", 47: "For All the Saints",
    48: "Grace Greater Than My Sin", 49: "Immortal, Invisible",
    50: "Lead On, O King Eternal",
    51: "The Church's One Foundation",
    52: "Wonderful Grace of Jesus", 53: "Amazing Grace",
    54: "Rutherford", 55: "'Tis So Sweet to Trust in Jesus",
    56: "How Firm a Foundation",
    57: "When I Survey the Wondrous Cross",
    58: "Rejoice, the Lord is King!", 59: "I Am Thine, O Lord",
    60: "Take the Name of Jesus with You", 61: "He Lives",
    62: "The Bleeding Sacrifice", 63: "Jesus Paid It All",
    64: "He Hideth My Soul", 65: "I Love to Tell the Story",
    66: "Loved with Everlasting Love",
    67: "And Can It Be That I Should Gain?",
    68: "There is a Fountain", 69: "Blessed Quietness",
    70: "Christ the Lord is Risen Today",
    71: "Faith is the Victory", 72: "Dare to Be a Daniel",
    73: "America", 74: "Yesterday, Today, Forever",
    75: "O God, Our Help in Ages Past",
    76: "Praise to the Lord, the Almighty", 77: "Redeemed",
    78: "Savior, Like a Shepherd Lead Us",
    79: "Since Jesus Came Into My Heart",
    80: "Sitting at the Feet of Jesus",
    81: "Soldiers of Christ, Arise",
    82: "The Comforter Has Come",
    83: "Turn Your Eyes Upon Jesus",
    84: "When the Roll is Called Up Yonder",
    85: "When We All Get to Heaven", 86: "Day by Day",
    87: "Fairest Lord Jesus", 88: "God Will Take Care of You",
    89: "Great is Thy Faithfulness", 90: "How Great Thou Art",
    91: "Jesus Loves Even Me", 92: "In the Garden",
    93: "Love Lifted Me", 94: "O Sacred Head, Now Wounded",
    95: "My Jesus, I Love Thee", 96: "Take My Life",
    97: "The Old Rugged Cross",
    98: "There is Power in the Blood",
    99: "This is My Father's World", 100: "Victory in Jesus",
}


# ── HELPERS ──────────────────────────────────────────────────────────────────

MUSIC_CHARS = ['œ', '˙', '˘', '˛', '˜', '˚', 'ˇ', 'ˆ']


def has_real_words(line):
    """Return True if the line contains at least one real lowercase word (2+ chars)."""
    return bool(re.search(r'\b[a-z]{2,}\b', line))


def is_notation_line(line):
    """Return True if line should be excluded (music notation, chords, symbols)."""
    if not line:
        return True
    # Direct music symbol check
    if any(c in line for c in MUSIC_CHARS):
        return True
    # Treble/bass clef
    if re.match(r'^[&?]\s', line):
        return True
    # Pure digits
    if re.match(r'^\d+$', line):
        return True
    # Measure number followed by chords: "4 A D D G/D" or "11 G D/F#"
    if re.match(r'^\d+\s+[A-G]', line):
        return True
    # Lines with no real lowercase words are notation/chord lines
    if not has_real_words(line) and len(line) > 2:
        return True
    # Very short lines (1–2 chars) that aren't real words
    if len(line) <= 2:
        return True
    return False


def is_attribution_line(line):
    """Detect author/year attribution lines at the bottom of notation pages."""
    return bool(re.search(r'[A-Z][a-z].*\b\d{4}\b', line) and len(line) < 120)


def clean_lyric(line):
    """Remove verse number prefix and syllable-hyphen separators."""
    line = re.sub(r'^\d+\.\s*', '', line)  # "1. " prefix
    line = re.sub(r'\s+-\s+', '', line)    # " - " separators
    line = re.sub(r'\s+', ' ', line).strip()
    # Trim trailing hyphen
    line = re.sub(r'-$', '', line).strip()
    return line


def fix_th(text):
    """Restore common 'Th'-started words that got mangled by font encoding."""
    # " ou " → " Thou " (but not "your", "would", "could", "should")
    text = re.sub(r'(?<!\w)ou(?!\w)', 'Thou', text)
    # " ee " → " Thee "
    text = re.sub(r'(?<!\w)ee(?!\w)', 'Thee', text)
    # " ine " → " Thine " (but careful with "wine", "vine", "fine")
    # Don't do this one — too risky
    # " y " before certain words → " Thy " (possessive)
    text = re.sub(r'\by\b(?=\s+(?:name|word|throne|hand|grace|love|will|power|praise|'
                  r'glory|blood|truth|way|light|path|feet|voice|cross|people|servant|'
                  r'mercy|holy|righteous|saving|wondrous|eternal|sovereign|sacred))',
                  'Thy', text)
    # "This is" restoration
    text = re.sub(r'\bThis is\b', 'This is', text)  # already fixed via \ue053
    return text


# ── FIND WHICH PAGES BELONG TO WHICH SONG ───────────────────────────────────

def find_song_pages():
    mapping = {n: {'history': [], 'notation': []} for n in range(1, 101)}

    for pnum, ptext in sorted(pages.items()):
        if pnum < 8:
            continue
        lines = [l.strip() for l in ptext.split('\n') if l.strip()]
        if not lines:
            continue
        first = lines[0]
        second = lines[1] if len(lines) > 1 else ''

        notation_match = None

        # Pattern A: "Title N" (number at end of first line)
        m = re.match(r'^(.+?)\s+(\d+)\s*$', first)
        if m:
            n = int(m.group(2))
            if 1 <= n <= 100:
                notation_match = n

        # Pattern B: "Title\nN" (number on second line)
        if notation_match is None and re.match(r'^\d+$', second):
            n = int(second)
            if 1 <= n <= 100:
                notation_match = n

        # Pattern C: "N\nTitle" (number on first line, title second)
        if notation_match is None and re.match(r'^\d+$', first):
            n = int(first)
            if 1 <= n <= 100:
                notation_match = n

        if notation_match:
            mapping[notation_match]['notation'].append(pnum)
        else:
            # History page: match title prefix
            # Normalize special chars (curly quotes, replacement chars)
            def norm(s):
                s = s.lower()
                s = re.sub(r"[\u2018\u2019\ufffd\u2032']", "'", s)
                s = re.sub(r'[\u201c\u201d]', '"', s)
                return s

            nfirst = norm(first)
            for snum, title in TITLES.items():
                ntitle = norm(title)
                if nfirst.startswith(ntitle[:18]):
                    mapping[snum]['history'].append(pnum)
                    break

    return mapping


# ── EXTRACT LYRICS ───────────────────────────────────────────────────────────

def extract_lyrics(nota_texts):
    """Extract stanzas from notation page text(s)."""
    raw_lines = []
    for ptext in nota_texts:
        for line in ptext.split('\n'):
            line = line.strip()
            if not line:
                continue
            if is_notation_line(line):
                continue
            if is_attribution_line(line):
                continue
            # Skip page headers ("Title N")
            m = re.match(r'^(.+?)\s+(\d+)\s*$', line)
            if m and 1 <= int(m.group(2)) <= 100:
                continue
            # Skip standalone small numbers
            if re.match(r'^\d{1,3}$', line):
                continue
            raw_lines.append(line)

    if not raw_lines:
        return []

    # Remove any title-header lines that appear before the first verse number
    first_verse_idx = next(
        (i for i, l in enumerate(raw_lines) if re.match(r'^\d+\.', l)), -1
    )
    if first_verse_idx > 0:
        raw_lines = raw_lines[first_verse_idx:]

    # Determine verse count: count consecutive numbered lines at start
    verse_count = 0
    for line in raw_lines:
        if re.match(r'^\d+\.', line):
            verse_count += 1
        else:
            break

    if verse_count == 0:
        # No verse numbers found — return single stanza with all lines
        cleaned = [fix_th(clean_lyric(l)) for l in raw_lines if l]
        cleaned = [l for l in cleaned if l]
        return [{"label": "Verse 1", "lines": cleaned}] if cleaned else []

    # Group lines into N-line "sections" (one line per verse per staff system)
    # Any incomplete section at the end is treated as chorus / refrain
    verses = [[] for _ in range(verse_count)]
    chorus_lines = []

    idx = 0
    while idx < len(raw_lines):
        remaining = len(raw_lines) - idx
        if remaining < verse_count:
            # Incomplete section — treat as chorus/refrain
            chorus_lines.extend(raw_lines[idx:])
            break
        section = raw_lines[idx: idx + verse_count]
        for vi, line in enumerate(section):
            verses[vi].append(clean_lyric(line))
        idx += verse_count

    # Build stanza objects
    stanzas = []
    for i, vlines in enumerate(verses):
        cleaned = [fix_th(l) for l in vlines if l.strip()]
        if cleaned:
            stanzas.append({"label": f"Verse {i+1}", "lines": cleaned})

    if chorus_lines:
        cleaned = [fix_th(clean_lyric(l)) for l in chorus_lines if l.strip()]
        cleaned = [l for l in cleaned if l]
        if cleaned:
            stanzas.append({"label": "Chorus", "lines": cleaned})

    return stanzas


# ── EXTRACT AUTHOR / YEAR ────────────────────────────────────────────────────

def extract_author_year(hist_texts, nota_texts):
    author, year = '', 0

    # Author from history page line 2 — use greedy match to capture full name
    for ptext in hist_texts:
        lines = [l.strip() for l in ptext.split('\n') if l.strip()]
        for line in lines[1:5]:
            # "Words by First Last (YYYY–YYYY), Music by..."
            m = re.search(r'Words by\s+([^,(]+)(?:\s*\((\d{4}))?', line, re.I)
            if m:
                author = m.group(1).strip().rstrip(',').strip()
                break
            # "by First Last (YYYY" style anywhere on the line
            m = re.search(r'by\s+([A-Z][a-zA-Z\s\.]+?)\s*\((\d{4})', line, re.I)
            if m:
                author = m.group(1).strip()
                break
        if author:
            break

    # Year from notation page attribution ("Firstname Lastname, YYYY")
    # This gives the composition year, not birth year
    for ptext in nota_texts:
        lines = [l.strip() for l in ptext.split('\n') if l.strip()]
        for line in reversed(lines[-6:]):
            if is_attribution_line(line):
                m = re.search(r',\s*(\d{4})', line)
                if m:
                    year = int(m.group(1))
                    if not author:
                        # Also grab author name from attribution
                        name_m = re.match(r'^([A-Z][a-zA-Z\s\.]+),', line)
                        if name_m:
                            author = name_m.group(1).strip()
                    break
        if year:
            break

    # Remove birth years that accidentally got extracted as composition years
    # Composition years are typically 1600-2000 range but so are birth years
    # We use notation page years which are composition years
    return author, year


# ── KEYWORDS ─────────────────────────────────────────────────────────────────

KEYWORD_MAP = {
    'christmas': ['christmas', 'manger', 'bethlehem', 'herald angels', 'joy to the world', 'bells of heaven'],
    'easter': ['arose', 'risen', 'resurrection', 'calvary', 'wondrous cross', 'bled', 'tomb'],
    'praise': ['praise', 'glory', 'worship', 'adore', 'glorify', 'magnify', 'exalt'],
    'salvation': ['salvation', 'redeemed', 'forgiven', 'grace', 'amazing grace', 'washed in his blood'],
    'trust': ['trust', 'faith', 'assurance', 'lean on', 'confidence'],
    'prayer': ['prayer', 'pray', 'intercede', 'carry to god', 'petition'],
    'heaven': ['heaven', 'eternal', 'paradise', 'zion', 'roll is called', 'when we all get'],
    'jesus': ['jesus', 'christ', 'savior', 'redeemer', 'messiah', 'lord'],
    'holy spirit': ['spirit', 'comforter', 'pentecost', 'holy ghost'],
    'comfort': ['comfort', 'peace', 'rest', 'refuge', 'shelter', 'still my soul'],
    'patriotic': ['america', 'land of the free', 'pilgrim'],
}

def extract_keywords(title, stanzas):
    text = title.lower() + ' '
    for s in stanzas:
        text += ' '.join(s.get('lines', [])).lower() + ' '
    kws = []
    for kw, patterns in KEYWORD_MAP.items():
        if any(p in text for p in patterns):
            kws.append(kw)
    return kws


# ── MAIN ──────────────────────────────────────────────────────────────────────

song_page_map = find_song_pages()
songs = []

for song_num in range(1, 101):
    title = TITLES[song_num]
    hist_pages = song_page_map[song_num]['history']
    nota_pages = song_page_map[song_num]['notation']

    hist_texts = [pages[p] for p in hist_pages if p in pages]
    nota_texts = [pages[p] for p in nota_pages if p in pages]

    author, year = extract_author_year(hist_texts, nota_texts)
    stanzas = extract_lyrics(nota_texts)

    if not stanzas:
        stanzas = [{"label": "Verse 1", "lines": [f"[Lyrics for {title}]"]}]

    keywords = extract_keywords(title, stanzas)

    song = {
        "id": song_num,
        "title": title,
        "author": author,
        "year": year,
        "keywords": keywords,
        "stanzas": stanzas,
    }
    songs.append(song)

    vc = len(stanzas)
    print(f"[{song_num:3d}] {title[:45]:45s} | {author[:28]:28s} | {year} | {vc}st")

# ── WRITE JSON ────────────────────────────────────────────────────────────────

out_path = r'C:\Users\ramne\Documents\GitHub\Storymaps\Pages\Apps\Hymns_app\songs.json'
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(songs, f, indent=2, ensure_ascii=False)

print(f"\nWrote {len(songs)} songs -> {out_path}")
