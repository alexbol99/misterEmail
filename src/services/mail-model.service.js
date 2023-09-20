import {userService} from "./user.service.js";
import {mailStorageService} from "./mail-storage.service.js";

const numOnPage= 10
const defaultFilterBy = {
    pathname: "/inbox",
    pageNum: 0,
    filter: ""
}

const defaultSortBy = {
    date: true,
    dateSortAscending: false,
    subject: false,
    subjectSortAscending: true
}

export const mailModelService = {
    query,
    remove,
    getById,
    create,
    update,
    defaultSortBy,
    defaultFilterBy
}


async function query(filterBy = defaultFilterBy, sortBy = defaultSortBy ) {
    let mails = await mailStorageService.get()
    let filteredMails = filterByPathName(mails, filterBy.pathname)
    if (filteredMails.length === 0) return []
    let paginationParams = getPaginationParams(filteredMails, filterBy.pageNum)
    let filteredAndSortedMails = sortByAny(filteredMails, sortBy)
    filteredAndSortedMails = filterByPage(filteredAndSortedMails, paginationParams)
    filteredAndSortedMails = filterByContext(filteredAndSortedMails, filterBy.filter)
    return [filteredAndSortedMails, paginationParams]
}

async function getById(id) {
    let mail = await mailStorageService.getById(id)
    let viewedMail = {...mail, isViewed: true}
    await mailStorageService.update(viewedMail)
    return viewedMail
}

function create(newMail = createNewMail()) {
    return mailStorageService.create(newMail)
}
function update(mail) {
    return mailStorageService.update(mail)
}

function remove(id) {
    return mailStorageService.remove(id)
}

function filterByPathName(mails, pathname) {
    const user = userService.currentUser;
    let filtered_mails
    switch (pathname) {
        case "/inbox":
            filtered_mails = mails.filter(mail => mail.To === user && !mail.isDeleted);
            break;
        case "/starred":
            filtered_mails = mails.filter(mail => mail.isStarred && !mail.isDeleted)
            break;
        case "/sent":
            filtered_mails = mails.filter(mail => mail.From === user && !mail.isDraft && !mail.isDeleted);
            break;
        case "/drafts":
            filtered_mails = mails.filter(mail => mail.From === user && mail.isDraft && !mail.isDeleted)
            break;
        case "/trash":
            filtered_mails = mails.filter(mail => mail.isDeleted)
            break;
        default:
            filtered_mails = mails.filter(mail => mail.To === user && !mail.isDeleted);
            break;
    }
    return filtered_mails;
}

function getPaginationParams(mails, pageNum) {
    const start = numOnPage*pageNum
    const end = Math.min(numOnPage*(pageNum+1), mails.length)
    return {start, end, total: mails.length, isLastPage: start + numOnPage >= mails.length}
}

function filterByPage(mails, paginationParams) {
    return mails.slice(paginationParams.start, paginationParams.end);
}

function sortByAny(mails, sortBy) {
    let sorter
    if (sortBy.date) {
        sorter = sortBy.dateSortAscending ? dateSorterAscending : dateSorterDescending
    }

    if (sortBy.subject) {
        sorter = sortBy.subjectSortAscending ? subjectSorterAscending : subjectSorterDescending
    }

    return mails.sort(sorter)
}
function dateSorterAscending(a,b) {return new Date(a.Date) - new Date(b.Date)}
function dateSorterDescending(a,b) {return new Date(b.Date) - new Date(a.Date)}

function subjectSorterAscending(a, b) {
    if (a.Subject < b.Subject) {
        return 1
    }
    else if (b.Subject < a.Subject) {
        return -1
    }
    return 0
}

function subjectSorterDescending(a, b) {
    if (a.Subject < b.Subject) {
        return -1
    }
    else if (b.Subject < a.Subject) {
        return 1
    }
    return 0
}

function filterByContext(mails, str) {
    return mails.filter(mail =>
        mail.To.includes(str) ||
        mail.From.includes(str) ||
        mail.Body.includes(str)
    )
}
function createNewMail(mailTo="", subject="", body="" ) {
    return {
        id: null,
        Date: new Date().toLocaleString(),
        From: userService.currentUser,
        To: mailTo,
        CC: "",
        Subject: subject,
        Body: body,
        Attachments: "",
        "Attachments Path": "",
        isDraft: true,
        isViewed: true,
        isStarred: false,
        isDeleted: false
    }
}

// function count




