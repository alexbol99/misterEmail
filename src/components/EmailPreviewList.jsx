import EmailPreviewItem from "./EmailPreviewItem.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faTrashRestore} from "@fortawesome/free-solid-svg-icons";
import {mailModelService} from "../services/mail-model.service.js";
import {useEffect, useState} from "react";

function EmailPreviewList({mails, pathname, pageNum,
                              toggleSelectAll, toggleIsSelected, toggleIsStarred, toogleIsViewed,
                              toggleSelectedItemsIsDeleted, deletedSelectedItems,
                              onPrevPageButtonClick, onNextPageButtonClick,
                              toggleSortByDate, toggleSortBySubject
                          }) {
    const [paginationParams, setPaginationParams] = useState(null)
    useEffect(() => {
        async function getPaginationParams(pathname, pageNum){
            const [start, end, total] = await mailModelService.getPaginationParams(pathname, pageNum)
            setPaginationParams({start: start, end: end, total: total})
        }
        getPaginationParams(pathname, pageNum)
    },[pathname, pageNum])

    return (
        <div className="items-list">
            <div className="list-header">
                <input type="checkbox"
                       className="select-all-checkbox"
                       onClick={(event) => toggleSelectAll(event.target.checked)}
                />
                <button className=""
                        onClick={pathname==="/trash" ?
                            deletedSelectedItems :
                            toggleSelectedItemsIsDeleted}
                        title={pathname==="/trash" ?
                            "Completely delete selected mails" :
                            "Move selected mails to Trash folder"}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                {pathname === "/trash" &&
                    <button className="" onClick={toggleSelectedItemsIsDeleted}
                            title="Restore selected mails from Trash folder">
                        <FontAwesomeIcon icon={faTrashRestore}/>
                    </button>
                }
                <button className="sort-button"
                        title="Sort by date"
                        onClick={toggleSortByDate}

                >
                    Sort By Date
                </button>
                <button className="sort-button"
                        title="Sort by subject"
                        onClick={toggleSortBySubject}
                >
                    Sort By Subject
                </button>
                {paginationParams && mails.length > 0 &&
                    <div className="pagination">
                        {`${paginationParams.start+1}-${paginationParams.end} of ${paginationParams.total}`}
                    </div>}
                {paginationParams && mails.length > 0 &&
                    <button className="pagination-button"
                            onClick={() => onPrevPageButtonClick()}
                    >
                    &#8249;
                </button>}
                {paginationParams && mails.length > 0 &&
                    <button className="pagination-button"
                            onClick={() => onNextPageButtonClick()}
                    >
                    &#8250;
                </button>}
            </div>

            <div className="email-preview">
                <ul className="items-list">
                    {mails.map(mail =>
                            <EmailPreviewItem key={mail.id}
                                              pathname={pathname}
                                              mail={mail}
                                              toggleIsSelected={toggleIsSelected}
                                              toggleIsStarred={toggleIsStarred}
                                              toogleIsViewed={toogleIsViewed}
                            />
                        )}
                </ul>
            </div>
        </div>
    );
}

export default EmailPreviewList;