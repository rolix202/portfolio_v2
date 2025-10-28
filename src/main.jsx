import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={ <App/> } />
        <Route path='/projects' element={ <PortfolioPage /> } />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
