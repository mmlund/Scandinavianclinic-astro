import docx
import sys

files = [
    'Assessment page.docx',
    'Page Draft why pain keeps coming back.docx'
]

with open('extracted_drafts.md', 'w', encoding='utf-8') as out:
    for f in files:
        out.write(f'\n\n# --- {f} ---\n\n')
        try:
            doc = docx.Document(f)
            for p in doc.paragraphs:
                if p.text.strip():
                    out.write(p.text.strip() + '\n\n')
        except Exception as e:
            out.write(f'Error reading {f}: {e}\n')
