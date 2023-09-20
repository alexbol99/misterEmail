import {useEffect, useState} from "react";
import EmailPreviewItem from "./EmailPreviewItem/EmailPreviewItem.jsx";
import EmailPreviewHeader from "./EmailPreviewHeader/EmailPreviewHeader.jsx";
import {mailModelService} from "../../services/mail-model.service.js";
import styles from "./EmailPreview.module.css";
import EmailPreviewList from "./EmailPreviewList/EmailPreviewList.jsx";

function EmailPreview({
                          mails, pathname, pageNum,
                          toggleSelectAll, saveUpdatedMail,
                          toggleIsSelected,
                          toggleSelectedItemsAreDeleted, deleteSelectedItems,
                          onPrevPageButtonClick, onNextPageButtonClick,
                          toggleSortByDate, toggleSortBySubject
                      }) {
    const [paginationParams, setPaginationParams] = useState(null)

    useEffect(() => {
        async function getPaginationParams(pathname, pageNum) {
            const [start, end, total] = await mailModelService.getPaginationParams(pathname, pageNum)
            setPaginationParams({start: start, end: end, total: total})
        }

        getPaginationParams(pathname, pageNum)
    }, [pathname, pageNum])

    if (!mails) return <div>Loading mails ...</div>

    return (
        <div className={styles.emailPreviewContainer}>
            <EmailPreviewHeader mails={mails}
                                pathname={pathname}
                                paginationParams={paginationParams}
                                toggleSelectAll={toggleSelectAll}
                                toggleSelectedItemsAreDeleted={toggleSelectedItemsAreDeleted}
                                deleteSelectedItems={deleteSelectedItems}
                                onPrevPageButtonClick={onPrevPageButtonClick}
                                onNextPageButtonClick={onNextPageButtonClick}
                                toggleSortByDate={toggleSortByDate}
                                toggleSortBySubject={toggleSortBySubject}

            />

            <EmailPreviewList pathname={pathname}
                              mails={mails}
                              saveUpdatedMail={saveUpdatedMail}
                              toggleIsSelected={toggleIsSelected}
            />

        </div>
    );
}

export default EmailPreview;