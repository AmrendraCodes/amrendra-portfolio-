import Link from 'next/link';
import { forwardRef } from 'react';

const Button = forwardRef(({ children, href, variant = 'primary', size = 'md', className = '', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 rounded-sm cursor-pointer whitespace-nowrap';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,39,75,0.3)] hover:shadow-[0_8px_32px_rgba(232,39,75,0.4)]',
    outline: 'bg-transparent text-text border-2 border-border hover:border-accent hover:text-accent hover:-translate-y-0.5',
    ghost: 'bg-transparent text-muted hover:text-accent hover:bg-white/5',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} ref={ref} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
