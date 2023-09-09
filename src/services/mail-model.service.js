import {storageService} from './async-storage.service.js'
import {utilService} from './util.service.js'
import {userService} from "./user.service.js";
import {mailStorageService} from "./mail-storage.service.js";

export const mailModelService = {
    query,
    remove,
    getById,
    create,
    update
}

const STORAGE_KEY = 'mails'

async function query(filterBy = {pathname: "/inbox"}) {
    let mails = await mailStorageService.get()
    let filteredMails = filterByPathName(mails, filterBy.pathname)
    return filteredMails
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
            filtered_mails = mails.filter(mail => mail.To === user);
            break;
        case "/starred":
            filtered_mails = mail.filter(mail => mail.isStarred)
            break;
        case "/sent":
            filtered_mails = mails.filter(mail => mail.From === user && !mail.isDraft);
            break;
        case "/drafts":
            filtered_mails = mails.filter(mail => mail.From === user && mail.isDraft)
            break;
        case "/trash":
            filtered_mails = mails.filter(mail => mail.isDeleted)
            break;
        default:
            filtered_mails = mails.filter(mail => mail.To === user);
            break;
    }
    return filtered_mails;
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




