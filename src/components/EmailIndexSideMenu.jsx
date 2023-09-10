import React from "react";
import {Link, useSearchParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileText, faInbox, faPaperPlane, faStar, faTrash} from "@fortawesome/free-solid-svg-icons";

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
                    <Link to="/inbox" title="Inbox">
                        <FontAwesomeIcon icon={faInbox} />&nbsp; Inbox
                    </Link>
                </li>
                <li>
                    <Link to="/starred" title="Starred">
                        <FontAwesomeIcon icon={faStar} />&nbsp; Starred
                    </Link>
                </li>
                <li>
                    <Link to="/sent" title="Sent">
                        <FontAwesomeIcon icon={faPaperPlane} />&nbsp; Sent
                    </Link>
                </li>
                <li>
                    <Link to="/drafts" title="Draft">
                        <FontAwesomeIcon icon={faFileText} />&nbsp; Drafts
                    </Link>
                </li>
                <li>
                    <Link to="/trash">
                        <FontAwesomeIcon icon={faTrash} />&nbsp; Trash
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default EmailIndexSideMenu;