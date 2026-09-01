const ContactInquiry = require('../../../database/models/ContactInquiry.model')
const { sendContactNotification } = require('../services/mailer.service')

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, company, serviceInterested, message } = req.body

    const errors = {}
    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.'
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Please provide a valid email address.'
    }
    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.'
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors })
    }

    const inquiry = await ContactInquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || undefined,
      serviceInterested: serviceInterested || 'general',
      message: message.trim(),
    })

    sendContactNotification(inquiry).catch((err) => {
      console.error('Failed to send contact notification email:', err.message)
    })

    res.status(201).json({ success: true, message: 'Inquiry received.' })
  } catch (error) {
    next(error)
  }
}

exports.getContacts = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, status } = req.query
    const query = status ? { status } : {}
    const contacts = await ContactInquiry.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
    const total = await ContactInquiry.countDocuments(query)
    res.json({
      success: true,
      data: contacts,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
    })
  } catch (error) {
    next(error)
  }
}

exports.markAsRead = async (req, res, next) => {
  try {
    const contact = await ContactInquiry.findByIdAndUpdate(
      req.params.id,
      { status: 'read' },
      { new: true }
    )
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' })
    }
    res.json({ success: true, data: contact })
  } catch (error) {
    next(error)
  }
}

exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await ContactInquiry.findByIdAndDelete(req.params.id)
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' })
    }
    res.json({ success: true, message: 'Contact deleted' })
  } catch (error) {
    next(error)
  }
}
