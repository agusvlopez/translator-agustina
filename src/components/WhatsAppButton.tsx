import { useTranslation } from 'react-i18next';
import { WhatsAppIcon } from './Icons/WhatsAppIcon';
import './WhatsAppButton.css';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const { t } = useTranslation();
  const phoneNumber = t('whatsapp.phone')?.replace(/\D/g, '') || '';
  const message = encodeURIComponent(t('whatsapp.message'));

   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: [1, 1.05, 1, 1.05, 1], // Animación de pulso
      }}
      transition={{
        // Transición para la animación de entrada
        default: { duration: 0.5, delay: 1, ease: 'easeOut' },
        // Transición para la animación de pulso (scale)
        // Se repetirá infinitamente cada 8 segundos
        scale: { duration: 1, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon />
    </motion.a>
  );
}