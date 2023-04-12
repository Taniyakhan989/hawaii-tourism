import React from 'react';
import {default as bg} from '@/public/bg.png';
import Image from 'next/image';
import { IBM_Plex_Mono } from 'next/font/google';

const mono = IBM_Plex_Mono({ weight: "700", subsets: ['latin'] });

const HeroImage: React.FC = (): JSX.Element => {
    return (
        <>
            <Image src={bg} alt='bg' className='h-560px w-full object-cover flex' />
			<div className='absolute lg:top-0 top-20 left-0 w-full h-560px z-10'>
				<div className='flex flex-col items-center justify-center h-full px-6'>
					<h1 className={'text-8xl lg:text-9xl xl:text-9xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-white50 to-white90 xl:max-w-6xl lg:max-w-4xl w-full lg:mt-14 ' + mono.className}>Welcome to Hawaii</h1>
				</div>
			</div>
        </>
    );
};

export default HeroImage;