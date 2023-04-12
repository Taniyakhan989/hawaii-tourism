import React from "react";

interface DrawerProps {
    children: JSX.Element | string;
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    styling?: string;
}

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, setOpen, styling }): JSX.Element => {
    return (
        <div className={'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transform ease-in-out ' + (isOpen ? 'block ' : 'hidden ') + (styling ? styling : '')}>
            <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50' onClick={() => setOpen(false)} />
            <div className='fixed top-0 right-0 w-1/2 h-full bg-white z-50'>
                {children}
            </div>
        </div>
    );
};

export default Drawer;