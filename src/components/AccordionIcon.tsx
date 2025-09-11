import './AccordionIcon.css';

interface AccordionIconProps {
  isOpen: boolean;
}

export function AccordionIcon({ isOpen }: AccordionIconProps) {
  return (
    <>
      {isOpen ? 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_296_148)">
            <path d="M10 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6025 5.39763 18.3334 10 18.3334Z" fill="#26233B"/>
            <path d="M6.66667 10.0001H13.3333M18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 10 18.3334C5.39763 18.3334 1.66667 14.6025 1.66667 10.0001C1.66667 5.39771 5.39763 1.66675 10 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001Z" stroke="#D7E5E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_296_148">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      : 
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_296_147)">
            <path d="M10.3429 18.3334C14.9978 18.3334 18.7714 14.6025 18.7714 10.0001C18.7714 5.39771 14.9978 1.66675 10.3429 1.66675C5.68788 1.66675 1.91428 5.39771 1.91428 10.0001C1.91428 14.6025 5.68788 18.3334 10.3429 18.3334Z" fill="#26233B"/>
            <path d="M10.3429 6.66675V13.3334M6.97143 10.0001H13.7143M18.7714 10.0001C18.7714 14.6025 14.9978 18.3334 10.3429 18.3334C5.68788 18.3334 1.91428 14.6025 1.91428 10.0001C1.91428 5.39771 5.68788 1.66675 10.3429 1.66675C14.9978 1.66675 18.7714 5.39771 18.7714 10.0001Z" stroke="#D7E5E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_296_147">
              <rect width="20.2286" height="20" fill="white" transform="translate(0.228569)"/>
            </clipPath>
          </defs>
        </svg>
      }    
    </>
  );
}