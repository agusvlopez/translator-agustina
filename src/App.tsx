import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { Navbar } from './components/Navbar';
import { ServicesPage } from './pages/ServicesPage';

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
    </BrowserRouter>
  )
}

export default App
