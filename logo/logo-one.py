"""
Logo SUIT — générateur SVG paramétrique.

Cinq mises en page sont produites. Les trois premières acceptent un
wordmark « SUIT » optionnel (with_text=True) au-dessus des formes ; les deux
dernières portent toujours le mot. Tous les logos sont recadrés avec une
marge VIDE uniforme (PAD) sur les quatre côtés.

  1. VERTICALE  (svg_logo)        — trois rangées : cercles / triangles / carré
  2. HORIZONTALE (svg_logo_row)   — une ligne : cercle · triangles · carré
  3. COLONNE     (svg_logo_col)   — la composition en ligne, à la verticale
  4. LETTRES LAT. (svg_logo_vlock)  — S·U·I·T à gauche, figures à droite
  5. INLINE      (svg_logo_inline)  — mot « SUIT » suivi des figures, sur une ligne

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

import re
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

# Pas (espacement entre centres de figures)
ROW_STEP = 144              # pas horizontal — version en ligne
COL_STEP = 144              # pas vertical   — versions en colonne

# Marge VIDE uniforme sur les 4 côtés de TOUS les logos.  Chaque logo est
# recadré sur la boîte englobante réelle de son encre, plus PAD partout.
PAD = 44

# Wordmark « SUIT » (optionnel) — tracé vectoriel extrait de la référence
# (voir SUIT_PATHS plus bas).
TEXT_CAP = 100              # hauteur de rendu du mot
TEXT_PAD = 36              # espace vertical entre le mot et les formes

# Format « lettres latérales » : S·U·I·T empilées à gauche, figures à droite.
LETTER_CAP  = SHAPE_SIZE    # hauteur des lettres (= taille des figures)
LET_FIG_GAP = 48            # écart horizontal colonne lettres <-> colonne figures

# Format « inline » : mot « SUIT » suivi des figures sur une même ligne.
INLINE_CAP = SHAPE_SIZE     # hauteur du mot (= hauteur des figures)
INLINE_GAP = 56            # écart horizontal mot <-> première figure

# ----------------------------------------------------------------------
# THÈMES — une couleur assignable à CHAQUE élément
#   bg            fond
#   circle        contour des cercles
#   triangle      triangles pleins
#   square_inner  carré intérieur plein
#   link          arêtes de liaison ET contour du carré extérieur
#                 (même couleur, par construction)
# ----------------------------------------------------------------------
def _mono(fg, bg=None):
    """Thème monochrome : toutes les formes de la couleur fg sur fond bg."""
    return {"bg": bg, "circle": fg, "triangle": fg,
            "square_inner": fg, "link": fg, "text": fg}

# bg = None  =>  fond transparent (aucun rectangle de fond émis).
THEMES = {
    "light": _mono("#000000", bg="#ffffff"),  # lignes noires sur FOND BLANC
    # dark : formes blanches, mais lettres en GRIS CLAIR (élément secondaire).
    "dark":  {**_mono("#ffffff"), "text": "#BFC4C9"},
    # Version 1 — « dégradé d'ouverture » : vert -> orange -> rouge VIFS, la
    # teinte se réchauffe et la valeur s'assombrit du cercle (ouvert) vers
    # le carré (fermé). Le contour du carré reprend la couleur des arêtes.
    "color1": {
        "bg": None,
        "circle": "#16C04C",        # vert vif — le plus ouvert
        "triangle": "#FF7A00",      # orange vif — transition
        "square_inner": "#B00020",  # rouge profond — cœur, le plus fermé
        "link": "#6E7378",          # gris neutre — arêtes + carré extérieur
        "text": "#6E7378",          # lettres = gris des arêtes / carré extérieur
    },
    # Version 2 — « bijou » : couleurs saturées, rouge vif au cœur du carré.
    "color2": {
        "bg": None,
        "circle": "#00B86B",        # vert émeraude vif
        "triangle": "#FF9500",      # ambre vif
        "square_inner": "#E60012",  # rouge vif
        "link": "#8A9098",          # gris neutre — arêtes + carré extérieur
        "text": "#8A9098",          # lettres = gris des arêtes / carré extérieur
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


# ----------------------------------------------------------------------
# WORDMARK « SUIT » — TRACÉ VECTORIEL extrait de la référence fournie
# (vectorisation raster→vecteur, option E). Quatre chemins remplis (S, U,
# I, T), une seule couleur, mis à l'échelle et recolorés au rendu. Ce sont
# les letterforms exactes de la référence (qui ne correspond à aucune fonte
# courante) ; coordonnées dans la boîte native SUIT_NATIVE_W × SUIT_NATIVE_H.
# ----------------------------------------------------------------------
SUIT_NATIVE_W = 837.4
SUIT_NATIVE_H = 144.5
SUIT_PATHS = [
    "M 6.0,144.1 C 5.7,143.8 5.7,143.4 5.7,134.7 C 5.8,126.0 5.8,125.7 6.1,125.4 C 6.5,125.1 6.6,125.1 78.4,125.0 L 150.4,125.0 L 152.5,124.6 C 158.3,123.4 162.5,120.8 166.1,116.0 C 168.9,112.3 170.6,106.9 170.4,102.5 C 170.2,99.0 168.7,94.1 167.0,91.6 C 165.1,88.7 163.0,86.6 160.1,84.8 C 157.6,83.1 155.6,82.3 152.7,81.8 C 150.9,81.5 150.4,81.5 94.6,81.5 C 45.5,81.5 38.1,81.4 35.9,81.2 C 34.6,81.1 33.2,80.9 32.7,80.7 C 32.2,80.6 31.6,80.5 31.2,80.4 C 28.2,79.9 21.7,77.2 18.5,75.1 C 14.1,72.2 9.9,68.0 6.8,63.4 C 5.0,60.7 4.3,59.3 2.7,55.1 C 1.3,51.5 0.6,48.2 0.1,43.7 C -0.1,42.0 -0.0,39.1 0.3,37.2 C 1.1,32.2 1.8,28.8 2.7,26.6 C 4.4,22.0 7.9,16.5 11.4,12.9 C 15.7,8.2 23.2,3.6 29.6,1.6 C 30.7,1.3 32.7,0.8 34.2,0.5 L 36.9,0.1 L 108.7,0.1 L 180.5,0.1 L 180.8,0.5 C 181.2,0.9 181.2,0.9 181.2,9.8 L 181.2,18.6 L 180.8,19.0 L 180.4,19.4 L 109.6,19.4 L 38.7,19.4 L 36.9,19.9 C 33.8,20.6 31.5,21.6 28.9,23.3 C 25.2,25.9 22.8,28.7 21.1,32.7 C 20.0,35.0 19.5,37.7 19.3,40.8 C 19.3,42.8 19.3,43.3 19.7,45.2 C 20.4,48.5 21.6,51.2 23.5,53.6 C 26.5,57.4 30.3,59.9 35.0,61.3 L 36.7,61.7 L 94.2,61.8 L 151.7,61.9 L 154.8,62.4 C 156.5,62.7 158.1,63.0 158.4,63.2 C 158.6,63.3 159.5,63.5 160.2,63.7 C 163.9,64.8 167.7,66.6 171.0,68.8 C 175.5,71.8 180.8,77.4 183.5,81.9 C 185.7,85.5 187.8,90.9 188.6,94.9 C 189.3,98.7 189.5,100.1 189.5,103.1 C 189.5,104.7 189.4,106.5 189.3,107.1 C 189.2,107.6 189.1,108.7 189.0,109.4 C 188.5,112.2 187.5,115.9 186.1,119.5 C 184.0,124.5 177.8,132.6 173.2,136.1 C 171.5,137.4 168.0,139.5 165.8,140.6 C 163.0,142.0 158.6,143.4 155.4,144.0 L 153.0,144.4 L 79.7,144.4 L 6.3,144.5 L 6.0,144.1 Z",
    "M 329.1,144.5 C 320.9,144.3 320.0,144.2 314.9,142.8 C 311.8,141.9 308.1,140.4 304.4,138.4 C 300.3,136.3 297.2,133.9 293.4,130.1 C 289.2,125.9 286.2,121.8 284.0,117.4 C 281.6,112.6 279.4,106.7 279.0,103.7 C 279.0,103.3 278.7,101.6 278.5,100.0 L 278.0,97.1 L 278.0,48.9 L 278.0,0.8 L 278.4,0.5 C 278.8,0.1 279.2,0.1 287.4,0.1 C 295.7,0.1 296.1,0.1 296.5,0.5 L 296.9,0.8 L 296.9,48.1 C 296.9,100.5 296.8,97.5 298.0,101.5 C 298.6,103.6 299.0,104.7 300.4,107.5 C 302.7,112.4 306.0,116.3 309.9,118.9 C 315.1,122.4 318.3,123.8 323.0,124.6 C 324.9,125.0 325.1,125.0 369.6,125.0 C 394.2,125.0 414.3,125.0 414.4,124.9 C 414.5,124.9 415.3,124.7 416.1,124.6 C 419.3,124.0 423.3,122.4 426.4,120.6 C 428.1,119.6 430.3,117.9 432.0,116.5 C 436.3,112.8 440.6,105.3 441.6,99.6 C 442.3,96.0 442.3,97.6 442.3,48.1 C 442.3,17.2 442.3,0.8 442.4,0.6 C 442.8,-0.0 443.4,-0.1 452.3,0.1 C 460.3,0.2 460.8,0.2 461.1,0.5 C 461.5,0.9 461.5,-5.5 461.4,55.1 C 461.4,78.4 461.4,96.3 461.3,96.8 C 461.2,97.2 461.1,98.5 460.9,99.6 C 460.7,102.1 460.1,104.9 459.4,107.1 C 458.2,110.7 456.7,114.6 455.2,117.5 C 453.5,120.7 452.6,122.2 451.4,123.6 C 451.0,124.0 450.0,125.2 449.2,126.2 C 446.2,129.8 441.4,134.2 438.1,136.4 C 436.2,137.6 431.7,140.0 429.4,140.9 C 427.8,141.6 426.9,141.9 424.1,142.8 C 422.3,143.4 417.5,144.2 415.4,144.4 C 413.4,144.5 338.0,144.6 329.1,144.5 Z",
    "M 566.0,144.1 L 565.6,143.8 L 565.6,72.4 L 565.6,0.9 L 566.0,0.5 L 566.4,0.1 L 574.9,0.2 L 583.4,0.2 L 583.8,0.6 L 584.2,1.0 L 584.2,72.0 C 584.2,119.5 584.2,143.2 584.1,143.6 C 584.0,143.9 583.8,144.2 583.6,144.3 C 583.4,144.4 580.1,144.5 574.8,144.5 C 566.5,144.5 566.3,144.5 566.0,144.1 Z",
    "M 743.9,144.3 C 743.8,144.2 743.5,143.8 743.4,143.5 C 743.3,143.0 743.3,125.2 743.3,81.5 L 743.4,20.3 L 742.9,19.9 L 742.5,19.4 L 708.2,19.4 C 674.8,19.4 674.0,19.4 673.6,19.1 C 673.3,18.8 673.3,18.7 673.3,9.9 L 673.3,1.0 L 673.7,0.6 L 674.0,0.2 L 693.5,0.1 C 704.1,0.1 740.7,0.0 774.8,0.1 L 836.7,0.1 L 837.0,0.5 C 837.4,0.8 837.4,0.9 837.4,9.6 C 837.4,14.4 837.3,18.6 837.2,18.8 C 837.1,19.0 836.9,19.2 836.8,19.2 C 836.6,19.3 820.0,19.3 799.9,19.4 C 779.8,19.4 763.2,19.5 763.1,19.6 C 762.9,19.6 762.7,19.8 762.6,20.0 C 762.4,20.3 762.4,33.8 762.3,81.8 C 762.3,115.6 762.2,143.4 762.2,143.6 C 762.0,144.5 761.8,144.5 752.7,144.5 C 747.3,144.5 744.1,144.4 743.9,144.3 Z",
]


def wordmark(color, word="SUIT"):
    """Renvoie (corps_svg, largeur, hauteur) du wordmark tracé.

    Mis à l'échelle pour une hauteur de TEXT_CAP et rempli de `color`.
    Seul « SUIT » existe : c'est un tracé figé extrait de la référence.
    """
    s = TEXT_CAP / SUIT_NATIVE_H
    paths = "\n".join(f'      <path d="{d}" fill="{color}"/>' for d in SUIT_PATHS)
    body = f'    <g transform="scale({s:.5f})">\n{paths}\n    </g>'
    return body, SUIT_NATIVE_W * s, SUIT_NATIVE_H * s


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


def _path_bbox(d):
    """Boîte englobante (xmin, ymin, xmax, ymax) d'un chemin 'x,y L x,y …'."""
    nums = [float(n) for n in re.findall(r'-?\d+\.?\d*', d)]
    xs, ys = nums[0::2], nums[1::2]
    return min(xs), min(ys), max(xs), max(ys)


