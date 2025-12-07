# 📧 Configuration Template EmailJS pour les Devis

## 🎯 Objectif
Créer un template dédié pour envoyer les demandes de devis à `devis@unicold.fr`.

---

## 📝 Étape 1 : Créer un Nouveau Template

1. Allez sur https://dashboard.emailjs.com/
2. Cliquez sur **"Email Templates"**
3. Cliquez sur **"Create New Template"** (ou le bouton "+")
4. Donnez un nom : **"Demande Devis"** ou **"Devis Unicold"**

---

## ⚙️ Étape 2 : Configurer le Template

### Champ "To Email" (Destinataire)
```
devis@unicold.fr
```

### Champ "Subject" (Sujet)
```
{{subject}}
```

### Champ "Content" (Contenu)
Vous pouvez utiliser soit :

**Option A : Simple**
```
{{message}}
```

**Option B : Structuré (Recommandé)**
```
Vous avez reçu une nouvelle demande de devis depuis le site Unicold.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Nom : {{from_name}}
📧 Email : {{from_email}}
📞 Téléphone : {{from_phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}
```

### Champ "Reply To" (Répondre à)
```
{{reply_to}}
```

### Champ "From Name" (Nom de l'expéditeur)
```
Unicold
```

---

## 💾 Étape 3 : Sauvegarder et Noter l'ID

1. Cliquez sur **"Save"** (en haut à droite)
2. **IMPORTANT** : Notez le **Template ID** qui apparaît (il ressemble à `template_xxxxxxx`)
3. Vous en aurez besoin pour mettre à jour le code

---

## 🔧 Étape 4 : Mettre à Jour le Code

Une fois que vous avez le Template ID, dites-moi lequel c'est et je mettrai à jour le code dans `Devis.tsx`.

---

## 📊 Résumé de la Configuration

| Champ | Valeur |
|-------|--------|
| **To Email** | `devis@unicold.fr` |
| **Subject** | `{{subject}}` |
| **Content** | `{{message}}` |
| **Reply To** | `{{reply_to}}` |
| **From Name** | `Unicold` |

---

## ✅ Vérification

Après avoir créé le template :
1. Testez avec "Test It" dans EmailJS
2. Vérifiez que l'email arrive bien à `devis@unicold.fr`
3. Donnez-moi le Template ID pour que je mette à jour le code

---

**Quel est le Template ID du nouveau template que vous avez créé ?**

