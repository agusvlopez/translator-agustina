import { Navbar } from '../components/Navbar';
import { About } from '../components/sections/About';
import { Footer } from '../components/sections/Footer';
import { Header } from '../components/sections/Header';
import { Questions } from '../components/sections/Questions';
import { Quotation } from '../components/sections/Quotation';

function LandingPage() {
  
  return (
    <div className="landing-page">
      {/* Selector de idioma */}
      <div className="header-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <Header />
      </div>
      <About />
      <Quotation />
      <Questions />
      <Footer />
    </div>
  );
}

export default LandingPage;