import zipfile
import xml.etree.ElementTree as ET

with zipfile.ZipFile("website.docx") as docx:
    xml_content = docx.read("word/document.xml")
    tree = ET.fromstring(xml_content)
    namespaces = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    text_lines = []
    for p in tree.iterfind(".//w:p", namespaces):
        p_text = "".join(t.text for t in p.iterfind(".//w:t", namespaces) if t.text)
        if p_text.strip():
            text_lines.append(p_text.strip())
    
    with open("docx_extracted.txt", "w", encoding="utf-8") as out:
        out.write("\n".join(text_lines))

print("Extracted successfully!")
