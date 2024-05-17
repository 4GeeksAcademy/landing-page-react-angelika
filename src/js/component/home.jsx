import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<div className="d-flex justify-content-evenly">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</>
	);
};

export default Home;
