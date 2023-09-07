import {useEffect, useState} from "react";
import {mailService} from "../services/mail.service.js";
import {useNavigate} from "react-router";

function EmailDetails({id}) {
    const [mail, setMail] = useState(null)
    const navigate= useNavigate()

    useEffect(() => {
        fetchMail()
    },[])

    async function fetchMail(){
        try {
            const mail = await mailService.getById(id)
            setMail(mail)
        }
        catch(err) {
            console.error(err.message)
            navigate("/inbox")
        }
    }

    return (
        <div className="email-details">
            <nav className="horizontal-menu">
                <button className="back-button"
                        onClick={() => navigate("/inbox")}
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