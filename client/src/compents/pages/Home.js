import React from 'react';
import Listing from '../listing/Listing';
import Hero from '../layout/Hero';

import Service from '../layout/Service';

export const Home = (props) => {
	return (
		<div>
			<Hero />
			<Service />
			<Listing />
		</div>
	);
};

export default Home;
