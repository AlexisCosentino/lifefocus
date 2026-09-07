# LIFE FOCUS — DIRECTION ARTISTIQUE

## 1. Positionnement

Life Focus est un site de photographie de mariage et de famille basé dans la Drôme.

Le site doit exprimer une photographie sensible, humaine et intemporelle, avec une présentation contemporaine, premium et éditoriale.

L’objectif n’est pas de reproduire littéralement une mise en page de magazine imprimé, mais de s’inspirer de son exigence graphique tout en exploitant pleinement les possibilités du web moderne : composition, superpositions, profondeur, rythme visuel, asymétrie et interactions discrètes.

Le design doit donner envie de s’attarder, de regarder les images et de découvrir la personne derrière Life Focus.

La progression émotionnelle principale du site est :

1. PHOTOGRAPHS — le visiteur aime les images ;
2. PERSON — le visiteur comprend qui est Alexis et sa manière d’accompagner ;
3. TRUST — le visiteur découvre les avis, l’expérience et les distinctions.

Le site ne doit jamais donner l’impression d’un simple portfolio impersonnel ou d’un studio générique.

---

## 2. Principes visuels fondamentaux

Le site doit être :

- contemporain ;
- éditorial ;
- premium ;
- humain ;
- sensible ;
- photographique ;
- chaleureux ;
- mémorable ;
- minimal sans être vide ;
- sophistiqué sans être prétentieux.

Le site ne doit PAS ressembler :

- à un site SaaS ;
- à un template généré par IA ;
- à un site de mariage bohème beige générique ;
- à une galerie d’art froide ;
- à un magazine imprimé simplement reproduit en HTML ;
- à une succession de grandes photos et de gros textes séparés par des kilomètres de vide ;
- à un site ultra conceptuel ou expérimental difficile à lire.

Le minimalisme recherché n’est pas une absence de design. Il doit reposer sur une composition forte, maîtrisée et moderne.

---

## 3. Philosophie de composition

Le design doit utiliser activement la composition.

Techniques encouragées :

- photographies qui chevauchent légèrement un bloc de contenu ;
- texte qui vient mordre sur une image ou un aplat ;
- images secondaires décalées de la grille principale ;
- blocs colorés sobres utilisés comme ancrage visuel ;
- composition asymétrique ;
- différences d’échelle importantes entre les visuels ;
- sections avec profondeur créée par superposition ;
- contenu qui sort ponctuellement de la colonne classique ;
- alternance de zones très visuelles et de zones plus calmes ;
- utilisation occasionnelle de surfaces claires ou sombres pour structurer la page.

Les superpositions doivent être contrôlées et maintenables.

Elles ne doivent jamais nuire :

- à la lecture ;
- au responsive ;
- à l’accessibilité ;
- à la lisibilité des photographies.

Le design doit rester calme. Une section utilise idéalement une ou deux idées fortes, pas toutes les techniques simultanément.

---

## 4. Profondeur

La profondeur visuelle doit provenir de :

- la superposition ;
- la différence d’échelle ;
- le cadrage ;
- la couleur ;
- les contrastes ;
- les décalages de grille ;
- l’espace négatif ;
- la hiérarchie typographique.

Éviter :

- les ombres portées décoratives ;
- les dégradés ;
- le glassmorphism ;
- les effets 3D ;
- les halos ;
- les cartes flottantes façon produit SaaS.

---

## 5. Palette

La photographie reste la principale source de couleur du site.

Palette de base :

```css
--color-background: #f6f4ef;
--color-text: #171717;
--color-muted: #64635f;
--color-line: #d8d5cd;
--color-white: #ffffff;
```

Le site peut utiliser UNE couleur de surface secondaire à la fois pour donner du rythme et de la profondeur.

Familles de teintes autorisées :

- sable chaud ;
- pierre ;
- argile douce ;
- vieux rose très désaturé ;
- charbon profond.

Exemples indicatifs :

```css
--color-surface-warm: #ded5c8;
--color-surface-clay: #cdb7aa;
--color-surface-dark: #1d1d1b;
```

