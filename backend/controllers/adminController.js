const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')
const Contact = require('../models/Contact')
const BlogPost = require('../models/BlogPost')
const Portfolio = require('../models/Portfolio')
const Newsletter = require('../models/Newsletter')

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' })
    }
    const admin = await Admin.findOne({ email }).select('+password')
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }
    const isMatch = await admin.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    })
    res.json({ success: true, token, admin: { id: admin._id, username: admin.username, email: admin.email, role: admin.role } })
  } catch (error) {
    next(error)
  }
}

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    const admin = await Admin.create({ username, email, password })
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    })
    res.status(201).json({ success: true, token, admin: { id: admin._id, username: admin.username, email: admin.email, role: admin.role } })
  } catch (error) {
    next(error)
  }
}

exports.getDashboard = async (req, res, next) => {
  try {
    const [contacts, posts, portfolio, subscribers] = await Promise.all([
      Contact.countDocuments(),
      BlogPost.countDocuments(),
      Portfolio.countDocuments(),
      Newsletter.countDocuments({ subscribed: true }),
    ])
    const recentContacts = await Contact.find().sort({ createdAt: -1 }).limit(5)
    res.json({
      success: true,
      data: { stats: { contacts, posts, portfolio, subscribers }, recentContacts },
    })
  } catch (error) {
    next(error)
  }
}
