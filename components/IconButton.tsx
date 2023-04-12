import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: JSX.Element;
    styling?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, styling, ...props }): JSX.Element => {
    // icon is a JSX.Element, so we can just pass it in as a prop.
    return (
        <button className={'flex flex-row items-center justify-center ' + (styling ? styling : '')} {...props}>
            {icon}
        </button>
    );
};

export default IconButton;