import EmailPreviewItem from "../EmailPreviewItem/EmailPreviewItem.jsx";
import styles from "../EmailPreview.module.css";

function EmailPreviewList({mails, pathname,
                              toggleIsSelected, toggleIsStarred, toogleIsViewed}) {
    return (
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
    );
}

export default EmailPreviewList;