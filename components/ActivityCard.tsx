import React from 'react';
import IconButton from './IconButton';
import { MdLocationPin } from 'react-icons/md';
import { IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({ weight: ["400"], subsets: ["latin"] });

interface ActivityCardProps {
    name: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ name }): JSX.Element => {
    return (
        <div className='flex flex-row w-full bg-white p-6 rounded-lg items-center gap-6'>
            <MdLocationPin color='#008080' size={20} />
            <p className={'text-dark font-regular ' + mono.className}>{name}</p>
        </div>
    );
};

export default ActivityCard;
export type { ActivityCardProps };