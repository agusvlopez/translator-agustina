import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage.tsx';
import { Navbar } from './components/Navbar.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { Footer } from './components/sections/Footer.tsx';
import { Loader } from './Loader.tsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga mínimo y espera a que la ventana esté completamente cargada
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Un pequeño retardo para una transición más suave
    };

    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </>
  )
}

export default App
