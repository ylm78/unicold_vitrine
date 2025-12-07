# 📋 Guide de Gestion des Données - Visites Showroom

## 🎯 Objectif
Gérer efficacement et en conformité RGPD les demandes de visite du showroom Unicold.

---

## 📊 Données Collectées

### Données Personnelles
- **Nom complet** (obligatoire)
- **Email** (obligatoire)
- **Téléphone** (obligatoire)
- **Date souhaitée** (optionnel)
- **Heure souhaitée** (optionnel)
- **Message** (optionnel)

### Métadonnées
- Date et heure de la demande
- Source (site web)
- Statut de la demande (en attente, confirmée, annulée, réalisée)

---

## 🔒 Conformité RGPD

### 1. Consentement Explicite
✅ **À ajouter au formulaire** : Case à cocher obligatoire
```
☐ J'accepte que mes données soient utilisées pour organiser ma visite et être recontacté par Unicold.
```

### 2. Finalité du Traitement
Les données sont collectées pour :
- Organiser la visite du showroom
- Confirmer le rendez-vous
- Recontacter le client si nécessaire
- Statistiques internes (anonymisées)

### 3. Durée de Conservation
- **Données actives** : 1 an après la dernière visite
- **Archivage** : 3 ans maximum (obligations légales)
- **Suppression** : Après 3 ans ou sur demande du client

### 4. Droits des Personnes
Chaque personne a le droit de :
- ✅ Accéder à ses données
- ✅ Rectifier ses données
- ✅ Supprimer ses données
- ✅ S'opposer au traitement
- ✅ Portabilité des données

---

## 💾 Solutions de Stockage

### Option 1 : Base de Données (Recommandée)

#### A. Solution Cloud (Simple)
**Google Sheets + Zapier/Make.com**
- ✅ Gratuit pour débuter
- ✅ Facile à utiliser
- ✅ Export automatique depuis EmailJS
- ❌ Limité pour la conformité RGPD

**Structure Google Sheets :**
| Date | Nom | Email | Téléphone | Date souhaitée | Heure | Message | Statut | Notes |
|------|-----|-------|-----------|----------------|-------|---------|--------|-------|
| 2025-01-07 | Jean Dupont | jean@exemple.fr | +33 6 12 34 56 78 | 2025-01-15 | 14h | ... | En attente | ... |

#### B. Solution Professionnelle
**Airtable** (Recommandé)
- ✅ Interface intuitive
- ✅ Conforme RGPD
- ✅ Automatisations
- ✅ Vues personnalisées
- 💰 ~10€/mois

**Structure Airtable :**
- Table "Visites Showroom"
- Champs : Nom, Email, Téléphone, Date souhaitée, Heure, Message, Statut, Date création, Notes
- Vues : En attente, Confirmées, Réalisées, Toutes

#### C. Solution Backend Dédiée
**Firebase / Supabase / MongoDB**
- ✅ Contrôle total
- ✅ API sécurisée
- ✅ Conforme RGPD
- ⚠️ Nécessite développement

### Option 2 : Email Organisé (Temporaire)

**Gmail + Labels**
- Créer un label "Visites Showroom"
- Filtrer les emails automatiquement
- Utiliser des templates de réponse

**Limites** : Difficile à analyser, pas de suivi structuré

---

## 🔄 Workflow Recommandé

### 1. Réception de la Demande
```
Formulaire soumis → EmailJS → Email reçu → Stockage dans base de données
```

### 2. Traitement de la Demande
1. **Réception** : Email automatique avec toutes les infos
2. **Vérification** : Vérifier disponibilité dans le calendrier
3. **Confirmation** : Envoyer email de confirmation avec :
   - Date et heure confirmées
   - Adresse du showroom
   - Plan d'accès
   - Contact en cas d'annulation
4. **Rappel** : Envoyer rappel 24h avant la visite

### 3. Suivi Post-Visite
1. **Feedback** : Demander un retour (optionnel)
2. **Suivi commercial** : Relancer si pas de commande après 30 jours
3. **Archivage** : Marquer comme "Réalisée" après 1 an

---

## 📧 Templates d'Emails

