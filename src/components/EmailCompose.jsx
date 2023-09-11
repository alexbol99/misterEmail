import {useEffect, useState} from "react";
import {mailModelService} from "../services/mail-model.service.js";
import {useLocation, useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";

function EmailCompose(props) {
    const [mail, setMail] = useState(null)
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const [searchParams, _] = useSearchParams()

    useEffect( () => {
        async function createEmptyMail() {
            try {
                const newMail = await mailModelService.create()
                if (newMail.id) setMail(newMail)
            }
            catch (err) {
                console.log(err.message)
                navigate(pathname)
            }
        }
        async function fetchMailById(id) {
            try {
                const existingMail = await mailModelService.getById(id)
                setMail(existingMail)
            }
            catch (err) {
                console.log(err.message)
                navigate(pathname)
            }
        }
        if (!mail) {
            const id = searchParams.get("compose")
            if (id === "new") {
                createEmptyMail()
            }
            else {
                fetchMailById(id)
            }
        }
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
                    <input type="text" id="To" className="compose-input" placeholder="Recipient"
                           defaultValue={mail?.To}/>
                    <label htmlFor="CC">CC:</label>
                    <input type="text" id="CC" className="compose-input" placeholder="CC"/>
                    <label htmlFor="Subject">Subject:</label>
                    <input type="text" id="Subject" className="compose-input" placeholder="Subject"
                           defaultValue={mail?.Subject}
                    />
                    <textarea id="Body" className="compose-textarea"
                              placeholder="Compose your message..."
                              defaultValue={mail?.Body}
                    ></textarea>
                    <button className="send-button">Send</button>
                </form>
            </div>
        </div>
    );
}

export default EmailCompose;