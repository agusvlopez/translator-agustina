import './Footer.css';

import { EmailIcon } from '../icons/Email.tsx';
import { InstagramIcon } from '../icons/Instagram.tsx';
import { LogoLightIcon } from '../icons/LogoLight.tsx';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        {/* REDES */}
        <a href="mailto:agustinamuniz48@gmail.com" className="footer-social-media-item">
          <span className="icon"><EmailIcon /></span>
          <span>agustinamuniz48@gmail.com</span>
        </a>
        <a href="https://www.instagram.com/amtranslations/" target='_blank' className="footer-social-media-item">
          <span className="icon"><InstagramIcon /></span>
          <span>@amtranslations</span>
        </a>
      </div>
      <div className="footer-logo">
        {/* LOGO */}
        <span className="logo-large"><LogoLightIcon resolution="desktop" /></span>
        <span className="logo-small"><LogoLightIcon resolution="mobile"/></span>
      </div>
    </footer>
  );
}