Ces couleurs sont des références et peuvent être légèrement ajustées lors de la validation visuelle.

Règles :

- pas de palette multicolore ;
- pas de couleurs saturées ;
- pas d’accent flashy ;
- pas plus d’une teinte secondaire dominante sur une même vue ou section importante ;
- les surfaces colorées doivent servir la composition et non décorer arbitrairement.

---

## 6. Typographie

### Editorial typeface

Instrument Serif

Usage :

- H1 ;
- grands titres ;
- grandes phrases éditoriales ;
- accroches de sections ;
- certaines citations ;
- éléments de marque lorsque pertinent.

Poids :

- 400 uniquement.

### Interface typeface

Inter

Usage :

- paragraphes ;
- navigation ;
- labels ;
- métadonnées ;
- CTA ;
- formulaires ;
- informations pratiques.

Poids :

- 400 ;
- 500.

Ne pas ajouter de troisième famille typographique sans validation explicite.

### Échelle typographique

La grande typographie doit rester spectaculaire mais contrôlée.

Exemple de référence :

```css
font-size: clamp(3.5rem, 7vw, 8rem);
```

Les très grands titres doivent être utilisés ponctuellement.

Ne pas transformer chaque section en affiche typographique.

---

## 7. Grille et largeur

Largeur maximale du contenu principal :

`1440px`

Padding horizontal desktop :

`5vw` environ.

Padding mobile :

`20px`.

Largeur de lecture habituelle pour un texte :

`600–680px` environ.

Les images, titres et blocs de composition peuvent dépasser volontairement la largeur de texte.

La grille n’est pas une prison : certaines sections peuvent utiliser des colonnes décalées, des éléments qui se chevauchent ou des contenus partiellement hors axe.

---

## 8. Espacement

Référence :

```css
--space-xs: 1rem;
--space-sm: 2rem;
--space-md: 4rem;
--space-lg: 7.5rem;
--space-xl: 11rem;
```

Les valeurs exactes peuvent utiliser `clamp()`.

L’espace blanc reste important, mais il doit avoir une fonction.

Il doit servir à :

- hiérarchiser ;
- donner de l’impact aux images ;
- séparer des idées ;
- créer de la tension visuelle ;
- calmer une section dense.

Éviter les grands vides qui ne racontent rien.

Si un espace n’améliore ni la composition ni la lecture, le réduire.

---

## 9. Formes et interface

Les composants doivent rester sobres.

Par défaut :

```css
border-radius: 0;
box-shadow: none;
```

Éviter :

- cartes ;
- coins arrondis décoratifs ;
- ombres ;
- badges UI artificiels ;
- gros boutons remplis ;
- blocs décoratifs sans fonction ;
- cadres inutiles.

Exception :

les éléments officiels de preuve sociale, tels que les Wedding Awards Mariages.net, sont autorisés lorsqu’ils sont intégrés selon la section Réputation.

Les CTA doivent être principalement typographiques.

Exemples :

`DÉCOUVRIR LE MARIAGE →`

`ÉCRIVEZ-MOI →`

---

## 10. Photographie

Les photographies sont le cœur du site.

Le site doit valoriser :

- reportage ;
- émotions ;
- gestes spontanés ;
- relations humaines ;
- portraits naturels ;
- lumière naturelle ;
- détails de contexte ;
- scènes qui racontent quelque chose.

Les photographies ne doivent pas seulement être placées dans des rectangles ; elles doivent participer à la composition.

### Ratios de base

Utiliser principalement :

- paysage : `3 / 2` ;
- large : `16 / 9` ;
- portrait : `4 / 5` ;
- occasionnellement un ratio proche du carré si la composition l’exige.

Ne jamais déformer une image.

Toujours utiliser un cadrage maîtrisé :

```css
width: 100%;
height: 100%;
object-fit: cover;
```

Éviter :

- les colonnes d’image extrêmement fines ;
- les images excessivement hautes ;
- les crops absurdes ;
- les images agrandies simplement pour remplir le viewport ;
- les galeries denses sur la homepage.

