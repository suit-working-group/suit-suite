"""
Logo SUIT — générateur SVG paramétrique.

Deux mises en page sont produites :

  1. VERTICALE  (svg_logo)      — trois rangées empilées :
        cercles  /  triangles  /  carré
  2. HORIZONTALE (svg_logo_row) — une seule ligne :
        un cercle  /  deux triangles reliés par une arête  /  le carré

PRINCIPE DE MISE EN PAGE — alignement par CENTRES DE MASSE (centroïdes)
----------------------------------------------------------------------
L'œil situe une forme à son centre de masse, pas au milieu de sa boîte
englobante.  Le centroïde d'un triangle pointe-en-haut est au tiers
inférieur de sa hauteur (H/3 au-dessus de la base).

  • Version verticale  : les rangées sont distribuées à PAS CONSTANT entre
    leurs centroïdes (rythme vertical optiquement régulier), le groupe
    étant centré sur le canevas.
  • Version horizontale : les trois unités sont ALIGNÉES verticalement sur
    leur centroïde commun et espacées à pas horizontal constant.

Tous les réglages sont dans le bloc PARAMÈTRES ci-dessous.
"""

from pathlib import Path

# ----------------------------------------------------------------------
# PARAMÈTRES — tout est ajustable ici
# ----------------------------------------------------------------------
CANVAS = 512                 # côté du canevas carré (version verticale)

# Épaisseurs de trait
STROKE       = 7             # contour des cercles et du carré extérieur
LINK_STROKE  = 9             # traits de liaison

# Tailles des formes
# Dimension commune : le diamètre du cercle, la hauteur du carré extérieur
# et la hauteur totale du triangle sont TOUS égaux à SHAPE_SIZE (dérivés
# ci-dessous pour que l'égalité tienne par construction).
SHAPE_SIZE   = 90           # diamètre cercle = côté carré = hauteur triangle
CIRCLE_R     = SHAPE_SIZE / 2   # rayon des cercles
TRI_HEIGHT   = SHAPE_SIZE       # hauteur des triangles (sommet -> base)
SQUARE_OUTER = SHAPE_SIZE       # côté du carré extérieur
# Triangle ÉQUILATÉRAL : hauteur = base·√3/2  =>  demi-base = hauteur/√3.
# Dérivée de la hauteur pour que l'équilatéralité tienne par construction.
TRI_HALF_W   = TRI_HEIGHT / (3 ** 0.5)
SQUARE_INNER = 32           # côté du carré intérieur plein

# Placement (version verticale) — espacements +20 %
CIRCLE_PITCH   = 139.2      # distance horizontale entre cercles voisins
TRI_PITCH      = 122.4      # distance horizontale entre les 2 triangles
CENTROID_PITCH = 158.4      # pas vertical entre centroïdes de rangées

# Placement (version horizontale)
# Les QUATRE figures (cercle, triangle 1, triangle 2, carré) sont
# équidistantes : un seul pas ROW_STEP sépare chaque centre du suivant.
ROW_HEIGHT = 180            # hauteur du canevas en ligne
ROW_MARGIN = 44             # marge gauche/droite
ROW_STEP   = 144            # pas horizontal constant entre centres (+20 %)

# ----------------------------------------------------------------------
# THÈMES — une couleur assignable à CHAQUE élément
#   bg            fond
#   circle        contour des cercles
#   triangle      triangles pleins
#   square_inner  carré intérieur plein
#   link          arêtes de liaison ET contour du carré extérieur
#                 (même couleur, par construction)
# ----------------------------------------------------------------------
def _mono(fg):
    """Thème monochrome : toutes les formes de la couleur fg, fond transparent."""
    return {"bg": None, "circle": fg, "triangle": fg,
            "square_inner": fg, "link": fg}

