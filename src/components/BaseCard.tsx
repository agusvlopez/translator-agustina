import './BaseCard.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getMailtoUrl } from '../utils/mailto.ts';

import { BaseButton } from './BaseButton.tsx';

interface BaseCardProps {
  icon?: string;
  title: string;
  description: string;
}

export function BaseCard({ icon, title, description }: BaseCardProps) {
  const { t } = useTranslation();
  const mailtoUrl = getMailtoUrl(t);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  }

  const handleCloseModal = () => {
    setModalOpen(false);
    // Restaurar scroll del body
    document.body.style.overflow = 'unset';
  }

  return (
    <>
    <div 
      onClick={handleOpenModal}
      className="card-container">
      <div className="card-content">
        {icon && <img src={icon} alt={title} className="card-icon" />}
        <h4 className="card-title">{title}</h4>
        <p className="card-description">{description}</p>
      </div>
      <span className="cta-button">Ver más</span>
    </div>

     {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Header del modal */}
            <div className="modal-header">
              <h4 className="modal-title">{title}</h4>
              <button 
                className="modal-close-button"
                onClick={handleCloseModal}
                aria-label="Cerrar modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66634 23.6667L0.333008 21.3334L9.66634 12L0.333008 2.66671L2.66634 0.333374L11.9997 9.66671L21.333 0.333374L23.6663 2.66671L14.333 12L23.6663 21.3334L21.333 23.6667L11.9997 14.3334L2.66634 23.6667Z" fill="#26233B"/>
                </svg>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="modal-body">
              <p className="modal-description">{description}</p>
            </div>

            {/* Footer del modal (opcional) */}
            <div className="modal-footer">
            <BaseButton isMailto mailtoUrl={mailtoUrl} variant="light" className="quotation-button">
              {t('services.modal.cta')}
            </BaseButton>
            </div>
          </div>
        </div>
      )}
     </>
  );
}