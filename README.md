# Unicold Vitrine

Site vitrine professionnel pour Unicold - Spécialiste des chambres froides

## Structure du Projet

```
unicold_vitrine/
├── frontend/          # Application React/Vite
├── backend/           # Backend (à venir)
└── .github/
    └── workflows/     # GitHub Actions CI/CD
```

## Frontend

Le frontend est une application React avec TypeScript, Vite et Tailwind CSS.

### Installation

```bash
cd frontend
npm install
```

### Développement

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Docker

```bash
cd frontend
docker build -t unicold-frontend .
docker run -p 80:80 unicold-frontend
```

## Backend

Le backend sera développé prochainement.

## CI/CD

Le projet utilise GitHub Actions pour le build et le déploiement automatique via Docker.

### Configuration GitHub Actions

À chaque push sur la branche `main`, le workflow :
1. Build et push l'image Docker du backend vers Docker Hub
2. Build et push l'image Docker du frontend vers Docker Hub

### Secrets GitHub requis

Configurez ces secrets dans les paramètres GitHub de votre repository :
- `DOCKERHUB_USERNAME` : Votre nom d'utilisateur Docker Hub
- `DOCKERHUB_TOKEN` : Votre token d'accès Docker Hub

Les images seront poussées vers :
- `${{ secrets.DOCKERHUB_USERNAME }}/monapp-backend:latest`
- `${{ secrets.DOCKERHUB_USERNAME }}/monapp-frontend:latest`

