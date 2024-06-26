import React from "react";
import MenuItems from "./MenuItems";

const NavBar = ({items, logo}) => {
    
    const menu = items || [
        { label: "Home" },
        { label: "About" },
        { label: "Service" },
        { label: "Contact" },
    ];

    const navbarLogo = logo || "Start Bootstrap";


    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">{navbarLogo}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {menu.map((item, index) => (
                            <MenuItems key={index} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;