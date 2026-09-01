const mongoose = require('mongoose')

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: 200,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  excerpt: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  author: {
    type: String,
    default: 'Code Voyagers Team',
    trim: true,
  },
  category: {
    type: String,
    enum: ['technology', 'design', 'marketing', 'ai', 'business', 'tutorial'],
    default: 'technology',
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true,
  }],
  coverImage: {
    type: String,
    default: '',
  },
  published: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
  },
  readTime: {
    type: Number,
    default: 5,
  },
}, {
  timestamps: true,
})

blogPostSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
  if (this.published && !this.publishedAt) {
    this.publishedAt = new Date()
  }
  next()
})

module.exports = mongoose.model('BlogPost', blogPostSchema)
