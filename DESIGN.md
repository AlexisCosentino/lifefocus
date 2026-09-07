# LIFE FOCUS — DIRECTION ARTISTIQUE ET DESIGN SYSTEM

## 1. Rôle de ce document

Ce document constitue la référence visuelle du site Life Focus.

Il définit :

- le positionnement esthétique ;
- les principes de composition ;
- les typographies et couleurs ;
- les règles d’interface ;
- la place de la photographie, de la personnalité d’Alexis et des preuves de confiance ;
- le rythme général de la page d’accueil.

Il ne remplace pas :

- `SEO.md` pour les contraintes éditoriales et SEO ;
- `CODEX.md` pour les règles techniques et la méthode de développement.

En cas de doute visuel, appliquer la solution la plus simple, la plus éditoriale et la plus favorable aux photographies.

---

## 2. Positionnement

Life Focus est l’activité de photographie de mariage et de famille d’Alexis Cosentino, basée à Romans-sur-Isère, dans la Drôme.

Le site doit évoquer un magazine photographique contemporain haut de gamme :

- éditorial ;
- minimaliste ;
- humain ;
- chaleureux ;
- sensible ;
- intemporel.

Le design doit soutenir les photographies sans chercher à rivaliser avec elles.

Les photographies constituent la principale source de couleur et d’émotion du site.

Le site doit paraître soigné et premium, sans être prétentieux, froid ou démonstratif.

### Le site ne doit pas ressembler

- à un produit SaaS ;
- à un template générique généré par IA ;
- à un site de mariage bohème beige rempli de codes romantiques attendus ;
- à une galerie d’art froide ou inaccessible ;
- à un site commercial saturé de boutons, de badges et d’arguments promotionnels.

---

## 3. Progression de marque

Les pages principales, et particulièrement la page d’accueil, doivent progressivement transmettre trois idées dans cet ordre.

### 1. Les photographies

Le visiteur découvre d’abord le travail et doit pouvoir penser :

> J’aime ses images.

### 2. La personne

Le visiteur découvre ensuite Alexis, sa sensibilité et sa façon d’accompagner les gens :

> J’aime la personne derrière ces images.

### 3. La confiance

L’expérience, les témoignages, les avis et les Wedding Awards viennent enfin confirmer le choix :

> Je peux lui confier mon mariage ou ma famille.

Cette progression — images, personne, confiance — doit guider la hiérarchie des contenus. Les preuves de réputation ne doivent pas précéder la découverte du travail.

---

## 4. Personnalité de la marque

Life Focus ne doit pas être présenté comme un studio impersonnel ni comme une simple prestation technique.

La personnalité de la marque est :

- sensible ;
- humaine ;
- rassurante ;
- attentive ;
- passionnée par l’image ;
- impliquée ;
- expérimentée sans être distante ;
- capable de guider sans mettre en scène artificiellement.

Le visiteur doit comprendre qu’il existe une personne identifiable derrière Life Focus.

L’idée centrale est :

> Je ne suis pas seulement là pour prendre des photographies. Je suis là à vos côtés.

Cette idée ne doit pas devenir un slogan commercial répété partout. Elle doit se ressentir dans les images, les mots, les témoignages et la manière de présenter l’accompagnement.

---

## 5. Expérience humaine

Le site doit montrer que la qualité de l’expérience ne se limite pas aux photographies livrées.

Les sujets suivants peuvent être exprimés à travers les pages :

- préparation et conseils avant le mariage ou la séance ;
- disponibilité et qualité des échanges ;
- aide pour se sentir à l’aise devant l’objectif ;
- anticipation des moments importants et des difficultés ;
- présence discrète pendant les instants spontanés ;
- capacité à guider lorsqu’une direction est utile ;
- capacité à s’effacer lorsque le moment doit rester naturel ;
- implication personnelle ;
- confiance.

Ces qualités doivent être démontrées par des formulations concrètes, des situations vécues et des témoignages crédibles.

Préférer une formulation comme :

