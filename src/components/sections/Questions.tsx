import './Questions.css';
import { useTranslation } from 'react-i18next';
import { AccordionItems } from '../AccordionItems.tsx';

export function Questions() {
  const { t } = useTranslation();

  return (
    <section className="questions-section" aria-label="Sección de preguntas frecuentes">
      <h2>{t('questions.title')}</h2>
      {/* ACCORDEON */}
      <AccordionItems />
    </section>
  );
}