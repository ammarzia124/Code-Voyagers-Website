const express = require('express')
const router = express.Router()
const { login, register, getDashboard } = require('../controllers/adminController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/login', login)
router.post('/register', authMiddleware, register)
router.get('/dashboard', authMiddleware, getDashboard)

module.exports = router
