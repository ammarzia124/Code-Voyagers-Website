const express = require('express')
const router = express.Router()
const { submitContact, getContacts, markAsRead, deleteContact } = require('../controllers/contactController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', submitContact)
router.get('/', authMiddleware, getContacts)
router.put('/:id/read', authMiddleware, markAsRead)
router.delete('/:id', authMiddleware, deleteContact)

module.exports = router
