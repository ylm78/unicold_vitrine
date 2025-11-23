# Backend

Ce dossier contiendra le code backend de l'application Unicold.

## Structure à venir

```
backend/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
├── package.json
├── Dockerfile
└── README.md
```

## Configuration

### Variables d'environnement

Copiez le fichier `.env.example` vers `.env` et adaptez les valeurs pour votre environnement :

```bash
cp .env.example .env
```

Variables disponibles :
- `PORT` : Port d'écoute du serveur (défaut: 4000)
- `MONGO_URL` : URL de connexion MongoDB
- `JWT_SECRET` : Secret pour la génération des tokens JWT

## Docker

Le backend est containerisé avec Docker.

### Build de l'image

```bash
docker build -t unicold-backend .
```

### Exécution

```bash
docker run -p 4000:4000 --env-file .env unicold-backend
```

Le backend écoute sur le port 4000 par défaut.

