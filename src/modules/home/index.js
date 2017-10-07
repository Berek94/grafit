import React from 'react';

import HomePageImageSlider from 'src/modules/home/components/HomePageImageSlider';
import HomePageDescription from 'src/modules/home/components/HomePageDescription';
import HomePageImagesPanel from 'src/modules/home/components/HomePageImagesPanel';
import HomePagePartners from 'src/modules/home/components/HomePagePartners';
import HomePageInstagramInfo from 'src/modules/home/components/HomePageInstagramInfo';

export default function HomePage() {
	return (
		<div>
			<HomePageImageSlider />
			<HomePageDescription />
			<HomePageImagesPanel />
			<HomePagePartners />
			<HomePageInstagramInfo />
		</div>
	);
}