def _letter(idx, cx, cy, cap_h, color):
    """Place la lettre idx (0=S, 1=U, 2=I, 3=T) du tracé, centrée sur (cx, cy),
    à la hauteur cap_h. Renvoie (svg, largeur rendue). Échelle commune à
    toutes les lettres (cap_h / hauteur native) -> graisse uniforme."""
    d = SUIT_PATHS[idx]
    s = cap_h / SUIT_NATIVE_H
    x0, y0, x1, y1 = _path_bbox(d)
    tx = cx - s * (x0 + x1) / 2
    ty = cy - s * (y0 + y1) / 2
    g = (f'    <g transform="translate({tx:.2f},{ty:.2f}) scale({s:.5f})">'
         f'<path d="{d}" fill="{color}"/></g>')
    return g, (x1 - x0) * s


def _frame(t, body, bbox, with_text, fit_text=False):
    """Recadre `body` sur sa boîte d'encre `bbox` avec une marge VIDE uniforme
    PAD sur les quatre côtés. Si with_text, le wordmark « SUIT » est ajouté
    au-dessus (centré sur les formes) ; la marge PAD reste identique partout
    -> blanc haut = bas = gauche = droite.

    fit_text : si le mot est plus large que les formes, le réduire (à
    proportions constantes) pour qu'il ne dépasse PAS — ses bords s'alignent
    alors sur ceux des figures (utile pour la version en ligne)."""
    xmin, ymin, xmax, ymax = bbox
    cw, ch = xmax - xmin, ymax - ymin

    if not with_text:
        g = (f'  <g transform="translate({PAD - xmin:.2f},{PAD - ymin:.2f})">\n'
             f'{body}\n  </g>')
        return svg_document(round(cw + 2 * PAD, 1), round(ch + 2 * PAD, 1), t["bg"], g)

    wm_body, wm_w, wm_h = wordmark(t["text"])
    if fit_text and wm_w > cw:                 # réduire le mot à la largeur des formes
        k = cw / wm_w
        wm_body = f'    <g transform="scale({k:.5f})">\n{wm_body}\n    </g>'
        wm_w, wm_h = cw, wm_h * k
    union_w = max(cw, wm_w)
    wm_tx = PAD + (union_w - wm_w) / 2
    sh_tx = PAD + (union_w - cw) / 2 - xmin
    sh_ty = PAD + wm_h + TEXT_PAD - ymin
    total_w = union_w + 2 * PAD
    total_h = wm_h + TEXT_PAD + ch + 2 * PAD
    composed = (f'  <g transform="translate({wm_tx:.2f},{PAD})">\n{wm_body}\n  </g>\n'
                f'  <g transform="translate({sh_tx:.2f},{sh_ty:.2f})">\n{body}\n  </g>')
    return svg_document(round(total_w, 1), round(total_h, 1), t["bg"], composed)


