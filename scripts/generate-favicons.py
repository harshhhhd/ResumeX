import os
from PIL import Image

def generate_favicons():
    logo_path = "public/logo.png"
    if not os.path.exists(logo_path):
        print("Error: public/logo.png not found")
        return

    im = Image.open(logo_path).convert("RGBA")

    # 16x16
    im16 = im.resize((16, 16), Image.Resampling.LANCZOS)
    im16.save("public/favicon-16x16.png")

    # 32x32
    im32 = im.resize((32, 32), Image.Resampling.LANCZOS)
    im32.save("public/favicon-32x32.png")

    # 180x180 apple-touch-icon
    apple_size = 180
    apple_bg = Image.new("RGBA", (apple_size, apple_size), (10, 10, 10, 255))
    r, g, b, a = im.split()
    white_glyph = Image.merge("RGBA", (Image.new("L", im.size, 245), Image.new("L", im.size, 245), Image.new("L", im.size, 245), a))
    scaled_glyph = white_glyph.resize((110, 110), Image.Resampling.LANCZOS)
    offset = ((apple_size - 110) // 2, (apple_size - 110) // 2)
    apple_bg.paste(scaled_glyph, offset, scaled_glyph)
    apple_bg.save("public/apple-touch-icon.png")

    # favicon.ico
    im.save("public/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print("All favicons updated successfully from public/logo.png!")

if __name__ == "__main__":
    generate_favicons()
