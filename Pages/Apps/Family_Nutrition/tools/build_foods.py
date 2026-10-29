# Builds foods.js for the TWC Family Nutrition app from USDA SR26 (via hadley/usdanutrients).
# Setup once:  git clone --depth 1 https://github.com/hadley/usdanutrients
#              pip install pyreadr pandas
#              python -c "import pyreadr,pickle;L=lambda n:list(pyreadr.read_r(f'usdanutrients/data/{n}.rda').values())[0];pickle.dump((L('food'),L('nutrient'),L('weight'),L('nutrient_def')),open('sr.pkl','wb'))"
# Then:        python build_foods.py   (writes foods.js next to it; copy it up one folder)
# Values are per 100 g of food as eaten. None means "not known" (shown as missing, not zero).
import pickle, json, math, datetime

food, nut, w, nd = pickle.load(open('sr.pkl', 'rb'))
KEYS = ['kcal','pro','fat','carb','fib','sug','ca','fe','zn','k','na','vc','va','vd','fol','b12','sat']
IDS  = {'kcal':208,'pro':203,'fat':204,'carb':205,'fib':291,'sug':269,'ca':301,'fe':303,'zn':309,
        'k':306,'na':307,'vc':401,'va':320,'vd':328,'fol':435,'b12':418,'sat':606}
NUT = {}
for r in nut[nut.nutr_id.isin(list(IDS.values()) + [324])].itertuples():
    NUT.setdefault(int(r.food_id), {})[int(r.nutr_id)] = float(r.value)
NAME = dict(zip(food.food_id.astype(int), food.food))

def sr(fid):
    d = NUT.get(fid)
    assert d is not None, fid
    out = {}
    for k, i in IDS.items():
        v = d.get(i)
        if k == 'vd' and v is None and 324 in d: v = d[324] / 40.0   # IU to micrograms
        out[k] = None if v is None or (isinstance(v, float) and math.isnan(v)) else v
    return out

def mix(parts, yield_g=None, over=None):
    """parts: list of (source, grams). source is an SR id or a dict of per-100 g values."""
    tot = {k: 0.0 for k in KEYS}; miss = set(); g = 0
    total_g = sum(gr for _, gr in parts)
    for src, grams in parts:
        d = sr(src) if isinstance(src, int) else src
        g += grams
        for k in KEYS:
            v = d.get(k)
            if v is None:
                # unknown in a minor ingredient (under 15% of the recipe) counts as none
                if not (isinstance(src, int) and src in ZERO_OK) and grams / total_g >= 0.15: miss.add(k)
                continue
            tot[k] += v * grams / 100.0
    y = yield_g or g
    out = {k: (None if k in miss else tot[k] * 100.0 / y) for k in KEYS}
    if over: out.update(over)
    return out

# Ackee, canned in brine, drained: Grace Ackees Nutrition Facts per 100 g (voila.ca listing, Oct 2026).
# Only these values are on the label; everything else is left unknown until researched.
ACKEE = {'kcal':140,'fat':9,'sat':3.5,'carb':11,'fib':2,'sug':4,'pro':4,'na':125}
ZERO_OK = {2047, 14411, 4053, 2053, 1001, 4031, 19335, 19334, 2015}  # salt, water, oil, vinegar, butter, shortening, sugars, curry powder: missing = effectively none
SALT = 2047; OIL = 4053; ONION = 11282; TOM = 11529; WATER = 14411

# Saltfish after soaking and boiling: modelled as cooked Atlantic cod plus remaining salt.
# 1.5 g salt per 100 g fish is an estimate; real sodium depends on how long it is soaked.
SALTFISH = mix([(15016, 100), (SALT, 1.5)])

DUMPLING = mix([(20081, 60), (WATER, 55), (SALT, 0.6)], yield_g=110)

F = []
def add(key, name, emoji, cat, plate, src, portions, sv=None, tags=None, note=None, alias=None, r=None):
    """r: ids of family food requests this food answers, so logged placeholders start counting."""
    if isinstance(src, int):
        n = sr(src); source = 'USDA SR26 #%d: %s' % (src, NAME[src])
    else:
        n, source = src
        n = {k: n.get(k) for k in KEYS}
    F.append(dict(id=key, n=name, e=emoji, c=cat, p=plate, v=n, s=source, pt=portions,
                  sv=sv, t=tags or [], note=note, a=alias or [], r=r or []))

R = 'Recipe estimate (TWC), built from USDA ingredients: '

# plate groups: vf = vegetables and fruit, pr = protein foods (includes milk, cheese, beans),
#               wg = whole grains, rg = refined grains, x = not on the plate (treats, fats, sugary drinks)
# portions: [label, grams]. First entry is the usual adult portion; "kid" portions marked with a child.
# ---------------- Jamaican and Caribbean ----------------
add('ackee_saltfish', 'Ackee and saltfish', '🍳', 'jam', {'vf':.45,'pr':.45,'x':.1},
    (mix([(ACKEE, 300), (SALTFISH, 150), (ONION, 50), (TOM, 60), (11821, 30), (OIL, 15)]),
     R + 'ackee (label values only), soaked saltfish, onion, tomato, sweet pepper, oil'),
    [['1 cup', 190], ['½ cup', 95], ['¼ cup 🧒', 48]], sv=95, tags=['bones', 'partial'],
    note='Ackee label lists only calories, fat, carbohydrate, fibre, sugar, protein and sodium, so vitamins and minerals from the ackee are not counted yet.')
