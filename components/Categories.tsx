import React from "react";
import { IBM_Plex_Mono } from "next/font/google";
import CategoryCard, { CategoryCardProps } from "./CategoryCard";

const mono = IBM_Plex_Mono({ weight: "700", subsets: ["latin"] });

interface CategoriesProps {
    data: Array<CategoryCardProps>;
}

const Categories: React.FC<CategoriesProps> = ({ data }): JSX.Element => {
    return (
        <div className='flex flex-col w-full gap-4'>
            <h3 className={'font-bold text-dark ' + mono.className}>Categories</h3>
            <div className='flex flex-col w-full gap-2'>
                {data.map((item: any, index: React.Key) => (
                    <CategoryCard key={index} name={item.name} />
                ))}
            </div>
        </div>
    );
};

export default Categories;