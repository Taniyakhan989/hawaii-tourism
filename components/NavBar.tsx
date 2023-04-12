import React from 'react';
import {default as AlohaLogo} from '@/public/aloha.svg';
import Image from 'next/image';
import { IBM_Plex_Mono } from 'next/font/google';
import Button from '@/components/Button';
import IconButton from './IconButton';
import {GoThreeBars} from 'react-icons/go';
import Drawer from './Drawer';
import Link from 'next/link';

const mono = IBM_Plex_Mono({ weight: "400", subsets: ['latin'] });

interface NavBarProps {
    data: Array<any>;
}

const NavBar: React.FC<NavBarProps> = ({ data }): JSX.Element => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <nav className='bg-white h-20 xl:max-w-6xl  w-full flex flex-row p-6 xl:top-6 xl:rounded-xl xl:absolute items-center justify-between z-20'>
                <div className='flex flex-row justify-between gap-20'>
                    <Image src={AlohaLogo} alt='logo' className='h-9' />
                    <ul className='flex-row items-center gap-10 text-dark lg:flex hidden'>
                        <li>
                            <Link href="/" className={'transition ease-in-out duration-200 hover:text-green ' + mono.className}>Home</Link>
                        </li>
                        {data.map((item, index) => (
                            <li key={index}>
                                <Link href={"/highlight/" + item.title} className={'transition ease-in-out duration-200 hover:text-green ' + mono.className}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button variant='solid' styling='lg:block hidden'>Book a trip</Button>
                <IconButton icon={<GoThreeBars size={24} />} styling='lg:hidden block w-9 h-9' onClick={() => setOpen(true)} />
            </nav>
            <Drawer isOpen={isOpen} setOpen={setOpen}>
                <ul className='flex flex-col gap-10 text-dark p-6'>
                    <li>
                        <Link href="/" className={mono.className}>Home</Link>
                    </li>
                    {data.map((item, index) => (
                        <li key={index}>
                            <Link href={"/highlight/" + item.title} className={mono.className}>{item.title}</Link>
                        </li>
                    ))}
                    <li>
                        <Button variant='solid'>Book a trip</Button>
                    </li>
                </ul>
            </Drawer>
        </>
        
    );
};

export default NavBar;