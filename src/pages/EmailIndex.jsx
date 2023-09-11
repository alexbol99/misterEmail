import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import EmailPreviewList from "../components/EmailPreviewList.jsx";
import EmailIndexSideMenu from "../components/EmailIndexSideMenu.jsx";
import EmailDetails from "../components/EmailDetails.jsx";
import {mailModelService} from "../services/mail-model.service.js";

import EmailCompose from "../components/EmailCompose.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";

function EmailIndex(props) {
    const [mails, setMails] = useState(null)
    const [pageNum, setPageNum] = useState(0)
    const params = useParams()
    const {pathname} = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const filterBy = {
            pathname: pathname,
            pageNum: pageNum
        }
        fetchMails(filterBy)
    }, [pathname, pageNum])

    async function fetchMails(filterBy) {
        try {
            const filteredMails = await mailModelService.query(filterBy)
            setMails(filteredMails)
        } catch (err) {
            console.error(err.message)
            if (err.message === "Pagination error")
                setPageNum(prevPageNum => Math.max(prevPageNum - 1, 0))
        }
    }

    function setPagination(dir) {
        setPageNum(prevPageNum => (prevPageNum + dir < 0 ? prevPageNum : prevPageNum + dir))
    }

    function toggleIsSelected(id) {
        setMails(prevMails => prevMails.map(mail =>
            mail.id === id ? {...mail, isSelected: !mail.isSelected} : mail
        ))
    }

    async function toogleIsViewed(viewedMail) {
        const updatedMail = {...viewedMail, isViewed: !viewedMail.isViewed}
        await mailModelService.update(updatedMail)
    }

    async function toggleIsStarred(starredMail) {
        const updatedMail = {...starredMail, isStarred: !starredMail.isStarred}
        setMails(prevMails => prevMails.map(mail =>
            mail === starredMail ? updatedMail : mail
        ))
        await mailModelService.update(updatedMail)
        fetchMails({pathname: pathname, pageNum: pageNum})
    }

    async function toggleSelectedItemsIsDeleted() {
        const selectedMails = mails.filter(mail => mail.isSelected)
        for (let mail of selectedMails) {
            const updatedMail = {...mail, isSelected: false, isDeleted: !mail.isDeleted}
            await mailModelService.update(updatedMail)
            fetchMails({pathname: pathname, pageNum: pageNum})
        }
    }

    async function deletedSelectedItems() {
        const selectedMails = mails.filter(mail => mail.isSelected)
        for (let mail of selectedMails) {
            await mailModelService.remove(mail.id)
            fetchMails({pathname: pathname, pageNum: pageNum})
        }
    }

    return (
        <React.Fragment>
            <div className="email-index">
                <header>
                    <nav className="breadcrumbs">
                        <button className="main-menu-button" title="Main menu">
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                        <div className="logo">MisterEmail</div>
                    </nav>
                    <input type="text" className="search-box" placeholder="Search not implemented yet"/>
                    <nav className="breadcrumbs">
                        <a href="#">Help</a>
                        <a href="#">Settings</a>
                        <a href="#">User</a>
                    </nav>
                </header>
                <main>
                    <EmailIndexSideMenu/>
                    {params.mailId ?
                        <EmailDetails id={params.mailId}
                                      toogleIsViewed={toogleIsViewed}
                        /> :
                        mails && <EmailPreviewList mails={mails}
                                                   pathname={pathname}
                                                   pageNum={pageNum}
                                                   toggleIsSelected={toggleIsSelected}
                                                   toggleIsStarred={toggleIsStarred}
                                                   toogleIsViewed={toogleIsViewed}
                                                   toggleSelectedItemsIsDeleted={toggleSelectedItemsIsDeleted}
                                                   deletedSelectedItems={deletedSelectedItems}
                                                   setPagination={setPagination}
                        />
                    }
                </main>

            </div>
            {searchParams.get("compose") && <EmailCompose/>}
        </React.Fragment>
    );
}

export default EmailIndex;