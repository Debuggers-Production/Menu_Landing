import os
import re

articles = [
    {
        'file': 'RestaurantMenuProblemsArticle.tsx',
        'component': 'RestaurantMenuProblemsArticle',
        'title': 'Restaurant Menu Problems & Solutions | MenuKit',
        'desc': 'Common issues with traditional menus and digital solutions.',
        'h1': 'Restaurant Menu Problems & Solutions'
    },
    {
        'file': 'CustomerRetentionArticle.tsx',
        'component': 'CustomerRetentionArticle',
        'title': 'Customer Retention Strategies | MenuKit',
        'desc': 'How to turn first-time visitors into loyal regulars.',
        'h1': 'Customer Retention Strategies for Restaurants'
    },
    {
        'file': 'DigitalMenuGuideArticle.tsx',
        'component': 'DigitalMenuGuideArticle',
        'title': 'The Ultimate Digital Menu Guide | MenuKit',
        'desc': 'Everything you need to know about switching to a digital menu.',
        'h1': 'The Ultimate Digital Menu Guide'
    },
    {
        'file': 'QrMenuBenefitsArticle.tsx',
        'component': 'QrMenuBenefitsArticle',
        'title': 'QR Code Menu Benefits | MenuKit',
        'desc': 'Why top restaurants are adopting QR ordering systems.',
        'h1': 'Benefits of QR Code Menus for Restaurants'
    },
    {
        'file': 'FeedbackManagementArticle.tsx',
        'component': 'FeedbackManagementArticle',
        'title': 'Feedback Management Guide | MenuKit',
        'desc': 'How to collect, manage, and leverage customer reviews.',
        'h1': 'Restaurant Feedback Management Guide'
    }
]

base_path = 'd:/Projects/Menukit/Menu_Landing/src/pages/docs'
base_file = os.path.join(base_path, 'CustomerExperienceArticle.tsx')

with open(base_file, 'r', encoding='utf-8') as f:
    content = f.read()

for a in articles:
    new_content = re.sub(r'export function CustomerExperienceArticle\(\) \{', f'export function {a["component"]}() {{', content)
    new_content = re.sub(r'<title>.*?</title>', f'<title>{a["title"]}</title>', new_content)
    new_content = re.sub(r'<meta name="description" content=".*?" />', f'<meta name="description" content="{a["desc"]}" />', new_content)
    new_content = re.sub(r'<h1.*?>.*?</h1>', f'<h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">{a["h1"]}</h1>', new_content, flags=re.DOTALL)
    
    with open(os.path.join(base_path, a['file']), 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Created {a['file']}")
