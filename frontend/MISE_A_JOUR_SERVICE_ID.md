# 🔄 Mise à Jour du Service ID EmailJS

## 📝 Étape 1 : Trouver votre nouveau Service ID

1. Allez sur https://dashboard.emailjs.com/
2. Cliquez sur **"Email Services"** dans le menu
3. Trouvez votre nouveau service SMTP (celui que vous venez de créer)
4. **Copiez le Service ID** (il ressemble à `service_xxxxxxx`)

## 🔧 Étape 2 : Mettre à jour le code

Une fois que vous avez le Service ID, dites-moi lequel c'est et je mettrai à jour le code automatiquement.

OU vous pouvez le faire manuellement en remplaçant dans ces fichiers :

### Fichiers à modifier :

1. **`frontend/src/pages/Home.tsx`** (ligne 30)
2. **`frontend/src/pages/Devis.tsx`** (ligne 73)
3. **`frontend/src/pages/SuppressionDonnees.tsx`** (ligne 19)

### Remplacement à faire :

Remplacez :
```tsx
const serviceID = 'service_qjwkxml';
```

Par :
```tsx
const serviceID = 'service_VOTRE_NOUVEAU_ID';
```

---

## ✅ Après la mise à jour

1. Testez le formulaire de visite showroom
2. Vérifiez que l'email arrive bien à `contact@unicold.fr`
3. Vérifiez aussi le dossier Spam au cas où

---

**Quel est votre nouveau Service ID ?** Je peux mettre à jour le code pour vous.

