import EmailDetails from "../../components/EmailDetails/EmailDetails.jsx";
import EmailPreview from "../../components/EmailPreview/EmailPreview.jsx";
import {useParams} from "react-router";
// import styles from "./Main.module.css";

function Main({mails, filterBy, paginationParams,
                  toggleSelectAll, saveUpdatedMail,
                  toggleIsSelected,
                  toggleSelectedItemsAreDeleted, deleteSelectedItems,
                  onPrevPageButtonClick, onNextPageButtonClick,
                  toggleSortByDate, toggleSortBySubject
              }) {
    const {mailId} = useParams()

    return (
        <main>
            {mailId ?
                <EmailDetails id={mailId}
                              saveUpdatedMail={saveUpdatedMail}
                /> :
                <EmailPreview mails={mails}
                              pathname={filterBy.pathname}
                              paginationParams={paginationParams}
                              toggleSelectAll={toggleSelectAll}
                              saveUpdatedMail={saveUpdatedMail}
                              toggleIsSelected={toggleIsSelected}
                              toggleSelectedItemsAreDeleted={toggleSelectedItemsAreDeleted}
                              deleteSelectedItems={deleteSelectedItems}
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