> Je vous aide à prévoir le bon moment pour les photos de couple, puis à oublier complètement l’appareil quand la journée doit simplement être vécue.

Éviter une formulation générique comme :

> Je vous offre une expérience premium et personnalisée.

---

## 6. Sensibilité photographique

La photographie n’est pas présentée d’abord comme un service technique.

Le contenu peut évoquer :

- les souvenirs ;
- le temps qui passe ;
- la famille ;
- les gestes discrets ;
- les moments imparfaits ;
- la lumière ;
- l’observation ;
- les images qui prennent de la valeur avec les années ;
- le lien entre photographie et mémoire.

Le ton peut devenir personnel et introspectif, surtout sur la page d’accueil et la page À propos, mais il doit rester simple et authentique. Ne jamais devenir poétique uniquement pour produire un effet.

---

## 7. Ton éditorial

Les textes doivent être :

- simples ;
- humains ;
- directs ;
- élégants ;
- précis ;
- peu commerciaux.

Éviter les clichés tels que :

- « capturer votre amour » ;
- « immortaliser votre plus beau jour » ;
- « une expérience unique » ;
- « des souvenirs magiques » ;
- « une prestation haut de gamme et personnalisée ».

Éviter également l’accumulation d’adjectifs et les promesses abstraites. Montrer la valeur par des détails concrets.

La voix éditoriale s’exprime à la première personne du singulier lorsque Alexis parle de son regard ou de son accompagnement. Ne pas employer artificiellement « nous » pour donner l’apparence d’un studio.

---

## 8. Principes visuels

Le site doit être :

- très épuré ;
- éditorial ;
- élégant ;
- chaleureux ;
- photographique ;
- haut de gamme sans ostentation ;
- moderne sans dépendre d’une tendance web passagère.

La hiérarchie doit être créée principalement par :

- l’échelle typographique ;
- les blancs ;
- la taille et le cadrage des images ;
- les alignements ;
- le contraste entre serif expressive et sans-serif sobre.

Les sections n’ont pas besoin de fonds, de cadres ou de conteneurs décoratifs pour être comprises.

---

## 9. Palette

```css
:root {
  --color-background: #f6f4ef;
  --color-text: #171717;
  --color-muted: #706f6a;
  --color-line: #d8d5cd;
  --color-white: #ffffff;
}
```

### Règles d’utilisation

- `--color-background` est le fond principal ivoire chaud.
- `--color-text` est la couleur principale des textes et éléments d’interface.
- `--color-muted` est réservé aux informations secondaires suffisamment grandes et lisibles.
- `--color-line` sert aux séparateurs discrets.
- `--color-white` est utilisé avec retenue, notamment sur un fond sombre ou une photographie suffisamment contrastée.

Ne pas introduire de couleur d’accent de marque sans décision explicite.

Ne pas multiplier les nuances presque identiques. Les photographies fournissent presque toute la couleur visible du site.

Le contraste réel de chaque combinaison texte/fond doit rester lisible. Ne pas placer du texte directement sur une photographie chargée ou insuffisamment contrastée.

---

## 10. Typographies

Le site utilise deux familles maximum.

### Typographie éditoriale : Instrument Serif

Usages :

- H1 ;
- grands titres ;
- manifeste éditorial ;
- citations fortes ;
- quelques éléments de marque lorsque pertinent.

Graisse autorisée :

- 400 uniquement.

Ne pas simuler artificiellement du gras.

### Typographie d’interface : Inter

Usages :

- corps de texte ;
- navigation ;
- labels ;
- métadonnées ;
- liens et CTA ;
- formulaires ;
- légendes.

Graisses autorisées :

- 400 ;
- 500.

### Chargement

- Préférer des fichiers locaux WOFF2 et un nombre minimal de variantes.
- Utiliser `font-display: swap`.
- Ne pas ajouter une troisième famille de caractères.
- Définir des fallbacks serif et sans-serif robustes.
- Ne pas dépendre d’un script JavaScript pour charger les polices.

