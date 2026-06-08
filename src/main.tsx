import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log(
  `%c DonQuaan Profile %c v${import.meta.env.VITE_APP_VERSION} `,
  'background: #000; color: #fff; border-radius: 3px 0 0 3px; padding: 4px; font-weight: bold;',
  'background: #333; color: #fff; border-radius: 0 3px 3px 0; padding: 4px; font-weight: bold;'
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
