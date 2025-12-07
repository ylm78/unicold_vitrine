# 📋 CAHIER DE TEST - SITE UNICOLD

**Date de création :** 2025-01-05  
**Version du site :** Production  
**Testeur :** _________________  
**Date des tests :** _________________

---

## 📌 TABLE DES MATIÈRES

1. [Tests de Navigation](#1-tests-de-navigation)
2. [Tests Fonctionnels](#2-tests-fonctionnels)
3. [Tests Visuels & Responsive](#3-tests-visuels--responsive)
4. [Tests de Performance](#4-tests-de-performance)
5. [Tests de Contenu](#5-tests-de-contenu)
6. [Tests par Page](#6-tests-par-page)
7. [Tests de Compatibilité Navigateurs](#7-tests-de-compatibilité-navigateurs)
8. [Tests SEO](#8-tests-seo)
9. [Tests d'Accessibilité](#9-tests-daccessibilité)
10. [Tests de Sécurité](#10-tests-de-sécurité)
11. [Tests Cross-Device](#11-tests-cross-device)
12. [Rapport de Bugs](#12-rapport-de-bugs)

---

## 1. TESTS DE NAVIGATION

### 1.1 Header (Navigation principale)

| Test | URL/Élément | Résultat | Notes |
|------|-------------|----------|-------|
| Logo cliquable redirige vers `/` | Logo Unicold | ☐ OK ☐ KO | |
| Lien "Accueil" fonctionne | `/` | ☐ OK ☐ KO | |
| Lien "Services" fonctionne | `/services` | ☐ OK ☐ KO | |
| Lien "Produits" fonctionne | `/produits` | ☐ OK ☐ KO | |
| Lien "Réalisations" fonctionne | `/realisations` | ☐ OK ☐ KO | |
| Lien "À propos" fonctionne | `/a-propos` | ☐ OK ☐ KO | |
| Lien "FAQ" fonctionne | `/faq` | ☐ OK ☐ KO | |
| Lien "Contact" fonctionne | `/contact` | ☐ OK ☐ KO | |
| Bouton "Devis" (orange) fonctionne | `/devis` | ☐ OK ☐ KO | |
| Menu mobile s'ouvre/ferme correctement | Mobile | ☐ OK ☐ KO | |
| Pas de doublon "Contact" dans le menu | Header | ☐ OK ☐ KO | |

### 1.2 Footer (Navigation secondaire)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Tous les liens du footer fonctionnent | Footer | ☐ OK ☐ KO | |
| Lien "Mentions légales" fonctionne | `/mentions-legales` | ☐ OK ☐ KO | |
| Numéros de téléphone cliquables (tel:) | Footer | ☐ OK ☐ KO | |
| Emails cliquables (mailto:) | Footer | ☐ OK ☐ KO | |
| Liens réseaux sociaux (si présents) | Footer | ☐ OK ☐ KO | |

### 1.3 Breadcrumbs (Fil d'Ariane)

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| Breadcrumbs présents sur toutes les pages | Toutes | ☐ OK ☐ KO | |
| Breadcrumbs affichent le bon chemin | Toutes | ☐ OK ☐ KO | |
| Liens dans breadcrumbs fonctionnent | Toutes | ☐ OK ☐ KO | |
| Breadcrumb "Accueil" redirige vers `/` | Toutes | ☐ OK ☐ KO | |

### 1.4 Mobile Action Bar

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Barre visible uniquement sur mobile | Mobile | ☐ OK ☐ KO | |
| Bouton "Appeler" fonctionne (tel:) | Mobile | ☐ OK ☐ KO | |
| Bouton "Devis" redirige vers `/devis` | Mobile | ☐ OK ☐ KO | |
| Barre reste fixe en bas lors du scroll | Mobile | ☐ OK ☐ KO | |
| Barre ne cache pas le contenu | Mobile | ☐ OK ☐ KO | |

### 1.5 Liens internes (entre pages)

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| Tous les boutons CTA fonctionnent | Toutes | ☐ OK ☐ KO | |
| Liens "En savoir plus" fonctionnent | Toutes | ☐ OK ☐ KO | |
| Liens vers pages produits fonctionnent | `/produits` | ☐ OK ☐ KO | |
| Liens vers pages métiers fonctionnent | Home/Services | ☐ OK ☐ KO | |

---

## 2. TESTS FONCTIONNELS

### 2.1 Formulaire de Contact (`/contact`)

| Test | Champ/Action | Résultat | Notes |
|------|--------------|----------|-------|
| Champ "Nom" accepte les caractères | Nom | ☐ OK ☐ KO | |
| Champ "Email" valide le format email | Email | ☐ OK ☐ KO | |
| Champ "Téléphone" accepte les numéros | Téléphone | ☐ OK ☐ KO | |
| Champ "Message" accepte le texte | Message | ☐ OK ☐ KO | |
| Validation visuelle en temps réel | Tous | ☐ OK ☐ KO | |
| Icônes de validation (✓/✗) s'affichent | Tous | ☐ OK ☐ KO | |
| Bordures vertes/rouges selon validation | Tous | ☐ OK ☐ KO | |
| Bouton "Envoyer" désactivé si formulaire invalide | Bouton | ☐ OK ☐ KO | |
| Message de confirmation après envoi | Après envoi | ☐ OK ☐ KO | |
| Message indique "sous 2h" | Message | ☐ OK ☐ KO | |
| Email envoyé à `contact@unicold.fr` | Backend | ☐ OK ☐ KO | |
| Formulaire se réinitialise après envoi | Après envoi | ☐ OK ☐ KO | |

### 2.2 Formulaire de Devis (`/devis`)

| Test | Étape/Champ | Résultat | Notes |
|------|------------|----------|-------|
| Étape 1 : Type de projet s'affiche | Étape 1 | ☐ OK ☐ KO | |
| Navigation entre étapes fonctionne | Toutes | ☐ OK ☐ KO | |
| Bouton "Précédent" fonctionne | Toutes | ☐ OK ☐ KO | |
| Bouton "Suivant" fonctionne | Toutes | ☐ OK ☐ KO | |
| Indicateur de progression visible | Toutes | ☐ OK ☐ KO | |
| Validation à chaque étape | Toutes | ☐ OK ☐ KO | |
| Étape 5 : Coordonnées valides | Étape 5 | ☐ OK ☐ KO | |
| Envoi final fonctionne | Envoi | ☐ OK ☐ KO | |
| Email envoyé à `devis@unicold.fr` | Backend | ☐ OK ☐ KO | |
| Message de confirmation après envoi | Après envoi | ☐ OK ☐ KO | |

### 2.3 Formulaire de Visite Showroom (Home)

| Test | Champ/Action | Résultat | Notes |
|------|--------------|----------|-------|
| Formulaire s'affiche correctement | Home | ☐ OK ☐ KO | |
| Validation des champs | Tous | ☐ OK ☐ KO | |
| Envoi fonctionne | Envoi | ☐ OK ☐ KO | |
| Message de confirmation | Après envoi | ☐ OK ☐ KO | |

### 2.4 Filtres Produits (`/produits`)

| Test | Filtre | Résultat | Notes |
|------|--------|----------|-------|
| Filtre "Tous" affiche tous les produits | Tous | ☐ OK ☐ KO | |
| Filtre "Isolation" filtre correctement | Isolation | ☐ OK ☐ KO | |
| Filtre "Équipements" filtre correctement | Équipements | ☐ OK ☐ KO | |
| Filtre "Accessoires" filtre correctement | Accessoires | ☐ OK ☐ KO | |
| Animation de transition fluide | Tous | ☐ OK ☐ KO | |

### 2.5 FAQ Accordéon (`/faq`)

| Test | Action | Résultat | Notes |
|------|--------|----------|-------|
| Questions cliquables | Toutes | ☐ OK ☐ KO | |
| Réponses s'ouvrent au clic | Toutes | ☐ OK ☐ KO | |
| Réponses se ferment si déjà ouvertes | Toutes | ☐ OK ☐ KO | |
| Animation d'ouverture/fermeture fluide | Toutes | ☐ OK ☐ KO | |
| Plusieurs questions peuvent être ouvertes | Toutes | ☐ OK ☐ KO | |

### 2.6 Boutons CTA (Call-to-Action)

| Test | Bouton | Résultat | Notes |
|------|--------|----------|-------|
| Boutons orange visibles et cliquables | Tous | ☐ OK ☐ KO | |
| Effet hover fonctionne | Tous | ☐ OK ☐ KO | |
| Effet active (scale) fonctionne | Tous | ☐ OK ☐ KO | |
| Boutons "Demander un prix" fonctionnent | Produits | ☐ OK ☐ KO | |
| Boutons "Appeler" ouvrent le dialer | Tous | ☐ OK ☐ KO | |

### 2.7 Google Maps (`/contact`)

| Test | Fonctionnalité | Résultat | Notes |
|------|----------------|----------|-------|
| Carte s'affiche correctement | Contact | ☐ OK ☐ KO | |
| Carte est interactive (zoom, drag) | Contact | ☐ OK ☐ KO | |
| Marqueurs des 3 implantations visibles | Contact | ☐ OK ☐ KO | |
| Liens "Voir sur Google Maps" fonctionnent | Contact | ☐ OK ☐ KO | |

---

## 3. TESTS VISUELS & RESPONSIVE

### 3.1 Design Général

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Thème "BLANC et BLEU CIEL" appliqué | Toutes | ☐ OK ☐ KO | |
| Couleurs cohérentes sur toutes les pages | Toutes | ☐ OK ☐ KO | |
| Typographie lisible et cohérente | Toutes | ☐ OK ☐ KO | |
| Espacements harmonieux | Toutes | ☐ OK ☐ KO | |
| Pas de débordement horizontal | Toutes | ☐ OK ☐ KO | |
| Curseur par défaut (pas de custom cursor) | Toutes | ☐ OK ☐ KO | |

### 3.2 Responsive Desktop (1920px+)

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| Layout s'adapte correctement | Toutes | ☐ OK ☐ KO | |
| Images ne sont pas déformées | Toutes | ☐ OK ☐ KO | |
| Textes restent lisibles | Toutes | ☐ OK ☐ KO | |
| Navigation reste accessible | Toutes | ☐ OK ☐ KO | |

### 3.3 Responsive Tablet (768px - 1024px)

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| Layout s'adapte correctement | Toutes | ☐ OK ☐ KO | |
| Menu mobile s'affiche si nécessaire | Toutes | ☐ OK ☐ KO | |
| Images s'adaptent | Toutes | ☐ OK ☐ KO | |
| Textes restent lisibles | Toutes | ☐ OK ☐ KO | |

### 3.4 Responsive Mobile (320px - 767px)

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| Layout s'adapte correctement | Toutes | ☐ OK ☐ KO | |
| Menu hamburger fonctionne | Toutes | ☐ OK ☐ KO | |
| Mobile Action Bar visible | Toutes | ☐ OK ☐ KO | |
| Textes restent lisibles (pas trop petits) | Toutes | ☐ OK ☐ KO | |
| Boutons assez grands pour le touch | Toutes | ☐ OK ☐ KO | |
| Pas de débordement horizontal | Toutes | ☐ OK ☐ KO | |
| Images se chargent correctement | Toutes | ☐ OK ☐ KO | |
| Formulaires utilisables | Toutes | ☐ OK ☐ KO | |

### 3.5 Animations & Transitions

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Animations fluides (60fps) | Toutes | ☐ OK ☐ KO | |
| Transitions hover fonctionnent | Toutes | ☐ OK ☐ KO | |
| Carousel logos défile correctement | Home | ☐ OK ☐ KO | |
| Pas de logos qui se chevauchent | Home | ☐ OK ☐ KO | |
| Vitesse de défilement appropriée | Home | ☐ OK ☐ KO | |
| Pas de lag ou de saccades | Toutes | ☐ OK ☐ KO | |

### 3.6 Glassmorphism & Effets

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Effets glass-panel visibles | Toutes | ☐ OK ☐ KO | |
| Blur approprié (pas trop fort) | Toutes | ☐ OK ☐ KO | |
| Bordures visibles | Toutes | ☐ OK ☐ KO | |
| Ombres cohérentes | Toutes | ☐ OK ☐ KO | |

---

## 4. TESTS DE PERFORMANCE

### 4.1 Temps de Chargement

| Test | Métrique | Cible | Résultat | Notes |
|------|----------|-------|----------|-------|
| First Contentful Paint (FCP) | < 1.8s | ☐ OK ☐ KO | |
| Largest Contentful Paint (LCP) | < 2.5s | ☐ OK ☐ KO | |
| Time to Interactive (TTI) | < 3.8s | ☐ OK ☐ KO | |
| Total Blocking Time (TBT) | < 200ms | ☐ OK ☐ KO | |
| Cumulative Layout Shift (CLS) | < 0.1 | ☐ OK ☐ KO | |

### 4.2 Optimisations

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Images avec `loading="lazy"` | Toutes | ☐ OK ☐ KO | |
| Images avec `decoding="async"` | Toutes | ☐ OK ☐ KO | |
| Code splitting fonctionne (React.lazy) | Toutes | ☐ OK ☐ KO | |
| Chunks JS optimisés | Build | ☐ OK ☐ KO | |
| CSS minifié | Build | ☐ OK ☐ KO | |
| Pas de console.log en production | Build | ☐ OK ☐ KO | |

### 4.3 Réseau

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Preconnect pour Google Fonts | HTML | ☐ OK ☐ KO | |
| DNS-prefetch pour ressources externes | HTML | ☐ OK ☐ KO | |
| Scripts chargés en defer | HTML | ☐ OK ☐ KO | |

---

## 5. TESTS DE CONTENU

### 5.1 Textes

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| Pas de fautes d'orthographe | Toutes | ☐ OK ☐ KO | |
| Pas de texte "Lorem ipsum" | Toutes | ☐ OK ☐ KO | |
| Textes cohérents avec l'activité | Toutes | ☐ OK ☐ KO | |
| Hero text : "Conception, installation et maintenance de chambres froides positives et négatives" | Home | ☐ OK ☐ KO | |
| Mentions "sous 2h" présentes | Contact/Devis | ☐ OK ☐ KO | |
| Numéros au format +33 | Toutes | ☐ OK ☐ KO | |
| Emails corrects (`devis@unicold.fr`, `contact@unicold.fr`) | Toutes | ☐ OK ☐ KO | |
| Localisation : "France IDF et Eure-et-Loir (28)" | Footer/Contact | ☐ OK ☐ KO | |

### 5.2 Images

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| Toutes les images se chargent | Toutes | ☐ OK ☐ KO | |
| Images avec alt text approprié | Toutes | ☐ OK ☐ KO | |
| Logos clients visibles et lisibles | Home | ☐ OK ☐ KO | |
| Pas d'images cassées (404) | Toutes | ☐ OK ☐ KO | |
| Images optimisées (taille raisonnable) | Toutes | ☐ OK ☐ KO | |

### 5.3 Vidéos

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| Vidéos se chargent | Realisations | ☐ OK ☐ KO | |
| Contrôles vidéo fonctionnent | Realisations | ☐ OK ☐ KO | |
| `preload="none"` appliqué | Realisations | ☐ OK ☐ KO | |

### 5.4 Liens Externes

| Test | Lien | Résultat | Notes |
|------|------|----------|-------|
| Liens Google Maps fonctionnent | Contact | ☐ OK ☐ KO | |
| Liens email (mailto:) fonctionnent | Toutes | ☐ OK ☐ KO | |
| Liens téléphone (tel:) fonctionnent | Toutes | ☐ OK ☐ KO | |

---

## 6. TESTS PAR PAGE

### 6.1 Page Accueil (`/`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Hero section s'affiche | Hero | ☐ OK ☐ KO | |
| Texte hero correct | Hero | ☐ OK ☐ KO | |
| Bouton CTA hero fonctionne | Hero | ☐ OK ☐ KO | |
| Section services preview visible | Services | ☐ OK ☐ KO | |
| Section "Ils nous font confiance" visible | Logos | ☐ OK ☐ KO | |
| Carousel logos fonctionne | Logos | ☐ OK ☐ KO | |
| Pas de logos qui se chevauchent | Logos | ☐ OK ☐ KO | |
| Formulaire contact visible | Formulaire | ☐ OK ☐ KO | |
| Formulaire visite showroom visible | Formulaire | ☐ OK ☐ KO | |
| Section SAV 24/7 visible | SAV | ☐ OK ☐ KO | |
| Numéro d'urgence correct | SAV | ☐ OK ☐ KO | |

### 6.2 Page Services (`/services`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Icônes présentes pour chaque service | Services | ☐ OK ☐ KO | |
| Layout Z-pattern respecté | Layout | ☐ OK ☐ KO | |
| Section maintenance dédiée visible | Maintenance | ☐ OK ☐ KO | |
| Détails techniques par secteur | Secteurs | ☐ OK ☐ KO | |
| Boutons CTA fonctionnent | CTA | ☐ OK ☐ KO | |

### 6.3 Page Produits (`/produits`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Filtres fonctionnent | Filtres | ☐ OK ☐ KO | |
| Fiches techniques détaillées | Produits | ☐ OK ☐ KO | |
| Boutons "Demander un prix" fonctionnent | CTA | ☐ OK ☐ KO | |
| Prix minimum affiché | Produits | ☐ OK ☐ KO | |
| Images produits visibles | Produits | ☐ OK ☐ KO | |

### 6.4 Pages Produits Individuels

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| `/produits/panneaux-sandwich` s'affiche | Panneaux | ☐ OK ☐ KO | |
| `/produits/compresseurs` s'affiche | Compresseurs | ☐ OK ☐ KO | |
| `/produits/portes` s'affiche | Portes | ☐ OK ☐ KO | |
| `/produits/luminaires` s'affiche | Luminaires | ☐ OK ☐ KO | |
| Contenu détaillé présent | Toutes | ☐ OK ☐ KO | |
| Images présentes | Toutes | ☐ OK ☐ KO | |

### 6.5 Page Réalisations (`/realisations`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Études de cas avec storytelling | Cas | ☐ OK ☐ KO | |
| Structure : Client, Défi, Solution, Résultat | Cas | ☐ OK ☐ KO | |
| Images/vidéos présentes | Cas | ☐ OK ☐ KO | |
| Lightbox fonctionne (si présent) | Galerie | ☐ OK ☐ KO | |
| Navigation entre projets | Navigation | ☐ OK ☐ KO | |

### 6.6 Page À Propos (`/a-propos`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Contenu présent | Contenu | ☐ OK ☐ KO | |
| Images authentiques (équipe/camions) | Images | ☐ OK ☐ KO | |
| Pas de photos stock génériques | Images | ☐ OK ☐ KO | |

### 6.7 Page FAQ (`/faq`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Accordéon fonctionne | Accordéon | ☐ OK ☐ KO | |
| Réponses détaillées présentes | Réponses | ☐ OK ☐ KO | |
| Questions pertinentes | Questions | ☐ OK ☐ KO | |
| Réponses sur bruit, consommation, délais | Réponses | ☐ OK ☐ KO | |

### 6.8 Page Contact (`/contact`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Formulaire fonctionne | Formulaire | ☐ OK ☐ KO | |
| Google Maps intégré | Maps | ☐ OK ☐ KO | |
| 3 implantations visibles | Maps | ☐ OK ☐ KO | |
| Informations contact présentes | Infos | ☐ OK ☐ KO | |
| Section "Informations" taille appropriée | Infos | ☐ OK ☐ KO | |
| Bouton "Demander un devis" redirige | CTA | ☐ OK ☐ KO | |

### 6.9 Page Devis (`/devis`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Configurateur par étapes fonctionne | Étapes | ☐ OK ☐ KO | |
| Navigation entre étapes | Navigation | ☐ OK ☐ KO | |
| Validation à chaque étape | Validation | ☐ OK ☐ KO | |
| Indicateur de progression | Progression | ☐ OK ☐ KO | |
| Envoi final fonctionne | Envoi | ☐ OK ☐ KO | |

### 6.10 Page Dépannage (`/depannage`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Bouton d'appel proéminent | CTA | ☐ OK ☐ KO | |
| Zones d'intervention visibles | Zones | ☐ OK ☐ KO | |
| Types de pannes listés | Pannes | ☐ OK ☐ KO | |
| Tarifs transparents | Tarifs | ☐ OK ☐ KO | |

### 6.11 Page Aides & Financement (`/aides-financement`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Contenu sur CEE présent | CEE | ☐ OK ☐ KO | |
| Contenu sur suramortissement | Fiscal | ☐ OK ☐ KO | |
| Aides régionales listées | Régional | ☐ OK ☐ KO | |
| Solutions de financement | Financement | ☐ OK ☐ KO | |

### 6.12 Pages Métiers

| Test | Page | Résultat | Notes |
|------|------|----------|-------|
| `/solutions/restauration` s'affiche | Restauration | ☐ OK ☐ KO | |
| `/solutions/industrie` s'affiche | Industrie | ☐ OK ☐ KO | |
| `/solutions/medical` s'affiche | Medical | ☐ OK ☐ KO | |
| Contenu spécifique par métier | Toutes | ☐ OK ☐ KO | |
| Boutons CTA fonctionnent | Toutes | ☐ OK ☐ KO | |

### 6.13 Page Mentions Légales (`/mentions-legales`)

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Contenu présent | Contenu | ☐ OK ☐ KO | |
| Hébergeur : OVHcloud mentionné | Hébergeur | ☐ OK ☐ KO | |
| Informations légales complètes | Infos | ☐ OK ☐ KO | |

---

## 7. TESTS DE COMPATIBILITÉ NAVIGATEURS

### 7.1 Chrome (Dernière version)

| Test | Fonctionnalité | Résultat | Notes |
|------|----------------|----------|-------|
| Site s'affiche correctement | Global | ☐ OK ☐ KO | |
| Toutes les fonctionnalités marchent | Global | ☐ OK ☐ KO | |
| Pas d'erreurs console | Console | ☐ OK ☐ KO | |

### 7.2 Firefox (Dernière version)

| Test | Fonctionnalité | Résultat | Notes |
|------|----------------|----------|-------|
| Site s'affiche correctement | Global | ☐ OK ☐ KO | |
| Toutes les fonctionnalités marchent | Global | ☐ OK ☐ KO | |
| Pas d'erreurs console | Console | ☐ OK ☐ KO | |

### 7.3 Safari (Dernière version)

| Test | Fonctionnalité | Résultat | Notes |
|------|----------------|----------|-------|
| Site s'affiche correctement | Global | ☐ OK ☐ KO | |
| Toutes les fonctionnalités marchent | Global | ☐ OK ☐ KO | |
| Pas d'erreurs console | Console | ☐ OK ☐ KO | |
| Backdrop-filter fonctionne | CSS | ☐ OK ☐ KO | |

### 7.4 Edge (Dernière version)

| Test | Fonctionnalité | Résultat | Notes |
|------|----------------|----------|-------|
| Site s'affiche correctement | Global | ☐ OK ☐ KO | |
| Toutes les fonctionnalités marchent | Global | ☐ OK ☐ KO | |
| Pas d'erreurs console | Console | ☐ OK ☐ KO | |

---

## 8. TESTS SEO

### 8.1 Métadonnées

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Title unique par page | Toutes | ☐ OK ☐ KO | |
| Meta description présente | Toutes | ☐ OK ☐ KO | |
| Meta description < 160 caractères | Toutes | ☐ OK ☐ KO | |
| Open Graph tags (si présents) | Toutes | ☐ OK ☐ KO | |

### 8.2 Structure HTML

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Un seul H1 par page | Toutes | ☐ OK ☐ KO | |
| Hiérarchie des titres (H1 > H2 > H3) | Toutes | ☐ OK ☐ KO | |
| Alt text sur toutes les images | Toutes | ☐ OK ☐ KO | |
| Liens avec texte descriptif | Toutes | ☐ OK ☐ KO | |

### 8.3 robots.txt

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Fichier robots.txt présent | `/robots.txt` | ☐ OK ☐ KO | |
| Sitemap référencé (si présent) | robots.txt | ☐ OK ☐ KO | |

### 8.4 URLs

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| URLs propres et descriptives | Toutes | ☐ OK ☐ KO | |
| Pas de caractères spéciaux | Toutes | ☐ OK ☐ KO | |
| Pas de 404 | Toutes | ☐ OK ☐ KO | |

---

## 9. TESTS D'ACCESSIBILITÉ

### 9.1 Navigation au Clavier

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Tous les liens accessibles au clavier | Toutes | ☐ OK ☐ KO | |
| Tous les boutons accessibles au clavier | Toutes | ☐ OK ☐ KO | |
| Ordre de tabulation logique | Toutes | ☐ OK ☐ KO | |
| Focus visible sur les éléments | Toutes | ☐ OK ☐ KO | |

### 9.2 Lecteurs d'Écran

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Images avec alt text descriptif | Toutes | ☐ OK ☐ KO | |
| Boutons avec aria-label si nécessaire | Toutes | ☐ OK ☐ KO | |
| Formulaires avec labels associés | Toutes | ☐ OK ☐ KO | |

### 9.3 Contraste

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Contraste texte/fond suffisant (WCAG AA) | Toutes | ☐ OK ☐ KO | |
| Boutons avec contraste suffisant | Toutes | ☐ OK ☐ KO | |

---

## 10. TESTS DE SÉCURITÉ

### 10.1 Formulaires

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Validation côté client | Tous | ☐ OK ☐ KO | |
| Protection contre XSS | Tous | ☐ OK ☐ KO | |
| Pas de données sensibles exposées | Tous | ☐ OK ☐ KO | |

### 10.2 HTTPS

| Test | Élément | Résultat | Notes |
|------|---------|----------|-------|
| Site accessible en HTTPS | Production | ☐ OK ☐ KO | |
| Certificat SSL valide | Production | ☐ OK ☐ KO | |

---

## 11. TESTS CROSS-DEVICE

### 11.1 iPhone (Safari)

| Test | Fonctionnalité | Résultat | Notes |
|------|----------------|----------|-------|
| Site s'affiche correctement | Global | ☐ OK ☐ KO | |
| Menu mobile fonctionne | Navigation | ☐ OK ☐ KO | |
| Mobile Action Bar visible | Mobile | ☐ OK ☐ KO | |
| Formulaires utilisables | Formulaires | ☐ OK ☐ KO | |
| Appels téléphone fonctionnent | tel: | ☐ OK ☐ KO | |

### 11.2 Android (Chrome)

| Test | Fonctionnalité | Résultat | Notes |
|------|----------------|----------|-------|
| Site s'affiche correctement | Global | ☐ OK ☐ KO | |
| Menu mobile fonctionne | Navigation | ☐ OK ☐ KO | |
| Mobile Action Bar visible | Mobile | ☐ OK ☐ KO | |
| Formulaires utilisables | Formulaires | ☐ OK ☐ KO | |
| Appels téléphone fonctionnent | tel: | ☐ OK ☐ KO | |

### 11.3 iPad (Safari)

| Test | Fonctionnalité | Résultat | Notes |
|------|----------------|----------|-------|
| Site s'affiche correctement | Global | ☐ OK ☐ KO | |
| Layout adapté tablette | Layout | ☐ OK ☐ KO | |
| Touch interactions fonctionnent | Touch | ☐ OK ☐ KO | |

---

## 12. RAPPORT DE BUGS

### Bugs Critiques (Bloquants)

| # | Page | Description | Priorité | Statut |
|---|------|-------------|-----------|--------|
| 1 | | | Critique | ☐ Non résolu ☐ Résolu |
| 2 | | | Critique | ☐ Non résolu ☐ Résolu |

### Bugs Majeurs (Importants)

| # | Page | Description | Priorité | Statut |
|---|------|-------------|-----------|--------|
| 1 | | | Majeure | ☐ Non résolu ☐ Résolu |
| 2 | | | Majeure | ☐ Non résolu ☐ Résolu |

### Bugs Mineurs (Améliorations)

| # | Page | Description | Priorité | Statut |
|---|------|-------------|-----------|--------|
| 1 | | | Mineure | ☐ Non résolu ☐ Résolu |
| 2 | | | Mineure | ☐ Non résolu ☐ Résolu |

### Suggestions d'Amélioration

| # | Page | Suggestion | Priorité | Statut |
|---|------|------------|-----------|--------|
| 1 | | | Basse | ☐ Non implémenté ☐ Implémenté |
| 2 | | | Basse | ☐ Non implémenté ☐ Implémenté |

---

## 📊 RÉSUMÉ DES TESTS

**Date de début :** _________________  
**Date de fin :** _________________  
**Durée totale :** _________________

### Statistiques

- **Total de tests :** _________________
- **Tests réussis :** _________________
- **Tests échoués :** _________________
- **Taux de réussite :** _________________%

### Conclusion

**Testeur :** _________________  
**Signature :** _________________  
**Date :** _________________

---

## 📝 NOTES ADDITIONNELLES

_Utilisez cet espace pour noter toute observation supplémentaire, problèmes rencontrés, ou recommandations._

---

**Fin du cahier de test**