# ----------------------------------------------------------------------
# MISE EN PAGE VERTICALE — trois rangées
# ----------------------------------------------------------------------
def svg_logo(theme="light", with_text=False):
    t = _theme(theme)
    cx = 0.0
    half_top    = CIRCLE_R + STROKE / 2          # centre cercle -> haut d'encre
    half_bottom = SQUARE_OUTER / 2 + STROKE / 2  # centre carré  -> bas d'encre

    # Distribution verticale : pas constant entre centroïdes (origine libre,
    # le recadrage uniforme par _frame s'occupe du centrage).
    c_circles = 0.0
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

    xext = CIRCLE_PITCH + CIRCLE_R + STROKE / 2          # cercles = plus larges
    bbox = (cx - xext, c_circles - half_top, cx + xext, c_square + half_bottom)
    return _frame(t, "\n".join(parts), bbox, with_text)


# ----------------------------------------------------------------------
# MISE EN PAGE HORIZONTALE — une seule ligne
# ----------------------------------------------------------------------
def svg_logo_row(theme="light", with_text=False):
    t = _theme(theme)
    cy = 0.0
    half_v = CIRCLE_R + STROKE / 2     # cercle/carré un peu plus hauts que le triangle

    # Quatre centres équidistants (pas constant ROW_STEP) :
    #   cercle  -  triangle 1  -  triangle 2  -  carré
    x_circle = 0.0
    x_tri1   = x_circle + ROW_STEP
    x_tri2   = x_circle + 2 * ROW_STEP
    x_square = x_circle + 3 * ROW_STEP

    # Triangles centrés géométriquement sur cy : à fleur du cercle et du carré.
    apex, base = triangle_from_center(cy)

    parts = []
    parts.append(draw_circle(x_circle, cy, t["circle"]))
    parts.append(draw_link(x_tri1, cy, x_tri2, cy, t["link"]))
    parts.append(draw_triangle(x_tri1, apex, base, t["triangle"]))
    parts.append(draw_triangle(x_tri2, apex, base, t["triangle"]))
    parts.append(draw_square(x_square, cy, t["link"], t["square_inner"]))

    bbox = (x_circle - half_v, cy - half_v,
            x_square + SQUARE_OUTER / 2 + STROKE / 2, cy + half_v)
    # fit_text : le mot ne doit pas dépasser la largeur de la rangée de figures.
    return _frame(t, "\n".join(parts), bbox, with_text, fit_text=True)


