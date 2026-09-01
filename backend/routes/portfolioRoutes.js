const express = require('express')
const router = express.Router()
const { getPortfolioItems, getPortfolioBySlug, createPortfolioItem, updatePortfolioItem, deletePortfolioItem } = require('../controllers/portfolioController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', getPortfolioItems)
router.get('/:slug', getPortfolioBySlug)
router.post('/', authMiddleware, createPortfolioItem)
router.put('/:id', authMiddleware, updatePortfolioItem)
router.delete('/:id', authMiddleware, deletePortfolioItem)

module.exports = router
