import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

function Header({setContextFilter}) {
    return (
        <header className={styles.appHeader}>
            <section  className={styles.logoSection}>
                <button className={styles.mainMenuButton} title="Main menu">
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <h1 className={styles.logo}>MisterEmail</h1>
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