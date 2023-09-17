import React from "react";
import {Link, NavLink, useSearchParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileText, faInbox, faPaperPlane, faStar, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router";

import styles from "./AsideMenu.module.css";

const menu = [
    {
        to: "/inbox",
        name: "Inbox",
        icon: faInbox,
    },
    {
        to: "/starred",
        name: "Starred",
        icon: faStar,
    },
    {
        to: "/sent",
        name: "Sent",
        icon: faPaperPlane,
    },
    {
        to: "/drafts",
        name: "Drafts",
        icon: faFileText,
    },
    {
        to: "/trash",
        name: "Trash",
        icon: faTrash,
    },
]
function MenuItem({to, name, icon, selected}) {
    return (
        <li className={selected ? styles.menuItemSelected : ""}>
            <NavLink to={to} title={name} >
                <FontAwesomeIcon icon={icon} />&nbsp; {name}
            </NavLink>
        </li>
    )

}

function AsideMenu(props) {
    const [_, setSearchParams] = useSearchParams()
    const {pathname} = useLocation()

    function onComposeButtonClick() {
        setSearchParams({"compose":"new"})
    }

    return (
        <aside className={styles.asideMenu}>
            <button className={styles.composeButton}
                    onClick={onComposeButtonClick}>
                Compose
            </button>
            <ul className={styles.menuItems}>
                {menu.map(item =>
                    <MenuItem
                        key={item.name}
                        to={item.to}
                        name={item.name}
                        icon={item.icon}
                        selected={pathname===item.to}
                    />
                )}
            </ul>
        </aside>
    );
}

export default AsideMenu;