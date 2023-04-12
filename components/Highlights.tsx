import React from "react";
import HighlightCard, { HighlightCardProps } from "./HighlightCard";
import { IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({ weight: "700", subsets: ["latin"] });

interface HighlightsProps {
    data: Array<HighlightCardProps>;
}

const Highlights: React.FC<HighlightsProps> = ({ data }): JSX.Element => {

    return (
        <>
        <div className='flex flex-col bg-white w-full xl:max-w-6xl lg:max-w-4xl w-full items-start pt-10 px-6 lg:px-0'>
            <h3 className={'font-bold text-dark ' + mono.className}>Highlights</h3>
        </div>
        <div className='flex flex-row w-full py-6 pb-20 overflow-x-auto overscroll-x-auto lg:justify-center'>
            <div className='flex flex-row xl:max-w-6xl lg:max-w-4xl max-w-6xl gap-4 px-6 lg:px-0 '>
                {data.map((item: HighlightCardProps, index: React.Key) => (
                    <HighlightCard key={index} image={item.image} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
        </>
    );
};

export default Highlights;