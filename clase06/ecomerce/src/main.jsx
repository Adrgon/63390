import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppEcomerce from './AppEcomerce.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppEcomerce />
  </StrictMode>,
)
