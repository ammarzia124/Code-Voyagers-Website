const rateLimit = require('express-rate-limit')

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again in 15 minutes.',
  },
})

module.exports = contactLimiter
