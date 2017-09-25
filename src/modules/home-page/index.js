import React from 'react';
import HomePageHeader from 'src/modules/home-page/components/HomePageHeader';
import HomePageMenu from 'src/modules/home-page/components/HomePageMenu';
import HomePageImageSlider from 'src/modules/home-page/components/HomePageImageSlider';
import HomePageDescription from 'src/modules/home-page/components/HomePageDescription';
import HomePageSubTitle from 'src/modules/home-page/components/HomePageSubTitle';
import HomePageImagesPanel from 'src/modules/home-page/components/HomePageImagesPanel'

export default function HomePage() {
	return (
		<div>
			<HomePageHeader />
			<HomePageMenu />
			<HomePageImageSlider />
			<HomePageDescription />
			<HomePageSubTitle text="основные направления" />
			<HomePageImagesPanel />
			<HomePageSubTitle text="наши партнеры" />
		</div>
	);
}
