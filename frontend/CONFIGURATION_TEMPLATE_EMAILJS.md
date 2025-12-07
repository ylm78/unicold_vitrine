# ⚙️ Configuration du Template EmailJS - Solution

## 🔍 Problème Identifié

Les paramètres sont bien envoyés (on voit `to_email: contact@unicold.fr` dans les logs), mais l'email n'arrive pas.

**Cause probable** : Le template EmailJS n'utilise pas le paramètre `to_email` ou n'est pas configuré correctement.

---

## ✅ Solution : Configurer le Template Correctement

### Étape 1 : Ouvrir le Template
1. Allez sur https://dashboard.emailjs.com/
2. Cliquez sur **"Email Templates"**
3. Ouvrez le template **`template_u2iy10q`**

### Étape 2 : Configurer le Destinataire

**Option A : Utiliser la variable (Recommandé)**

Dans le champ **"To Email"**, mettez :
```
{{to_email}}
```

Cela utilisera automatiquement le paramètre `to_email` que vous passez dans le code.

**Option B : Adresse fixe**

Si vous préférez une adresse fixe, mettez directement :
```
contact@unicold.fr
```

### Étape 3 : Configurer les Autres Champs

**Subject (Sujet) :**
```
{{subject}}
```

**Content (Contenu) :**
```
{{message}}
```

**From Name (Nom de l'expéditeur) :**
```
{{from_name}}
```

**Reply To (Répondre à) :**
```
{{reply_to}}
```

### Étape 4 : Sauvegarder
Cliquez sur **"Save"** pour enregistrer.

---

## 🧪 Test

Après avoir configuré le template :

1. Retournez sur votre site
2. Remplissez le formulaire de visite showroom
3. Vérifiez que l'email arrive bien à `contact@unicold.fr`
4. Vérifiez aussi le dossier **Spam**

---

## 📊 Vérification dans les Logs

Dans les logs EmailJS, vous devriez voir :
- **Status** : "Sent" (si l'email est bien envoyé)
- **To** : `contact@unicold.fr`

Si vous voyez "Failed", cliquez pour voir les détails de l'erreur.

---

## 🔧 Alternative : Créer un Template Dédié

Si le template `template_u2iy10q` est utilisé pour d'autres choses, créez un nouveau template :

1. **Nom** : `Visite Showroom`
2. **To Email** : `{{to_email}}` ou `contact@unicold.fr`
3. **Subject** : `{{subject}}`
4. **Content** : `{{message}}`

Puis modifiez le code pour utiliser ce nouveau template ID.

---

**Important** : Le code envoie bien les paramètres, le problème est uniquement dans la configuration du template EmailJS.

