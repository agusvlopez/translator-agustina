import { Navbar } from '../components/Navbar';
import { About } from '../components/About';

function LandingPage() {
  
  return (
    <div className="landing-page">
      {/* Selector de idioma */}
      <Navbar />
      
      <About />

  
    </div>
  );
}

export default LandingPage;