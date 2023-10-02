import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileText, faInbox, faPaperPlane, faStar, faTrash, faPen} from "@fortawesome/free-solid-svg-icons";

import styles from "./AsideMenu.module.css";
import {mailModelService} from "../../services/mail-model.service.js";
import {utilService} from "../../services/util.service.js";
import {Drawer} from "@mui/material";

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

function AsideMenu() {
    const [unreadCounter, setUnreadCounter] = useState(0)
    const [expanded, _] = useState(utilService.isNarrowDevice())
    const {pathname} = useLocation()

    useEffect( () => {
        getUnreadCounter()
    })
    async function getUnreadCounter() {
        try {
            const unreadCounter = await mailModelService.getUnreadCounter()
            setUnreadCounter(unreadCounter)
        } catch (err) {
            console.error(err.message)
        }
    }

    const toggleDrawer = (anchor, open) => (event) => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     return;
        // }
        //
        // setState({ ...state, [anchor]: open });
    };

    return (
        <aside className={styles.asideMenu}>
            <Drawer
                variant="persistent"
                anchor="left"
                open={true}
                onClose={toggleDrawer("left", false)}
            >
            <div className={`${styles.menuItem} ${styles.itemComposeButton}`}>
                <NavLink to={`${pathname}/?compose=new`} title="Compose new mail">
                    <FontAwesomeIcon icon={faPen} />
                    &nbsp;
                    <span>Compose</span>
                </NavLink>
            </div>
            <ul className={styles.menuItems}>
                {menu.map(item =>
                    <MenuItem
                        key={item.name}
                        to={item.to}
                        name={item.name}
                        icon={item.icon}
                        selected={false}     // pathname===item.to}
                        expanded={expanded}
                        unreadCounter={unreadCounter}
                    />
                )}
            </ul>
            </Drawer>
        </aside>
    );
}

export default AsideMenu;