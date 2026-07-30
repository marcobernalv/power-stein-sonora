import urllib.request
from PIL import Image

SRC = "https://customer-assets-7cd3h4nn.emergentagent.net/job_paneles-solares-mx/artifacts/hxtncbnu_IMG_0960.jpeg"
OUT = "/app/frontend/public/logo-footer.png"

urllib.request.urlretrieve(SRC, "/tmp/logo_src.jpeg")
img = Image.open("/tmp/logo_src.jpeg").convert("RGB")
px = img.load()
w, h = img.size
out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
op = out.load()

for y in range(h):
    for x in range(w):
        r, g, b = px[x, y]
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        # white background -> transparent; darker (text) -> opaque
        alpha = int(max(0, min(255, 255 - lum)))
        if alpha < 12:
            op[x, y] = (0, 0, 0, 0)
            continue
        # detect lime/green accent -> keep green, else make white
        is_green = (g > 110 and g > b + 25 and r < 200 and b < 130)
        if is_green:
            op[x, y] = (195, 213, 2, min(255, alpha + 90))
        else:
            op[x, y] = (255, 255, 255, alpha)

# autocrop transparent borders
bbox = out.getbbox()
if bbox:
    out = out.crop(bbox)
out.save(OUT)
print("saved", OUT, out.size)
