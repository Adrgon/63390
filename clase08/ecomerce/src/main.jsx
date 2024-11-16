import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import CustomHook from './CustomHook.jsx'
//import Children from './Children.jsx'
import HighOrderComponent from './HighOrderComponent.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HighOrderComponent />
  </StrictMode>
);
