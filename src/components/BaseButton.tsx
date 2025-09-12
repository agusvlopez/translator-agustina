import './BaseButton.css';

interface BaseButtonProps {
  variant?: 'primary' | 'light';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMailto?: boolean;
  mailtoUrl?: string;
}

export function BaseButton({ variant = 'primary', className, children, onClick, isMailto, mailtoUrl } : BaseButtonProps) {
  const variantClasses = {
    primary: "primary-button",
    light: "light-button"
  }

  return (
    <>
    {isMailto ? (
      <a 
        href={mailtoUrl} 
        className={`${className} ${variantClasses[variant]}`} 
        aria-label="Enviar correo para cotización"
      >
        {children}
      </a>
    )
    :
    (
      <button className={`${className} ${variantClasses[variant]}`} onClick={onClick}>
        {children}
      </button> 
    )}       
    </>    
  );
}