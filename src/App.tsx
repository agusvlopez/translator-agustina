import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import { Navbar } from './components/Navbar.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { Footer } from './components/sections/Footer.tsx';

function App() {

  return (
    <BrowserRouter>
      <div className="navbar-container">
        <Navbar />
      </div> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<ServicesPage />} />     
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App
