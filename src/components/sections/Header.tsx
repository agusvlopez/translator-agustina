import './Header.css';
import { useTranslation } from 'react-i18next';

export function Header () {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <span className="header-title">{t('hero.title')}</span>
          <span className="header-subtitle">{t('hero.subtitle')}</span>
        </h1>
        <p className="header-description">{t('hero.description')}</p>
        {/* TODO: CHEQUEAR SI AGREGO ESTE BOTON */}
        {/* <BaseButton >{t('cta.services')}</BaseButton> */}
      </div>
    </header>
  );
}