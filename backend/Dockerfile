FROM node:20-alpine

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances (sans dev en prod)
RUN npm install --omit=dev

# Copie du reste du code
COPY . .

ENV PORT=4000
EXPOSE 4000

CMD ["npm", "start"]

