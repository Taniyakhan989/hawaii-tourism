import API from '../api';
import NavBar from '@/components/NavBar'
import HeroImage from '@/components/HeroImage'
import Highlights from '@/components/Highlights';
import { HighlightCardProps } from '@/components/HighlightCard';
import Bottom from '@/components/Bottom';
import { CategoryCardProps } from '@/components/CategoryCard';
import React from 'react';
import Footer from '@/components/Footer';

interface HomeProps {
	data: {
		highlights: Array<HighlightCardProps>,
		categories: Array<CategoryCardProps>
	}
}

const Home: React.FC<HomeProps> = ({ data }): JSX.Element => {
	// add overlay text on the image
	return (
		<div className='flex flex-col items-center bg-white'>
			<NavBar />
			<HeroImage />
			<Highlights data={data.highlights} />
			<Bottom data={data.categories} />
			<Footer />
		</div>
	);
};

export async function getStaticProps(): Promise<{ props: HomeProps }> {
	const highlights = await API.getHighlights();
	const categories = await API.getCategories();
	return {
		props: {
			data: {
				highlights,
				categories
			}
		}
	};
}

export default Home;