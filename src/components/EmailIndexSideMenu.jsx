import React from "react";
import {Link} from "react-router-dom";

function EmailIndexSideMenu(props) {
    return (
        <aside className="aside-menu">
            <button className="compose-button">Compose</button>
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