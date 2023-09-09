import {useEffect, useState} from "react";
import {mailStorageService} from "../services/mail-storage.service.js";
import {useLocation, useNavigate} from "react-router";
import {mailModelService} from "../services/mail-model.service.js";

function EmailDetails({id}) {
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

    return (
        <div className="email-details">
            <nav className="horizontal-menu">
                <button className="back-button"
                        onClick={() => navigate(pathname.slice(0,pathname.indexOf(id)-1))}
                >
                    Back
                </button>
                <button className="action-button">Download</button>
                <button className="action-button">Delete</button>
                <button className="action-button">Mark as unread</button>
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