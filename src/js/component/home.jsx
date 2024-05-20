import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <NavBar />
            <Jumbotron />
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-md-6 col-lg-3">
                        <Card />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Card />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Card />
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
