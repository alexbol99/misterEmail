import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faTrashRestore} from "@fortawesome/free-solid-svg-icons";
import styles from "./EmailPreviewHeader.module.css";

function EmailPreviewHeader({mails, pathname, paginationParams,
                                toggleSelectAll,
                                toggleSelectedItemsIsDeleted, deletedSelectedItems,
                                onPrevPageButtonClick, onNextPageButtonClick,
                                toggleSortByDate, toggleSortBySubject
                            }) {
    return (
        <header className={styles["list-header"]} >
            <input type="checkbox"
                   className={styles["select-all-checkbox"]}
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
            <button className={styles["sort-button"]}
                    title="Sort by date"
                    onClick={toggleSortByDate}

            >
                Sort By Date
            </button>
            <button className={styles["sort-button"]}
                    title="Sort by subject"
                    onClick={toggleSortBySubject}
            >
                Sort By Subject
            </button>
            {paginationParams && mails.length > 0 &&
                <div className={styles["pagination"]}>
                    {`${paginationParams.start+1}-${paginationParams.end} of ${paginationParams.total}`}
                </div>}
            {paginationParams && mails.length > 0 &&
                <button className={styles["pagination-button"]}
                        onClick={() => onPrevPageButtonClick()}
                >
                    &#8249;
                </button>}
            {paginationParams && mails.length > 0 &&
                <button className={styles["pagination-button"]}
                        onClick={() => onNextPageButtonClick()}
                >
                    &#8250;
                </button>}
        </header>
    );
}

export default EmailPreviewHeader;