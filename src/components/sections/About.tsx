import "./About.css";

import { motion } from "motion/react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";

export function About() {
  const { t } = useTranslation();
  
  return (
    <motion.section 
      className="about-section" 
      aria-label="Sección sobre mí"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="about-title-wrapper">
        <h2>{t('about.title')}</h2>
      </div>
      <div className="about-content-wrapper">
        {/* <div className="about-image-wrapper">
           <AboutImage /> 
        </div> */}
        <motion.div className="about-image" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
          <img src="/images/agustina-about.webp" alt="Agustina Muñiz" />
        </motion.div>
        <div className="about-description-wrapper">
          <h2 className="about-title">{t('about.title')}</h2>
          <p>
            <Trans i18nKey="about.description" components={{ 1: <strong /> }} />
          </p>
          <p className="about-inscription">{t('about.inscription')}</p>
          <Link to="/services" className="about-cta-button" aria-label="Botón de CTA">
              {t('cta.services')} 
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24L20 16L12 8" stroke="#FBFBFB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}