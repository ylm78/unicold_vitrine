# 🔧 Guide de Débogage EmailJS

## 🚨 Problème : Les emails ne partent pas

Si les emails ne sont pas reçus, voici comment diagnostiquer et résoudre le problème.

---

## ✅ Vérifications à Faire

### 1. Vérifier la Configuration EmailJS

#### A. Service EmailJS
1. Allez sur [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Vérifiez que le service `service_qjwkxml` est actif
3. Vérifiez que le service est bien connecté à votre compte email

#### B. Template EmailJS
1. Allez dans **Email Templates**
2. Ouvrez le template `template_u2iy10q`
3. **VÉRIFIEZ LE DESTINATAIRE** :
   - Dans le champ "To Email", mettez : `contact@unicold.fr`
   - OU utilisez la variable : `{{to_email}}` (si vous passez le paramètre)

#### C. Configuration du Template

**Champs obligatoires dans le template :**

```
To Email: contact@unicold.fr
From Name: {{from_name}}
From Email: {{from_email}}
Reply To: {{reply_to}}
Subject: {{subject}}
Content: {{message}}
```

---

## 🔍 Diagnostic dans la Console

Ouvrez la console du navigateur (F12) et vérifiez :

1. **Si vous voyez "EmailJS Success"** : L'email a été envoyé avec succès
2. **Si vous voyez "EmailJS Error"** : Regardez les détails de l'erreur

### Codes d'erreur courants :

- **400** : Paramètres invalides
- **401** : Clé API invalide
- **403** : Service désactivé ou quota dépassé
- **404** : Template ou Service introuvable
- **500** : Erreur serveur EmailJS

---

## 🛠️ Solutions

### Solution 1 : Vérifier le Destinataire dans le Template

1. Connectez-vous à EmailJS
2. Allez dans **Email Templates** → `template_u2iy10q`
3. Dans "To Email", mettez directement : `contact@unicold.fr`
4. Sauvegardez

### Solution 2 : Utiliser un Template Dédié

Créez un nouveau template spécifique pour les visites showroom :

1. **Nom** : `Visite Showroom`
2. **To Email** : `contact@unicold.fr`
3. **Subject** : `[SHOWROOM] Demande de visite - {{from_name}}`
4. **Content** : `{{message}}`

Puis modifiez le code pour utiliser ce nouveau template.

### Solution 3 : Vérifier les Limites EmailJS

- **Plan Gratuit** : 200 emails/mois
- Vérifiez si vous avez atteint la limite
- Vérifiez dans le dashboard EmailJS

### Solution 4 : Tester avec un Email de Test

Modifiez temporairement le code pour envoyer à votre email personnel :

```tsx
to_email: 'votre-email@test.com', // Pour tester
```

---

## 📧 Vérifier les Spams

1. Vérifiez le dossier **Spam** de `contact@unicold.fr`
2. Vérifiez les **filtres** de votre boîte mail
3. Ajoutez `contact@unicold.fr` aux contacts de confiance

---

## 🔐 Vérifier la Clé API

Dans le code, vérifiez que la clé publique est correcte :
```tsx
const publicKey = 'Q_4KZL1s7zXDPGjMz';
```

Cette clé doit correspondre à celle dans votre dashboard EmailJS.

---

## 📝 Template EmailJS Recommandé

Voici un template complet à copier dans EmailJS :

**To Email:**
```
contact@unicold.fr
```

**Subject:**
```
[SHOWROOM] Demande de visite - {{from_name}}
```

**Content (HTML):**
```html
<h2>🆕 Nouvelle Demande de Visite Showroom</h2>

<p><strong>Nom :</strong> {{from_name}}</p>
<p><strong>Email :</strong> {{from_email}}</p>
<p><strong>Téléphone :</strong> {{from_phone}}</p>
<p><strong>ID de demande :</strong> {{request_id}}</p>

<hr>

<h3>Message :</h3>
<pre style="white-space: pre-wrap;">{{message}}</pre>

<hr>

<p><small>Date de la demande : {{timestamp}}</small></p>
```

**Content (Plain Text):**
```
{{message}}
```

---

## 🧪 Test Rapide

Pour tester rapidement, ajoutez ce code temporaire dans la console du navigateur :

```javascript
emailjs.send(
  'service_qjwkxml',
  'template_u2iy10q',
  {
    to_email: 'contact@unicold.fr',
    from_name: 'Test',
    from_email: 'test@test.com',
    subject: 'Test EmailJS',
    message: 'Ceci est un test'
  },
  'Q_4KZL1s7zXDPGjMz'
).then(console.log).catch(console.error);
```

---

## 📞 Support

Si le problème persiste :
1. Vérifiez les logs dans le dashboard EmailJS
2. Contactez le support EmailJS
3. Vérifiez que votre compte email accepte les emails d'EmailJS

---

**Dernière mise à jour** : Janvier 2025

