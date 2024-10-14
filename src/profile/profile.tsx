import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProfile from './AppProfile.tsx'
import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProfile />
  </StrictMode>,
)