import React from 'react';
import Image from 'next/image';
import { IBM_Plex_Mono } from 'next/font/google';

const mono = IBM_Plex_Mono({ weight: "700", subsets: ['latin'] });

interface HeroImageProps {
    image?: StaticImageData | string;
    text: string;
    textStyle?: string;
    imageProps?: any;
}

const HeroImage: React.FC<HeroImageProps> = ({ image, text, textStyle, imageProps }): JSX.Element => {
    return (
        <>
            {image && <Image src={image} alt='bg' className='h-560px w-full object-cover flex' {...imageProps} />}
            {!image && <div className='h-560px w-full bg-light flex' />}
			<div className='absolute lg:top-0 top-20 left-0 w-full h-560px z-10'>
				<div className='flex flex-col items-center justify-center h-full px-6'>
					<h1 className={mono.className + ' text-6xl lg:text-9xl xl:text-9xl text-center font-bold xl:max-w-6xl lg:max-w-4xl w-full lg:mt-14 ' + (textStyle ? textStyle : '')}>{text}</h1>
				</div>
			</div>
        </>
    );
};

export default HeroImage;