# ----------------------------------------------------------------------
# MISE EN PAGE COLONNE — la composition en ligne, mise à la verticale
#   cercle (haut)  -  triangle 1  -  triangle 2  -  carré (bas)
# ----------------------------------------------------------------------
def svg_logo_col(theme="light", with_text=False):
    t = _theme(theme)

    # Quatre centres équidistants empilés (pas constant COL_STEP, origine libre).
    cx = 0.0
    cy_circle = 0.0
    cy_tri1   = cy_circle + COL_STEP
    cy_tri2   = cy_circle + 2 * COL_STEP
    cy_square = cy_circle + 3 * COL_STEP

    # Triangles pointe-en-haut centrés géométriquement sur leur slot.
    apex1, base1 = triangle_from_center(cy_tri1)
    apex2, base2 = triangle_from_center(cy_tri2)

    parts = []
    # Figure 1 : un cercle creux (en haut)
    parts.append(draw_circle(cx, cy_circle, t["circle"]))
    # Figures 2 & 3 : deux triangles reliés par une arête VERTICALE (centre à centre)
    parts.append(draw_link(cx, cy_tri1, cx, cy_tri2, t["link"]))
    parts.append(draw_triangle(cx, apex1, base1, t["triangle"]))
    parts.append(draw_triangle(cx, apex2, base2, t["triangle"]))
    # Figure 4 : le carré (en bas ; contour extérieur = couleur des arêtes)
    parts.append(draw_square(cx, cy_square, t["link"], t["square_inner"]))

    half_w = max(CIRCLE_R + STROKE / 2, TRI_HALF_W, SQUARE_OUTER / 2 + STROKE / 2)
    bbox = (cx - half_w, cy_circle - (CIRCLE_R + STROKE / 2),
            cx + half_w, cy_square + (SQUARE_OUTER / 2 + STROKE / 2))
    return _frame(t, "\n".join(parts), bbox, with_text)


