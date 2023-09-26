import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";
import styles from "./EmailPreviewItem.module.css";

function EmailPreviewItem({pathname, mail, isSelected, saveUpdatedMail, toggleIsSelected}) {
    const navigate = useNavigate()
    const [_, setSearchParams] = useSearchParams()

    function onPreviewItemClick(mail) {
        saveUpdatedMail({...mail, isViewed: !mail.isViewed})
        if (pathname === "/drafts") {
            setSearchParams({"compose":mail.id})
        }
        else {
            navigate(`${mail.id}`)
        }
    }

    function onStarMailClick(mail) {
        saveUpdatedMail({...mail, isStarred: !mail.isStarred})
    }

    const itemIsViewed = mail.isViewed ? "" : styles.emailPreviewItemUnread;
    const starCheckStyle = mail.isStarred ? styles.emailPreviewStarChecked : styles.emailPreviewStarUnchecked;

    return (
        <div className={styles.emailPreviewContainer}>
            <div className={styles.asideIcons}>
                <input className={styles.emailPreviewSelectCheckbox}
                       type="checkbox"
                       onChange={() => toggleIsSelected(mail)}
                       checked={isSelected}
                />
                <span className={`${styles.emailPreviewStar} ${starCheckStyle}`}
                      title={mail.isStarred ? "Starred" : "Not starred"}
                      onClick={() => onStarMailClick(mail)}
                ></span>
            </div>

            <div className={`${styles.emailPreviewItem} ${itemIsViewed}`}
                onClick={() => onPreviewItemClick(mail)}
            >
                <div className={styles.emailPreviewItemFrom}>
                    {["/sent", "/drafts", "/trash"].includes(pathname) ?
                        `To:${mail.To.split('@')[0]}` :
                        mail.From.split('@')[0]}
                </div>
                <div className={styles.emailPreviewItemContent}>
                    {mail.Subject}
                </div>
                <div className={styles.emailPreviewItemDate}>
                    {new Date(mail.Date).toLocaleDateString()}
                </div>
            </div>
        </div>
    );
}

export default EmailPreviewItem;