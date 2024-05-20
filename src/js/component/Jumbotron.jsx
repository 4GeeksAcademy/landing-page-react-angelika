import React from "react";
import BtnCta from "./BntCta";

const Jumbotron = (props) => {

    const greeting = props.greeting || "A Warm Welcome";
    const txContent = props.txContent || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas distinctio labore nostrum sint consectetur reiciendis amet fugiat asperiores quibusdam ea, aperiam neque impedit cupiditate magnam at enim dolore sit.";
    return (
        <div className="alert alert-secondary pt-5 pb-5" role="alert">
            <div className="card-body">
                <h1 className="card-title text-black">{greeting}</h1>
                <p className="card-text text-black">{txContent}</p>
                <BtnCta />
            </div>
        </div>
    );
};

export default Jumbotron;