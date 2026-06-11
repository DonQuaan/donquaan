import urllib.request
from PIL import Image
import io
import os

urls = [
    "https://content.pancake.vn/1/s1482x650/fwebp0/1f/20/98/4a/e0344934c0021cb44440554b772d5888d7dfd33b0f30e58ee1b7aa8d-w:7134-h:3131-l:7803942-t:image/jpeg.jpg",
    "https://content.pancake.vn/1/s1264x766/fwebp80/e6/05/e0/13/d329b45254f546b4a8e1c4310ee86fbb9cc3a8b0a9a7a1053abb3584-w:1416-h:857-l:3271326-t:image/png.png",
    "https://content.pancake.vn/1/s1260x710/fwebp80/5e/24/cc/3a/24c70da6b1ca1af2e64a6feb7b8a1c843e8b212f93966f022fc71f38-w:1919-h:1080-l:181140-t:image/webp.jpg"
]

out_dir = r"public/assets/images/courses"

for i, url in enumerate(urls):
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
