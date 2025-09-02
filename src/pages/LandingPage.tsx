import { useTranslation } from 'react-i18next';
import { Navbar } from '../components/Navbar';

function LandingPage() {
  const { t } = useTranslation();
  
  return (
    <div className="landing-page">
      {/* Selector de idioma */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <button className="cta-primary">{t('cta.services')}</button>
        <button className="cta-secondary">{t('cta.quotation')}</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>{t('features.title')}</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>{t('features.feature1.title')}</h3>
            <p>{t('features.feature1.description')}</p>
          </div>
          <div className="feature">
            <h3>{t('features.feature2.title')}</h3>
            <p>{t('features.feature2.description')}</p>
          </div>
          <div className="feature">
            <h3>{t('features.feature3.title')}</h3>
            <p>{t('features.feature3.description')}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>{t('contact.title')}</h2>
        <form>
          <input type="text" placeholder={t('contact.name')} />
          <input type="email" placeholder={t('contact.email')} />
          <textarea placeholder={t('contact.message')}></textarea>
          <button type="submit">{t('contact.send')}</button>
        </form>
      </section>
    </div>
  );
}

export default LandingPage;