import {userService} from "./user.service.js";
import {mailStorageService} from "./mail-storage.service.js";

const STORAGE_KEY = 'mails'
const numOnPage= 7
const defaultFilterBy = {
    pathname: "/inbox",
    pageNum: 0
}
export const mailModelService = {
    query,
    remove,
    getById,
    create,
    update,
    getPaginationParams
}


async function query(filterBy = defaultFilterBy ) {
    let mails = await mailStorageService.get()
    let filteredMails = filterByPathName(mails, filterBy.pathname)
    if (filteredMails.length === 0) return []
    filteredMails = filterByPage(filteredMails, filterBy.pageNum)
    filteredMails = filterByContext(filteredMails, filterBy.filter)
    let filteredAndSortedMailed = sortByDate(filteredMails)
    return filteredAndSortedMailed
}

async function getById(id) {
    let mail = await mailStorageService.getById(id)
    let viewedMail = {...mail, isViewed: true}
    await mailStorageService.update(viewedMail)
    return viewedMail
}

async function getPaginationParams(pathname, pageNum) {
    let mails = await mailStorageService.get()
    let filteredMails = filterByPathName(mails, pathname)
    const [start, end] = pageStartEnd(filteredMails, pageNum)
    return [start, end, filteredMails.length]
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

function pageStartEnd(mails, pageNum) {
    const start = numOnPage*pageNum
    const end = Math.min(numOnPage*(pageNum+1), mails.length)
    return [start, end]
}

function filterByPage(mails, pageNum) {
    const [start, end] = pageStartEnd(mails, pageNum)
    if (start >= mails.length)
        throw new Error("Pagination error")
    return mails.slice(start, end)
}

function sortByDate(mails) {
    return mails.sort((a,b) => new Date(b.Date) - new Date(a.Date))
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
        isSelected: false,
        isSent: false,
        isDeleted: false
    }
}

// function count




