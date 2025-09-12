import { About } from '../components/sections/About';
import { Header } from '../components/sections/Header';
import { Questions } from '../components/sections/Questions';
import { Quotation } from '../components/sections/Quotation';

function LandingPage() {
  
  return (
    <div className="landing-page">
      {/* Selector de idioma */}
      <div className="header-container">
        <Header />
      </div>
      <About />
      <Quotation />
      <Questions />
    </div>
  );
}

export default LandingPage;