### Échelle typographique

Utiliser des valeurs fluides avec `clamp()` pour éviter des ruptures brutales entre mobile et desktop.

Variables de départ recommandées :

```css
:root {
  --font-editorial: "Instrument Serif", Georgia, serif;
  --font-interface: "Inter", Arial, sans-serif;

  --text-xs: clamp(0.7rem, 0.67rem + 0.12vw, 0.78rem);
  --text-sm: clamp(0.82rem, 0.79rem + 0.15vw, 0.94rem);
  --text-body: clamp(1rem, 0.96rem + 0.18vw, 1.125rem);
  --text-lead: clamp(1.2rem, 1.05rem + 0.7vw, 1.75rem);
  --text-section: clamp(2.75rem, 1.8rem + 4vw, 6.5rem);
  --text-display: clamp(4rem, 2.3rem + 7vw, 9rem);
}
```

Ces valeurs sont une fondation, pas une obligation d’utiliser toutes les tailles sur chaque page.

### Règles typographiques

- Réserver les tailles les plus grandes aux moments éditoriaux importants.
- Ne pas rendre tous les titres surdimensionnés.
- Garder les paragraphes lisibles, avec une longueur de ligne généralement comprise entre 45 et 75 caractères.
- Utiliser les capitales et l’espacement des lettres avec retenue, principalement pour les labels, métadonnées et liens courts.
- Éviter les longs paragraphes entièrement en capitales.
- Conserver une hauteur de ligne généreuse pour le corps de texte.
- Ne pas réduire les textes secondaires au point de nuire à leur lisibilité.

---

## 11. Grille et largeur

```css
:root {
  --content-max: 90rem; /* 1440px */
  --reading-max: 42.5rem; /* 680px */
  --page-padding: clamp(1.25rem, 5vw, 4.5rem);
}
```

### Principes

- La largeur maximale du contenu général est de `1440px`.
- Le padding horizontal minimal sur petit mobile est de `20px`.
- Sur desktop, le padding latéral doit se rapprocher de `5vw` sans devenir excessif sur très grand écran.
- Le texte courant doit généralement rester entre `600px` et `680px` de largeur maximale.
- Les photographies peuvent dépasser la largeur de lecture et dominer la composition.
- Certaines images peuvent s’approcher des bords de la fenêtre lorsqu’un vrai impact visuel le justifie.
- Les compositions asymétriques sont autorisées si la lecture et l’équilibre restent évidents.
- Aucun élément ne doit provoquer de débordement horizontal involontaire.

Ne pas créer un système de grille complexe si quelques règles CSS simples suffisent.

---

## 12. Espacements

Utiliser de grands espaces verticaux pour créer le rythme éditorial.

```css
:root {
  --space-xs: 1rem;
  --space-sm: 2rem;
  --space-md: clamp(3rem, 5vw, 4rem);
  --space-lg: clamp(5rem, 9vw, 7.5rem);
  --space-xl: clamp(7rem, 13vw, 11rem);
}
```

### Principes

- Les grandes sections ne doivent jamais sembler tassées.
- L’espace doit servir la hiérarchie, pas être réparti mécaniquement partout.
- Les groupes étroitement liés conservent une proximité visuelle claire.
- Les espacements peuvent diminuer progressivement sur mobile grâce à `clamp()`.
- Ne pas supprimer toute respiration mobile sous prétexte de gagner de la hauteur.

---

## 13. Formes et composants

Valeurs par défaut :

```css
:root {
  --radius-default: 0;
  --shadow-default: none;
}
```

Éviter :

- les cartes génériques ;
- les ombres ;
- les dégradés décoratifs ;
- les coins arrondis ;
- les blocs colorés sans nécessité ;
- les gros boutons remplis ;
- les effets 3D ;
- les glassmorphismes ;
- les carrousels automatiques ;
- les badges UI décoratifs ou artificiels ;
- les ornements ajoutés uniquement pour remplir l’espace.

