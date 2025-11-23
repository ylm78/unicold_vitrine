# Guide d'Intégration des Photos

Ce guide vous explique où placer vos photos pour qu'elles apparaissent correctement sur le site.

## Structure des dossiers

Placez vos photos dans le dossier `public/` selon leur utilisation :

### 📁 Dossier `public/realisations/`
Pour les photos de réalisations et projets :
- `entrepot-panneaux.jpg` - Photo de l'entrepôt avec panneaux
- `couloir-chambres.jpg` - Photo du couloir avec chambres froides
- `installation-complete.jpg` - Photo d'installation complète
- `chambre-modulaire.jpg` - Photo de chambre froide modulaire

### 📁 Dossier `public/produits/`
Pour les photos de produits :
- `entrepot-panneaux.jpg` - Stockage de panneaux (page Panneaux Sandwich)
- `porte-chambre-froide.jpg` - Porte de chambre froide (page Portes)
- `compresseur-1.jpg` - Groupe frigorifique 1 (page Compresseurs)
- `compresseur-2.jpg` - Groupe frigorifique 2 (page Compresseurs)
- `compresseur-3.jpg` - Groupe frigorifique 3 (page Compresseurs)

### 📁 Dossier `public/a-propos/`
Pour les photos de l'entreprise :
- `stock-entrepot.jpg` - Photo de l'entrepôt de stockage
- `atelier-equipements.jpg` - Photo de l'atelier avec équipements

## Correspondance des photos reçues

Basé sur les descriptions des photos que vous avez partagées :

1. **Photo entrepôt avec panneaux** → `public/realisations/entrepot-panneaux.jpg` et `public/produits/entrepot-panneaux.jpg`
2. **Photo couloir chambres froides** → `public/realisations/couloir-chambres.jpg`
3. **Photo porte chambre froide** → `public/produits/porte-chambre-froide.jpg`
4. **Collages d'installations** → `public/realisations/installation-complete.jpg`
5. **Rendu 3D chambre modulaire** → `public/realisations/chambre-modulaire.jpg`
6. **Unités de réfrigération** → `public/produits/compresseur-1.jpg`, `compresseur-2.jpg`, `compresseur-3.jpg`
7. **Atelier/stockage** → `public/a-propos/stock-entrepot.jpg` et `atelier-equipements.jpg`

## Format recommandé

- **Format** : JPG ou PNG
- **Résolution** : Minimum 1200px de largeur pour une bonne qualité
- **Poids** : Optimisez les images (max 500KB-1MB) pour un chargement rapide
- **Nommage** : Utilisez des noms en minuscules avec tirets (ex: `porte-chambre-froide.jpg`)

## Comment ajouter les photos

1. Créez les dossiers s'ils n'existent pas :
   ```bash
   mkdir -p public/realisations
   mkdir -p public/produits
   mkdir -p public/a-propos
   ```

2. Copiez vos photos dans les dossiers appropriés avec les noms indiqués ci-dessus.

3. Les photos apparaîtront automatiquement sur le site !

## Notes importantes

- Les images ont un système de fallback : si une photo n'existe pas, une image par défaut s'affichera
- Les images sont optimisées automatiquement par le navigateur
- Pour de meilleures performances, compressez vos images avant de les ajouter

