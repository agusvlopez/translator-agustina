import { Navbar } from '../components/Navbar';
import { About } from '../components/About';
import { Header } from '../components/Header';

function LandingPage() {
  
  return (
    <div className="landing-page">
      {/* Selector de idioma */}
      <div className="header-container">
        <Navbar />
        <Header />
      </div>
      <About />

  
    </div>
  );
}

export default LandingPage;