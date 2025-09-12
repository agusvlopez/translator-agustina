import { useTranslation } from 'react-i18next';
import './ServicesPage.css';
import { BaseCard } from '../components/BaseCard';
import { BaseButton } from '../components/BaseButton';
import { getMailtoUrl } from '../utils/mailto.ts';

export function ServicesPage() {
  const { t } = useTranslation();
  const mailtoUrl = getMailtoUrl(t);

  const services = [
    {icon: t('services.service1.icon'), title: t('services.service1.title'), description: t('services.service1.description'),},
    { icon: t('services.service2.icon'), title: t('services.service2.title'), description: t('services.service2.description') },
    { icon: t('services.service3.icon'), title: t('services.service3.title'), description: t('services.service3.description') },
    { icon: t('services.service4.icon'), title: t('services.service4.title'), description: t('services.service4.description') },
    { icon: t('services.service5.icon'), title: t('services.service5.title'), description: t('services.service5.description') },
  ];

  return (
    <section>
      <section className="header">
        <div className="header-content">
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </div>
      </section>      
      <section className="services-section" aria-label="Sección de servicios">
        <div className="intro-section">
          <h3>{t('services.description1')}</h3>
          <p>{t('services.description2')}</p>
        </div>
        <div className="services-flex">
          {services.map((service, index) => (
            <BaseCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="quotation-button-container">
          <BaseButton isMailto mailtoUrl={mailtoUrl} className="quotation-button">{t('cta.quotation')}</BaseButton>
        </div>
      </section>
    </section>
  );
}