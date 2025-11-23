# Étape 1 : build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build   # doit produire un dossier dist/ (Vite, React, etc.)

# Étape 2 : Nginx pour servir le build
FROM nginx:1.27-alpine

# On remplace la config par défaut
COPY nginx.conf /etc/nginx/conf.d/default.conf

# On copie les fichiers statiques
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

