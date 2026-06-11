import re
with open(r'C:\Users\This PC\.gemini\antigravity\brain\de414c3d-1a6d-4460-beb5-1abe83cba373\.system_generated\steps\72\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

urls = re.findall(r'https://[^\s\"\'\(\)]*\.(?:jpg|jpeg|png)', html)
urls = list(set(urls))
print(f"Found {len(urls)} images")
for u in urls[:10]:
    print(u)
