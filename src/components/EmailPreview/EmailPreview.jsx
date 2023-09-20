import EmailPreviewHeader from "./EmailPreviewHeader/EmailPreviewHeader.jsx";
import EmailPreviewList from "./EmailPreviewList/EmailPreviewList.jsx";
import styles from "./EmailPreview.module.css";

function EmailPreview({
                          mails, pathname, paginationParams,
                          selectedMails,
                          toggleSelectAll, saveUpdatedMail,
                          toggleIsSelected,
                          toggleSelectedItemsAreDeleted, deleteSelectedItems,
                          onPrevPageButtonClick, onNextPageButtonClick,
                          toggleSortByDate, toggleSortBySubject
                      }) {

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
                              selectedMails={selectedMails}
                              saveUpdatedMail={saveUpdatedMail}
                              toggleIsSelected={toggleIsSelected}
            />

        </div>
    );
}

export default EmailPreview;