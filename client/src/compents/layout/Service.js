import React from 'react';
import { FaFolder , FaMoneyBillAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import homeStyles from '../pages/home.module.scss';

import { IconContext } from "react-icons";




const Service = ({icon}) => {
	return (
		<IconContext.Provider value={{ size: "2rem"}}>
    <div>
			<h2>Our Services </h2>
			<div>
				<div className='grid-3 container' >
          <div className={homeStyles.service}>
          <div className={homeStyles.serviceTitle}>
					<h2>  <FaFolder/> Wide Range of Properties</h2>
          </div>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, cum.</p>
          <p> Read More </p>
      </div>
      <div className={homeStyles.service}>
          <div className={homeStyles.serviceTitle}>
					<h2>  <IoIosPeople/> Agents for Your Service</h2>
          </div>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, cum.</p>
          <p> Read More </p>
      </div>
      <div className={homeStyles.service}>
          <div className={homeStyles.serviceTitle}>
					<h2>  <FaMoneyBillAlt/> Best Price Guarantee!
</h2>
          </div>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, cum.</p>
          <p> Read More </p>
      </div>
				
				</div>
			</div>
		</div>
    </IconContext.Provider>
	);
};

Service.defaultProps = {
  icon: 'fas fa-folder'
}

export default Service;
