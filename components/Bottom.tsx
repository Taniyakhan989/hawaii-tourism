import React from 'react';
import { IBM_Plex_Mono } from 'next/font/google';
import Categories from './Categories';
import TravelGuides from './TravelGuides';

const mono = IBM_Plex_Mono({ weight: "700", subsets: ['latin'] });

interface BottomProps {
    data: any
}

const Bottom: React.FC<BottomProps> = ({ data }): JSX.Element => {
    return (
        <div className='w-full flex bg-light lg:justify-center'>
            <div className='flex flex-col lg:flex-row xl:max-w-6xl lg:max-w-4xl max-w-6xl px-6 lg:px-0 w-full pt-10 pb-20 gap-8'>
                <Categories data={data} />
                <TravelGuides />
            </div>
        </div>
    )
}

export default Bottom;