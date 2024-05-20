import React from "react";

const Footer = (props) => {
    const txContent = props.txContent || "Copyright © Your Website 2019";
    return (
        <div className="container-fluid bg-dark p-3 d-flex justify-content-center align-item-center">
            <p className="text-white text-center mb-0">{txContent}</p>
        </div>
    );
}

export default Footer;