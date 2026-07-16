#!/usr/bin/env python3
"""
Add 34 clean Butterfly products with correct color-to-color-chart mapping.
"""

with open('lib/products.ts', 'r') as f:
    content = f.read()

# 34 colors in exact order (same as Clip-In)
colors = [
    ('Jet Black #1', '#0a0a0a', 'jet-black-1', '01_Jet_Black_1.jpg'),
    ('Off Black #1B', '#1A1A1A', 'off-black-1b', '02_Off_Black_1B.jpg'),
    ('Dark Brown #2', '#2C1A0E', 'dark-brown-2', '03_Dark_Brown_2.jpg'),
    ('Walnut Brown #3', '#4A3020', 'walnut-brown-3', '04_Walnut_Brown_3.jpg'),
    ('Chocolate Brown #4', '#5C3A21', 'chocolate-brown-4', '05_Chocolate_Brown_4.jpg'),
    ('Dark Brown/Chestnut Brown #2/6', '#4A3020', 'dark-brown-chestnut-brown-2-6-balayage', '06_Dark_Brown_Chestnut_Brown_2_6.jpg'),
    ('Chestnut Brown #6', '#6B4423', 'chestnut-brown-6', '07_Chestnut_Brown_6.jpg'),
    ('Almond Brown #8', '#8B5A2B', 'almond-brown-8', '08_Almond_Brown_8.jpg'),
    ('Ash Brown #10', '#9C7A4F', 'ash-brown-10', '09_Ash_Brown_10.jpg'),
    ('Dark Brown/Dirty Blonde #2/18', '#6B4423', 'dark-brown-dirty-blonde-2-18-balayage', '10_Dark_Brown_Dirty_Blonde_2_18.jpg'),
    ('Dark Maple Brown #530', '#5C3317', 'dark-maple-brown-530', '11_Dark_Maple_Brown_530.jpg'),
    ('Walnut Brown/Ash Blonde #3/60', '#4A3020', 'walnut-brown-ash-blonde-3-60-rooted', '12_Walnut_Brown_Ash_Blonde_3_60.jpg'),
    ('Mochachino Brown/Dirty Blonde #2/18', '#6B4423', 'mochachino-brown-dirty-blonde-2-18', '13_Dark_Honey_Cocoa.jpg'),
    ('Dark Honey Cocoa Highlight', '#8B4513', 'dark-honey-cocoa-highlight', '13_Dark_Honey_Cocoa.jpg'),
    ('Mochachino Chocolate/Dark Honey', '#5C3A21', 'mochachino-chocolate-dark-honey-rooted', '14_Mochachino_Chocolate_Dark_Honey.jpg'),
    ('Dirty Brunette Highlight', '#6B4423', 'dirty-brunette-highlight', '15_Dirty_Brunette.jpg'),
    ('Honey Comb Highlight', '#D4A574', 'honey-comb-highlight', '16_Honey_Comb.jpg'),
    ('Vanilla Latte #8/18/60', '#D4A574', 'vanilla-latte-highlight-8-18-60', '17_Vanilla_Latte_8_18_60.jpg'),
    ('Pearl Blonde #10/88', '#E8DCC8', 'pearl-blonde-10-88-rooted', '18_Pearl_Blonde_10_88.jpg'),
    ('Mulberry Wine #510', '#4A0E0E', 'mulberry-wine-510', '19_Mulberry_Wine_510.jpg'),
    ('Spiced Crimson #570', '#8B0000', 'spiced-crimson-570', '20_Spiced_Crimson_570.jpg'),
    ('Ash Bronde/Strawberry Blonde #21/27', '#8B5A2B', 'ash-bronde-strawberry-blonde-ombre', '21_Ash_Bronde_Strawberry_Blonde_21_27.jpg'),
    ('Ash Brown/Ash Blonde #8/60', '#9C7A4F', 'ash-brown-ash-blonde-8-60-balayage', '22_Ash_Brown_Ash_Blonde_8_60.jpg'),
    ('Ash Brown/Honey Blonde #8/20/24/60', '#9C7A4F', 'ash-brown-honey-blonde-8-20-24-60-rooted', '23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg'),
    ('Caramel Blonde #18/46', '#C68E17', 'caramel-blonde-18-46-marble', '24_Caramel_Blonde_18_46.jpg'),
    ('White Mocha', '#5C3A21', 'white-mocha-balayage', '25_White_Mocha.jpg'),
    ('Beach Blonde #613', '#F5DEB3', 'beach-blonde-613', '26_Beach_Blonde_613.jpg'),
    ('Bronzed Caramel #6/18/8/60', '#8B5A2B', 'bronzed-caramel-6-18-8-60-marble', '27_Bronzed_Caramel_6_18_8_60.jpg'),
    ('Butter Blonde #P10/16/60', '#E8DCC8', 'butter-blonde-p10-16-60', '28_Butter_Blonde_P10_16_60.jpg'),
    ('Golden Hour Blonde', '#D4A574', 'golden-hour-blonde-balayage', '29_Golden_Hour_Blonde.jpg'),
    ('Dirty Blonde #18', '#D4A574', 'dirty-blonde-18', '30_Dirty_Blonde_18.jpg'),
    ('Platinum Blonde #80', '#E5E4E2', 'platinum-blonde-80', '31_Platinum_Blonde_80.jpg'),
]

