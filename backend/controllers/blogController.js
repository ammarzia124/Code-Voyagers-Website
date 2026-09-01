const BlogPost = require('../models/BlogPost')

exports.getPublishedPosts = async (req, res, next) => {
  try {
    const { page = 1, limit = 9, category, tag } = req.query
    const query = { published: true }
    if (category) query.category = category
    if (tag) query.tags = { $in: [tag] }
    const posts = await BlogPost.find(query)
      .sort({ publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-content')
    const total = await BlogPost.countDocuments(query)
    res.json({ success: true, data: posts, total, page: parseInt(page), pages: Math.ceil(total / limit) })
  } catch (error) {
    next(error)
  }
}

exports.getPostBySlug = async (req, res, next) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug, published: true })
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' })
    res.json({ success: true, data: post })
  } catch (error) {
    next(error)
  }
}

exports.getAllPosts = async (req, res, next) => {
  try {
    const { page = 1, limit = 20 } = req.query
    const posts = await BlogPost.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
    const total = await BlogPost.countDocuments()
    res.json({ success: true, data: posts, total, page: parseInt(page), pages: Math.ceil(total / limit) })
  } catch (error) {
    next(error)
  }
}

exports.createPost = async (req, res, next) => {
  try {
    const post = await BlogPost.create(req.body)
    res.status(201).json({ success: true, data: post })
  } catch (error) {
    next(error)
  }
}

exports.updatePost = async (req, res, next) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' })
    res.json({ success: true, data: post })
  } catch (error) {
    next(error)
  }
}

exports.deletePost = async (req, res, next) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id)
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' })
    res.json({ success: true, message: 'Post deleted' })
  } catch (error) {
    next(error)
  }
}