add('ackee', 'Ackee (canned, drained)', '🟡', 'jam', {'vf':1}, (ACKEE, 'Grace Ackees Nutrition Facts per 100 g'),
    [['½ cup', 120], ['¼ cup 🧒', 60]], sv=75, tags=['partial'], note='Only label values known so far.')
add('saltfish', 'Saltfish (soaked, boiled)', '🐟', 'jam', {'pr':1},
    (SALTFISH, R + 'cooked Atlantic cod plus about 1.5 g salt per 100 g left after soaking (estimate)'),
    [['½ cup flaked', 70], ['2 tbsp 🧒', 18]], sv=75, tags=['bones', 'fish'])
add('callaloo', 'Callaloo (steamed)', '🥬', 'jam', {'vf':1},
    (mix([(11004, 300), (ONION, 40), (TOM, 50), (OIL, 10), (SALT, 2)]), R + 'amaranth leaves, onion, tomato, oil, salt'),
    [['1 cup', 160], ['½ cup', 80], ['¼ cup 🧒', 40]], sv=75, alias=['amaranth', 'spinach jamaican'])
add('rice_peas', 'Rice and peas', '🍚', 'jam', {'rg':.7,'pr':.3},
    (mix([(20445, 600), (16033, 250), (12118, 150), (ONION, 30), (SALT, 4)]),
     R + 'unenriched white rice, red kidney beans, canned coconut milk, onion, salt'),
    [['1 cup', 190], ['½ cup', 95], ['¼ cup 🧒', 48]], sv=95, alias=['rice and beans'])
add('cornmeal_porridge', 'Cornmeal porridge', '🥣', 'jam', {'rg':.7,'pr':.3},
    (mix([(20022, 40), (1077, 120), (WATER, 200), (1095, 30)], yield_g=360),
     R + 'enriched cornmeal, whole milk, water, sweetened condensed milk'),
    [['1 bowl (1 cup)', 245], ['½ cup 🧒', 120]], sv=175)
add('plantain_porridge', 'Green plantain porridge', '🥣', 'jam', {'vf':.6,'pr':.4},
    (mix([(9277, 100), (1077, 150), (WATER, 150), (1095, 25)], yield_g=380),
     R + 'green plantain, whole milk, water, sweetened condensed milk'),
    [['1 bowl (1 cup)', 245], ['½ cup 🧒', 120]], sv=175)
add('dumpling_boiled', 'Boiled dumpling', '🥟', 'jam', {'rg':1},
    (DUMPLING, R + 'enriched white flour, water, salt'),
    [['1 dumpling', 55], ['½ dumpling 🧒', 28], ['spinner (small)', 15]], sv=40)
add('dumpling_fried', 'Fried dumpling (Johnny cake)', '🥯', 'jam', {'rg':.8,'x':.2},
    (mix([(20081, 60), (WATER, 30), (OIL, 9), (SALT, 0.6)], yield_g=88), R + 'flour, water, frying oil absorbed, salt'),
    [['1 dumpling', 60], ['½ dumpling 🧒', 30]], sv=40)
add('festival', 'Festival', '🥖', 'jam', {'rg':.8,'x':.2},
    (mix([(20081, 40), (20022, 20), (19335, 8), (1077, 20), (OIL, 10), (WATER, 15)], yield_g=95),
     R + 'flour, cornmeal, sugar, milk, frying oil absorbed'), [['1 festival', 65], ['½ festival 🧒', 32]], sv=40)
add('bammy', 'Bammy', '🫓', 'jam', {'rg':1},
    (mix([(11134, 140), (OIL, 5), (SALT, .5)], yield_g=100), R + 'cassava, a little oil and salt (estimate)'),
    [['1 bammy (small)', 100], ['¼ bammy 🧒', 25]], sv=40, tags=['estimate'])
add('curry_chicken', 'Curry chicken', '🍛', 'jam', {'pr':.7,'vf':.3},
    (mix([(5098, 300), (11365, 150), (OIL, 15), (ONION, 40), (SALT, 3), (2015, 6)]),
     R + 'chicken thigh meat, potato, oil, onion, curry powder, salt'),
    [['1 cup', 230], ['½ cup', 115], ['¼ cup 🧒', 58]], sv=110, tags=['bones'])
add('brown_stew_chicken', 'Brown stew chicken', '🍗', 'jam', {'pr':.85,'vf':.15},
    (mix([(5098, 300), (OIL, 15), (ONION, 40), (TOM, 40), (11935, 15), (SALT, 3)]),
     R + 'chicken thigh meat, oil, onion, tomato, ketchup, salt'),
    [['2 pieces (meat only)', 140], ['1 piece', 70], ['few bites 🧒', 35]], sv=75, tags=['bones'])
