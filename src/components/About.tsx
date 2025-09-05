import "./About.css";

import { useTranslation, Trans } from "react-i18next";
import { BaseButton } from "./BaseButton";

export function About() {
  const { t } = useTranslation();
  
  const handleCtaClick = () => {
    //ir a la página de servicios
  };

  return (
    <section className="about-section" aria-label="Sección sobre mí">
      <div className="about-title-wrapper">
        <h2>{t('about.title')}</h2>
      </div>
      <div className="about-content-wrapper">
        {/* <div className="about-image-wrapper">
           <AboutImage /> 
        </div> */}
        <div className="about-image">
          <img src="/images/agustina-about.webp" alt="Agustina Muñiz" />
        </div>
        <div className="about-description-wrapper">
          <h2 className="about-title">{t('about.title')}</h2>
          <p>
            <Trans i18nKey="about.description" components={{ 1: <strong /> }} />
          </p>
          <p className="about-inscription">{t('about.inscription')}</p>

          <BaseButton
           className="about-cta-button"
           onClick={handleCtaClick}>
            {t('cta.services')} 
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24L20 16L12 8" stroke="#FBFBFB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </BaseButton>
        </div>
      </div>
    </section>
  );
}