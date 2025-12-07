# 📧 Configuration EmailJS pour les Visites Showroom

## 🎯 Objectif
Configurer EmailJS pour envoyer les demandes de visite showroom à `contact@unicold.fr`.

---

## ⚙️ Configuration du Template EmailJS

### 1. Accéder à EmailJS
1. Connectez-vous à [EmailJS](https://www.emailjs.com/)
2. Allez dans **Email Templates**
3. Créez un nouveau template ou modifiez le template existant (`template_u2iy10q`)

### 2. Configuration du Template

**Nom du Template :** `Visite Showroom`

**Destinataire :**
```
{{to_email}}
```
ou directement :
```
contact@unicold.fr
```

**Sujet :**
```
{{subject}}
```

**Corps de l'email :**
```
{{message}}
```

### 3. Variables Disponibles

Le formulaire envoie les variables suivantes :
- `to_email` : `contact@unicold.fr`
- `from_name` : Nom du client
- `from_email` : Email du client
- `from_phone` : Téléphone du client
- `subject` : Sujet de l'email
- `message` : Message structuré complet
- `request_id` : ID unique de la demande
- `timestamp` : Date et heure de la demande

---

## 📝 Format du Message Envoyé

Le message est structuré comme suit :

```
🆕 NOUVELLE DEMANDE DE VISITE SHOWROOM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Nom : [Nom]
📧 Email : [Email]
📞 Téléphone : [Téléphone]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 PRÉFÉRENCES DE RENDEZ-VOUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📆 Date souhaitée : [Date]
🕐 Heure souhaitée : [Heure]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Message du client]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 CONFORMITÉ RGPD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Consentement donné : Oui
📝 ID de demande : [ID unique]
📅 Date de la demande : [Date]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ces données doivent être stockées dans la base de données 
et peuvent être supprimées sur demande du client.
Pour supprimer ces données, le client peut utiliser l'ID : [ID]
ou contacter : contact@unicold.fr
```

---

## 🔧 Alternative : Configuration Directe dans le Template

Si vous préférez configurer le destinataire directement dans le template EmailJS :

1. Dans le template, remplacez `{{to_email}}` par `contact@unicold.fr`
2. Dans le code, vous pouvez retirer le paramètre `to_email`

---

## ✅ Vérification

Pour tester la configuration :

1. Remplissez le formulaire de visite showroom sur le site
2. Vérifiez que l'email arrive bien à `contact@unicold.fr`
3. Vérifiez que toutes les informations sont présentes
4. Vérifiez que l'ID de demande est bien inclus

---

## 📊 Gestion des Données

### Stockage
- Les données doivent être stockées dans votre base de données
- Utilisez l'ID de demande (`request_id`) comme identifiant unique
- Stockez également : nom, email, téléphone, date/heure souhaitées, message, date de création

### Suppression
- Les clients peuvent demander la suppression via `/suppression-donnees`
- Utilisez l'email ou l'ID de demande pour identifier les données à supprimer
- Délai maximum : 30 jours (conformité RGPD)

---

## 🆘 Support

En cas de problème :
- Vérifiez les logs EmailJS dans le dashboard
- Vérifiez que le service EmailJS est bien configuré
- Contact : contact@unicold.fr

---

**Dernière mise à jour** : Janvier 2025