add('jerk_chicken', 'Jerk chicken', '🍗', 'jam', {'pr':1},
    (mix([(5069, 300), (SALT, 4), (OIL, 5)]), R + 'roasted chicken drumstick with skin, salt, oil (jerk seasoning)'),
    [['1 quarter leg (meat)', 150], ['1 drumstick (meat)', 75], ['few bites 🧒', 35]], sv=75, tags=['bones'])
add('fried_chicken', 'Fried chicken', '🍗', 'meat', {'pr':.8,'x':.2}, 5067,
    [['1 drumstick (meat)', 75], ['2 pieces', 150], ['few bites 🧒', 35]], sv=75, tags=['bones'])
add('curry_goat', 'Curry goat', '🍛', 'jam', {'pr':.8,'vf':.2},
    (mix([(17169, 300), (11365, 100), (OIL, 15), (2015, 6), (SALT, 3)]), R + 'goat, potato, oil, curry powder, salt'),
    [['1 cup', 200], ['½ cup', 100], ['¼ cup 🧒', 50]], sv=110, tags=['bones'])
add('stew_peas', 'Stew peas', '🍲', 'jam', {'pr':.75,'rg':.25},
    (mix([(16033, 300), (13373, 150), (12118, 80), (DUMPLING, 100), (SALT, 4)]),
     R + 'red kidney beans, stewing beef, coconut milk, spinners, salt'),
    [['1 cup', 250], ['½ cup', 125], ['¼ cup 🧒', 62]], sv=125)
add('oxtail', 'Oxtail with butter beans', '🍲', 'jam', {'pr':.85,'vf':.15},
    (mix([(13373, 250), (11032, 100), (11124, 50), (OIL, 10), (SALT, 3)]),
     R + 'braised beef chuck used for oxtail (oxtail is fattier), lima beans, carrot, oil, salt'),
    [['1 cup', 240], ['½ cup', 120], ['¼ cup 🧒', 60]], sv=110, tags=['bones', 'estimate'])
add('mackerel_rundown', 'Mackerel rundown', '🐟', 'jam', {'pr':.8,'vf':.2},
    (mix([(15048, 200), (12118, 120), (ONION, 40), (TOM, 40)]), R + 'canned mackerel, coconut milk, onion, tomato'),
    [['1 cup', 230], ['½ cup', 115], ['¼ cup 🧒', 58]], sv=110, tags=['bones', 'fish'])
add('escovitch_fish', 'Escovitch fish', '🐟', 'jam', {'pr':.85,'vf':.15},
    (mix([(15262, 250), (OIL, 20), (11124, 30), (ONION, 30), (11821, 20), (2053, 20), (SALT, 2)]),
     R + 'fried fish (tilapia), oil, carrot, onion, pepper, vinegar, salt'),
    [['1 fish fillet', 150], ['½ fillet', 75], ['few bites 🧒', 35]], sv=75, tags=['bones', 'fish'])
add('steamed_fish', 'Steamed fish with okra', '🐟', 'jam', {'pr':.8,'vf':.2},
    (mix([(15262, 250), (11279, 50), (11124, 30), (ONION, 30), (1001, 10), (SALT, 2)]),
     R + 'fish (tilapia), okra, carrot, onion, butter, salt'),
    [['1 fillet', 150], ['½ fillet', 75], ['few bites 🧒', 35]], sv=75, tags=['bones', 'fish'])
add('beef_patty', 'Beef patty', '🥟', 'jam', {'rg':.5,'pr':.3,'x':.2},
    (mix([(20081, 50), (4031, 20), (23570, 45), (ONION, 5), (SALT, .8), (WATER, 15)], yield_g=130),
     R + 'flour pastry with shortening, seasoned ground beef'), [['1 patty', 130], ['¼ patty 🧒', 33]], sv=130, tags=['estimate'])
add('hard_dough', 'Hard dough bread', '🍞', 'jam', {'rg':1}, 18069,
    [['1 thick slice', 45], ['½ slice 🧒', 22]], sv=35, note='Values from enriched white bread; hardo bread is similar but a little sweeter.')
add('bulla', 'Bulla cake', '🍪', 'jam', {'rg':.6,'x':.4},
    (mix([(20081, 100), (19304, 35), (19334, 30), (1001, 10)], yield_g=160), R + 'flour, molasses, brown sugar, butter'),
    [['1 bulla', 80], ['¼ bulla 🧒', 20]], sv=40, tags=['estimate'])
add('fried_plantain', 'Fried ripe plantain', '🍌', 'jam', {'vf':.85,'x':.15},
    (mix([(9277, 100), (OIL, 8)], yield_g=85), R + 'ripe plantain fried in oil'),
    [['3 slices', 60], ['1 slice 🧒', 20]], sv=75)
