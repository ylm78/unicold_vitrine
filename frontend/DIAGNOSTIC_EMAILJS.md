# 🔍 Diagnostic EmailJS - Tests OK mais Site KO

## 🎯 Problème
Les tests dans EmailJS fonctionnent, mais les emails ne partent pas depuis le site.

---

## ✅ Vérifications à Faire

### 1. Vérifier la Console du Navigateur

Après avoir soumis le formulaire, ouvrez la console (F12) et regardez :

**Si vous voyez :**
```
Envoi EmailJS - Service: service_ixgvh57 Template: template_57qr94g
Paramètres envoyés: {from_name: "...", from_email: "...", ...}
EmailJS Success: 200 OK
```
✅ L'email a été envoyé par EmailJS → Vérifiez les spams

**Si vous voyez :**
```
EmailJS Error Details: {status: 400, text: "..."}
```
❌ Il y a une erreur → Regardez le message d'erreur

---

### 2. Vérifier les Service ID et Template ID

Assurez-vous que les IDs dans le code correspondent exactement à ceux dans EmailJS :

**Pour les Devis :**
- Service ID : `service_ixgvh57`
- Template ID : `template_57qr94g`

**Pour les Visites Showroom :**
- Service ID : `service_ugehbqe`
- Template ID : `template_u2iy10q`

---

### 3. Vérifier les Variables du Template

Les variables dans le template EmailJS doivent correspondre aux paramètres envoyés :

**Paramètres envoyés depuis le code :**
- `from_name`
- `from_email`
- `name`
- `email`
- `from_phone`
- `subject`
- `message`

**Variables dans le template doivent être :**
- `{{from_name}}` ou `{{name}}`
- `{{from_email}}` ou `{{email}}`
- `{{message}}`
- `{{subject}}`

---

### 4. Vérifier la Clé Publique

La clé publique dans le code doit correspondre à celle dans EmailJS :
- Code : `Q_4KZL1s7zXDPGjMz`
- Vérifiez dans EmailJS Dashboard → Account → API Keys

---

### 5. Vérifier les Restrictions CORS/Domaines

Dans EmailJS :
1. Allez dans **"Email Services"**
2. Ouvrez votre service (`service_ixgvh57` ou `service_ugehbqe`)
3. Vérifiez s'il y a des restrictions de domaine
4. Si oui, ajoutez votre domaine (localhost pour le dev, votre domaine pour la prod)

---

### 6. Vérifier les Logs EmailJS

1. Allez dans **"Logs"** dans le dashboard EmailJS
2. Regardez les tentatives d'envoi depuis le site
3. Cliquez sur une entrée pour voir les détails :
   - **Status** : Sent ou Failed
   - **Error** : Si Failed, regardez le message d'erreur

---

## 🔧 Solutions Courantes

### Solution 1 : Variables Non Correspondantes

Si le template utilise `{{name}}` mais le code envoie `from_name`, ça ne marchera pas.

**Corriger :**
- Soit changer le template pour utiliser `{{from_name}}`
- Soit changer le code pour envoyer `name` au lieu de `from_name`

### Solution 2 : Service ID Incorrect

Vérifiez que le Service ID dans le code existe bien dans EmailJS.

### Solution 3 : Template ID Incorrect

Vérifiez que le Template ID dans le code existe bien dans EmailJS.

### Solution 4 : Restrictions de Domaine

Si EmailJS bloque les requêtes depuis votre domaine, ajoutez-le dans les paramètres du service.

---

## 🧪 Test de Diagnostic

Pour tester rapidement, ajoutez ce code dans la console du navigateur :

```javascript
emailjs.send(
  'service_ixgvh57',
  'template_57qr94g',
  {
    from_name: 'Test',
    from_email: 'test@test.com',
    name: 'Test',
    email: 'test@test.com',
    subject: 'Test',
    message: 'Ceci est un test'
  },
  'Q_4KZL1s7zXDPGjMz'
).then(console.log).catch(console.error);
```

Si ça marche dans la console mais pas depuis le formulaire, le problème vient des paramètres envoyés.

---

## 📊 Checklist de Vérification

- [ ] Service ID correct dans le code
- [ ] Template ID correct dans le code
- [ ] Clé publique correcte
- [ ] Variables du template correspondent aux paramètres
- [ ] Pas de restrictions de domaine dans EmailJS
- [ ] Logs EmailJS montrent les tentatives d'envoi
- [ ] Console du navigateur ne montre pas d'erreurs
- [ ] Dossier Spam vérifié

---

**Qu'est-ce que vous voyez dans la console après avoir soumis le formulaire ?**

