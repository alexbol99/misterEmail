import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {useLocation} from "react-router";

function Header({setContextFilter, toggleExpandMenu}) {
    const {pathname} = useLocation()
    return (
        <header className={styles.appHeader}>
            <section className={styles.logoSection}>
                <button className={styles.mainMenuButton}
                        title="Shrink/expand menu"
                        onClick={toggleExpandMenu}
                >
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <NavLink to={pathname}>
                    <h1 className={styles.logo}>MisterEmail</h1>
                </NavLink>
            </section>
            <input type="text"
                   className={styles.searchBox}
                   placeholder="Start typing to search ..."
                   onChange={setContextFilter}
            />
            <section className={styles.breadcrumbs}>
                <a href="#">Help</a>
                <a href="#">Settings</a>
                <a href="#">User</a>
            </section>
        </header>
    );
}

export default Header;