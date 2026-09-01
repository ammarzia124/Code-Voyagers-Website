const express = require('express')
const router = express.Router()
const rateLimit = require('express-rate-limit')
const { subscribe, unsubscribe } = require('../controllers/newsletter.controller')

const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: 'Too many subscription attempts. Please try again later.',
})

router.post('/subscribe', newsletterLimiter, subscribe)
router.delete('/unsubscribe', newsletterLimiter, unsubscribe)

module.exports = router
