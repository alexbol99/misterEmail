import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import EmailPreviewList from "../components/EmailPreviewList.jsx";
import EmailIndexSideMenu from "../components/EmailIndexSideMenu.jsx";
import EmailDetails from "../components/EmailDetails.jsx";
import {mailModelService} from "../services/mail-model.service.js";

import {mailStorageService} from "../services/mail-storage.service.js";
import EmailCompose from "../components/EmailCompose.jsx";

function EmailIndex(props) {
    const [mails, setMails] = useState(null)
    const params = useParams()
    const {pathname} = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const filterBy = {
            pathname: pathname
        }
        fetchMails(filterBy)
    }, [pathname])

    async function fetchMails(filterBy) {
        try {
            const filteredMails = await mailModelService.query(filterBy)
            setMails(filteredMails)
        } catch (err) {
            console.error(err.message)
        }
    }

    function togglePreviewItemSelection(id) {
        setMails(prevMails => prevMails.map( mail =>
            mail.id === id ?  {...mail, isSelected: !mail.isSelected} : mail
        ))
    }

    async function deletedSelectedItems() {
        const selectedMails = mails.filter(mail => mail.isSelected)
        for (let mail of selectedMails) {
            await mailModelService.remove(mail.id)
            fetchMails({pathname:pathname})
        }
    }

    return (
        <React.Fragment>
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
                        <EmailDetails id={params.mailId}/> :
                        mails && <EmailPreviewList mails={mails}
                                                   pathname={pathname}
                                                   togglePreviewItemSelection={togglePreviewItemSelection}
                                                   deletedSelectedItems={deletedSelectedItems}
                        />
                    }
                </main>

            </div>
            {searchParams.get("compose") && <EmailCompose/>}
        </React.Fragment>
    );
}

export default EmailIndex;