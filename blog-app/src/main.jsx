import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import F1 from './f1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
