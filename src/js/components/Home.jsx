import React from "react";
import SimpleCounter from "./counter.jsx"; 

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter}) => {

	const one = counter % 10;
	const two = Math.floor(counter / 10) % 10;
	const three = Math.floor(counter / 100) % 10;
	const four = Math.floor(counter / 1000) % 10;
	const five = Math.floor(counter / 10000) % 10;
	const six = Math.floor(counter / 100000) % 10;
    


	return (
		<div className="text-center">
			<div className="row"> 
			<SimpleCounter dataValues={<i className="fa-solid fa-clock mx-2"></i>} 
			 digitOne={six}
			 digitTwo={five}
			 digitThree={four}
			 digitFour={three}
			 digitFive={two}
			 digitSix={one}
			/> 

			</div>

		</div>
	);
};

export default Home;