# bg = None  =>  fond transparent (aucun rectangle de fond émis).
THEMES = {
    "light": _mono("#000000"),   # formes noires (sur fond clair)
    "dark":  _mono("#ffffff"),   # formes blanches (sur fond sombre)
    # Version 1 — « dégradé d'ouverture » : vert -> orange -> rouge VIFS, la
    # teinte se réchauffe et la valeur s'assombrit du cercle (ouvert) vers
    # le carré (fermé). Le contour du carré reprend la couleur des arêtes.
    "color1": {
        "bg": None,
        "circle": "#16C04C",        # vert vif — le plus ouvert
        "triangle": "#FF7A00",      # orange vif — transition
        "square_inner": "#B00020",  # rouge profond — cœur, le plus fermé
        "link": "#6E7378",          # gris neutre — arêtes + carré extérieur
    },
    # Version 2 — « bijou » : couleurs saturées, rouge vif au cœur du carré.
    "color2": {
        "bg": None,
        "circle": "#00B86B",        # vert émeraude vif
        "triangle": "#FF9500",      # ambre vif
        "square_inner": "#E60012",  # rouge vif
        "link": "#8A9098",          # gris neutre — arêtes + carré extérieur
    },
}


# ----------------------------------------------------------------------
# BRIQUES DE DESSIN — réutilisées par les deux mises en page
# ----------------------------------------------------------------------
def draw_circle(x, y, color):
    return (f'  <circle cx="{x}" cy="{y}" r="{CIRCLE_R}" '
            f'fill="none" stroke="{color}" stroke-width="{STROKE}" />')


def draw_triangle(cx, apex_y, base_y, color):
    """Triangle plein pointe-en-haut centré sur cx."""
    return (f'  <polygon points="{cx},{apex_y} '
            f'{cx - TRI_HALF_W},{base_y} {cx + TRI_HALF_W},{base_y}" fill="{color}" />')


def draw_square(cx, cy, outer_color, inner_color):
    """Carré plein isolé dans un carré creux, concentriques sur (cx, cy)."""
    return (
        f'  <rect x="{cx - SQUARE_OUTER / 2}" y="{cy - SQUARE_OUTER / 2}" '
        f'width="{SQUARE_OUTER}" height="{SQUARE_OUTER}" '
        f'fill="none" stroke="{outer_color}" stroke-width="{STROKE}" />\n'
        f'  <rect x="{cx - SQUARE_INNER / 2}" y="{cy - SQUARE_INNER / 2}" '
        f'width="{SQUARE_INNER}" height="{SQUARE_INNER}" fill="{inner_color}" />'
    )


def draw_link(x1, y1, x2, y2, color):
    return (f'  <line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" '
            f'stroke="{color}" stroke-width="{LINK_STROKE}" stroke-linecap="butt" />')


def triangle_from_centroid(centroid_y):
    """(sommet, base) d'un triangle à partir de son CENTRE DE MASSE.

    Le centroïde d'un triangle pointe-en-haut est à H/3 au-dessus de la
    base :  sommet = centroïde - 2H/3 ; base = centroïde + H/3.
    Utilisé pour le RYTHME VERTICAL (rangées empilées, jugées à l'œil par
    leur centre de masse).
    """
    return centroid_y - 2 * TRI_HEIGHT / 3, centroid_y + TRI_HEIGHT / 3


def triangle_from_center(center_y):
    """(sommet, base) d'un triangle à partir de son CENTRE GÉOMÉTRIQUE.

    sommet = centre - H/2 ; base = centre + H/2.  Utilisé pour l'ALIGNEMENT
    HORIZONTAL : les figures partageant une bande commune doivent être à
    fleur (mêmes tops/bas).  Comme toutes ont la hauteur SHAPE_SIZE, elles
    occupent exactement [center - S/2, center + S/2].
    """
    return center_y - TRI_HEIGHT / 2, center_y + TRI_HEIGHT / 2


def svg_document(width, height, bg, body):
    # Fond transparent si bg vaut None : on n'émet alors aucun rectangle.
    background = "" if bg is None else f'  <rect width="100%" height="100%" fill="{bg}" />\n\n'
    return (f'<svg xmlns="http://www.w3.org/2000/svg"\n'
            f'     width="{width}" height="{height}"\n'
            f'     viewBox="0 0 {width} {height}">\n\n'
            f'{background}'
            f'{body}\n\n</svg>\n')


def _theme(name):
    if name not in THEMES:
        raise ValueError(f"thème inconnu : {name!r} (connus : {list(THEMES)})")
    return THEMES[name]


