import { useRouter } from 'next/router'
import React from 'react'
import Activities from '../../components/Activities';
import API from '@/api'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroImage from '@/components/HeroImage';
import Description from '@/components/Description';

const ActivityPage: React.FC<any> = ({ data, highlights }): JSX.Element => {
    return (
        <div className='flex flex-col items-center'>
			<NavBar data={highlights} />
            <HeroImage image={data.image} text={data.name} imageProps={{width: 500, height: 500}} textStyle='text-white' />
            <Description description={data.description} />
            <Activities data={data.activities} />
			<Footer />
		</div>
    )
};

export async function getServerSideProps(context: any): Promise<any> {
    const { activity } = context.query;
    try {
        const data = await API.getActivities(activity);
        const highlights = await API.getHighlights();
        return {
            props: {
                highlights,
                data
            }
        };
    } catch (error) {
        console.log(error);
        // redirect to 404 page
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        };
    }
}

export default ActivityPage;