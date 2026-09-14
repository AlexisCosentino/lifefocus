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

---

## État de production (septembre 2026)

**Site en production depuis : 14 septembre 2026**

**URL canonical définitif : https://www.lifefocus.fr**

### Validations en production

✅ **Build Astro** — compilation OK, zéro erreurs  
✅ **Responsive** — testé et validé (mobile, tablette, desktop, grand écran)  
✅ **Images** — AVIF/WebP opérationnelles, lazy-loading fonctionnel  
✅ **Vidéo** — homepage `intro.mp4` optimisée et opérationnelle  
✅ **Formulaire** — PHP contact.php testé et déployé sur OVH  
✅ **Sitemap** — sitemap.xml généré et soumis Search Console  
✅ **Robots.txt** — configuré et opérationnel  
✅ **Metadata** — canonical, Open Graph, Twitter Cards, JSON-LD vérifiés  
✅ **Redirections** — anciennes URLs migrées (301 pour équivalents, 410 pour supprimés)  
✅ **Search Console** — configurée, sitemap soumis, indexation surveillée  
✅ **Performance** — Lighthouse mobile (environnement propre) :
  - SEO : 100
  - CLS : 0
  - TBT : 0 ms
  - **Ne pas lancer d'optimisations globales sans problème mesuré**

### Stabilité et changements futurs

**Le site est stable et fonctionnel en production.**

Pour les prochaines interventions :

1. **Ne pas refactoriser ou "optimiser" préventivement.**  
   Toute modification doit être ciblée et résoudre un problème spécifique mesuré.

2. **Préserver absolument :**
   - Design et direction artistique (consulter `DESIGN.md`)
   - Structure des URLs (SEO critique)
   - Performance et Core Web Vitals actuels
   - Comportement utilisateur existant
   - Conformité SEO et canonical

3. **Avant toute modification :**
   - Mesurer le problème (Lighthouse, Core Web Vitals, Analytics)
   - Consulter `SEO.md` et `DESIGN.md`
   - Tester sur responsive
   - Valider l'impact SEO si changement URL/meta
   - Vérifier en production ou staging identique

4. **Modifications autorisées sans caution :**
   - Contenu textuel (article, description)
   - Images (remplacement version, alt text)
   - Formulaire (champs, validation)
   - Liens internes (tant que URLs inchangées)
   - Données (conseilsArticles.ts, familyServices.ts)

5. **Modifications critiques (consultation obligatoire) :**
   - Changement structure d'URL
   - Modification meta/title/description SEO
   - Suppression/création page
   - Performance refactor
   - JavaScript client nouveau
   - CSS restructuration
