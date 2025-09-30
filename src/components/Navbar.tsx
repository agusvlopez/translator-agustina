import "./Navbar.css";

import { useTranslation } from "react-i18next";
import { MenuIcon } from "./Icons/Menu.tsx";
import { LogoIcon } from "./Icons/Logo.tsx";
import { useState } from "react";
import { CloseIcon } from "./Icons/Close.tsx";
import { Link } from "react-router-dom";
import { BaseButton } from "./BaseButton.tsx";
import { getMailtoUrl } from "../utils/mailto.ts";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const mailtoUrl = getMailtoUrl(t);

  const [isOpen, setIsOpen] = useState(false);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
      <nav className="navbar" aria-label="Navegación principal">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          {/* LOGO */}
          <LogoIcon />
        </Link>
        <div className={`nav-items ${isOpen ? 'open' : ''}`}>
          <Link to="/services" className="nav-item" onClick={closeMenu}>
            {t("nav.services")}
          </Link>
          <BaseButton isMailto mailtoUrl={mailtoUrl}>
            {t("nav.cta")}
          </BaseButton>
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