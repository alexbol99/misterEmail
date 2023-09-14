import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {mailModelService} from "../services/mail-model.service.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDownload,
    faLongArrowAltLeft,
    faTrash,
    faEnvelopeOpen,
    faTrashRestore
} from "@fortawesome/free-solid-svg-icons";

function EmailDetails({id, toogleIsViewed, toggleIsDeleted}) {
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

    if (!mail) return "Loading mail details"

    return (
        <div className="email-details">
            <nav className="breadcrumbs">
                <button className="back-button" title="Back to the previous page"
                        onClick={() => navigate(pathname.slice(0,pathname.indexOf(id)-1))}
                >
                    <FontAwesomeIcon icon={faLongArrowAltLeft} />
                </button>
                {/*<button className="action-button" title="Download">*/}
                {/*    <FontAwesomeIcon icon={faDownload} />*/}
                {/*</button>*/}
                <button className="action-button"
                        title={mail.isDeleted ? "Restore from trash folder" : "Move to trash folder"}
                        onClick={() => toggleIsDeleted(mail)}
                >
                    <FontAwesomeIcon
                        icon={mail.isDeleted ? faTrashRestore : faTrash}
                    />
                </button>
                <button className="action-button" title="Mark as unread"
                        onClick={() => toogleIsViewed(mail)}
                >
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                </button>
            </nav>

            <h2>{mail?.Subject}</h2>

            <div className="email-content">
                {mail?.Body}
            </div>

            <section className="attachments">
            </section>
        </div>
    );
}

export default EmailDetails;