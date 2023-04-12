import React from 'react';
import IconButton from './IconButton';
import { FiArrowRight } from 'react-icons/fi';
import { IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({ weight: ["400"], subsets: ["latin"] });

interface CategoryCardProps {
    name: string;
    activities?: Array<{title: string}>;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name }): JSX.Element => {
    return (
        <div className='flex flex-row w-full bg-white p-6 rounded-lg items-center'>
            <p className={'text-dark font-regular ' + mono.className}>{name}</p>
            <IconButton icon={<FiArrowRight color='#008080' size={20} />} styling='ml-auto hover:bg-light rounded-full w-9 h-9 transition ease-in-out duration-200' />
        </div>
    );
};

export default CategoryCard;
export type { CategoryCardProps };