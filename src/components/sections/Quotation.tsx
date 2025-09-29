import './Quotation.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { getMailtoUrl } from '../../utils/mailto.ts';

import { BaseButton } from '../BaseButton.tsx';

export function Quotation() {
  const { t } = useTranslation();
  const mailtoUrl = getMailtoUrl(t);

  return (
    <motion.section 
      id="price" 
      className="quotation-section" 
      aria-label="Sección de cotización"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="quotation-content-wrapper">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="quotation-title">
          {t('quotation.title')}
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="quotation-description">
          {t('quotation.description')}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="quotation-buttons">
          <BaseButton isMailto mailtoUrl={mailtoUrl} className="quotation-button" variant="light">{t('quotation.button')}</BaseButton>
          <Link to="/services" className="services-button" aria-label={t('cta.services')}>
            {t('cta.services')}
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24L20 16L12 8" stroke="currentcolor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}