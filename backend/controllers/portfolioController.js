const Portfolio = require('../models/Portfolio')

exports.getPortfolioItems = async (req, res, next) => {
  try {
    const { page = 1, limit = 12, service, featured } = req.query
    const query = {}
    if (service) query.service = service
    if (featured !== undefined) query.featured = featured === 'true'
    const items = await Portfolio.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
    const total = await Portfolio.countDocuments(query)
    res.json({ success: true, data: items, total, page: parseInt(page), pages: Math.ceil(total / limit) })
  } catch (error) {
    next(error)
  }
}

exports.getPortfolioBySlug = async (req, res, next) => {
  try {
    const item = await Portfolio.findOne({ slug: req.params.slug })
    if (!item) return res.status(404).json({ success: false, message: 'Portfolio item not found' })
    res.json({ success: true, data: item })
  } catch (error) {
    next(error)
  }
}

exports.createPortfolioItem = async (req, res, next) => {
  try {
    const item = await Portfolio.create(req.body)
    res.status(201).json({ success: true, data: item })
  } catch (error) {
    next(error)
  }
}

exports.updatePortfolioItem = async (req, res, next) => {
  try {
    const item = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!item) return res.status(404).json({ success: false, message: 'Portfolio item not found' })
    res.json({ success: true, data: item })
  } catch (error) {
    next(error)
  }
}

exports.deletePortfolioItem = async (req, res, next) => {
  try {
    const item = await Portfolio.findByIdAndDelete(req.params.id)
    if (!item) return res.status(404).json({ success: false, message: 'Portfolio item not found' })
    res.json({ success: true, message: 'Portfolio item deleted' })
  } catch (error) {
    next(error)
  }
}
