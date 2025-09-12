import { About } from '../components/sections/About.tsx';
import { Header } from '../components/sections/Header.tsx';
import { Questions } from '../components/sections/Questions.tsx';
import { Quotation } from '../components/sections/Quotation.tsx';

function LandingPage() {
  
  return (
    <div className="landing-page">
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