Exception : les éléments officiels de confiance, comme les badges Wedding Awards ou avis Mariages.net, sont autorisés lorsqu’ils sont intégrés selon la section « Réputation et preuves de confiance ».

Les bordures doivent rester fines et rares. Elles servent à structurer, pas à décorer.

---

## 14. Liens et appels à l’action

Les CTA principaux doivent généralement prendre la forme de liens typographiques sobres.

Exemple :

> DÉCOUVRIR LE MARIAGE →

### Règles

- Préférer le texte, le soulignement, une ligne ou un mouvement discret à un grand bouton rempli.
- Rendre chaque lien clairement identifiable et suffisamment grand pour être utilisé sur mobile.
- Prévoir des états `hover`, `focus-visible` et `active` cohérents.
- Le focus clavier doit être immédiatement visible et ne jamais dépendre uniquement d’une variation subtile de couleur.
- Ne pas supprimer le soulignement d’un lien dans un paragraphe si aucun autre indice visuel fiable ne le remplace.
- Limiter le nombre de CTA concurrents dans une même section.

---

## 15. Logo et identité visuelle

Deux versions officielles du logo sont prévues :

- logo noir ;
- logo blanc.

Emplacement des fichiers :

```text
src/assets/brand/logo-black.svg
src/assets/brand/logo-white.svg
```

Si les sources SVG n’existent pas, utiliser les équivalents PNG sans modifier leur dessin.

### Règles d’utilisation

- Utiliser le logo noir sur les fonds clairs.
- Utiliser le logo blanc uniquement sur un fond sombre ou une photographie offrant un contraste suffisant.
- Préserver le ratio du logo.
- Ne pas déformer, recolorer, ombrer, encadrer ou animer le logo.
- Ne pas placer le logo sur une zone photographique trop chargée.
- Prévoir une taille mobile lisible sans laisser le logo dominer les photographies.
- Ne pas utiliser simultanément le logo et une seconde inscription « LIFE FOCUS » redondante au même endroit.

Dans le header, comparer la version logo officiel et la version typographique `LIFE FOCUS`. Retenir celle qui s’intègre le mieux à la composition. La possession d’un logo n’impose pas son usage dans chaque emplacement.

---

## 16. Navigation

### Desktop

- Identité Life Focus à gauche.
- Navigation principale à droite.
- Ensemble sur une seule ligne lorsque l’espace le permet.
- Typographie compacte et sobre.
- Espacement généreux autour du header.
- Pas de gros logo centré de photographe de mariage.
- Pas de header sticky par défaut. Cette option ne pourra être ajoutée que si un besoin réel est démontré.

Navigation principale prévue :

- Mariage ;
- Famille ;
- À propos ;
- Contact.

### Mobile

- Identité Life Focus à gauche.
- Libellé `MENU` à droite.
- Menu plein écran minimal si nécessaire.
- Interaction accessible au clavier et aux technologies d’assistance.
- Fermeture évidente et restauration correcte du focus.
- Pas d’animation lourde ni de dépendance dédiée.

---

## 17. Photographies

Les photographies doivent être suffisamment grandes pour produire un impact émotionnel.

Le site doit valoriser :

- le reportage ;
- les émotions ;
- les moments spontanés ;
- les relations humaines ;
- les portraits naturels ;
- la lumière naturelle ;
- les détails contextuels.

### Variété recherchée sur la page d’accueil

- scène d’ensemble ;
- interaction humaine ;
- moment spontané ;
- portrait ;
- détail ;
- famille ;
- célébration.

### Règles de sélection et de composition

- Préférer une image forte à une mosaïque de petites images.
- Éviter d’afficher plusieurs images visuellement similaires côte à côte.
- Varier les distances, orientations, émotions et niveaux d’énergie.
- Ne pas imposer un recadrage agressif uniquement pour satisfaire une grille.
- Ne pas masquer le point d’intérêt principal sur mobile.
- Utiliser les légendes seulement lorsqu’elles apportent une information réelle.
- Éviter les sliders et galeries interactives lorsqu’une composition statique suffit.

