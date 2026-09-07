# LIFE FOCUS — INSTRUCTIONS DE DÉVELOPPEMENT

Avant toute modification significative du projet :

1. lire `DESIGN.md` ;
2. lire `SEO.md` ;
3. respecter leurs règles.

Ces deux documents constituent la référence fonctionnelle et esthétique du projet.

## Stack

Le projet utilise :

* Astro ;
* TypeScript strict ;
* CSS natif ;
* génération statique.

Ne pas ajouter de framework frontend tel que React, Vue ou Svelte sans nécessité clairement démontrée.

Ne pas ajouter Tailwind ou une bibliothèque CSS sans demande explicite.

Ne pas ajouter de dépendance lorsque la fonctionnalité peut raisonnablement être réalisée avec Astro, HTML ou CSS natif.

## Philosophie

Life Focus est un site photographique éditorial minimaliste.

La simplicité et la performance sont prioritaires.

Avant d’ajouter :

* une animation ;
* un package ;
* un composant interactif ;
* du JavaScript client ;

se demander si cet élément est réellement nécessaire.

## Design

Toujours respecter `DESIGN.md`.

En particulier :

* beaucoup d’espace blanc ;
* photographies grandes ;
* très peu de couleurs UI ;
* aucun style SaaS ;
* pas de cartes génériques ;
* pas de gradients décoratifs ;
* pas d’abus de coins arrondis ;
* pas d’ombres inutiles.

## SEO

Toujours respecter `SEO.md`.

Ne jamais modifier :

* structure d’URL ;
* titres importants ;
* canonical ;
* données structurées ;
* redirections ;

sans vérifier l’impact SEO.

## Accessibilité

Utiliser du HTML sémantique.

Assurer :

* navigation clavier ;
* contraste suffisant ;
* labels de formulaire ;
* textes alternatifs pertinents ;
* focus visibles ;
* structure de titres logique.

## Images

Utiliser les outils d’images Astro lorsque possible.

Les images destinées à être optimisées doivent être placées dans :

`src/assets/images/`

Les images doivent pouvoir être remplacées facilement par Alexis.

Éviter de coder en dur une logique complexe simplement pour afficher une galerie.

## CSS

Maintenir une architecture CSS simple.

Centraliser :

* couleurs ;
* espacements ;
* typographies ;
* largeur maximum ;
* tailles de texte ;

dans des variables CSS globales.

Éviter les valeurs arbitraires répétées.

## JavaScript

Le site doit fonctionner avec le moins de JavaScript client possible.

Utiliser JavaScript uniquement lorsque l’interaction l’exige réellement.

## Responsive

Concevoir mobile-first.

Toutes les pages doivent être testées au minimum sur :

* petit mobile ;
* smartphone classique ;
* tablette ;
* desktop ;
* grand écran.

## Méthode de travail

Lorsqu’une nouvelle page est demandée :

1. comprendre son objectif ;
2. proposer ou vérifier sa structure ;
3. utiliser les composants existants ;
4. respecter le design system ;
5. vérifier responsive et accessibilité ;
6. vérifier SEO ;
7. vérifier performance.

Ne jamais réinventer la direction artistique page par page.

## Priorité en cas de conflit

En cas de doute :

1. `SEO.md` pour les contraintes SEO ;
2. `DESIGN.md` pour les décisions visuelles ;
3. simplicité technique ;
4. performance ;
5. maintenabilité.