add('plantain_boiled', 'Boiled plantain', '🍌', 'jam', {'vf':1}, 9278, [['½ cup slices', 77], ['¼ cup 🧒', 38]], sv=75)
add('green_banana', 'Boiled green banana', '🍌', 'jam', {'vf':1},
    (sr(9278), 'Estimate: values for cooked plantain (green banana not in USDA SR26)'),
    [['1 green banana', 100], ['½ banana 🧒', 50]], sv=75, tags=['estimate'])
add('yam', 'Yam (yellow or white), boiled', '🍠', 'jam', {'vf':1}, 11602, [['1 slice (½ cup)', 70], ['2 slices', 140], ['¼ cup 🧒', 35]], sv=75)
add('dasheen', 'Dasheen (taro), boiled', '🥔', 'jam', {'vf':1}, 11519, [['½ cup', 66], ['¼ cup 🧒', 33]], sv=75)
add('breadfruit', 'Breadfruit (roasted)', '🍈', 'jam', {'vf':1},
    (sr(9059), 'USDA SR26 #9059 Breadfruit, raw (roasting removes some water, so this slightly undercounts)'),
    [['1 slice', 90], ['½ slice 🧒', 45]], sv=75, tags=['estimate'])
add('chocho', 'Cho cho (chayote), boiled', '🥒', 'jam', {'vf':1}, 11150, [['½ cup', 80], ['¼ cup 🧒', 40]], sv=75)
add('pumpkin', 'Pumpkin, boiled', '🎃', 'jam', {'vf':1}, 11423, [['½ cup', 122], ['¼ cup 🧒', 61]], sv=75)
add('sorrel', 'Sorrel drink', '🍷', 'jam', {'x':1},
    (mix([(WATER, 225), (19335, 25)], yield_g=250), R + 'hibiscus steeped in water, sweetened (hibiscus adds little nutrition)'),
    [['1 glass (250 mL)', 250], ['small cup 🧒', 125]], tags=['sugary'])
add('carrot_juice_jam', 'Jamaican carrot juice', '🥕', 'jam', {'x':1},
    (mix([(11655, 180), (1095, 40), (WATER, 30)]), R + 'carrot juice, sweetened condensed milk, water'),
    [['1 glass (250 mL)', 250], ['small cup 🧒', 125]], tags=['sugary'])
add('soursop', 'Soursop', '🍈', 'jam', {'vf':1}, 9315, [['½ cup pulp', 112], ['¼ cup 🧒', 56]], sv=75, tags=['seeds'])
add('coconut_water', 'Coconut water', '🥥', 'drink', {}, 14002, [['1 cup', 240], ['½ cup 🧒', 120]])
# ---------------- Fruit ----------------
for k, n, e, i, pts, extra in [
    ('banana','Banana','🍌',9040,[['1 medium',118],['½ banana 🧒',59]],[]),
    ('apple','Apple (with skin)','🍎',9003,[['1 medium',182],['½ apple',91],['¼ apple, thin slices 🧒',45]],['rawhard']),
    ('orange','Orange','🍊',9200,[['1 medium',131],['½ orange 🧒',65]],[]),
    ('mango','Mango','🥭',9176,[['1 cup pieces',165],['½ cup',82],['¼ cup 🧒',41]],[]),
    ('papaya','Papaya (pawpaw)','🍈',9226,[['1 cup pieces',145],['½ cup',72],['¼ cup 🧒',36]],[]),
    ('guava','Guava','🍐',9139,[['1 fruit',55],['½ fruit 🧒',27]],['seeds']),
    ('strawberries','Strawberries','🍓',9316,[['1 cup',152],['½ cup',76],['¼ cup, cut 🧒',38]],[]),
    ('blueberries','Blueberries','🫐',9050,[['1 cup',148],['½ cup',74],['¼ cup, squished 🧒',37]],['round']),
    ('grapes','Grapes','🍇',9132,[['1 cup',151],['10 grapes',49],['5 grapes, quartered 🧒',25]],['grapes']),
    ('watermelon','Watermelon','🍉',9326,[['1 cup cubes',152],['½ cup 🧒',76]],['seeds']),
    ('pineapple','Pineapple','🍍',9266,[['1 cup chunks',165],['½ cup',82],['¼ cup, chopped 🧒',41]],['stringy']),
    ('pear','Pear','🍐',9252,[['1 medium',178],['¼ pear, thin slices 🧒',45]],['rawhard']),
    ('peach','Peach','🍑',9236,[['1 medium',150],['½ peach 🧒',75]],[]),
    ('cherries','Cherries','🍒',9070,[['1 cup',138],['5 cherries, pitted and cut 🧒',34]],['pits']),
    ('kiwi','Kiwi','🥝',9148,[['1 fruit',69],['½ fruit 🧒',35]],[]),
    ('avocado','Avocado (pear)','🥑',9037,[['½ avocado',100],['¼ avocado',50],['2 tbsp mashed 🧒',30]],[]),
    ('raisins','Raisins','🍇',9298,[['small box (1.5 tbsp)',14],['¼ cup',36]],['dried']),
    ('dates','Dates','🌴',9421,[['1 date',24]],['pits','dried']),
    ('applesauce','Applesauce, unsweetened','🍏',9019,[['½ cup',122],['¼ cup 🧒',61]],[]),
]:
    add(k, n, e, 'fruit', {'vf':1}, i, pts, sv=75, tags=extra)
