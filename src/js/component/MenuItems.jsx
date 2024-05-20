import React from "react";

const MenuItems = ({item}) => {
    return (
        <li className="nav-item" key={item.label}>
            <a className="nav-link text-light" href="#">{item.label}</a>
        </li>
    )
}

export default MenuItems;