### Email de Confirmation
```
Objet : Confirmation de votre visite du showroom Unicold

Bonjour [Nom],

Nous avons bien reçu votre demande de visite de notre showroom.

Nous vous confirmons votre rendez-vous :
📅 Date : [Date confirmée]
🕐 Heure : [Heure confirmée]
📍 Adresse : 16 Rue Pascal, 78300 Poissy

Plan d'accès : [Lien Google Maps]

En cas d'empêchement, merci de nous prévenir au moins 24h à l'avance au +33 1 72 54 13 60 (gratuit).

À très bientôt,
L'équipe Unicold
```

### Email de Rappel (24h avant)
```
Objet : Rappel : Votre visite du showroom demain

Bonjour [Nom],

Rappel : Vous avez rendez-vous demain [Date] à [Heure] pour visiter notre showroom.

Adresse : 16 Rue Pascal, 78300 Poissy

Au plaisir de vous accueillir,
L'équipe Unicold
```

---

## 🛠️ Implémentation Technique

### Amélioration du Formulaire Actuel

#### 1. Ajouter le Consentement RGPD
```tsx
<div className="flex items-start space-x-2">
  <input
    type="checkbox"
    id="consent"
    required
    className="mt-1"
  />
  <label htmlFor="consent" className="text-sm text-slate-600">
    J'accepte que mes données soient utilisées pour organiser ma visite 
    et être recontacté par Unicold. 
    <Link to="/mentions-legales" className="text-sky-600 hover:underline">
      En savoir plus
    </Link>
  </label>
</div>
```

#### 2. Améliorer le Template EmailJS
Créer un template spécifique "Visite Showroom" avec :
- Tous les champs structurés
- Format facile à copier-coller
- Lien vers le calendrier

#### 3. Ajouter un Numéro de Suivi
Générer un numéro unique pour chaque demande :
```tsx
const trackingNumber = `SHOW-${Date.now().toString(36).toUpperCase()}`;
```

---

## 📈 Statistiques à Suivre

### Métriques Clés
- Nombre de demandes par mois
- Taux de conversion (visite → devis)
- Taux de conversion (visite → commande)
- Jours de la semaine les plus demandés
- Heures préférées

### Tableau de Bord Recommandé
- Vue d'ensemble des visites du mois
- Prochaines visites programmées
- Visites en attente de confirmation
- Statistiques de conversion

---

## 🔐 Sécurité des Données

### Bonnes Pratiques
1. ✅ Chiffrement des données sensibles
2. ✅ Accès limité aux personnes autorisées
3. ✅ Sauvegarde régulière
4. ✅ Logs d'accès
5. ✅ Suppression sécurisée après expiration

### Outils Recommandés
- **Chiffrement** : Utiliser des services cloud sécurisés (Airtable, Google Workspace)
- **Mots de passe** : Gestionnaire de mots de passe (1Password, LastPass)
- **Accès** : Limiter aux personnes nécessaires

---

## 📝 Checklist de Mise en Place

### Phase 1 : Immédiat
- [ ] Ajouter case de consentement RGPD au formulaire
- [ ] Créer template email de confirmation
- [ ] Mettre en place Google Sheets ou Airtable
- [ ] Configurer export automatique depuis EmailJS

### Phase 2 : Court Terme (1 mois)
- [ ] Automatiser les emails de confirmation
- [ ] Mettre en place les rappels automatiques
- [ ] Créer un calendrier partagé
- [ ] Former l'équipe sur le processus

### Phase 3 : Moyen Terme (3 mois)
- [ ] Analyser les statistiques
- [ ] Optimiser les créneaux proposés
- [ ] Améliorer le suivi post-visite
- [ ] Automatiser davantage le processus

---

## 🚀 Solutions Automatisées

### Intégration EmailJS → Airtable
1. Créer un webhook dans Airtable
2. Utiliser Zapier/Make.com pour connecter EmailJS → Airtable
3. Automatiser la création d'enregistrement

### Intégration avec Calendrier
- **Google Calendar** : Créer événement automatiquement
- **Calendly** : Intégrer directement dans le site
- **Outlook** : Synchronisation possible

---

## 📞 Contact Support

Pour toute question sur la gestion des données :
- Email : contact@unicold.fr
- Téléphone : +33 1 72 54 13 60 (gratuit)

---

**Dernière mise à jour** : Janvier 2025

