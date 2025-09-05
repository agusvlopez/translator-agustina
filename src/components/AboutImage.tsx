import './AboutImage.css';

export function AboutImage() {
  return (
    <div className="about-image-container">
      <div className="about-image-svg">
        <svg className="about-image-svg-content" viewBox="0 0 595 640" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_98_104)">
          <path d="M126.373 64.5067C348.336 -80.4324 535.276 56.2581 601 142.721V558.537C-54.4792 842.67 -95.59 209.446 126.373 64.5067Z" fill="#26233B"/>
          <path d="M126.373 64.5067C348.336 -80.4324 535.276 56.2581 601 142.721V558.537C-54.4792 842.67 -95.59 209.446 126.373 64.5067Z" stroke="#26233B"/>
          </g>
          <defs>
          <filter id="filter0_d_98_104" x="0.5" y="0.5" width="605" height="639" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_98_104"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98_104" result="shape"/>
          </filter>
          </defs>
        </svg>
      </div>
      <div className="about-image">
        <img src="/images/agustina.png" alt="" />
      </div>
    </div>
  );
}