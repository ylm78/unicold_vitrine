# 📧 Instructions pour Configurer EmailJS - Template Showroom

## ✅ Bonne Nouvelle
Le code fonctionne ! La console affiche "EmailJS Success: 200 OK", ce qui signifie que l'email est bien envoyé par EmailJS.

## 🔧 Le Problème
Le template EmailJS n'envoie probablement pas à la bonne adresse email.

## 🛠️ Solution : Configurer le Template

### Étape 1 : Accéder au Template
1. Allez sur https://dashboard.emailjs.com/
2. Connectez-vous à votre compte
3. Cliquez sur **"Email Templates"** dans le menu
4. Trouvez et ouvrez le template **`template_u2iy10q`**

### Étape 2 : Configurer le Destinataire
Dans le template, trouvez le champ **"To Email"** et mettez :

```
contact@unicold.fr
```

### Étape 3 : Vérifier les Autres Champs

**Subject (Sujet) :**
```
[SHOWROOM] Demande de visite - {{from_name}}
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
Cliquez sur **"Save"** pour enregistrer les modifications.

---

## 🧪 Test Après Configuration

1. Retournez sur votre site
2. Remplissez le formulaire de visite showroom
3. Vérifiez que l'email arrive bien à `contact@unicold.fr`
4. Vérifiez aussi le dossier **Spam** au cas où

---

## 📝 Alternative : Créer un Nouveau Template

Si vous préférez créer un template dédié pour les visites showroom :

1. Dans EmailJS, cliquez sur **"Create New Template"**
2. Nommez-le : `Visite Showroom`
3. Configurez :
   - **To Email** : `contact@unicold.fr`
   - **Subject** : `[SHOWROOM] Demande de visite - {{from_name}}`
   - **Content** : `{{message}}`
4. Sauvegardez et notez l'ID du template
5. Modifiez le code pour utiliser ce nouveau template ID

---

## ⚠️ Vérifications Supplémentaires

### Vérifier le Service EmailJS
1. Allez dans **"Email Services"**
2. Vérifiez que le service `service_qjwkxml` est bien connecté à votre compte email
3. Si ce n'est pas le cas, connectez-le

### Vérifier les Spams
- Les emails peuvent arriver dans le dossier **Spam**
- Ajoutez `contact@unicold.fr` aux contacts de confiance

### Vérifier les Filtres Email
- Vérifiez qu'il n'y a pas de filtres qui bloquent les emails
- Vérifiez les règles de tri automatique

---

## 🆘 Si Ça Ne Fonctionne Toujours Pas

1. **Vérifiez les logs EmailJS** :
   - Allez dans **"Logs"** dans le dashboard EmailJS
   - Vous verrez tous les emails envoyés et leur statut

2. **Testez avec votre email personnel** :
   - Changez temporairement "To Email" dans le template vers votre email
   - Testez si vous recevez l'email
   - Si oui, le problème vient de la configuration de `contact@unicold.fr`

3. **Contactez le support EmailJS** :
   - Si les logs montrent que l'email est envoyé mais non reçu
   - Il peut y avoir un problème avec le service email connecté

---

**Important** : Le code fonctionne (200 OK), le problème est uniquement dans la configuration du template EmailJS.

