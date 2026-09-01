const express = require('express')
const router = express.Router()
const { getPublishedPosts, getPostBySlug, getAllPosts, createPost, updatePost, deletePost } = require('../controllers/blogController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', getPublishedPosts)
router.get('/all', authMiddleware, getAllPosts)
router.get('/:slug', getPostBySlug)
router.post('/', authMiddleware, createPost)
router.put('/:id', authMiddleware, updatePost)
router.delete('/:id', authMiddleware, deletePost)

module.exports = router
