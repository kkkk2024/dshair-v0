with open('lib/products.ts', 'r') as f:
    content = f.read()

# 颜色对应的色卡图映射
color_chart_map = {
    'Jet Black #1': '01_Jet_Black_1.jpg',
    'Off Black #1B': '02_Off_Black_1B.jpg',
    'Dark Brown #2': '03_Dark_Brown_2.jpg',
    'Walnut Brown #3': '04_Walnut_Brown_3.jpg',
    'Chocolate Brown #4': '05_Chocolate_Brown_4.jpg',
    'Dark Brown/Chestnut Brown #2/6': '06_Dark_Brown_Chestnut_Brown_2_6.jpg',
    'Chestnut Brown #6': '07_Chestnut_Brown_6.jpg',
    'Almond Brown #8': '08_Almond_Brown_8.jpg',
    'Ash Brown #10': '09_Ash_Brown_10.jpg',
    'Dark Brown/Dirty Blonde #2/18': '10_Dark_Brown_Dirty_Blonde_2_18.jpg',
    'Dark Maple Brown #530': '11_Dark_Maple_Brown_530.jpg',
    'Walnut Brown/Ash Blonde #3/60': '12_Walnut_Brown_Ash_Blonde_3_60.jpg',
    'Mochachino Brown/Dirty Blonde #2/18': '13_Dark_Honey_Cocoa.jpg',
    'Dark Honey Cocoa Highlight': '13_Dark_Honey_Cocoa.jpg',
    'Mochachino Chocolate/Dark Honey': '14_Mochachino_Chocolate_Dark_Honey.jpg',
    'Dirty Brunette Highlight': '15_Dirty_Brunette.jpg',
    'Honey Comb Highlight': '16_Honey_Comb.jpg',
    'Vanilla Latte #8/18/60': '17_Vanilla_Latte_8_18_60.jpg',
    'Pearl Blonde #10/88': '18_Pearl_Blonde_10_88.jpg',
    'Mulberry Wine #510': '19_Mulberry_Wine_510.jpg',
    'Spiced Crimson #570': '20_Spiced_Crimson_570.jpg',
    'Ash Bronde/Strawberry Blonde #21/27': '21_Ash_Bronde_Strawberry_Blonde_21_27.jpg',
    'Ash Brown/Ash Blonde #8/60': '22_Ash_Brown_Ash_Blonde_8_60.jpg',
    'Ash Brown/Honey Blonde #8/20/24/60': '23_Ash_Brown_Honey_Blonde_8_20_24_60.jpg',
    'Caramel Blonde #18/46': '24_Caramel_Blonde_18_46.jpg',
    'White Mocha': '25_White_Mocha.jpg',
    'Beach Blonde #613': '26_Beach_Blonde_613.jpg',
    'Bronzed Caramel #6/18/8/60': '27_Bronzed_Caramel_6_18_8_60.jpg',
    'Butter Blonde #P10/16/60': '28_Butter_Blonde_P10_16_60.jpg',
    'Golden Hour Blonde': '29_Golden_Hour_Blonde.jpg',
    'Dirty Blonde #18': '30_Dirty_Blonde_18.jpg',
    'Platinum Blonde #80': '31_Platinum_Blonde_80.jpg',
}

old_img = '/images/color-chart/01_Jet_Black_1.jpg'

# 简单替换：每个颜色后面的色卡图
import re

# 找到所有Butterfly产品
for color_name, chart_file in color_chart_map.items():
    new_img = f'/images/color-chart/{chart_file}'
    # 找到包含这个颜色的Butterfly产品，然后替换它后面的第二张图
    pattern = f'butterfly.*{re.escape(color_name)}.*?images: \\[.*?{re.escape(old_img)}'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        # 替换这个匹配中的旧色卡图为新的
        content = content.replace(old_img, new_img, 1)

with open('lib/products.ts', 'w') as f:
    f.write(content)

print('Updated color chart mappings')