# ---------------- Vegetables ----------------
for k, n, e, i, pts, extra in [
    ('broccoli','Broccoli, cooked','🥦',11091,[['½ cup',78],['¼ cup 🧒',39]],[]),
    ('carrot_cooked','Carrots, cooked','🥕',11125,[['½ cup',78],['¼ cup 🧒',39]],[]),
    ('carrot_raw','Carrot, raw','🥕',11124,[['1 medium',61],['½ cup sticks',61],['¼ cup grated 🧒',27]],['rawhard']),
    ('spinach_cooked','Spinach, cooked','🥬',11458,[['½ cup',90],['¼ cup 🧒',45]],[]),
    ('spinach_raw','Spinach, raw','🥬',11457,[['1 cup',30]],[]),
    ('sweet_potato','Sweet potato, baked','🍠',11508,[['1 medium',114],['½ cup',100],['¼ cup 🧒',50]],[]),
    ('potato','Potato, boiled','🥔',11365,[['1 medium',136],['½ cup',78],['¼ cup 🧒',39]],[]),
    ('fries','French fries (oven)','🍟',11403,[['1 small serving',70],['10 fries 🧒',35]],['salty']),
    ('peas','Green peas','🟢',11313,[['½ cup',80],['¼ cup 🧒',40]],['round']),
    ('corn','Corn kernels','🌽',11179,[['½ cup',82],['¼ cup 🧒',41]],[]),
    ('cabbage','Cabbage, cooked','🥬',11110,[['½ cup',75],['¼ cup 🧒',37]],[]),
    ('tomato','Tomato, raw','🍅',11529,[['1 medium',123],['½ cup chopped',90],['3 cherry tomatoes, quartered 🧒',51]],['round']),
    ('cucumber','Cucumber','🥒',11205,[['½ cup slices',52],['¼ cup 🧒',26]],[]),
    ('lettuce','Lettuce (romaine)','🥗',11251,[['1 cup',47]],[]),
    ('green_beans','Green beans, cooked','🫛',11053,[['½ cup',62],['¼ cup 🧒',31]],[]),
    ('cauliflower','Cauliflower, cooked','🥦',11136,[['½ cup',62],['¼ cup 🧒',31]],[]),
    ('squash','Butternut squash, baked','🎃',11486,[['½ cup',102],['¼ cup 🧒',51]],[]),
    ('kale','Kale, cooked','🥬',11234,[['½ cup',65],['¼ cup 🧒',32]],[]),
    ('okra','Okra, cooked','🫛',11279,[['½ cup',80],['¼ cup 🧒',40]],[]),
    ('sweet_pepper','Sweet pepper, red','🫑',11821,[['½ cup strips',46],['¼ cup 🧒',23]],['rawhard']),
    ('onion','Onion','🧅',11282,[['¼ cup chopped',40]],[]),
]:
    add(k, n, e, 'veg', {'vf':1} if k!='fries' else {'vf':.6,'x':.4}, i, pts, sv=75, tags=extra)
# ---------------- Grains ----------------
for k, n, e, i, pl, pts, sv, extra in [
    ('rice_white','White rice','🍚',20445,{'rg':1},[['1 cup',158],['½ cup',79],['¼ cup 🧒',40]],79,[]),
    ('rice_brown','Brown rice','🍚',20037,{'wg':1},[['1 cup',195],['½ cup',98],['¼ cup 🧒',49]],98,[]),
    ('bread_white','White bread','🍞',18069,{'rg':1},[['1 slice',25],['½ slice 🧒',13]],35,[]),
    ('bread_ww','Whole wheat bread','🍞',18075,{'wg':1},[['1 slice',32],['½ slice 🧒',16]],35,[]),
    ('oatmeal','Oatmeal (porridge, made with water)','🥣',8121,{'wg':1},[['1 cup',234],['¾ cup',175],['½ cup 🧒',117]],175,[]),
    ('pasta','Pasta (spaghetti or macaroni)','🍝',20121,{'rg':1},[['1 cup',140],['½ cup',70],['¼ cup 🧒',35]],70,[]),
    ('pasta_ww','Whole wheat pasta','🍝',20125,{'wg':1},[['1 cup',140],['½ cup',70],['¼ cup 🧒',35]],70,[]),
    ('cheerios','Cheerios (oat O cereal)','🥣',8013,{'wg':1},[['1 cup',28],['½ cup 🧒',14]],30,['uscereal']),
    ('cornflakes','Corn flakes','🥣',8020,{'rg':1},[['1 cup',28],['½ cup 🧒',14]],30,['uscereal']),
    ('raisin_bran','Raisin bran','🥣',8060,{'wg':1},[['1 cup',59],['½ cup 🧒',30]],30,['uscereal']),
    ('infant_cereal','Infant oat cereal (iron-fortified, with milk)','🍼',3689,{'wg':.7,'pr':.3},[['½ cup',120],['¼ cup 🧒',60]],120,[]),
    ('bagel','Bagel','🥯',18001,{'rg':1},[['1 bagel',105],['¼ bagel 🧒',26]],70,[]),
    ('tortilla','Flour tortilla (wrap)','🌯',18364,{'rg':1},[['1 large wrap',70],['½ small 🧒',15]],35,[]),
    ('pancake','Pancake','🥞',18293,{'rg':.8,'x':.2},[['1 pancake (6 inch)',77],['1 small 🧒',38]],35,[]),
    ('waffle','Waffle (frozen)','🧇',18403,{'rg':.8,'x':.2},[['1 waffle',33]],35,[]),
    ('crackers_ww','Whole wheat crackers','🍘',18235,{'wg':1},[['6 crackers',24],['3 crackers 🧒',12]],20,[]),
    ('saltines','Soda crackers','🍘',18228,{'rg':1},[['4 crackers',12],['2 crackers 🧒',6]],20,['salty']),
    ('muffin','Blueberry muffin','🧁',18274,{'rg':.5,'x':.5},[['1 muffin',113],['¼ muffin 🧒',28]],57,[]),
]:
    add(k, n, e, 'grain', pl, i, pts, sv=sv, tags=extra)
