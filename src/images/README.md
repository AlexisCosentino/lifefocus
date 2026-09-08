# Images Life Focus

Les photographies finales doivent etre placees dans `src/images/`.

Le fichier de reference est `src/data/image-manifest.json`. Il indique, page par page, les dossiers attendus, les noms de fichiers, l'orientation demandee et les galeries.

## Regles de nommage

- Utiliser des noms en minuscules.
- Utiliser des tirets entre les mots.
- Ne pas utiliser d'espaces, d'accents ou de majuscules.
- Respecter exactement les noms indiques dans `image-manifest.json`.

Exemples : `hero-main.jpg`, `hero-secondary.jpg`, `preparation-1.jpg`, `alexis-main.jpg`.

## Images fixes

Chaque image fixe doit respecter l'orientation indiquee dans le manifeste :

- `horizontal` : image paysage.
- `vertical` : image portrait.
- `free` : orientation libre, seulement lorsque le manifeste l'autorise.

Le site ne doit jamais modifier destructivement le ratio original d'une photographie. Une image horizontale doit rester horizontale, une image verticale doit rester verticale.

## Galeries

Chaque galerie utilise un dossier `gallery`.

Les fichiers doivent etre nommes avec des nombres :

- `1.jpg`
- `2.jpg`
- `3.jpg`
- `10.jpg`

L'ordre attendu est un tri naturel numerique : `1.jpg`, `2.jpg`, `3.jpg`, `10.jpg`, et non `1.jpg`, `10.jpg`, `2.jpg`.

Les photos de galerie peuvent etre horizontales ou verticales. Leur ratio original doit etre conserve.
