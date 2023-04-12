import React from "react";
import { IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import Button from "./Button";
import guide from '../public/guide.png';

const mono = IBM_Plex_Mono({ weight: ["400", "700"], subsets: ["latin"] });

const TravelGuides: React.FC = (): JSX.Element => {
    return (
        <div className='flex flex-col w-full gap-4'>
            <h3 className={'font-bold text-dark ' + mono.className}>Travel Guide</h3>
            <div className='flex flex-row bg-white p-6 rounded-lg'>
                <div className='flex flex-col h-full'>
                    <h2 className={'font-bold text-dark text-2xl ' + mono.className}>Hadwin Malone</h2>
                    <p className={'text-dark ' + mono.className}>Guide since 2012</p>
                    <Button variant='outline' styling="mt-auto">Contact</Button>
                </div>
                <Image src={guide} alt='guide' className='ml-auto' />
            </div>
        </div>
    );
};

export default TravelGuides;