# ----------------------------------------------------------------------
# MISE EN PAGE VERTICALE — trois rangées
# ----------------------------------------------------------------------
def svg_logo(theme="light"):
    t = _theme(theme)
    cx = CANVAS / 2

    # Distribution verticale : pas constant entre centroïdes, groupe centré.
    half_top    = CIRCLE_R + STROKE / 2          # centre cercle -> haut d'encre
    half_bottom = SQUARE_OUTER / 2 + STROKE / 2  # centre carré  -> bas d'encre
    c_circles = cx - CENTROID_PITCH - (half_bottom - half_top) / 2
    c_tri     = c_circles + CENTROID_PITCH
    c_square  = c_circles + 2 * CENTROID_PITCH

    circle_xs = [cx - CIRCLE_PITCH, cx, cx + CIRCLE_PITCH]
    apex, base = triangle_from_centroid(c_tri)
    tri_xs = [cx - TRI_PITCH / 2, cx + TRI_PITCH / 2]
    tri_link_y = (apex + base) / 2

    parts = []
    # Rangée 1 : trois cercles creux reliés (cercle 1 <-> cercle 2)
    parts.append(draw_link(circle_xs[0] + CIRCLE_R, c_circles,
                           circle_xs[1] - CIRCLE_R, c_circles, t["link"]))
    parts += [draw_circle(x, c_circles, t["circle"]) for x in circle_xs]
    # Rangée 2 : deux triangles pleins reliés de centre à centre
    parts.append(draw_link(tri_xs[0], tri_link_y, tri_xs[1], tri_link_y, t["link"]))
    parts += [draw_triangle(x, apex, base, t["triangle"]) for x in tri_xs]
    # Rangée 3 : carré (contour extérieur = couleur des arêtes)
    parts.append(draw_square(cx, c_square, t["link"], t["square_inner"]))

    return svg_document(CANVAS, CANVAS, t["bg"], "\n".join(parts))


# ----------------------------------------------------------------------
# MISE EN PAGE HORIZONTALE — une seule ligne
# ----------------------------------------------------------------------
def svg_logo_row(theme="light"):
    t = _theme(theme)
    cy = ROW_HEIGHT / 2

    # Quatre centres équidistants (pas constant ROW_STEP) :
    #   cercle  -  triangle 1  -  triangle 2  -  carré
    half_left  = CIRCLE_R + STROKE / 2           # centre cercle -> bord gauche
    half_right = SQUARE_OUTER / 2 + STROKE / 2   # centre carré  -> bord droit
    width = 3 * ROW_STEP + half_left + half_right + 2 * ROW_MARGIN

    x_circle = ROW_MARGIN + half_left
    x_tri1   = x_circle + ROW_STEP
    x_tri2   = x_circle + 2 * ROW_STEP
    x_square = x_circle + 3 * ROW_STEP

    # Triangles centrés géométriquement sur cy : à fleur du cercle et du
    # carré (mêmes haut/bas), donc rien ne dépasse de la bande commune.
    apex, base = triangle_from_center(cy)
    tri_link_y = cy                              # = (apex + base) / 2

    parts = []
    # Figure 1 : un cercle creux
    parts.append(draw_circle(x_circle, cy, t["circle"]))
    # Figures 2 & 3 : deux triangles reliés par une arête (centre à centre)
    parts.append(draw_link(x_tri1, tri_link_y, x_tri2, tri_link_y, t["link"]))
    parts.append(draw_triangle(x_tri1, apex, base, t["triangle"]))
    parts.append(draw_triangle(x_tri2, apex, base, t["triangle"]))
    # Figure 4 : le carré (contour extérieur = couleur des arêtes)
    parts.append(draw_square(x_square, cy, t["link"], t["square_inner"]))

    return svg_document(width, ROW_HEIGHT, t["bg"], "\n".join(parts))


# ----------------------------------------------------------------------
def save_logo():
    # Chaque thème est rendu dans les deux dispositions (verticale + ligne).
    files = {}
    for theme in THEMES:
        files[f"suit_logo_{theme}.svg"]     = svg_logo(theme)
        files[f"suit_logo_row_{theme}.svg"] = svg_logo_row(theme)

    for name, content in files.items():
        Path(name).write_text(content, encoding="utf-8")

    print("Fichiers générés :")
    for name in files:
        print(f"- {name}")


if __name__ == "__main__":
    save_logo()
