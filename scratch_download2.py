import urllib.request
from PIL import Image
import io
import os

urls = [
    "https://content.pancake.vn/1/s1482x650/fwebp0/1f/20/98/4a/e0344934c0021cb44440554b772d5888d7dfd33b0f30e58ee1b7aa8d-w:7134-h:3131-l:7803942-t:image/jpeg.jpg",
    "https://content.pancake.vn/1/s1264x766/fwebp80/e6/05/e0/13/d329b45254f546b4a8e1c4310ee86fbb9cc3a8b0a9a7a1053abb3584-w:1416-h:857-l:3271326-t:image/png.png",
    "https://content.pancake.vn/1/s1260x710/fwebp80/5e/24/cc/3a/24c70da6b1ca1af2e64a6feb7b8a1c843e8b212f93966f022fc71f38-w:1919-h:1080-l:181140-t:image/webp.jpg",
    "https://content.pancake.vn/1/s1063x710/fwebp80/97/5c/f7/64/61f0bfec61b1b02c3cf88225bab6e38666dba7a8b02d3f42ec1d07d5-w:1382-h:922-l:282373-t:image/jpeg.jpg",
    "https://content.pancake.vn/1/s1189x670/fwebp80/e3/87/8f/1d/8e8f51c8400c934ebd7c1f86dab82a2e6cebfe701f06ab822fe49a20-w:1560-h:878-l:352220-t:image/jpeg.jpg",
    "https://content.pancake.vn/1/s1015x678/fwebp80/d6/cb/22/8c/1c5a26b31994ed234aba4ce7fe0da97e7f77a643595d4efd7a153a08-w:1307-h:872-l:314510-t:image/jpeg.jpg",
    "https://content.pancake.vn/1/fwebp80/4d/e1/5b/4d/60553bb2f00e2803a29810ed9c13a6ef03e44a71a2debae324268db4-w:674-h:886-l:107336-t:image/png.png",
    "https://content.pancake.vn/1/fwebp80/dc/44/7d/ec/3a90cf2b4b23bda82b85076b701273fc65468700ef943fc506726d82-w:735-h:758-l:85144-t:image/png.png",
    "https://content.pancake.vn/1/fwebp80/14/ac/71/fa/297c13c8071ee9b0dcc809942d7ac79106b4ac7ebeb8e7c423416e36-w:748-h:633-l:854844-t:image/png.png"
]

out_dir = r"public/assets/images/courses"

for i, url in enumerate(urls):
    if i < 3: continue # already downloaded 1, 2, 3
    print(f"Downloading {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = response.read()
            img = Image.open(io.BytesIO(data))
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            out_path = os.path.join(out_dir, f"course-{i+1}.webp")
            img.save(out_path, "WEBP", quality=80)
            print(f"Saved {out_path}")
    except Exception as e:
        print(f"Failed to process {url}: {e}")