# ----------------------------------------------------------------------
# MISE EN PAGE « LETTRES LATÉRALES » — S·U·I·T empilées de haut en bas à
# GAUCHE, figures (cercle / triangle / triangle / carré) à DROITE, alignées
# rangée par rangée. Les lettres SONT le mot : pas de variante sans texte.
# ----------------------------------------------------------------------
def svg_logo_vlock(theme="light"):
    t = _theme(theme)
    cys = [0.0, COL_STEP, 2 * COL_STEP, 3 * COL_STEP]   # cercle, tri, tri, carré

    s_let = LETTER_CAP / SUIT_NATIVE_H
    col_let_w = max((_path_bbox(d)[2] - _path_bbox(d)[0]) * s_let for d in SUIT_PATHS)
    fig_half = max(CIRCLE_R + STROKE / 2, TRI_HALF_W, SQUARE_OUTER / 2 + STROKE / 2)

    x_let = 0.0                                          # axe vertical des lettres
    x_fig = col_let_w / 2 + LET_FIG_GAP + fig_half       # axe vertical des figures

    parts = []
    # Colonne de gauche : les quatre lettres, centrées sur chaque rangée.
    for idx, cy in enumerate(cys):
        parts.append(_letter(idx, x_let, cy, LETTER_CAP, t["text"])[0])
    # Colonne de droite : les figures (mêmes rangées que les lettres).
    parts.append(draw_circle(x_fig, cys[0], t["circle"]))
    parts.append(draw_link(x_fig, cys[1], x_fig, cys[2], t["link"]))
    a1, b1 = triangle_from_center(cys[1])
    a2, b2 = triangle_from_center(cys[2])
    parts.append(draw_triangle(x_fig, a1, b1, t["triangle"]))
    parts.append(draw_triangle(x_fig, a2, b2, t["triangle"]))
    parts.append(draw_square(x_fig, cys[3], t["link"], t["square_inner"]))

    xmin = x_let - col_let_w / 2
    xmax = x_fig + fig_half
    ymin = min(cys[0] - (CIRCLE_R + STROKE / 2), cys[0] - LETTER_CAP / 2)
    ymax = max(cys[3] + (SQUARE_OUTER / 2 + STROKE / 2), cys[3] + LETTER_CAP / 2)
    return _frame(t, "\n".join(parts), (xmin, ymin, xmax, ymax), with_text=False)


