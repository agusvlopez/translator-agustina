import './Header.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Header () {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <span className="header-title">{t('hero.title')}</span>
          <span className="header-subtitle">{t('hero.subtitle')}</span>
        </motion.h1>
        <motion.p 
          className="header-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          {t('hero.description')}
        </motion.p>
      </div>
    </header>
  );
}