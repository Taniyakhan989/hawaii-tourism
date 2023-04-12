import React from "react";
import {default as aloha} from "@/public/alohawhite.svg";
import Image from "next/image";

const Footer: React.FC = (): JSX.Element => {
    return (
        <div className="flex bg-dark w-full text-white lg:justify-center">
            <div className="xl:max-w-6xl lg:max-w-4xl max-w-6xl p-6 lg:py-6 w-full">
                <Image src={aloha} alt='logo' color='white'  />
            </div>
        </div>
    );
};

export default Footer;