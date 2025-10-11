import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();
const app = express();

// Autorise le front Vite en dev (localhost)
const ORIGINS = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173',
  'http://127.0.0.1:4173'
];

// CORS + preflight
app.use(cors({ origin: ORIGINS, methods: ['GET','POST','OPTIONS'], allowedHeaders: ['Content-Type'] }));
app.options('*', cors());

// Body parser
app.use(express.json());

// Logs simples (utile débogage)
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Santé
app.get('/api/health', (_req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// Route contact
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur backend lancé sur le port ${PORT}`));
