import { useTranslation } from 'react-i18next';
import './Quotation.css';
import { Link } from 'react-router-dom';

export function Quotation() {
  const { t } = useTranslation();

  const emailData = {
    to: t('quotation.email.to'),
    subject: t('quotation.email.subject'),
    body: t('quotation.email.body')
  };

  const mailtoUrl = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;

  return (
    <section id="price" className="quotation-section" aria-label="Sección de cotización">
      <div className="quotation-content-wrapper">
        <h2 className="quotation-title">{t('quotation.title')}</h2>
        <p className="quotation-description">{t('quotation.description')}</p>
        <div className="quotation-buttons">
          <a 
            href={mailtoUrl} 
            className="quotation-button" 
            aria-label="Enviar correo para cotización"
          >
            {t('quotation.button')}
          </a>
          <Link to="/services" className="services-button">
            Ver servicios 
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24L20 16L12 8" stroke="currentcolor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}