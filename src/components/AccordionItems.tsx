import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AccordionIcon } from './AccordionIcon.tsx';

interface AccordionItems {
  id: number;
  title: string;
  content: string;
}

export function AccordionItems() {
  const { t } = useTranslation();
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const accordionData: AccordionItems[] = [
    {
      id: 1,
      title: t('questions.q1'),
      content: t('questions.a1')
    },
    {
      id: 2,
      title: t('questions.q2'),
      content: t('questions.a2')
    },
    {
      id: 3,
      title: t('questions.q3'),
      content: t('questions.a3')
    }
  ];

  const toggleItem = (id: number) => {
    setActiveItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

    const styles = {
    accordionWrapper: {
      backgroundColor: '#D7E5E3',
      borderRadius: '10px',
      boxShadow: '0 10px 25px -10px rgba(0, 0, 0, 0.07)',
      overflow: 'hidden',
      border: '1px solid #e5e7eb'
    },
    accordionItem: {
      borderBottom: '1px solid #e5e7eb'
    },
    accordionButton: {
      width: '100%',
      padding: '20px 24px',
      textAlign: 'left' as const,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
    },
    accordionButtonActive: {
      backgroundColor: '#D7E5E3',
      border: 'none'
    },
    accordionButtonInactive: {
      backgroundColor: '#D7E5E3'
    },
    accordionButtonHover: {
      backgroundColor: '#D7E5E3'
    },
    accordionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      transition: 'color 0.3s ease',
    },
    accordionTitleActive: {
      color: '#26233B'
    },
    accordionTitleInactive: {
      color: '#26233B'
    },
    accordionContent: {
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out'
    },
    accordionContentActive: {
      maxHeight: '384px',
      opacity: 1
    },
    accordionContentInactive: {
      maxHeight: '0',
      opacity: 0
    },
    accordionContentInner: {
      padding: '0 24px 16px 24px',
      color: '#494949ff',
      lineHeight: '160%',
      backgroundColor: '#D7E5E3',
      fontSize: "18px"
    }
  };

 return (
    <div>
      <div style={styles.accordionWrapper}>
        <div>
          {accordionData.map((item, index) => {
            const isActive = activeItems.includes(item.id);
            const isLast = index === accordionData.length - 1;
            
            return (
              <div 
                key={item.id} 
                style={{
                  ...styles.accordionItem,
                  ...(isLast ? { borderBottom: 'none' } : {})
                }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  style={{
                    ...styles.accordionButton,
                    ...(isActive ? styles.accordionButtonActive : styles.accordionButtonInactive),
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <AccordionIcon isOpen={isActive} />
                  <span style={{
                    ...styles.accordionTitle,
                    ...(isActive ? styles.accordionTitleActive : styles.accordionTitleInactive)
                  }}>
                    {item.title}
                  </span>
                </button>
                
                <div
                  style={{
                    ...styles.accordionContent,
                    ...(isActive ? styles.accordionContentActive : styles.accordionContentInactive)
                  }}
                >
                  <div style={styles.accordionContentInner}>
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}