La homepage doit contenir environ 8 à 12 photographies fortes maximum.

---

## 11. Hero — règle forte

La homepage ne doit PAS commencer par :

- une simple grande image 3:2 suivie de texte ;
- une photo plein écran 100vh ;
- un slider ;
- un titre marketing centré posé sur une image sombre ;
- un bloc totalement vide autour d’une seule photographie.

Le hero doit être une composition conçue comme un ensemble.

Il doit introduire simultanément :

- la photographie ;
- Life Focus ;
- l’activité ;
- la zone géographique ;
- la personnalité visuelle du site.

Direction préférée :

- une image dominante représentant environ 55 à 70 % de la composition visuelle ;
- un bloc texte ou une zone typographique intégrée à côté ou en léger chevauchement ;
- éventuellement une petite image secondaire ou un aplat discret ;
- asymétrie contrôlée ;
- informations visibles dès le premier écran.

Le visiteur doit comprendre très rapidement :

- Photographe de mariage ;
- Drôme / Valence / Romans-sur-Isère ;
- sensibilité documentaire et humaine.

Le hero doit donner envie de scroller sans monopoliser inutilement la première vue.

---

## 12. Rythme éditorial moderne

Ne pas répéter la même structure section après section.

Exemples de compositions acceptées :

### Composition A

- grande photo paysage ;
- bloc texte sur fond chaud ;
- léger chevauchement entre les deux.

### Composition B

- grande phrase serif ;
- photo portrait décalée ;
- petit texte positionné indépendamment.

### Composition C

- deux photos de tailles différentes ;
- texte placé dans l’espace entre elles ;
- légère rupture de grille.

### Composition D

- section sombre ;
- témoignage ;
- Awards / réputation ;
- contraste fort avec les sections ivoire.

### Composition E

- section calme ;
- une seule photo ;
- peu de texte ;
- respiration volontaire.

Le site doit sembler conçu comme un parcours visuel continu, pas comme une liste de blocs indépendants.

---

## 13. Navigation

### Desktop

Header discret mais lisible.

- LIFE FOCUS à gauche ;
- navigation à droite ;
- une seule ligne ;
- typographie compacte ;
- tracking léger ;
- pas de gros logo centré ;
- pas de bouton CTA massif.

Navigation principale :

- MARIAGE ;
- FAMILLE ;
- À PROPOS ;
- CONTACT.

### Mobile

- LIFE FOCUS à gauche ;
- MENU à droite ;
- menu simple, lisible et accessible ;
- pas de sur-design inutile.

Le header n’a pas besoin d’être sticky tant qu’aucune raison d’usage ne le justifie.

---

## 14. Logo

Life Focus dispose :

- d’un logo noir ;
- d’un logo blanc.

Le logo ne doit pas nécessairement être utilisé dans le header si une version typographique `LIFE FOCUS` est visuellement plus forte.

Le choix doit être fait selon la composition.

Le logo blanc peut être utilisé sur une section sombre.

Ne pas utiliser le logo comme élément décoratif répété.

---

## 15. Homepage — structure générale

La homepage doit suivre cette progression :

1. Header
2. Hero composé
3. Introduction / manifeste photographique
4. Mariage
5. Respiration visuelle
6. Famille
7. À propos d’Alexis
8. Réputation / Wedding Awards / témoignages
9. Contact CTA
10. Footer

La structure est stable, mais chaque section doit avoir une composition distincte.

---

## 16. Manifeste

Le manifeste doit être court.

Il ne doit pas ressembler à une citation Instagram ou à un slogan publicitaire.

Le ton doit être concret, humain et personnel.

Thèmes possibles :

- les moments imparfaits ;
- les gestes ;
- les liens ;
- les images qui prennent de la valeur avec le temps ;
- le fait d’observer plus que de fabriquer ;
- la mémoire familiale.

Éviter les phrases trop précieuses ou poétiques pour elles-mêmes.

---

## 17. Mariage

La section Mariage doit être la plus importante après le hero.

Elle doit montrer :

