import {useEffect, useState} from "react";
import {mailModelService} from "../services/mail-model.service.js";
import {useLocation, useNavigate} from "react-router";

function EmailCompose(props) {
    const [mail, setMail] = useState(null)
    const {pathname} = useLocation()
    const navigate = useNavigate()

    useEffect( () => {
        async function createEmptyMail() {
            const newMail = await mailModelService.create()
            if (newMail.id) setMail(newMail)
        }
        if (!mail) createEmptyMail()
    },[])

    async function onSubmitEmailCompose(event) {
        event.preventDefault()
        const form = event.currentTarget
        if (form["To"].value.trim() === "")
            return
        const updatedMail = {
            ...mail,
            To: form["To"].value,
            Subject: form["Subject"].value,
            Body: form["Body"].value,
            Date: new Date().toLocaleString(),
            isDraft: false
        }
        try {
            await mailModelService.update(updatedMail)
        }
        catch(err) {
            console.log(err.message)
        }
        navigate(pathname)
    }

    return (
        <div className="email-compose">
            <div className="compose-popup">
                <h2 className="compose-popup-title">New Message</h2>
                <form onSubmit={onSubmitEmailCompose}>
                    <label htmlFor="To">To:</label>
                    <input type="text" id="To" className="compose-input" placeholder="Recipient"/>
                    <label htmlFor="CC">CC:</label>
                    <input type="text" id="CC" className="compose-input" placeholder="CC"/>
                    <label htmlFor="Subject">Subject:</label>
                    <input type="text" id="Subject" className="compose-input" placeholder="Subject"/>
                    <textarea id="Body" className="compose-textarea"
                              placeholder="Compose your message..."></textarea>
                    {/*<input type="file" id="attachments" className="compose-input" multiple/>*/}
                    <button className="send-button">Send</button>
                </form>
            </div>
        </div>
    );
}

export default EmailCompose;