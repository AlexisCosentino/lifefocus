# LIFE FOCUS - DIRECTION ARTISTIQUE

## 1. Positionnement

Life Focus est un site de photographie de mariage et de famille base dans la Drome.

Le site doit exprimer une photographie sensible, humaine et intemporelle, avec une presentation contemporaine, premium et editoriale.

La progression emotionnelle principale du site est :

1. Photographs - le visiteur aime les images.
2. Person - le visiteur comprend qui est Alexis et sa maniere d'accompagner.
3. Trust - le visiteur decouvre les avis, l'experience et les distinctions.

Le site ne doit jamais donner l'impression d'un simple portfolio impersonnel, d'un studio generique, d'un site SaaS, d'un template IA ou d'un site de mariage beige generique.

## 2. Principes visuels

Le design doit etre contemporain, editorial, premium, humain, sensible, photographique, chaleureux, memorable, minimal sans etre vide, et sophistique sans etre pretentieux.

La composition doit etre forte et maitrisee. Le minimalisme recherche n'est pas une absence de design.

Techniques encouragees :

- asymetrie controlee ;
- differences d'echelle entre les visuels ;
- contenu qui sort ponctuellement de la colonne classique ;
- superpositions maitrisees entre surfaces et images ;
- alternance de zones tres visuelles et de zones plus calmes ;
- utilisation occasionnelle d'une surface claire ou sombre pour structurer la page.

Eviter :

- ombres decoratives ;
- gradients ;
- glassmorphism ;
- effets 3D ;
- halos ;
- cartes flottantes type produit SaaS ;
- blocs decoratifs sans fonction.

## 3. Couleurs

Les photographies sont la principale source de couleur.

Palette approuvee :

```css
--color-background: #f6f4ef;
--color-text: #171717;
--color-muted: #64635f;
--color-line: #d8d5cd;
--color-white: #ffffff;
--color-dark: #1d1d1b;
--color-surface-soft: #ebe8e1;
```

L'interface doit rester presque monochromatique : ivoire, charbon, blanc, gris chaud, et une surface pierre tres subtile uniquement si necessaire.

Ne pas utiliser :

- beige sable dominant ;
- jaune chaud ;
- tons argile comme identite UI ;
- accents colores satures ;
- surfaces colorees arbitraires.

La section sombre A propos est approuvee.

## 4. Typographie

### Serif editoriale

Newsreader est la famille serif principale.

Usage :

- H1 ;
- grands titres editoriaux ;
- accroches de sections ;
- certaines phrases fortes.

Poids :

- 400 principalement.

### Interface

Inter est la famille d'interface et de lecture.

Usage :

- navigation ;
- paragraphes ;
- labels ;
- metadonnees ;
- liens ;
- CTA ;
- formulaires.

Poids :

- 400 ;
- 500.

Ne pas ajouter de troisieme famille typographique sans validation explicite.

Regles :

- les tres grands titres doivent rester exceptionnels ;
- maximum 2 ou 3 moments serif tres oversized sur toute la homepage ;
- la plupart des titres de section doivent etre plus contenus ;
- privilegier la sentence case pour les grands textes editoriaux ;
- utiliser l'uppercase surtout pour les labels, metadonnees, numerotations et courts CTA ;
- ne pas laisser la typographie dominer la photographie.

Exemples approuves :

- "Photographe de mariage"
- "Etre la, sans prendre toute la place."
- "Depuis 2020, chaque annee."

## 5. Grille, largeur et espace

Largeur maximale du contenu principal : `1440px`.

Padding horizontal desktop : environ `5vw`.

Padding mobile : `20px`.

Largeur de lecture habituelle : `600-680px`.

La grille n'est pas une prison. Certaines images, surfaces ou compositions peuvent depasser volontairement la colonne de texte.

References d'espacement :

```css
--space-xs: 1rem;
--space-sm: 2rem;
--space-md: 4rem;
--space-lg: 7.5rem;
--space-xl: 11rem;
```

L'espace blanc doit hierarchiser, donner de l'impact aux images, separer les idees et calmer les zones denses. Eviter les grands vides qui ne racontent rien.

## 6. Photographie

Regle non negociable : ne jamais modifier le ratio original d'une photographie editoriale.

Pour les photographies de portfolio :

- ne pas imposer `aspect-ratio` ;
- ne pas imposer de hauteur fixe ;
- ne pas utiliser `object-fit: cover` ;
- ne pas etirer les images ;
- ne pas recadrer automatiquement pour remplir une mise en page.

Implementation type :

```css
img {
  display: block;
  width: 100%;
  height: auto;
}
```

La mise en page doit s'adapter a la photographie. La photographie ne doit pas s'adapter destructivement a la mise en page.

Astro Image et Picture peuvent etre utilises pour optimiser les images, a condition que les tailles generees preservent le ratio source.

Les images doivent pouvoir etre remplacees facilement via des roles centralises :

- hero-main ;
- hero-secondary ;
- wedding-main ;
- wedding-secondary ;
- breathing ;
- family-main ;
- family-secondary ;
- alexis ;
- trust.

## 7. Texte et superpositions

Le texte peut chevaucher une photographie uniquement lorsqu'il est place dans une surface dediee, calme et lisible.

Cette surface doit contenir tout le texte sans debordement, ne pas couvrir une part importante de la photo, et rester sobre : pas d'ombre, pas de contour decoratif, pas d'effet UI.

Une photographie ne doit jamais couvrir directement du texte lisible.

Le texte doit rester dans sa region allouee, meme si la copie s'allonge ou si le rendu des polices varie.

