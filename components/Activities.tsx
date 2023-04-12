import React from 'react';
import ActivityCard from './ActivityCard';

interface ActivitiesProps {
    data: Array<any>;
}

const Activities: React.FC<ActivitiesProps> = ({ data }): JSX.Element => {
    return (
        <div className='w-full flex bg-light lg:justify-center'>
            <div className='grid lg:grid-cols-2 grid-cols-1 xl:max-w-6xl lg:max-w-4xl max-w-6xl px-6 lg:px-0 w-full pt-10 pb-20 gap-8'>
                {data.map((item: any, index: React.Key) => (
                    <ActivityCard key={index} name={item.name} />
                ))}
            </div>
        </div>
    )
};

export default Activities;