import React from 'react';
import {default as AlohaLogo} from '@/public/aloha.svg';
import Image from 'next/image';
import { IBM_Plex_Mono } from 'next/font/google';
import Button from '@/components/Button';
import IconButton from './IconButton';
import {GoThreeBars} from 'react-icons/go';
import Drawer from './Drawer';

const mono = IBM_Plex_Mono({ weight: "400", subsets: ['latin'] });

const NavBar: React.FC = (): JSX.Element => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <nav className='bg-white h-20 xl:max-w-6xl lg:max-w-4xl  w-full flex flex-row p-6 lg:top-6 lg:rounded-xl lg:absolute items-center justify-between'>
                <div className='flex flex-row justify-between gap-20'>
                    <Image src={AlohaLogo} alt='logo' className='h-9' />
                    <ul className='flex-row items-center gap-10 text-dark md:flex hidden'>
                        <li>
                            <a href="/" className={mono.className}>Home</a>
                        </li>
                        <li>
                            <a href="/#" className={mono.className}>Surfing</a>
                        </li>
                        <li>
                            <a href="/#" className={mono.className}>Hula</a>
                        </li>
                        <li>
                            <a href="/#" className={mono.className}>Volcano</a>
                        </li>
                    </ul>
                </div>
                <Button variant='solid' styling='md:block hidden'>Book a trip</Button>
                <IconButton icon={<GoThreeBars size={24} />} styling='md:hidden block w-9 h-9' onClick={() => setOpen(true)} />
            </nav>
            <Drawer isOpen={isOpen} setOpen={setOpen}>
                <ul className='flex flex-col gap-10 text-dark p-6'>
                    <li>
                        <a href="/" className={mono.className}>Home</a>
                    </li>
                    <li>
                        <a href="/#" className={mono.className}>Surfing</a>
                    </li>
                    <li>
                        <a href="/#" className={mono.className}>Hula</a>
                    </li>
                    <li>
                        <a href="/#" className={mono.className}>Volcano</a>
                    </li>
                    <li>
                        <Button variant='solid'>Book a trip</Button>
                    </li>
                </ul>
            </Drawer>
        </>
        
    );
};

export default NavBar;