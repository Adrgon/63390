import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import AppTheme from './AppTheme.jsx'
//import AppRendering from './AppRendering.jsx'
//import AppMemo from './AppMemo.jsx'
//import AppPropDrilling from './AppPropDrilling.jsx'
//import AppContextSimple from './AppContextSimple.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTheme />
  </StrictMode>,
)
