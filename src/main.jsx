import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './css/NavBar.css'
import './css/HomePage.css'
import './css/Shop.css'
import './css/responsive.css'
import './css/MyCart.css'
import './css/YourOrder.css'
import 'animate.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
