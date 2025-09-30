import './ServicesPage.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getMailtoUrl } from '../utils/mailto.ts';

import { BaseCard } from '../components/BaseCard.tsx';
import { BaseButton } from '../components/BaseButton.tsx';

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
    <section className="services-page">
      <section className="header">
        <div className="header-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >{t('services.title')}</motion.h2>
        <motion.p 
          className="services-header-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >{t('services.subtitle')}</motion.p>
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