import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <BrowserRouter basename="/Maranatha-PETVIP">
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}