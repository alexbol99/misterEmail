import {storageService} from './async-storage.service.js'
import {utilService} from './util.service.js'
import {userService} from "./user.service.js";

export const mailStorageService = {
    get,
    create,
    update,
    remove,
    getById
}

const STORAGE_KEY = 'mails'

async function get() {
    return await storageService.query(STORAGE_KEY)
}

async function create(newMail) {
    return await storageService.post(STORAGE_KEY, newMail)
}

async function getById(id) {
    return await storageService.get(STORAGE_KEY, id)
}

async function remove(id) {
    return await storageService.remove(STORAGE_KEY, id)
}

async function update(mail) {
    return await storageService.put(STORAGE_KEY, mail)
}

// function count




