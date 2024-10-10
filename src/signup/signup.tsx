import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppSignUp from './AppSignUp.tsx'
import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSignUp />
  </StrictMode>,
)