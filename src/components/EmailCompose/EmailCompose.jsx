import {useEffect, useRef, useState} from "react";
import {mailModelService} from "../../services/mail-model.service.js";
import {useLocation, useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";
import styles from "./EmailCompose.module.css";

function EmailCompose({saveUpdatedMail}) {
    const [mail, setMail] = useState(null)
    const [isDraft, setIsDraft] = useState(true)
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const [searchParams, _] = useSearchParams()
    const mailRef = useRef(mail);

    const id = searchParams.get("compose")

    useEffect(() => {
        const intervalId = setInterval(() => {
            saveUpdatedMail(mailRef.current)
        }, 5000)

        return () => clearInterval(intervalId)
    }, [])
    useEffect(() => {
        // Update the mailRef whenever state changes
        mailRef.current = mail;
    }, [mail]);

    useEffect( () => {
        if (id === "new") {
            createEmptyMail()
        } else {
            fetchMailById(id)
        }

        return () => {
            saveUpdatedMail(mailRef.current)
        }
    },[id])

    useEffect(() => {
        if (!isDraft) {
            navigate(pathname)
        }
    }, [isDraft])

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

    async function updateMail(mail) {
        try {
            await mailModelService.update(mail)
        }
        catch(err) {
            console.log(err.message)
            navigate(pathname)
        }
    }

    function onChange(event) {
        let { value, name: field } = event.target
        setMail((prev) => ({ ...prev, [field]: value }))
    }

    async function onSubmit(event) {
        event.preventDefault()
        await updateMail({...mail, Date: new Date().toLocaleString(), isDraft: false})
        setMail(prevMail => {
            return {...prevMail, Date: new Date().toLocaleString(), isDraft: false}
        })
        setIsDraft(false)
    }

    if (!mail) return <div>"Loading mail"</div>

    return (
        <div className={styles["email-compose"]}>
            <div className={styles["compose-popup"]}>
                <h2 className={styles["compose-popup-title"]}>
                    { id === "new" ? "New Message" : mail.Subject}
                </h2>
                <form onSubmit={onSubmit}>
                    <label htmlFor="To">To:</label>
                    <input type="text"
                           id="To"
                           name="To"
                           className={styles["compose-input"]}
                           placeholder="Recipient"
                           onChange={onChange}
                           value={mail.To}
                    />
                    {/*<label htmlFor="CC">CC:</label>*/}
                    {/*<input type="text" id="CC" className="compose-input" placeholder="CC"/>*/}
                    <label htmlFor="Subject">Subject:</label>
                    <input type="text"
                           id="Subject"
                           name="Subject"
                           className={styles["compose-input"]}
                           placeholder="Subject"
                           onChange={onChange}
                           value={mail.Subject}
                    />
                    <textarea id="Body"
                              name="Body"
                              className={styles["compose-textarea"]}
                              placeholder="Compose your message..."
                              onChange={onChange}
                              value={mail.Body}
                    ></textarea>
                    <button className={styles["send-button"]}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default EmailCompose;