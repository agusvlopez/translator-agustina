import { Navbar } from '../components/Navbar';
import { About } from '../components/sections/About';
import { Header } from '../components/sections/Header';
import { Quotation } from '../components/sections/Quotation';

function LandingPage() {
  
  return (
    <div className="landing-page">
      {/* Selector de idioma */}
      <div className="header-container">
        <Navbar />
        <Header />
      </div>
      <About />
      <Quotation />
  
    </div>
  );
}

export default LandingPage;