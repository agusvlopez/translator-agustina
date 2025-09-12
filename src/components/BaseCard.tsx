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
              <h4 className="card-title">{title}</h4>
              <button 
                className="modal-close-button"
                onClick={handleCloseModal}
                aria-label="Cerrar modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M18 6L6 18M6 6L18 18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
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