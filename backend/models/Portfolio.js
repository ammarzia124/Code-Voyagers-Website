const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: 2000,
  },
  client: {
    type: String,
    trim: true,
  },
  service: {
    type: String,
    required: [true, 'Service type is required'],
    enum: ['web-development', 'app-development', 'ui-ux-design', 'graphics-designing', 'digital-marketing', 'ai-automation'],
  },
  thumbnail: {
    type: String,
    default: '',
  },
  images: [{
    type: String,
  }],
  tags: [{
    type: String,
    trim: true,
    lowercase: true,
  }],
  featured: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Date,
  },
  projectUrl: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
})

portfolioSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
  next()
})

module.exports = mongoose.model('Portfolio', portfolioSchema)
