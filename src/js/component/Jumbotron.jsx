import React from "react";

const Jumbotron = () => {
    return (
        <div className="alert alert-secondary pt-5 pb-5" role="alert">
            <div className="card-body">
                <h1 className="card-title text-black">A Warm Welcome</h1>
                <p className="card-text text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas distinctio labore nostrum sint consectetur reiciendis amet fugiat asperiores quibusdam ea, aperiam neque impedit cupiditate magnam at enim dolore sit.</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
            </div>
        </div>
    );
};

export default Jumbotron;