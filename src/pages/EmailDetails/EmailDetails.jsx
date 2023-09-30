import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router";

import {mailModelService} from "../../services/mail-model.service.js";
import {userService} from "../../services/user.service.js";
import {showErrorMsg, showSuccessMsg} from "../../services/event-bus.service.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLongArrowAltLeft,
    faTrash,
    faEnvelopeOpen,
    faTrashRestore
} from "@fortawesome/free-solid-svg-icons";
import styles from "./EmailDetails.module.css"

function EmailDetails() {
    const {mailId} = useParams()
    const [mail, setMail] = useState(null)
    const {pathname} = useLocation()
    const navigate= useNavigate()

    useEffect(() => {
        fetchMail()
    },[])

    async function fetchMail(){
        try {
            const mail = await mailModelService.getById(mailId)
            setMail(mail)
        }
        catch(err) {
            console.error(err.message)
            navigate(pathname.slice(0,pathname.indexOf(mailId)-1))
        }
    }

    async function onMarkAsUnreadClick() {
        await saveUpdatedMail({...mail, isViewed: !mail.isViewed})
        navigate(pathname.slice(0,pathname.indexOf(mailId)-1))
    }

    async function saveUpdatedMail(updatedMail, message = "") {
        try {
            await mailModelService.update(updatedMail)
            if (message) {
                showSuccessMsg(message)
            }
        }
        catch(err) {
            showErrorMsg("Error occurred while saving email")
        }
    }

    function toggleIsDeleted(mail) {
        saveUpdatedMail({...mail, isDeleted: !mail.isDeleted}, "Messages moved to Trash folder")
    }

    if (!mail) return (<div className={styles.emailDetailsContainer}>Loading mail details</div>)

    return (
        <div className={styles.emailDetailsContainer}>
            <header className={styles.header}>
                <nav className="breadcrumbs">
                    <button className="back-button" title="Back to the previous page"
                            onClick={() => navigate(pathname.slice(0,pathname.indexOf(mailId)-1))}
                    >
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />
                    </button>
                    {/*<button className="action-button" title="Download">*/}
                    {/*    <FontAwesomeIcon icon={faDownload} />*/}
                    {/*</button>*/}
                    <button className={styles["actionButton"]}
                            title={mail.isDeleted ? "Restore from trash folder" : "Move to trash folder"}
                            onClick={() => toggleIsDeleted(mail)}
                    >
                        <FontAwesomeIcon
                            icon={mail.isDeleted ? faTrashRestore : faTrash}
                        />
                    </button>
                    <button className={styles["actionButton"]} title="Mark as unread"
                            onClick={() => onMarkAsUnreadClick()}
                    >
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                    </button>
                </nav>
            </header>



            <h2 className={styles.subject} dir="auto">
                {mail.Subject}
            </h2>

            <p className={styles.from}>
                {userService.currentUser === mail.To ? mail.From : mail.To}
            </p>

            <div className={styles.date}>
                {mail.Date}
            </div>

            <p className={styles.content} dir="auto">
                {mail.Body}
            </p>

            <section className={styles.attachments}>
            </section>
        </div>
    );
}

export default EmailDetails;