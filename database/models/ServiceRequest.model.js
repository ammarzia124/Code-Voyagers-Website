const mongoose = require('mongoose')

const serviceRequestSchema = new mongoose.Schema({
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
  phone: {
    type: String,
    trim: true,
    maxlength: 20,
  },
  service: {
    type: String,
    required: [true, 'Service is required'],
    enum: ['web-development', 'app-development', 'ui-ux-design', 'graphics-designing', 'digital-marketing', 'ai-automation'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: 5000,
  },
  budget: {
    type: String,
    enum: ['under-5k', '5k-15k', '15k-50k', '50k-plus', 'not-sure'],
    default: 'not-sure',
  },
  timeline: {
    type: String,
    enum: ['asap', '1-3-months', '3-6-months', '6-plus-months', 'flexible'],
    default: 'flexible',
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'closed'],
    default: 'new',
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema)
