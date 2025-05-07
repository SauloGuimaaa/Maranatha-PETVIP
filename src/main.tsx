import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Alterado para HashRouter
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <HashRouter basename={import.meta.env.PROD ? '/Maranatha-PETVIP' : '/'}>
        <App />
      </HashRouter>
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}