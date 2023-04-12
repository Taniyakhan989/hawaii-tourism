import React from 'react';
import { IBM_Plex_Mono } from 'next/font/google';

const mono = IBM_Plex_Mono({weight: ['400', '700'], subsets: ['latin']});

interface DescriptionProps {
    description: string;
    styling?: string;
}

const Description: React.FC<DescriptionProps> = ({ description, styling }): JSX.Element => {
    return (
        <div className='flex flex-col bg-white w-full xl:max-w-6xl lg:max-w-4xl w-full items-start py-10 px-6 lg:px-0 gap-6'>
            <h3 className={'font-bold text-dark ' + mono.className}>Description</h3>
            <p className={mono.className + ' text-dark text-sm ' + (styling ? styling : '')}>{description}</p>
        </div>
    );
};

export default Description;