import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router";
import {useSearchParams} from "react-router-dom";
import EmailPreviewList from "../components/EmailPreviewList.jsx";
import AsideMenu from "../components/AsideMenu.jsx";
import EmailDetails from "../components/EmailDetails.jsx";
import {mailModelService} from "../services/mail-model.service.js";

import EmailCompose from "../components/EmailCompose.jsx";
import Header from "../components/Header.jsx";

function EmailIndex(props) {
    const [mails, setMails] = useState(null)
    const [pageNum, setPageNum] = useState(0)
    const params = useParams()
    const {pathname} = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const [filter, setFilter] = useState("")

    useEffect(() => {
        fetchMails()
    }, [pathname, pageNum, filter])

    async function fetchMails() {
        try {
            const filteredMails = await mailModelService.query(getFilterBy())
            setMails(filteredMails)
        } catch (err) {
            console.error(err.message)
            if (err.message === "Pagination error")
                setPageNum(prevPageNum => Math.max(prevPageNum - 1, 0))
        }
    }

    function getFilterBy() {
        return {
            pathname,
            pageNum,
            filter
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

    async function toggleIsDeleted(mail) {
        const updatedMail = {...mail, isDeleted: !mail.isDeleted}
        await mailModelService.update(updatedMail)
    }

    async function toggleIsStarred(starredMail) {
        const updatedMail = {...starredMail, isStarred: !starredMail.isStarred}
        setMails(prevMails => prevMails.map(mail =>
            mail === starredMail ? updatedMail : mail
        ))
        await mailModelService.update(updatedMail)
        fetchMails()
    }

    async function toggleSelectedItemsIsDeleted() {
        const selectedMails = mails.filter(mail => mail.isSelected)
        for (let mail of selectedMails) {
            const updatedMail = {...mail, isSelected: false, isDeleted: !mail.isDeleted}
            await mailModelService.update(updatedMail)
            fetchMails()
        }
    }

    async function deletedSelectedItems() {
        const selectedMails = mails.filter(mail => mail.isSelected)
        for (let mail of selectedMails) {
            await mailModelService.remove(mail.id)
            fetchMails()
        }
    }

    function setContextFilter(event) {
        setFilter(event.target.value)
    }

    return (
        <React.Fragment>
            <div className="email-index">
                <Header setContextFilter={setContextFilter} />
                <main>
                    <AsideMenu />
                    {params.mailId ?
                        <EmailDetails id={params.mailId}
                                      toogleIsViewed={toogleIsViewed}
                                      toggleIsDeleted={toggleIsDeleted}
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