Le body copy ne doit pas dependre d'un positionnement absolu fragile, d'une hauteur fixe ou d'un nombre de lignes suppose.

Toute superposition doit :

- etre intentionnelle ;
- utiliser un stacking context explicite ;
- avoir des z-index clairs ;
- reserver assez d'espace physique au texte ;
- rester lisible sur desktop, tablette et mobile.

Les chevauchements sont autorises entre surfaces et images, ou entre images, mais jamais au detriment de la lisibilite du texte ou de la comprehension de la photographie.

Les labels de categories Famille ne doivent jamais etre places sur les photographies. Ils doivent avoir une zone de texte adjacente, au-dessus, a cote ou sous leur image.

## 8. Navigation et logo

Le header doit rester discret mais lisible :

- logo officiel Life Focus noir sur fond clair ;
- navigation a droite : MARIAGE, FAMILLE, A PROPOS, CONTACT ;
- une seule ligne en desktop ;
- menu simple en mobile ;
- pas de bouton CTA massif ;
- pas de sticky behavior sans raison d'usage.

Le logo officiel doit remplacer l'identite de marque tapee lorsque l'asset fonctionne proprement. Preserver ses proportions et ne pas l'utiliser comme decoration repetee.

## 9. Homepage

Structure generale :

1. Header
2. Hero compose
3. Introduction editoriale compacte
4. Mariage
5. Respiration visuelle si necessaire
6. Famille
7. A propos d'Alexis
8. Reputation / Wedding Awards / temoignages
9. Contact CTA
10. Footer

### Hero

Le hero doit etre une composition photographique contemporaine et confiante.

Utiliser :

- une photographie horizontale dominante ;
- une photographie verticale secondaire ;
- un bloc typographique restraint ;
- des chevauchements controles.

Les deux photos conservent leur ratio source et ne sont jamais cropees.

Texte :

- "Photographe de mariage"
- "Drome · Valence · Romans-sur-Isere"
- "Des images vivantes, naturelles, et une presence a vos cotes du debut a la fin."

Le hero ne doit pas etre :

- une photo plein ecran 100vh ;
- un slider ;
- un titre marketing centre sur image sombre ;
- un collage ou trois blocs concurrents ;
- une typographie qui lutte contre les photos.

### Introduction editoriale

Le traitement manifesto oversized est retire.

Utiliser une introduction compacte, par exemple :

"Les images que l'on garde ne sont pas toujours celles que l'on avait prevues."

"Un rire trop fort, une main qui cherche une autre, un regard que personne n'avait remarque. C'est souvent la que se trouvent les images auxquelles je tiens."

### Mariage

La section Mariage doit etre photographique avant d'etre typographique.

Utiliser :

- `01 / MARIAGE` ;
- une photographie horizontale forte ;
- une photographie verticale secondaire ;
- "Etre la, sans prendre toute la place." ;
- "Je vous guide quand vous en avez besoin. Le reste du temps, je prefere vous laisser vivre votre journee." ;
- `DECOUVRIR LE MARIAGE ->`.

Les photos conservent leur ratio source. Le titre reste editorial mais pas oversized.

### Famille

La homepage doit montrer clairement trois mondes :

- Grossesse -> `/grossesse/`
- Naissance -> `/naissance/`
- Famille -> `/famille/`

Utiliser exactement trois photographies, avec une image dominante et deux images secondaires de tailles differentes. Ne pas transformer ces entrees en cartes. Les labels restent lisibles et ne couvrent pas les zones importantes des images.

### A propos

La section sombre pleine largeur est approuvee.

Conserver :

- fond charbon ;
- portrait reel d'Alexis ;
- texte clair ;
- approche humaine.

Le portrait conserve son ratio source. Ne pas rendre "Alexis Cosentino" inutilement gigantesque.

### Reputation

Les Wedding Awards Mariages.net officiels peuvent etre affiches.

Regles :

- ne jamais les redessiner ;
- ne pas les modifier ;
- ne pas les recadrer ;
- ne pas ajouter d'ombre ;
- ne pas les enfermer dans des cartes ;
- ne pas inventer d'annee, avis, note ou citation.

Texte approuve :

- `04 / CONFIANCE`
- "Depuis 2020, chaque annee."

### Contact

Conserver le concept final :

- "Votre histoire commence ici."
- `ECRIVEZ-MOI ->`

La conclusion doit rester forte sans devenir une affiche.

## 10. Responsive

Le mobile ne doit pas copier verticalement le desktop.

Sur mobile :

- simplifier les chevauchements ;
- empiler normalement les photos si necessaire ;
- conserver les ratios intrinseques ;
- reduire nettement la typographie ;
- eviter les titres qui occupent la majorite du viewport ;
- eviter les thumbnails trop petits ;
- garantir aucun debordement horizontal.

Tester au minimum petit mobile, smartphone classique, tablette, desktop et grand ecran.

## 11. Validation visuelle

Avant validation, verifier :

- le site ressemble a Life Focus, pas a un template generique ;
- les images participent a la composition ;
- aucun texte n'est masque ;
- aucun crop destructeur n'est applique aux photos editoriales ;
- chaque grand espace blanc a une fonction ;
- rien n'a ete ajoute seulement pour faire moderne.

En cas de doute, preferer :

- une composition forte a un effet decoratif ;
- une photographie forte a plusieurs petites images ;
- un chevauchement maitrise a une carte ;
- une phrase humaine a un slogan marketing ;
- une interface calme a une interface spectaculaire.
