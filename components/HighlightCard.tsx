import React from 'react';
import Image from 'next/image';
import IconButton from '@/components/IconButton';
import { IBM_Plex_Mono } from "next/font/google";
import { FiArrowRight } from 'react-icons/fi';

const mono = IBM_Plex_Mono({ weight: ["400", "700"], subsets: ["latin"] });

interface HighlightCardProps {
    image: string;
    title: string;
    description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ image, title, description }): JSX.Element => {
    return (
        <div className='flex flex-col bg-white rounded-xl drop-shadow-xl max-w-sm w-96 h-full'>
            <div className='flex w-full h-32 relative'>
                <Image src={image} alt={title} fill className='rounded-t-lg object-cover' />
            </div>
            <h3 className={'p-6 font-bold text-green text-2xl ' + mono.className}>{title}</h3>
            <p className={'p-6 pt-0 text-dark text-base font-normal pb-20 ' + mono.className}>{description}</p>
            <IconButton icon={<FiArrowRight color='#008080' size='20' />} styling='bg-light rounded-full w-9 h-9 mr-6 mb-6 absolute right-0 bottom-0' />
        </div>
    );
};

export default HighlightCard;
export type { HighlightCardProps };