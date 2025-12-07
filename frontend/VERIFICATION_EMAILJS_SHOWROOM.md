# 🔍 Vérification EmailJS - Formulaire Showroom

## 🚨 Problème : Pas d'email reçu dans contact@unicold.fr

### ✅ Vérifications à Faire

#### 1. Vérifier le Service EmailJS
1. Allez sur https://dashboard.emailjs.com/
2. Cliquez sur **"Email Services"**
3. Vérifiez que le service `service_ugehbqe` est bien configuré avec :
   - **Host** : `ssl0.ovh.net`
   - **Port** : `587`
   - **User** : `contact@unicold.fr`
   - **Password** : [mot de passe correct]
   - **SSL** : Désactivé (TLS pour port 587)

#### 2. Vérifier le Template EmailJS
1. Allez dans **"Email Templates"**
2. Ouvrez le template `template_u2iy10q`
3. **VÉRIFIEZ IMPÉRATIVEMENT** :
   - **To Email** : Doit contenir `contact@unicold.fr`
   - OU utiliser la variable `{{to_email}}` si vous passez le paramètre

#### 3. Vérifier les Logs EmailJS
1. Dans le dashboard EmailJS, allez dans **"Logs"**
2. Vérifiez si les emails sont bien envoyés
3. Regardez le statut de chaque envoi :
   - ✅ **Sent** : Email envoyé avec succès
   - ❌ **Failed** : Erreur (cliquez pour voir les détails)

#### 4. Vérifier la Console du Navigateur
1. Ouvrez la console (F12)
2. Remplissez le formulaire showroom
3. Regardez les messages :
   - `EmailJS Success: 200 OK` = Email envoyé par EmailJS
   - `EmailJS Error` = Erreur (regardez les détails)

---

## 🔧 Solutions

### Solution 1 : Configurer le Template Correctement

Dans le template `template_u2iy10q`, mettez :

**To Email :**
```
contact@unicold.fr
```

**Subject :**
```
{{subject}}
```

**Content :**
```
{{message}}
```

### Solution 2 : Vérifier le Service SMTP

Testez le service SMTP directement :
1. Dans EmailJS, allez dans **"Email Services"**
2. Cliquez sur `service_ugehbqe`
3. Cliquez sur **"Send Test Email"**
4. Vérifiez si vous recevez l'email de test

### Solution 3 : Vérifier les Spams

- Vérifiez le dossier **Spam** de `contact@unicold.fr`
- Vérifiez les **filtres** de votre boîte mail
- Ajoutez `contact@unicold.fr` aux contacts de confiance

### Solution 4 : Vérifier les Paramètres SMTP

Assurez-vous que :
- Le mot de passe est correct
- Le port 587 est bien ouvert
- Le serveur `ssl0.ovh.net` est accessible

---

## 📊 Diagnostic

### Si la console affiche "EmailJS Success: 200 OK"
✅ EmailJS a bien envoyé l'email
→ Le problème est dans la configuration du template ou du service SMTP

### Si la console affiche une erreur
❌ Regardez le code d'erreur :
- **400** : Paramètres invalides
- **401** : Clé API invalide
- **403** : Service désactivé ou quota dépassé
- **500** : Erreur serveur

---

## 🧪 Test Rapide

Pour tester rapidement, modifiez temporairement le code pour envoyer à votre email personnel :

```tsx
to_email: 'votre-email@test.com', // Pour tester
```

Si vous recevez l'email à votre email personnel, le problème vient de la configuration de `contact@unicold.fr`.

---

## 📞 Support

Si le problème persiste :
1. Vérifiez les logs EmailJS dans le dashboard
2. Contactez le support EmailJS
3. Vérifiez avec votre administrateur Zimbra/OVH

---

**Dernière mise à jour** : Janvier 2025

