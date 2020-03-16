import React, { Fragment } from 'react';
import homeStyles from '../pages/home.module.scss';
import HomeForm from './HomeForm';

const Hero = () => {
	return (
		<Fragment>
			<div className={homeStyles.hero}>
				<div className="container">
					<HomeForm />
				</div>
			</div>
		</Fragment>
	);
};

export default Hero;
