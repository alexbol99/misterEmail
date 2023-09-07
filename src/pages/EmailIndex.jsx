import {useEffect, useState} from "react";
import {mailService} from "../services/mail.service.js";
import EmailPreviewList from "../components/EmailPreviewList.jsx";
import EmailIndexSideMenu from "../components/EmailIndexSideMenu.jsx";
import {useParams} from "react-router";
import EmailDetails from "../components/EmailDetails.jsx";

function EmailIndex(props) {
    const [mails, setMails] = useState(null)
    const params = useParams()

    useEffect(() => {
        async function fetchMails() {
            try {
                const filteredMails = await mailService.query()
                setMails(filteredMails)
            } catch (err) {
                console.error(err.message)
            }
        }

        fetchMails()
    }, [])


    return (
        <div className="email-index">
            <header>
                <button className="main-menu-button">Main menu</button>
                <div className="logo">MisterEmail</div>
                <input type="text" className="search-box" placeholder="Search"/>
                <nav className="breadcrumbs">
                    <a href="#">Help</a>
                    <a href="#">Settings</a>
                    <a href="#">User</a>
                </nav>
            </header>
            <main>
                <EmailIndexSideMenu/>
                {params.mailId ?
                    <EmailDetails id={params.mailId} /> :
                    mails && <EmailPreviewList mails={mails} />
                }

            </main>
        </div>
    );
}

export default EmailIndex;