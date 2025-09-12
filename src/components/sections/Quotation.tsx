import { useTranslation } from 'react-i18next';
import './Quotation.css';
import { Link } from 'react-router-dom';
import { getMailtoUrl } from '../../utils/mailto.ts';
import { BaseButton } from '../BaseButton';

export function Quotation() {
  const { t } = useTranslation();
  const mailtoUrl = getMailtoUrl(t);

  return (
    <section id="price" className="quotation-section" aria-label="Sección de cotización">
      <div className="quotation-content-wrapper">
        <h2 className="quotation-title">{t('quotation.title')}</h2>
        <p className="quotation-description">{t('quotation.description')}</p>
        <div className="quotation-buttons">
          <BaseButton isMailto mailtoUrl={mailtoUrl} className="quotation-button" variant="light">{t('quotation.button')}</BaseButton>
          <Link to="/services" className="services-button" aria-label={t('cta.services')}>
            {t('cta.services')}
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24L20 16L12 8" stroke="currentcolor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}