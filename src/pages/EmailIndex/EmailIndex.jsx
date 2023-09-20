import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {useSearchParams} from "react-router-dom";
import AsideMenu from "../../layout/aside/AsideMenu.jsx";
import {mailModelService} from "../../services/mail-model.service.js";

import EmailCompose from "../../components/EmailCompose/EmailCompose.jsx";
import Header from "../../layout/header/Header.jsx";

import styles from "./EmailIndex.module.css";
import Main from "../../layout/main/Main.jsx";

function EmailIndex() {
    const [mails, setMails] = useState(null)
    const {pathname} = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(mailModelService.defaultFilterBy)
    const [sortBy, setSortBy] = useState(mailModelService.defaultSortBy)
    const [lastPage, setLastPage] = useState(false)

    useEffect(() => {
        setFilterBy(prevFilterBy => {
            return {...prevFilterBy, pathname: pathname}
        })
    }, [pathname])

    useEffect(() => {
        fetchMails()
    }, [filterBy, sortBy])

    async function fetchMails() {
        try {
            const [filteredMails, lastPage] = await mailModelService.query(filterBy, sortBy)
            setMails(filteredMails)
            setLastPage(lastPage)
        } catch (err) {
            console.error(err.message)
            if (err.message === "Pagination error") {
                setFilterBy(prevFilterBy => {
                    return {...prevFilterBy, pageNum: Math.max(prevFilterBy.pageNum - 1, 0)}
                })
            }
        }
    }

    function setPrevPage(dir) {
        if (filterBy.pageNum > 0) {
            setFilterBy(prevFilterBy => {
                return {
                    ...prevFilterBy, pageNum: prevFilterBy.pageNum -1
                }
            })
        }
    }

    function setNextPage() {
        if (!lastPage) {
            setFilterBy(prevFilterBy => {
                return {...prevFilterBy, pageNum: prevFilterBy.pageNum + 1
                }
            })
        }
    }

    async function saveUpdatedMail(updatedMail) {
        setMails(prevMails => prevMails.map(mail =>
            mail.id === updatedMail.id ? updatedMail : mail
        ))
        await mailModelService.update(updatedMail)
        fetchMails()
    }

    function toggleIsSelected(id) {
        setMails(prevMails => prevMails.map(mail =>
            mail.id === id ? {...mail, isSelected: !mail.isSelected} : mail
        ))
    }

    function toggleSelectAll(checked) {
        setMails(prevMails => prevMails.map(mail => {return {...mail, isSelected: checked}}))
    }

    async function toggleSelectedItemsAreDeleted() {
        const selectedMails = mails.filter(mail => mail.isSelected)
        for (let mail of selectedMails) {
            const updatedMail = {...mail, isSelected: false, isDeleted: !mail.isDeleted}
            await mailModelService.update(updatedMail)
            fetchMails()
        }
    }

    async function deleteSelectedItems() {
        const selectedMails = mails.filter(mail => mail.isSelected)
        for (let mail of selectedMails) {
            await mailModelService.remove(mail.id)
            fetchMails()
        }
    }

    function setContextFilter(event) {
        setFilterBy((prevFilterBy => {
            return {...prevFilterBy, filter: event.target.value}
        }))
    }

    function toggleSortByDate() {
        setSortBy(
            prevSortBy => {
                return {...prevSortBy,
                    date: true,
                    dateSortAscending: !prevSortBy.dateSortAscending,
                    subject: false
                }
            })
    }

    function toggleSortBySubject() {
        setSortBy(
            prevSortBy => {
                return {...prevSortBy,
                    date: false,
                    subject: true,
                    subjectSortAscending: !prevSortBy.subjectSortAscending
                }
            })
    }

    return (
        <React.Fragment>
            <div className={styles.emailIndex}>
                <Header setContextFilter={setContextFilter} />
                <AsideMenu />
                <Main mails={mails}
                      filterBy={filterBy}
                      toggleSelectAll={toggleSelectAll}
                      saveUpdatedMail={saveUpdatedMail}
                      toggleIsSelected={toggleIsSelected}
                      toggleSelectedItemsAreDeleted={toggleSelectedItemsAreDeleted}
                      deleteSelectedItems={deleteSelectedItems}
                      onPrevPageButtonClick={setPrevPage}
                      onNextPageButtonClick={setNextPage}
                      toggleSortByDate={toggleSortByDate}
                      toggleSortBySubject={toggleSortBySubject}
                />
            </div>
            {searchParams.get("compose") && <EmailCompose saveUpdatedMail={saveUpdatedMail}/>}
        </React.Fragment>
    );
}

export default EmailIndex;