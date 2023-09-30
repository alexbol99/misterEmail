import React, {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router";

import {mailModelService} from "../../services/mail-model.service.js";
import {utilService} from "../../services/util.service.js";
import {showErrorMsg, showSuccessMsg} from "../../services/event-bus.service.js";

import EmailPreviewHeader from "../../components/EmailPreview/EmailPreviewHeader/EmailPreviewHeader.jsx";
import EmailPreviewList from "../../components/EmailPreview/EmailPreviewList/EmailPreviewList.jsx";

import styles from "./EmailIndex.module.css";
import {useSearchParams} from "react-router-dom";

function EmailIndex() {
    const [mails, setMails] = useState(null)
    const [selectedMails, setSelectedMails] = useState([])
    const {pathname} = useLocation()
    const [filterBy, setFilterBy] = useState(mailModelService.defaultFilterBy)
    const [sortBy, setSortBy] = useState(mailModelService.defaultSortBy)
    const [paginationParams, setPaginationParams] = useState(null)
    const [searchParams, _] = useSearchParams()
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
    }, [filterBy, sortBy, window.location.href])

    useEffect( () => {
        setFilterBy(prevFilterBy => {
            return {...prevFilterBy, text: searchParams.get("text") || ""}
        })
    }, [searchParams])

    async function fetchMails() {
        try {
            const [filteredMails, paginationParams] = await mailModelService.query(filterBy, sortBy)
            setMails(filteredMails)
            setPaginationParams(paginationParams)
        } catch (err) {
            console.error(err.message)
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

    async function saveUpdatedMail(updatedMail, message = "") {
        setMails(prevMails => prevMails.map(mail =>
            mail.id === updatedMail.id ? updatedMail : mail
        ))
        try {
            await mailModelService.update(updatedMail)
            fetchMails()
            if (message) {
                showSuccessMsg(message)
            }
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
        // TODO: Promise.all and then fetch
        // let promises = selectedMails.map(mail =>
        //     mailModelService.update({...mail, isDeleted: !mail.isDeleted})
        // )
        // await Promise.all(promises)
        // fetchMails()

        for (let mail of selectedMails) {
            const updatedMail = {...mail, isDeleted: !mail.isDeleted}
            await mailModelService.update(updatedMail)
            fetchMails()
        }
        setSelectedMails([])
    }

    async function deleteSelectedItems() {
        // TODO: Promise.all and then fetch
        for (let mail of selectedMails) {
            await mailModelService.remove(mail.id)
            fetchMails()
        }
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

    if (!mails) return <div>Loading mails ...</div>

    return (
        <React.Fragment>
            <div className={styles.emailsPreviewContainer}>
                <EmailPreviewHeader mails={mails}
                                    pathname={pathname}
                                    paginationParams={paginationParams}
                                    toggleSelectAll={toggleSelectAll}
                                    toggleSelectedItemsAreDeleted={toggleSelectedItemsAreDeleted}
                                    deleteSelectedItems={deleteSelectedItems}
                                    onPrevPageButtonClick={setPrevPage}
                                    onNextPageButtonClick={setNextPage}
                                    toggleSortByDate={toggleSortByDate}
                                    toggleSortBySubject={toggleSortBySubject}

                />

                <EmailPreviewList pathname={pathname}
                                  mails={mails}
                                  selectedMails={selectedMails}
                                  saveUpdatedMail={saveUpdatedMail}
                                  toggleIsSelected={toggleIsSelected}
                />

            </div>


            <Outlet />   {/* In Outlet we render ComposeEmail component */}
        </React.Fragment>
    );
}

export default EmailIndex;