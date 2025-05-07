import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Garantir que o elemento root existe
const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  console.error('Failed to find the root element')
}