import React from "react";
import {Link, useSearchParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileText, faInbox, faPaperPlane, faStar, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router";

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
        <li className={selected ? "menu-item-selected" : ""}>
            <Link to={to} title={name} >
                <FontAwesomeIcon icon={icon} />&nbsp; {name}
            </Link>
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
        <aside className="aside-menu">
            <button className="compose-button"
                    onClick={onComposeButtonClick}>
                Compose
            </button>
            <ul className="menu-items">
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