La page d’accueil doit généralement contenir entre 8 et 12 photographies fortes. Ce nombre est un garde-fou contre la densité, pas un quota à remplir.

---

## 18. Animations et mouvements

Les animations sont facultatives, jamais constitutives de l’identité.

Animations éventuellement admises :

- apparition douce ;
- très léger déplacement vertical ;
- transition d’image discrète ;
- soulignement ou déplacement minimal d’une flèche de CTA.

### Règles

- Aucun élément ne doit bouger uniquement pour attirer l’attention.
- Ne pas animer toutes les sections au défilement.
- Ne pas retarder la lecture ou l’interaction.
- Éviter le parallaxe lourd et les effets liés en permanence au scroll.
- Respecter `prefers-reduced-motion` et fournir une expérience complète sans mouvement.
- Ne pas ajouter de bibliothèque d’animation pour des effets réalisables simplement en CSS.
- La performance et la stabilité visuelle restent prioritaires.

La première version du site peut ne comporter aucune animation.

---

## 19. Structure de la page d’accueil

La page d’accueil doit suivre ce rythme général :

1. Header
2. Grande photographie hero
3. Identité du photographe et positionnement géographique
4. Manifeste éditorial
5. Mariage
6. Respiration visuelle
7. Famille
8. À propos d’Alexis
9. Réputation, Wedding Awards et témoignages
10. CTA de contact
11. Footer

Cette structure définit la hiérarchie, pas une succession de blocs visuellement enfermés.

### Hero

La photographie apparaît avant le grand discours marketing.

Le premier message visuel est le travail lui-même.

À proximité ou immédiatement après l’image, l’activité doit être comprise clairement :

> Photographe de mariage  
> Drôme · France

Cette information doit rester sobre et ne pas transformer le hero en bannière publicitaire.

Le hero ne doit pas cumuler un grand slogan, plusieurs paragraphes, plusieurs boutons et des badges de confiance.

### Manifeste

Après la présentation du travail et du positionnement, un grand texte éditorial peut exprimer le regard d’Alexis sur la photographie et la mémoire.

Il doit être court, personnel et compréhensible. Il ne doit pas devenir un poème abstrait ni une liste d’arguments commerciaux.

### Mariage

Cette section présente l’univers mariage avec :

- une ou plusieurs photographies fortes ;
- une idée éditoriale courte ;
- un lien clair vers la page Mariage.

Elle doit faire comprendre à la fois le style documentaire, les émotions et la présence humaine d’Alexis.

### Respiration visuelle

Prévoir un moment plus silencieux : une photographie isolée, éventuellement accompagnée d’une phrase très courte.

Cette section crée un changement de rythme. Elle ne doit pas ajouter un nouveau message commercial.

### Famille

La page d’accueil regroupe visuellement grossesse, naissance et famille dans un univers commun, même si ces activités disposent de pages distinctes pour répondre à leurs intentions propres.

La section doit évoquer le temps qui passe, les liens et les moments du quotidien sans reproduire les clichés éditoriaux du mariage.

### À propos d’Alexis

Cette section doit identifier clairement Alexis et humaniser Life Focus.

Elle peut contenir :

- un portrait ;
- son nom ;
- son rôle de photographe ;
- quelques éléments personnels réellement utiles pour créer un lien ;
- sa manière d’observer, d’accompagner et de guider ;
- un lien vers la page À propos.

Éviter le long bloc autobiographique sur la page d’accueil.

### Réputation et témoignages

Cette section est détaillée ci-dessous. Elle doit renforcer la confiance sans casser le rythme photographique.

### Contact

Le CTA final doit conclure l’expérience éditoriale avec une phrase forte, un court texte humain et un lien clair vers `/contact/`.

Le formulaire complet n’est pas placé sur la page d’accueil par défaut.

---

## 20. Réputation et preuves de confiance