# Build butterfly products
butterfly_products = []
for i, (color_name, hex_code, handle, chart_file) in enumerate(colors, 1):
    product = f'''  {{
    id: "butterfly-{i}",
    handle: "ds-hair-butterfly-extensions-{handle}",
    name: "D.S HAIR Butterfly Extensions, {color_name}",
    title: "D.S HAIR Butterfly Extensions, {color_name}",
    description: "Our range of D.S HAIR human extensions is the ultimate in quality and style.",
    shortDescription: "Premium 100% Remy human hair butterfly weft extensions",
    vendor: "D.S HAIR & BEAUTY",
    productType: "Butterfly Weft Extensions",
    type: "professional",
    tags: ["butterfly", "weft", "professional", "new"],
    price: 0,
    originalPrice: undefined,
    currencyCode: "GBP",
    image: "https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_{handle}-2B-v11.jpg?format=pjpg",
    images: ["https://www.bellamihair.com/cdn/shop/files/PDP_SilkSeam_onmodel_{handle}-2B-v11.jpg?format=pjpg","/images/color-chart/{chart_file}","https://m.media-amazon.com/images/I/81i+8cUV3FL._SX466_.jpg","https://m.media-amazon.com/images/I/81H54mliCCL._SL1500_.jpg","https://m.media-amazon.com/images/I/71Si02cOyvL._SL1500_.jpg","https://m.media-amazon.com/images/I/71ckuoENYML._SL1500_.jpg","https://m.media-amazon.com/images/I/81vlAdU97EL._SL1500_.jpg"],
    variants: [],
    inStock: true,
    badge: "New",
    rating: 5.0,
    reviews: 0,
    colors: [{{ name: "{color_name}", hex: "{hex_code}" }}],
    lengths: ["16\\"", "18\\"", "20\\"", "22\\"", "24\\"", "26\\"", "28\\""],
    slug: "ds-hair-butterfly-extensions-{handle}",
    category: "Professional Extensions",
    features: ["100% Remy Human Hair", "Butterfly weft design"],
    priceOnRequest: true,
  }},'''
    butterfly_products.append(product)

# Find insertion point - before "export function getProductBySlug"
insert_marker = 'export function getProductBySlug'
insert_idx = content.find(insert_marker)

if insert_idx == -1:
    print('ERROR: Could not find insertion point')
    exit(1)

# Insert all butterfly products
new_content = content[:insert_idx] + '\n' + '\n'.join(butterfly_products) + '\n\n' + content[insert_idx:]

with open('lib/products.ts', 'w') as f:
    f.write(new_content)

print(f'Added {len(butterfly_products)} butterfly products with correct color mapping!')