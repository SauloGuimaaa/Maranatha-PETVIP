import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe o BrowserRouter
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <BrowserRouter basename="/nome-do-repositorio"> {/* 👈 Adicione aqui */}
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}