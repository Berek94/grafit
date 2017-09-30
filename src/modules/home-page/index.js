import React from 'react';
import HomePageHeader from 'src/modules/home-page/components/HomePageHeader';
import HomePageImageSlider from 'src/modules/home-page/components/HomePageImageSlider';
import HomePageDescription from 'src/modules/home-page/components/HomePageDescription';
import HomePageSubTitle from 'src/modules/home-page/components/HomePageSubTitle';
import HomePageImagesPanel from 'src/modules/home-page/components/HomePageImagesPanel';
import HomePagePartners from 'src/modules/home-page/components/HomePagePartners';

export default function HomePage() {
	return (
		<div>
			<HomePageHeader />
			<HomePageImageSlider />
			<HomePageDescription />
			<HomePageImagesPanel />
			<HomePageSubTitle text="наши партнеры" />
			<HomePagePartners />
		</div>
	);
}