- reportage ;
- émotion ;
- présence discrète ;
- accompagnement ;
- guidance quand elle est utile ;
- liberté laissée au couple ;
- implication réelle d’Alexis.

Éviter :

- cartes tarifaires sur la homepage ;
- liste de fonctionnalités ;
- ton commercial ;
- icônes ;
- phrases génériques.

CTA :

`DÉCOUVRIR LE MARIAGE →`

---

## 18. Famille

La homepage regroupe :

- GROSSESSE ;
- NAISSANCE ;
- FAMILLE.

Elles doivent apparaître comme un même univers photographique, pas comme trois cartes commerciales.

Les pages dédiées peuvent exister séparément pour le SEO.

La composition visuelle doit être différente de la section Mariage.

---

## 19. À propos d’Alexis

Le visiteur doit comprendre qu’il y a une personne identifiable derrière Life Focus.

Thèmes à communiquer :

- Alexis Cosentino ;
- photographe basé à Romans-sur-Isère ;
- amour de l’image ;
- sensibilité ;
- attention ;
- implication ;
- relation avec les couples ;
- capacité à guider sans diriger artificiellement.

Le site ne doit pas présenter Alexis comme une “marque personnelle premium” abstraite.

Il doit paraître humain, accessible, rassurant et passionné.

CTA :

`EN SAVOIR PLUS →`

---

## 20. Personnalité de marque

Life Focus n’est pas une simple prestation photo.

L’expérience doit communiquer qu’Alexis est réellement présent aux côtés des personnes qu’il photographie.

La personnalité de marque est :

- sensible ;
- humaine ;
- rassurante ;
- attentive ;
- passionnée par l’image ;
- fortement impliquée ;
- expérimentée sans être distante ;
- capable de guider sans donner l’impression de diriger.

Message implicite :

« Je ne suis pas simplement là pour prendre des photos. Je suis là avec vous. »

Éviter les formulations corporate telles que :

- expérience premium personnalisée ;
- service haut de gamme sur mesure ;
- prestation d’exception.

Préférer des formulations concrètes.

Exemple :

« Je vous guide quand vous en avez besoin. Pour le reste, je préfère vous laisser vivre votre journée. »

---

## 21. Sensibilité et rapport à l’image

Le site doit montrer le rapport personnel d’Alexis à la photographie.

La photographie n’est pas présentée comme un service technique.

Thèmes possibles :

- souvenirs ;
- temps qui passe ;
- famille ;
- petits gestes ;
- moments imparfaits ;
- lumière ;
- observation ;
- images qui prennent de la valeur avec les années ;
- lien entre photographie et mémoire.

Le ton peut être introspectif par moments, mais jamais grandiloquent.

---

## 22. Réputation et preuve sociale

Life Focus a reçu des Wedding Awards Mariages.net chaque année depuis 2020.

C’est une preuve importante de constance et de confiance.

La réputation doit être visible, mais intégrée avec élégance.

### Wedding Awards

Les badges officiels peuvent être affichés.

Règles :

- ne jamais les redessiner ;
- ne pas les modifier ;
- ne pas ajouter d’ombre ;
- ne pas les enfermer dans des cartes ;
- ne pas les rendre gigantesques ;
- ne pas créer un mur de logos commercial.

Les badges peuvent être présentés comme une archive ou une ligne temporelle.

Exemple :

`2020  2021  2022  2023  2024  2025  2026`

La répétition doit communiquer la constance dans le temps.

### Section de confiance

La section peut utiliser un fond sombre ou une surface différente pour créer une vraie rupture visuelle.

Elle peut combiner :

- Wedding Awards ;
- badge d’avis Mariages.net ;
- témoignage ;
- note et nombre d’avis uniquement lorsqu’ils sont vérifiés.

Ne jamais inventer :

- note ;
- nombre d’avis ;
- année d’Award ;
- témoignage ;
- citation.

### Témoignages

Privilégier des témoignages qui parlent de :

- mise à l’aise ;
- accompagnement ;
- disponibilité ;
- discrétion ;
- relation avec Alexis ;
- implication ;
- expérience avant et pendant le mariage ;
- qualité des images.

