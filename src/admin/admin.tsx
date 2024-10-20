import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppAdmin from './AppAdmin.tsx'
import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppAdmin />
  </StrictMode>,
)