# ----------------------------------------------------------------------
# MISE EN PAGE « INLINE » — le mot « SUIT » SUIVI des figures, sur une seule
# ligne : [ SUIT ]  cercle · triangle · triangle · carré. Tout est centré
# verticalement sur la même ligne médiane.
# ----------------------------------------------------------------------
def svg_logo_inline(theme="light"):
    t = _theme(theme)
    cy = 0.0

    # Mot « SUIT » à gauche, hauteur INLINE_CAP, centré verticalement sur cy.
    s = INLINE_CAP / SUIT_NATIVE_H
    wm_w = SUIT_NATIVE_W * s
    wm = (f'  <g transform="translate(0,{cy - INLINE_CAP / 2:.2f}) scale({s:.5f})">\n'
          + "\n".join(f'    <path d="{d}" fill="{t["text"]}"/>' for d in SUIT_PATHS)
          + "\n  </g>")

    # Figures à droite, mêmes pas que la version en ligne.
    half_v = CIRCLE_R + STROKE / 2
    x_circle = wm_w + INLINE_GAP + half_v
    x_tri1   = x_circle + ROW_STEP
    x_tri2   = x_circle + 2 * ROW_STEP
    x_square = x_circle + 3 * ROW_STEP
    apex, base = triangle_from_center(cy)

    parts = [wm]
    parts.append(draw_circle(x_circle, cy, t["circle"]))
    parts.append(draw_link(x_tri1, cy, x_tri2, cy, t["link"]))
    parts.append(draw_triangle(x_tri1, apex, base, t["triangle"]))
    parts.append(draw_triangle(x_tri2, apex, base, t["triangle"]))
    parts.append(draw_square(x_square, cy, t["link"], t["square_inner"]))

    bbox = (0.0, cy - half_v, x_square + SQUARE_OUTER / 2 + STROKE / 2, cy + half_v)
    return _frame(t, "\n".join(parts), bbox, with_text=False)


# ----------------------------------------------------------------------
def save_logo():
    # Chaque thème × trois dispositions × {sans wordmark / avec « SUIT » }, plus
    # le format « lettres latérales » (qui porte toujours le mot).
    #   - svg_logo       : verticale « riche » (3 cercles / 2 triangles / carré)
    #   - svg_logo_row   : composition en ligne (cercle · triangles · carré)
    #   - svg_logo_col   : la même composition, mise à la verticale
    #   - svg_logo_vlock  : S·U·I·T à gauche, figures à droite
    #   - svg_logo_inline : mot « SUIT » suivi des figures, sur une ligne
    layouts = {"": svg_logo, "row_": svg_logo_row, "col_": svg_logo_col}
    files = {}
    for theme in THEMES:
        for prefix, fn in layouts.items():
            files[f"suit_logo_{prefix}{theme}.svg"]      = fn(theme)
            files[f"suit_logo_{prefix}{theme}_text.svg"] = fn(theme, with_text=True)
        files[f"suit_logo_vlock_{theme}.svg"]  = svg_logo_vlock(theme)
        files[f"suit_logo_inline_{theme}.svg"] = svg_logo_inline(theme)

    for name, content in files.items():
        Path(name).write_text(content, encoding="utf-8")

    print(f"Fichiers générés ({len(files)}) :")
    for name in files:
        print(f"- {name}")


if __name__ == "__main__":
    save_logo()