Life Focus reçoit des Wedding Awards Mariages.net chaque année depuis 2020. Cette constance constitue une preuve importante de réputation et de qualité.

La page d’accueil doit inclure une section dédiée, après la présentation d’Alexis et avant le CTA final de contact.

Direction éditoriale possible :

```text
RECONNAISSANCE

DEPUIS 2020,
CHAQUE ANNÉE.
```

Ces formulations sont des directions de travail, pas des textes finaux imposés.

### Contenu possible

- historique des Wedding Awards ;
- badges officiels Mariages.net ;
- badge ou information liée aux avis ;
- un ou deux témoignages sélectionnés ;
- note et nombre d’avis, uniquement si les données sont exactes et maintenables.

### Intégration des badges

Les badges officiels carrés peuvent être présentés comme une collection de distinctions ou une chronologie.

Préférer :

- une rangée ou une grille sobre ;
- les années clairement associées ;
- de grands espaces entre les éléments ;
- une taille visible mais non dominante ;
- une adaptation fluide sur mobile.

Ne pas :

- créer un mur de logos publicitaire ;
- surdimensionner les badges ;
- ajouter des ombres ou des cartes ;
- déformer, recolorer ou redessiner les visuels officiels ;
- afficher un badge illisible uniquement pour faire tenir toutes les années sur une ligne.

Sur petit écran, les badges peuvent passer sur plusieurs lignes. Ne pas imposer un carrousel horizontal uniquement pour conserver une rangée.

### Exactitude obligatoire

- Afficher uniquement les années correspondant aux badges réellement fournis et vérifiés.
- Ne jamais inventer une distinction manquante.
- Ne jamais inventer ou figer une note, un nombre d’avis ou une citation.
- Toute donnée chiffrée susceptible d’évoluer doit être facile à mettre à jour.
- Le texte doit expliquer le sens de la reconnaissance au lieu de dépendre uniquement des logos.

Exemple de direction éditoriale :

> Depuis 2020, les couples qui m’ont fait confiance permettent chaque année à Life Focus de recevoir un Wedding Award Mariages.net.

### Emplacement des fichiers

```text
src/assets/awards/mariages-net/
├── wedding-award-2020.png
├── wedding-award-2021.png
├── wedding-award-2022.png
├── wedding-award-2023.png
├── wedding-award-2024.png
├── wedding-award-2025.png
├── wedding-award-2026.png
└── reviews.png
```

Cette liste est une convention de nommage. Un fichier ne doit exister et être affiché que si Alexis possède réellement le visuel officiel correspondant.

Conserver les fichiers officiels tels quels. Ne pas les recadrer ni les modifier simplement pour uniformiser la grille.

---

## 21. Témoignages

Les témoignages doivent renforcer à la fois la qualité photographique et l’expérience humaine.

Privilégier ceux qui évoquent :

- le fait de s’être senti à l’aise ;
- les conseils et l’accompagnement ;
- la discrétion ;
- la disponibilité ;
- l’implication ;
- la relation avec Alexis ;
- les émotions ressenties en découvrant les images ;
- l’expérience avant et pendant le mariage ou la séance.

Ne pas choisir uniquement des témoignages disant que les photographies sont belles.

### Présentation

- Utiliser une mise en page typographique, proche d’une citation éditoriale.
- Éviter les cartes d’avis répétitives.
- Éviter l’accumulation d’étoiles.
- Préférer un ou deux témoignages forts à une longue liste.
- Identifier l’auteur avec le niveau de précision pour lequel une autorisation existe.
- Ne jamais inventer, réécrire substantiellement ou fusionner plusieurs avis sans le signaler.

---

## 22. Footer

La zone finale doit donner l’impression de conclure une expérience éditoriale.

Elle comprend :

- un appel au contact simple ;
- l’identité Life Focus ;
- Romans-sur-Isère ;
- Drôme — France ;
- Instagram ;
- Mentions légales ;
- les autres liens légalement ou fonctionnellement nécessaires.

