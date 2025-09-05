import './BaseButton.css';

export function BaseButton({ className, children, onClick } : { className: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <button className={`${className} primary-button`} onClick={onClick}>
      {children}
    </button>
  );
}