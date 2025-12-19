import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Améliorer le back/forward cache
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Nettoyer les event listeners au déchargement de la page
window.addEventListener('beforeunload', () => {
  // Nettoyer les timers et listeners
  const highestId = setTimeout(() => {}, 0);
  for (let i = 0; i < highestId; i++) {
    clearTimeout(i);
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
