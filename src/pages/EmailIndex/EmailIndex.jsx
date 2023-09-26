import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {useSearchParams} from "react-router-dom";
import AsideMenu from "../../layout/aside/AsideMenu.jsx";
import {mailModelService} from "../../services/mail-model.service.js";

import EmailCompose from "../../components/EmailCompose/EmailCompose.jsx";
import Header from "../../layout/header/Header.jsx";

import styles from "./EmailIndex.module.css";
import Main from "../../layout/main/Main.jsx";
import {utilService} from "../../services/util.service.js";
import {UserMessage} from "../../ui/UserMessage/UserMessage.jsx";
import {showErrorMsg, showSuccessMsg} from "../../services/event-bus.service.js";

function EmailIndex() {
    const [mails, setMails] = useState(null)
    const [selectedMails, setSelectedMails] = useState([])
    const {pathname} = useLocation()
    const [searchParams, _] = useSearchParams()
    const [filterBy, setFilterBy] = useState(mailModelService.defaultFilterBy)
    const [sortBy, setSortBy] = useState(mailModelService.defaultSortBy)
    const [paginationParams, setPaginationParams] = useState(null)
    const [unreadCounter, setUnreadCounter] = useState(0)
    const [asideMenuExpanded, setAsideMenuExpanded] = useState(utilService.isNarrowDevice())

    useEffect(() => {
        setFilterBy(prevFilterBy => {
            return {...prevFilterBy, pathname: pathname}
        })
        if (!utilService.isNarrowDevice()) {
            setAsideMenuExpanded(false  )
        }
    }, [pathname])

    useEffect(() => {
        fetchMails()
    }, [filterBy, sortBy])

    async function fetchMails() {
        try {
            const [filteredMails, paginationParams, unreadCounter] = await mailModelService.query(filterBy, sortBy)
            setMails(filteredMails)
            setPaginationParams(paginationParams)
            setUnreadCounter(unreadCounter)
        } catch (err) {
            console.error(err.message)
            if (err.message === "Pagination error") {
                setFilterBy(prevFilterBy => {
                    return {...prevFilterBy, pageNum: Math.max(prevFilterBy.pageNum - 1, 0)}
                })
            }
        }
    }

    function setPrevPage() {
        if (filterBy.pageNum > 0) {
            setFilterBy(prevFilterBy => {
                return {
                    ...prevFilterBy, pageNum: prevFilterBy.pageNum -1
                }
            })
        }
    }

    function setNextPage() {
        if (!paginationParams.isLastPage) {
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
        try {
            await mailModelService.update(updatedMail)
            fetchMails()
            // showSuccessMsg("Updated email saved successfully")
        }
        catch(err) {
            showErrorMsg("Error occurred while saving email")
        }

    }

    function toggleIsSelected(mail) {
        setSelectedMails(prevSelectedMails => {
            if (prevSelectedMails.includes(mail)) {
                // remove from the list
                return prevSelectedMails.filter(selectedMail => selectedMail !== mail)
            }
            else {
                // add to the list
                return [...prevSelectedMails, mail]
            }
        })
    }

    function toggleSelectAll(checked) {
        setSelectedMails(checked ? mails : [])
    }

    async function toggleSelectedItemsAreDeleted() {
        for (let mail of selectedMails) {
            const updatedMail = {...mail, isDeleted: !mail.isDeleted}
            await mailModelService.update(updatedMail)
            fetchMails()
        }
        setSelectedMails([])
    }

    async function deleteSelectedItems() {
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

    function toggleExpandMenu() {
        setAsideMenuExpanded(prevExpanded => !prevExpanded)
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

    const asideMenuExpandStyle = asideMenuExpanded ? styles.expanded : styles.shrunk;
    return (
        <React.Fragment>
            <div className={`${styles.emailIndex} ${asideMenuExpandStyle}`}>
                <Header setContextFilter={setContextFilter}
                        toggleExpandMenu={toggleExpandMenu}
                />
                <AsideMenu expanded={asideMenuExpanded}
                           unreadCounter={unreadCounter}
                />
                <Main mails={mails}
                      filterBy={filterBy}
                      paginationParams={paginationParams}
                      selectedMails={selectedMails}
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
            <UserMessage />
            {searchParams.get("compose") && <EmailCompose saveUpdatedMail={saveUpdatedMail}/>}
        </React.Fragment>
    );
}

export default EmailIndex;