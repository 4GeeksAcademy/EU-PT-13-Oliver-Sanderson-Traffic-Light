import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Traffic from "./traffic";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Traffic />
		</div>
	);
};

export default Home;
