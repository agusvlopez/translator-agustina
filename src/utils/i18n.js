import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traducciones
import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

i18n
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next) // Integra con React
  .init({
    // Idiomas disponibles
    resources: {
      es: {
        translation: esTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    
    // Idioma por defecto
    fallbackLng: 'es',
    
    // Detectar idioma del usuario
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false // React ya escapa por defecto
    }
  });

export default i18n;