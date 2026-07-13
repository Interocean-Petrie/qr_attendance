import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tokens.css'
import App from './App.tsx'
import { Poster } from './poster/Poster.tsx'

const isPoster = new URLSearchParams(window.location.search).get('view') === 'poster'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPoster ? <Poster /> : <App />}
  </StrictMode>,
)
