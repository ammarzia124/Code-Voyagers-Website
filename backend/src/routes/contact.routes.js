const express = require('express')
const router = express.Router()
const { submitContact, getContacts, markAsRead, deleteContact } = require('../controllers/contact.controller')

router.post('/', submitContact)
router.get('/', getContacts)
router.put('/:id/read', markAsRead)
router.delete('/:id', deleteContact)

module.exports = router
