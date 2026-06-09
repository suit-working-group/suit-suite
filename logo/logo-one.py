from pathlib import Path

CANVAS = 512

def svg_logo(mode="light"):
    """
    Génère le logo SUIT en SVG.
    mode="light" : formes noires sur fond blanc
    mode="dark"  : formes blanches sur fond noir
    """

    if mode == "light":
        bg = "#ffffff"
        fg = "#000000"
    elif mode == "dark":
        bg = "#000000"
        fg = "#ffffff"
    else:
        raise ValueError("mode doit être 'light' ou 'dark'")

    # Dimensions générales
    stroke = 7
    line_stroke = 9

    # Top level — circles
    circle_r = 34
    top_y = 135
    circle_xs = [140, 256, 372]

    # Bottom level — nested squares
    outer_size = 92
    inner_size = 32
    outer_x = (CANVAS - outer_size) / 2
    outer_y = 352
    inner_x = (CANVAS - inner_size) / 2
    inner_y = outer_y + (outer_size - inner_size) / 2

    # Middle level — triangles
    # Position verticale dérivée pour que l'espace haut (bas des ronds →
    # haut des triangles) soit exactement égal à l'espace bas (bas des
    # triangles → haut du carré).
    tri_height = 65
    tri_half_width = 34
    tri_centers = [205, 307]

    circles_bottom = top_y + circle_r
    square_top = outer_y
    gap = (square_top - circles_bottom - tri_height) / 2
    tri_y_top = circles_bottom + gap
    tri_y_bottom = tri_y_top + tri_height
    line_y = (tri_y_top + tri_y_bottom) / 2

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg"
     width="{CANVAS}" height="{CANVAS}"
     viewBox="0 0 {CANVAS} {CANVAS}">

  <rect width="100%" height="100%" fill="{bg}" />

  <!-- Top level: three hollow circles -->
  <line
    x1="{circle_xs[0] + circle_r}"
    y1="{top_y}"
    x2="{circle_xs[1] - circle_r}"
    y2="{top_y}"
    stroke="{fg}"
    stroke-width="{line_stroke}"
    stroke-linecap="butt"
  />

  <circle cx="{circle_xs[0]}" cy="{top_y}" r="{circle_r}"
    fill="none" stroke="{fg}" stroke-width="{stroke}" />

  <circle cx="{circle_xs[1]}" cy="{top_y}" r="{circle_r}"
    fill="none" stroke="{fg}" stroke-width="{stroke}" />

  <circle cx="{circle_xs[2]}" cy="{top_y}" r="{circle_r}"
    fill="none" stroke="{fg}" stroke-width="{stroke}" />

  <!-- Middle level: two filled triangles connected by a thin line -->
  <line
    x1="{tri_centers[0]}"
    y1="{line_y}"
    x2="{tri_centers[1]}"
    y2="{line_y}"
    stroke="{fg}"
    stroke-width="{line_stroke}"
    stroke-linecap="butt"
  />

  <polygon
    points="{tri_centers[0]},{tri_y_top} {tri_centers[0] - tri_half_width},{tri_y_bottom} {tri_centers[0] + tri_half_width},{tri_y_bottom}"
    fill="{fg}"
  />

  <polygon
    points="{tri_centers[1]},{tri_y_top} {tri_centers[1] - tri_half_width},{tri_y_bottom} {tri_centers[1] + tri_half_width},{tri_y_bottom}"
    fill="{fg}"
  />

  <!-- Bottom level: filled square isolated inside a hollow square -->
  <rect
    x="{outer_x}"
    y="{outer_y}"
    width="{outer_size}"
    height="{outer_size}"
    fill="none"
    stroke="{fg}"
    stroke-width="{stroke}"
  />

  <rect
    x="{inner_x}"
    y="{inner_y}"
    width="{inner_size}"
    height="{inner_size}"
    fill="{fg}"
  />

</svg>
'''
    return svg


def save_logo():
    Path("suit_logo_light.svg").write_text(svg_logo("light"), encoding="utf-8")
    Path("suit_logo_dark.svg").write_text(svg_logo("dark"), encoding="utf-8")

    print("Fichiers générés :")
    print("- suit_logo_light.svg")
    print("- suit_logo_dark.svg")


if __name__ == "__main__":
    save_logo()