# ---------------- Protein foods ----------------
for k, n, e, i, pts, sv, extra in [
    ('egg_boiled','Egg, boiled','🥚',1129,[['1 large',50],['2 eggs',100],['½ egg 🧒',25]],100,[]),
    ('egg_scrambled','Eggs, scrambled','🍳',1132,[['2 eggs',122],['1 egg',61],['¼ cup 🧒',30]],100,[]),
    ('chicken_breast','Chicken breast, roasted','🍗',5064,[['½ breast',86],['½ cup chopped',70],['2 tbsp chopped 🧒',18]],75,[]),
    ('chicken_thigh','Chicken thigh, roasted (meat)','🍗',5098,[['1 thigh',52],['2 thighs',104],['few bites 🧒',25]],75,['bones']),
    ('chicken_liver','Chicken liver, cooked','🫀',5028,[['½ cup',70],['1 tbsp chopped 🧒',12]],75,['liver']),
    ('beef_ground','Ground beef, cooked','🥩',23570,[['½ cup',60],['3 oz',85],['2 tbsp 🧒',15]],75,[]),
    ('beef_stew','Stewing beef, cooked','🥩',13373,[['3 oz',85],['2 tbsp, minced 🧒',18]],75,['tough']),
    ('beef_liver','Beef liver, cooked','🫀',13326,[['3 oz',85],['1 tbsp chopped 🧒',12]],75,['liver']),
    ('pork','Pork loin, roasted','🥓',10027,[['3 oz',85],['2 tbsp, minced 🧒',18]],75,['tough']),
    ('goat','Goat, roasted','🐐',17169,[['3 oz',85],['2 tbsp 🧒',18]],75,['bones']),
    ('turkey_ground','Ground turkey, cooked','🦃',5306,[['½ cup',60],['2 tbsp 🧒',15]],75,[]),
    ('salmon','Salmon, cooked','🐟',15086,[['1 fillet (3 oz)',85],['2 tbsp flaked 🧒',20]],75,['fish']),
    ('salmon_canned','Salmon, canned pink (with soft bones)','🐟',15260,[['½ can',106],['2 tbsp, bones mashed 🧒',25]],75,['fish']),
    ('tuna_light','Tuna, light, canned','🐟',15121,[['½ can',72],['2 tbsp 🧒',20]],75,['fish']),
    ('tuna_albacore','Tuna, white (albacore), canned','🐟',15126,[['½ can',86],['2 tbsp 🧒',20]],75,['fish','albacore']),
    ('sardines','Sardines, canned','🐟',15088,[['3 sardines',36],['1 sardine, mashed 🧒',12]],75,['fish']),
    ('mackerel','Mackerel, canned','🐟',15048,[['½ cup',95],['2 tbsp 🧒',24]],75,['bones','fish']),
    ('tilapia','Tilapia (fish), cooked','🐟',15262,[['1 fillet',87],['2 tbsp flaked 🧒',20]],75,['bones','fish']),
    ('cod','Cod, cooked','🐟',15016,[['1 fillet (3 oz)',85],['2 tbsp 🧒',20]],75,['fish']),
    ('shrimp','Shrimp, cooked','🍤',15151,[['10 large',55],['3 shrimp, chopped 🧒',16]],75,[]),
    ('fish_sticks','Fish sticks','🐟',15027,[['4 sticks',100],['2 sticks 🧒',50]],75,[]),
    ('nuggets','Chicken nuggets','🍗',22974,[['6 nuggets',96],['3 nuggets 🧒',48]],75,['salty']),
    ('hot_dog','Hot dog (wiener)','🌭',7945,[['1 wiener',48],['½ wiener, cut lengthwise 🧒',24]],75,['sausage','salty']),
    ('ham','Ham, sliced','🥓',7029,[['2 slices',56],['½ slice 🧒',14]],75,['salty']),
    ('red_peas','Red peas (kidney beans), cooked','🫘',16033,[['½ cup',89],['¼ cup 🧒',44]],130,[]),
    ('black_beans','Black beans, cooked','🫘',16015,[['½ cup',86],['¼ cup 🧒',43]],130,[]),
    ('chickpeas','Chickpeas, cooked','🫘',16057,[['½ cup',82],['2 tbsp mashed 🧒',20]],130,['round']),
    ('lentils','Lentils, cooked','🫘',16070,[['½ cup',99],['¼ cup 🧒',50]],130,[]),
    ('split_peas','Split peas (soup peas), cooked','🫘',16086,[['½ cup',98],['¼ cup 🧒',49]],130,[]),
    ('tofu','Tofu, firm (calcium-set)','🧈',16126,[['½ cup',126],['¼ cup 🧒',63]],150,[]),
    ('peanut_butter','Peanut butter','🥜',16098,[['2 tbsp',32],['1 tsp, spread thin 🧒',5]],30,['pb']),
    ('almonds','Almonds','🌰',12061,[['¼ cup',36],['10 almonds',12]],30,['nuts']),
    ('hummus','Hummus','🫘',16158,[['¼ cup',62],['1 tbsp 🧒',15]],60,[]),
    ('pumpkin_seeds','Pumpkin seeds','🎃',12016,[['¼ cup',32],['1 tbsp ground 🧒',8]],30,['nuts']),
    ('chia','Chia seeds (soaked)','⚫',12006,[['1 tbsp',12],['1 tsp 🧒',4]],30,['chia']),
]:
    add(k, n, e, 'protein', {'pr':1}, i, pts, sv=sv, tags=extra)
