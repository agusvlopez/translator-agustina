import { useTranslation } from "react-i18next";
import "./Navbar.css"
import { MenuIcon } from "./icons/Menu.tsx";
import { LogoIcon } from "./icons/Logo.tsx";
import { useState } from "react";
import { CloseIcon } from "./icons/Close.tsx";

export function Navbar() {
  const { t, i18n } = useTranslation();
  
  const [isOpen, setIsOpen] = useState(false);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
      <nav className="navbar" aria-label="Navegación principal">
        <div className="logo-container">
          {/* LOGO */}
          <LogoIcon />
        </div>
        <div className={`nav-items ${isOpen ? 'open' : ''}`}>
          <span>{t("nav.services")}</span>
          <button className="primary-button">{t("nav.cta")}</button>
          <div className="language-selector">
              <button
                onClick={() => changeLanguage('es')}
                className={i18n.language === 'es' ? 'active' : 'desactive'}
              >
                ES
              </button>
              |
              <button
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'active' : 'desactive'}
              >
                EN
              </button>
          </div>
        </div>
        <div className="menu-icon">
          <button
          onClick={toggleMenu}
          className="menu-button" aria-label="Menu Button">
           {isOpen ? <CloseIcon /> : <MenuIcon />} 
          </button>
        </div>
      </nav>
  );
}