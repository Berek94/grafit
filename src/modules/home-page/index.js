import React from 'react';
import HomePageHeader from 'src/modules/home-page/components/HomePageHeader';
import HomePageImageSlider from 'src/modules/home-page/components/HomePageImageSlider';
import HomePageDescription from 'src/modules/home-page/components/HomePageDescription';
import HomePageImagesPanel from 'src/modules/home-page/components/HomePageImagesPanel';
import HomePagePartners from 'src/modules/home-page/components/HomePagePartners';
import HomePageInstagramInfo from 'src/modules/home-page/components/HomePageInstagramInfo';

export default function HomePage() {
	return (
		<div>
			<HomePageHeader />
			<HomePageImageSlider />
			<HomePageDescription />
			<HomePageImagesPanel />
			<HomePagePartners />
			<HomePageInstagramInfo />
		</div>
	);
}
