import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {mailModelService} from "../../services/mail-model.service.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLongArrowAltLeft,
    faTrash,
    faEnvelopeOpen,
    faTrashRestore
} from "@fortawesome/free-solid-svg-icons";
import styles from "./EmailDetails.module.css"

function EmailDetails({id, saveUpdatedMail}) {
    const [mail, setMail] = useState(null)
    const {pathname} = useLocation()
    const navigate= useNavigate()

    useEffect(() => {
        fetchMail()
    },[])

    async function fetchMail(){
        try {
            const mail = await mailModelService.getById(id)
            setMail(mail)
        }
        catch(err) {
            console.error(err.message)
            navigate(pathname.slice(0,pathname.indexOf(id)-1))
        }
    }

    async function onMarkAsUnreadClick() {
        await saveUpdatedMail({...mail, isViewed: !mail.isViewed})
        navigate(pathname.slice(0,pathname.indexOf(id)-1))
    }

    function toggleIsDeleted(mail) {
        saveUpdatedMail({...mail, isDeleted: !mail.isDeleted})
    }

    if (!mail) return "Loading mail details"

    return (
        <div className={styles["email-details"]}>
            <nav className="breadcrumbs">
                <button className="back-button" title="Back to the previous page"
                        onClick={() => navigate(pathname.slice(0,pathname.indexOf(id)-1))}
                >
                    <FontAwesomeIcon icon={faLongArrowAltLeft} />
                </button>
                {/*<button className="action-button" title="Download">*/}
                {/*    <FontAwesomeIcon icon={faDownload} />*/}
                {/*</button>*/}
                <button className={styles["action-button"]}
                        title={mail.isDeleted ? "Restore from trash folder" : "Move to trash folder"}
                        onClick={() => toggleIsDeleted(mail)}
                >
                    <FontAwesomeIcon
                        icon={mail.isDeleted ? faTrashRestore : faTrash}
                    />
                </button>
                <button className={styles["action-button"]} title="Mark as unread"
                        onClick={() => onMarkAsUnreadClick()}
                >
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                </button>
            </nav>

            <h2>{mail?.Subject}</h2>

            <div className={styles["email-content"]}>
                {mail?.Body}
            </div>

            <section className={styles["attachments"]}>
            </section>
        </div>
    );
}

export default EmailDetails;