import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Header({setContextFilter}) {
    return (
        <header>
            <nav className="breadcrumbs">
                <button className="main-menu-button" title="Main menu">
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <div className="logo">MisterEmail</div>
            </nav>
            <input type="text"
                   className="search-box"
                   placeholder="Start typing to search ..."
                   onChange={setContextFilter}
            />
            <nav className="breadcrumbs">
                <a href="#">Help</a>
                <a href="#">Settings</a>
                <a href="#">User</a>
            </nav>
        </header>
    );
}

export default Header;