# ---------------- Milk and dairy ----------------
for k, n, e, i, pts, sv, extra in [
    ('milk_whole','Milk, whole (3.25%)','🥛',1077,[['1 cup (250 mL)',258],['½ cup (125 mL)',129],['bottle or sippy (180 mL)',186]],258,['milk']),
    ('milk_2','Milk, 2%','🥛',1079,[['1 cup (250 mL)',258],['½ cup (125 mL)',129]],258,['milk']),
    ('breast_milk','Breast milk','🤱',1107,[['1 feed (about 120 mL)',124],['short feed (about 60 mL)',62]],258,[]),
    ('yogurt_plain','Yogurt, plain (whole milk)','🥄',1116,[['¾ cup',175],['½ cup 🧒',122]],175,[]),
    ('yogurt_fruit','Yogurt, fruit','🍓',1121,[['¾ cup',175],['1 tube or ½ cup 🧒',60]],175,[]),
    ('cheddar','Cheddar cheese','🧀',1009,[['1 slice or 1.5 oz',42],['2 tbsp grated 🧒',14]],50,['cheese']),
    ('mozzarella','Mozzarella (cheese string)','🧀',1028,[['1 cheese string',21]],50,['cheese']),
    ('cottage','Cottage cheese','🥣',1012,[['½ cup',113],['¼ cup 🧒',56]],125,[]),
    ('soy_milk','Soy milk, unsweetened, fortified','🥛',16222,[['1 cup (250 mL)',258],['½ cup',129]],258,['plantmilk']),
    ('almond_milk','Almond milk, sweetened vanilla','🥛',14016,[['1 cup (250 mL)',258]],258,['plantmilk']),
]:
    add(k, n, e, 'dairy', {'pr':1} if k not in ('almond_milk',) else {'x':1}, i, pts, sv=sv, tags=extra)
# ---------------- Drinks ----------------
for k, n, e, i, pts, extra in [
    ('water','Water','💧',14411,[['1 cup (250 mL)',250],['½ cup 🧒',125]],[]),
    ('oj','Orange juice','🧃',9206,[['1 cup (250 mL)',248],['½ cup (125 mL) 🧒',124]],['juice']),
    ('apple_juice','Apple juice','🧃',9400,[['1 cup (250 mL)',248],['juice box (200 mL)',200],['½ cup 🧒',124]],['juice']),
    ('cola','Pop / soda','🥤',14148,[['1 can (355 mL)',368]],['sugary']),
    ('hot_chocolate','Hot chocolate (mix with water)','☕',14194,[['1 cup',275]],['sugary']),
    ('tea','Tea, black','🍵',14355,[['1 cup',240]],[]),
    ('coffee','Coffee','☕',14209,[['1 cup',240]],[]),
]:
    add(k, n, e, 'drink', {} if k in ('water','tea','coffee') else {'x':1}, i, pts, tags=extra)
