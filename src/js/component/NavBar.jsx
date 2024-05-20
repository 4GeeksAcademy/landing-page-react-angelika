import React from "react";

const NavBar = (props) => {
    
    const menu = props.items || [
        { label: "Home" },
        { label: "About" },
        { label: "Service" },
        { label: "Contact" },
    ];

    const logo = props.logo || "Start Bootstrap";

    const items = menu.map(item => (
        <li className="nav-item" key={item.label}>
            <a className="nav-link text-light" href="#">{item.label}</a>
        </li>
    ));

    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">{logo}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {items}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