Le footer doit rester minimal. Ne pas y répéter toute la navigation, les Awards et plusieurs paragraphes commerciaux sans nécessité.

Un fond sombre peut être envisagé uniquement s’il crée une conclusion cohérente. Dans ce cas, employer le logo blanc et vérifier soigneusement le contraste. Le fond ivoire reste la solution par défaut.

---

## 23. Responsive et accessibilité visuelle

Le site est conçu mobile-first, mais ne doit pas ressembler à une version desktop simplement empilée.

### Règles

- Préserver la hiérarchie et la respiration sur petit écran.
- Adapter l’échelle des grands titres avec `clamp()`.
- Conserver une marge horizontale minimale de `20px`.
- Laisser les compositions asymétriques devenir plus simples lorsque nécessaire.
- Ne pas réduire les zones interactives au-dessous d’une taille confortable.
- Prévoir des focus clavier visibles.
- Ne pas transmettre une information uniquement par la couleur.
- Garantir un contraste suffisant pour les textes et contrôles.
- Fournir une alternative à toute interaction dépendant du survol.
- Respecter les préférences de réduction du mouvement.
- Éviter les textes incrustés dans les images lorsqu’ils deviennent illisibles ou impossibles à adapter.

Les points de rupture sont choisis en fonction du contenu, pas d’une liste d’appareils précise. Les pages doivent néanmoins être vérifiées sur petit mobile, smartphone courant, tablette, desktop et grand écran.

---

## 24. Organisation des ressources visuelles

Structure recommandée :

```text
src/assets/
├── brand/
│   ├── logo-black.svg
│   └── logo-white.svg
├── awards/
│   └── mariages-net/
│       ├── wedding-award-2020.png
│       ├── wedding-award-2021.png
│       └── ...
└── images/
    ├── home/
    ├── mariage/
    ├── famille/
    ├── grossesse/
    ├── naissance/
    └── about/
```

### Principes de maintenance

- Employer des noms de fichiers minuscules, descriptifs, sans espace ni accent.
- Préférer SVG pour les logos lorsque les fichiers officiels existent dans ce format.
- Conserver les photos destinées à l’optimisation Astro dans `src/assets/images/`.
- Faire en sorte qu’Alexis puisse remplacer une photographie sans modifier une logique complexe.
- Centraliser les listes d’images ou métadonnées lorsque cela simplifie réellement la maintenance.
- Ne pas sur-concevoir un système de gestion de galerie avant qu’il soit nécessaire.

---

## 25. Critères de validation

Avant de considérer une page comme visuellement terminée, vérifier :

1. Les photographies dominent-elles réellement l’expérience ?
2. La page reste-t-elle élégante si toutes les photographies sont temporairement remplacées par des rectangles gris ?
3. La hiérarchie est-elle compréhensible sans cartes, ombres ou couleurs décoratives ?
4. Les grands titres sont-ils utilisés avec retenue ?
5. Les paragraphes restent-ils lisibles et suffisamment étroits ?
6. L’espace blanc crée-t-il du rythme sans séparer artificiellement les contenus liés ?
7. La page paraît-elle humaine plutôt que commerciale ?
8. Les CTA sont-ils clairs sans devenir envahissants ?
9. Les preuves de confiance sont-elles visibles, exactes et élégamment intégrées ?
10. Le logo et les badges officiels sont-ils utilisés sans déformation ni redondance ?
11. Le rendu mobile conserve-t-il la même intention éditoriale ?
12. Les contrastes, focus et mouvements respectent-ils l’accessibilité ?

Si l’interface attire davantage l’attention que les images, simplifier.

Si un élément décoratif n’améliore ni la compréhension, ni l’émotion, ni la navigation, le supprimer.

---

## 26. Principe absolu

Les photographies doivent toujours être plus importantes que l’interface.

En cas d’incertitude, préférer :

1. la photographie ;
2. la clarté ;
3. l’humain ;
4. la simplicité ;
5. l’intemporalité.
