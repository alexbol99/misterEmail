import EmailPreviewItem from "../EmailPreviewItem/EmailPreviewItem.jsx";
import styles from "../EmailPreview.module.css";

function EmailPreviewList({mails, pathname,
                              toggleIsSelected, toggleIsStarred, toogleIsViewed}) {
    return (
        <main className={styles["email-preview"]}>
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
        </main>
    );
}

export default EmailPreviewList;