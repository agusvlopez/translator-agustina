import './Footer.css';

import { motion } from 'motion/react';
import { EmailIcon } from '../Icons/Email';
import { InstagramIcon } from '../Icons/Instagram';
import { LogoLightIcon } from '../Icons/LogoLight';

export function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="footer-social-media" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
        {/* REDES */}
        <a href="mailto:agustinamuniz48@gmail.com" className="footer-social-media-item">
          <span className="icon"><EmailIcon /></span>
          <span>agustinamuniz48@gmail.com</span>
        </a>
        <a href="https://www.instagram.com/amtranslations/" target='_blank' className="footer-social-media-item">
          <span className="icon"><InstagramIcon /></span>
          <span>@amtranslations</span>
        </a>
      </motion.div>
      <div className="footer-logo">
        {/* LOGO */}
        <span className="logo-large"><LogoLightIcon resolution="desktop" /></span>
        <span className="logo-small"><LogoLightIcon resolution="mobile"/></span>
      </div>
    </motion.footer>
  );
}