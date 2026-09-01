const mongoose = require('mongoose')

const contactInquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  company: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  serviceInterested: {
    type: String,
    enum: [
      'web-development',
      'app-development',
      'ui-ux-design',
      'graphics-designing',
      'digital-marketing',
      'ai-automation',
      'general',
    ],
    default: 'general',
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: 5000,
  },
  status: {
    type: String,
    enum: ['new', 'read', 'responded'],
    default: 'new',
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('ContactInquiry', contactInquirySchema)
