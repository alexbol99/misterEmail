import React from "react";
import {NavLink, useSearchParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileText, faInbox, faPaperPlane, faStar, faTrash, faPen} from "@fortawesome/free-solid-svg-icons";
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
function MenuItem({to, name, icon, selected, expanded, unreadCounter}) {
    return (
        <li className={`${styles.menuItem} ${styles.itemLink} ${selected ? styles.itemLinkSelected : ""}`}>
            <NavLink to={to} title={name} >
                <FontAwesomeIcon icon={icon} />&nbsp;
                {expanded && <span className={styles.title}>{name}</span>}
                {expanded && name === "Inbox" && unreadCounter > 1 &&
                    <span className={styles.unreadCounter}>{unreadCounter}</span>}
            </NavLink>
        </li>
    )

}

function AsideMenu({expanded, unreadCounter}) {
    const [_, setSearchParams] = useSearchParams()
    const {pathname} = useLocation()

    function onComposeButtonClick() {
        setSearchParams({"compose":"new"})
    }

    return (
        <aside className={styles.asideMenu}>
            <button className={`${styles.menuItem} ${styles.itemComposeButton}`}
                    onClick={onComposeButtonClick}>
                <FontAwesomeIcon icon={faPen} />
                &nbsp;
                <span>Compose</span>
            </button>
            <ul className={styles.menuItems}>
                {menu.map(item =>
                    <MenuItem
                        key={item.name}
                        to={item.to}
                        name={item.name}
                        icon={item.icon}
                        selected={pathname===item.to}
                        expanded={expanded}
                        unreadCounter={unreadCounter}
                    />
                )}
            </ul>
        </aside>
    );
}

export default AsideMenu;