# ---------------- Snacks, treats, extras ----------------
for k, n, e, i, pts, extra in [
    ('granola_bar','Granola bar','🍫',19020,[['1 bar',28]],[]),
    ('cookie','Chocolate chip cookie','🍪',18159,[['1 cookie',16],['2 cookies',32]],[]),
    ('graham','Graham crackers','🍘',18173,[['2 squares',14]],[]),
    ('chips','Potato chips','🥔',19411,[['small bag (28 g)',28]],['salty']),
    ('popcorn','Popcorn','🍿',19034,[['1 cup',8],['3 cups',24]],['popcorn']),
    ('ice_cream','Ice cream','🍦',19095,[['½ cup',66]],['sugary']),
    ('dark_chocolate','Dark chocolate','🍫',19904,[['2 squares',20]],[]),
    ('pizza','Cheese pizza','🍕',21224,[['1 slice',107],['½ slice 🧒',53]],['salty']),
    ('mac_cheese','Macaroni and cheese (box)','🧀',32005,[['1 cup',200],['½ cup 🧒',100]],['salty']),
    ('chicken_soup','Chicken noodle soup (canned)','🍜',6419,[['1 cup',241],['½ cup 🧒',120]],['salty']),
    ('butter','Butter','🧈',1001,[['1 tsp',5],['1 tbsp',14]],[]),
    ('oil','Cooking oil (olive)','🫒',4053,[['1 tsp',4.5],['1 tbsp',13.5]],[]),
    ('coconut_oil','Coconut oil','🥥',4047,[['1 tsp',4.5],['1 tbsp',13.6]],[]),
    ('sugar','Sugar','🍬',19335,[['1 tsp',4.2],['1 tbsp',12.5]],['sugary']),
    ('honey','Honey','🍯',19296,[['1 tsp',7],['1 tbsp',21]],['sugary','honey']),
    ('jam_spread','Jam','🍓',19297,[['1 tbsp',20]],['sugary']),
    ('ketchup','Ketchup','🍅',11935,[['1 tbsp',17]],['salty']),
    ('mayo','Mayonnaise','🥪',4025,[['1 tbsp',14]],[]),
    ('condensed_milk','Condensed milk, sweetened','🥫',1095,[['1 tbsp',19]],['sugary']),
]:
    pl = {'x':1}
    if k in ('pizza','mac_cheese'): pl = {'rg':.6,'pr':.4}
    if k == 'chicken_soup': pl = {'rg':.4,'pr':.3,'vf':.3}
    if k == 'popcorn': pl = {'wg':1}
    if k == 'dark_chocolate': pl = {'x':1}
    add(k, n, e, 'snack', pl, i, pts, sv=40 if pl != {'x':1} else None, tags=extra)
# ---------------- Supplements ----------------
z = {k: 0 for k in KEYS}
add('vitd_400', 'Vitamin D drops, 400 IU', '💊', 'supp', {}, (dict(z, vd=10.0*100), 'Label amount: 400 IU = 10 micrograms per drop'),
    [['1 drop', 1]], note='Check your bottle: most Canadian drops give 400 IU in 1 drop, some in 1 mL.')
add('vitd_1000', 'Vitamin D, 1000 IU', '💊', 'supp', {}, (dict(z, vd=25.0*100), 'Label amount: 1000 IU = 25 micrograms'),
    [['1 tablet or drop', 1]])

# ---------------- write ----------------
CAT = [['jam','Jamaican','🇯🇲'],['fruit','Fruit','🍎'],['veg','Vegetables','🥦'],['grain','Grains','🍞'],
       ['protein','Protein','🍗'],['dairy','Milk & dairy','🥛'],['drink','Drinks','🧃'],['snack','Snacks & extras','🍪'],
       ['supp','Vitamins','💊']]
out = []
for f in F:
    v = [None if f['v'][k] is None else round(f['v'][k], 3) for k in KEYS]
    o = dict(id=f['id'], n=f['n'], e=f['e'], c=f['c'], p=f['p'], v=v, pt=f['pt'], s=f['s'])
    if f['sv']: o['sv'] = f['sv']
    if f['t']: o['t'] = f['t']
    if f['note']: o['note'] = f['note']
    if f['a']: o['a'] = f['a']
    if f['r']: o['r'] = f['r']
    out.append(o)
ids = [o['id'] for o in out]; assert len(ids) == len(set(ids))
js = ('/* TWC Family Nutrition: food database. Generated %s by build_foods.py.\n'
      '   Values are per 100 g as eaten, in this order: %s.\n'
      '   null = not known yet (shown as missing, never as zero).\n'
      '   Main source: USDA National Nutrient Database for Standard Reference, Release 26. */\n'
      'window.FOOD_DB_VERSION = "%s";\nwindow.NUTRIENT_KEYS = %s;\nwindow.FOOD_CATS = %s;\nwindow.FOODS = [\n%s\n];\n') % (
      datetime.date.today().isoformat(), ', '.join(KEYS), datetime.date.today().isoformat(),
      json.dumps(KEYS), json.dumps(CAT, ensure_ascii=False),
      ',\n'.join(json.dumps(o, ensure_ascii=False, separators=(',', ':')) for o in out))
open('foods.js', 'w', encoding='utf-8').write(js)
print(len(out), 'foods,', len(js)//1024, 'KB')
