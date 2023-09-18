import EmailDetails from "../../components/EmailDetails/EmailDetails.jsx";
import EmailPreview from "../../components/EmailPreview/EmailPreview.jsx";
// import styles from "./Main.module.css";

function Main({mails, filterBy, mailId,
                  toggleSelectAll, toggleIsSelected, toggleIsStarred, toogleIsViewed, toggleIsDeleted,
                  toggleSelectedItemsIsDeleted, deletedSelectedItems,
                  onPrevPageButtonClick, onNextPageButtonClick,
                  toggleSortByDate, toggleSortBySubject
              }) {
    return (
        <main>
            {mailId ?
                <EmailDetails id={mailId}
                              toogleIsViewed={toogleIsViewed}
                              toggleIsDeleted={toggleIsDeleted}
                /> :
                mails && <EmailPreview mails={mails}
                                       pathname={filterBy.pathname}
                                       pageNum={filterBy.pageNum}
                                       toggleSelectAll={toggleSelectAll}
                                       toggleIsSelected={toggleIsSelected}
                                       toggleIsStarred={toggleIsStarred}
                                       toogleIsViewed={toogleIsViewed}
                                       toggleSelectedItemsIsDeleted={toggleSelectedItemsIsDeleted}
                                       deletedSelectedItems={deletedSelectedItems}
                                       onPrevPageButtonClick={onPrevPageButtonClick}
                                       onNextPageButtonClick={onNextPageButtonClick}
                                       toggleSortByDate={toggleSortByDate}
                                       toggleSortBySubject={toggleSortBySubject}
                />
            }
        </main>
    );
}

export default Main;