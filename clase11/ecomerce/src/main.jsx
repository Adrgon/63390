import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import AppPropDrilling from './AppPropDrilling.jsx'
//import AppContextSimple from './AppContextSimple.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
