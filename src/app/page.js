import BannerPage from '@/components/shared/Banner';
import Brands from '@/components/shared/Brands';
import Care from '@/components/shared/Care';
import Navbar from '@/components/shared/Navbar';
import PopoularPage from '@/components/shared/Popular';
import React from 'react';

const Home = () => {
	return (
		<>

			<BannerPage></BannerPage>
			<PopoularPage></PopoularPage>
			<Care></Care>
			<Brands></Brands>
		</>
	);
};

export default Home;