import {useEffect, useState} from "react";
import EmailPreviewItem from "./EmailPreviewItem/EmailPreviewItem.jsx";
import EmailPreviewHeader from "./EmailPreviewHeader/EmailPreviewHeader.jsx";
import {mailModelService} from "../../services/mail-model.service.js";
import styles from "./EmailPreview.module.css";

function EmailPreview({mails, pathname, pageNum,
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
        <div className={styles.emailPreviewContainer}>
            <EmailPreviewHeader mails={mails}
                                pathname={pathname}
                                paginationParams={paginationParams}
                                toggleSelectAll={toggleSelectAll}
                                toggleSelectedItemsIsDeleted={toggleSelectedItemsIsDeleted}
                                deletedSelectedItems={deletedSelectedItems}
                                onPrevPageButtonClick={onPrevPageButtonClick}
                                onNextPageButtonClick={onNextPageButtonClick}
                                toggleSortByDate={toggleSortByDate}
                                toggleSortBySubject={toggleSortBySubject}

            />

            <div className={styles["email-preview"]}>
                <ul className={styles["items-list"]}>
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

export default EmailPreview;