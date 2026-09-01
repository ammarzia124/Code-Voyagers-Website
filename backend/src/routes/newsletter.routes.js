const express = require('express')
const router = express.Router()
const { subscribe, unsubscribe } = require('../controllers/newsletter.controller')

router.post('/subscribe', subscribe)
router.delete('/unsubscribe', unsubscribe)

module.exports = router
