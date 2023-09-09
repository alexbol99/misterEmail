import React from "react";
import {Link, useSearchParams} from "react-router-dom";

function EmailIndexSideMenu(props) {
    const [_, setSearchParams] = useSearchParams()

    function onComposeButtonClick() {
        setSearchParams({"compose":"new"})
    }

    return (
        <aside className="aside-menu">
            <button className="compose-button"
                    onClick={onComposeButtonClick}
            >
                Compose
            </button>
            <ul className="menu-items">
                <li>
                    <Link to="/inbox">Inbox</Link>
                </li>
                <li>
                    <Link to="/starred">Starred</Link>
                </li>
                <li>
                    <Link to="/sent">Sent</Link>
                </li>
                <li>
                    <Link to="/drafts">Drafts</Link>
                </li>
                <li>
                    <Link to="/trash">Trash</Link>
                </li>
            </ul>
        </aside>
    );
}

export default EmailIndexSideMenu;