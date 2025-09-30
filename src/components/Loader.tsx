import './Loader.css';
import { motion } from 'framer-motion';

export function Loader() {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      aria-label="Cargando"
      role="status"
    >
      <div className="loader-spinner"></div>
    </motion.div>
  );
}