Présenter les témoignages comme des citations éditoriales, pas dans des cartes d’avis.

---

## 23. Contact CTA

La fin de la homepage doit être forte, simple et humaine.

Direction possible :

`VOTRE HISTOIRE COMMENCE ICI.`

Puis une invitation courte.

CTA :

`ÉCRIVEZ-MOI →`

Pas de gros bouton rempli.

La section peut utiliser une composition plus contrastée si elle reste cohérente avec le site.

---

## 24. Footer

Le footer doit rester simple.

Informations possibles :

- LIFE FOCUS ;
- Romans-sur-Isère ;
- Drôme — France ;
- Instagram ;
- Mentions légales.

Éviter d’y entasser des liens ou des éléments décoratifs.

---

## 25. Animations et interactions

Les animations ne sont pas nécessaires pour rendre le site moderne.

La composition statique doit déjà être forte.

Plus tard, seules des interactions très discrètes pourront être envisagées :

- léger mouvement au hover ;
- apparition douce ;
- petite translation ;
- variation d’échelle très subtile ;
- révélation progressive.

Éviter :

- parallax agressif ;
- animations permanentes ;
- scroll hijacking ;
- effets décoratifs gratuits ;
- animations qui ralentissent l’accès au contenu.

La performance reste prioritaire.

---

## 26. Responsive

Le mobile ne doit pas être une copie verticale du desktop.

Les compositions complexes doivent être réinterprétées.

Sur mobile :

- simplifier les chevauchements ;
- conserver de petits décalages visuels ;
- garder une hiérarchie forte ;
- éviter les éléments qui deviennent trop étroits ;
- préserver le rythme photographique ;
- éviter les titres qui occupent tout l’écran sans raison ;
- assurer une excellente lisibilité.

Aucun débordement horizontal.

---

## 27. Maintenance

Le site doit pouvoir rester pertinent plusieurs années sans publication fréquente.

Alexis doit pouvoir renouveler facilement les photos sans modifier la structure.

Les visuels de homepage doivent être associés à des rôles, par exemple :

- hero-main ;
- hero-secondary ;
- wedding-main ;
- wedding-secondary ;
- breathing ;
- family-main ;
- family-secondary ;
- alexis ;
- trust.

Changer une photo doit idéalement nécessiter :

- soit de remplacer un fichier ;
- soit de modifier un chemin centralisé.

Pas de CMS complexe.

---

## 28. Tests de validation visuelle

Lorsqu’une page est revue, poser ces questions :

### Test 1 — identité

« Est-ce que ce site ressemble à Life Focus ou à un template générique ? »

### Test 2 — modernité

« Est-ce que cela ressemble à un site premium contemporain, ou simplement à une page de magazine reproduite sur le web ? »

Si la réponse est “page magazine”, utiliser davantage :

- superposition ;
- profondeur ;
- rupture de grille ;
- échelle ;
- composition web-native.

### Test 3 — photographie

« Les images participent-elles au design, ou sont-elles simplement posées dans des rectangles ? »

### Test 4 — vide

« Chaque grande zone vide améliore-t-elle vraiment la composition ? »

Sinon, la réduire.

### Test 5 — sobriété

« A-t-on ajouté un élément uniquement pour faire moderne ? »

Si oui, le retirer.

### Test 6 — sans photographie

« Si les photos étaient remplacées par des rectangles gris, la mise en page aurait-elle encore une intention claire ? »

La réponse doit être oui.

---

## 29. Règle finale

En cas de doute, préférer :

- une composition forte à un effet décoratif ;
- une photographie forte à plusieurs petites images ;
- un chevauchement maîtrisé à une carte ;
- une phrase humaine à un slogan marketing ;
- une interface calme à une interface spectaculaire ;
- un design contemporain à une reproduction littérale des codes du print.

Life Focus doit être photographique, moderne, élégant et humain.

Les visiteurs doivent d’abord aimer les images, puis apprécier la personne, puis avoir confiance.
