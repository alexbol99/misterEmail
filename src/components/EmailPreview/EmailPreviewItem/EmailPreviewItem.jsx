import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";
import styles from "./EmailPreviewItem.module.css";

function EmailPreviewItem({pathname, mail,
                              toggleIsSelected, toggleIsStarred, toogleIsViewed}) {
    const navigate = useNavigate()
    const [_, setSearchParams] = useSearchParams()

    function onPreviewItemClick(mail) {
        toogleIsViewed(mail)
        if (pathname==="/drafts") {
            setSearchParams({"compose":mail.id})
        }
        else {
            navigate(`${mail.id}`)
        }
    }

    function onSelectItemCheckboxClick(event, id) {
        toggleIsSelected(id)
    }

    function onStarMailClick(event, id) {
        toggleIsStarred(id)
    }

    const itemIsViewed = mail.isViewed ? "" : styles.emailPreviewItemUnread;
    const starCheckStyle = mail.isStarred ? styles.emailPreviewStarChecked : styles.emailPreviewStarUnchecked;

    return (
        <div className={styles.emailPreviewContainer}>
            <aside>
                <input className={styles.emailPreviewSelectCheckbox}
                       type="checkbox"
                       onChange={event => onSelectItemCheckboxClick(event, mail.id)}
                       checked={mail.isSelected}
                />
                <span className={`${styles.emailPreviewStar} ${starCheckStyle}`}
                      title={mail.isStarred ? "Starred" : "Not starred"}
                      onClick={event => onStarMailClick(event, mail)}
                ></span>
            </aside>

            <div className={`${styles.emailPreviewItem} ${itemIsViewed}`}
                onClick={() => onPreviewItemClick(mail)}
            >
                <div className={styles.emailPreviewItemFrom}>
                    {["/sent", "/drafts"].includes(pathname) ? `To:${mail.To.split('@')[0]}` : mail.From.split('@')[0]}
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