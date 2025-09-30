import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage.tsx';
import { Navbar } from './components/Navbar.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { Footer } from './components/sections/Footer.tsx';
import { Loader } from './components/Loader.tsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      return () => window.removeEventListener('load', hideLoader);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      {!isLoading && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
      )}
    </>
  )
}

export default App;