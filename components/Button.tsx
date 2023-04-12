import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element | string;
    variant: 'solid' | 'outline';
    styling?: string;
  }

const Button: React.FC<ButtonProps> = ({ children, styling, variant, ...props }): JSX.Element => {
    if (variant === 'outline') return (
        <button className={'bg-white hover:bg-light text-green border border-green px-4 py-2 rounded-md w-fit transition ease-in-out duration-200 ' + (styling ? styling : '')} {...props}>
            {children}
        </button>
    );
    else return (
        <button className={'bg-green hover:opacity-90 text-white px-4 py-2 rounded-md w-fit transition ease-in-out duration-200 ' + (styling ? styling : '')} {...props}>
            {children}
        </button>
    );
};

export default Button;