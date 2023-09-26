import EmailPreviewItem from "../EmailPreviewItem/EmailPreviewItem.jsx";
import styles from "./EmailPreviewList.module.css";

function EmailPreviewList({mails, selectedMails, pathname, toggleIsSelected, saveUpdatedMail}) {
    return (
        <main className={styles.emailPreview}>
            {mails.map(mail =>
                <EmailPreviewItem key={mail.id}
                                  pathname={pathname}
                                  mail={mail}
                                  isSelected={selectedMails.includes(mail)}
                                  toggleIsSelected={toggleIsSelected}
                                  saveUpdatedMail={saveUpdatedMail}
                />
            )}
        </main>
    );
}

export default EmailPreviewList;