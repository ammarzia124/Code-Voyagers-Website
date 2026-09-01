const ContactInquiry = require('../../../database/models/ContactInquiry.model')

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message, service } = req.body
    const inquiry = await ContactInquiry.create({ name, email, phone, subject, message, service })
    res.status(201).json({ success: true, data: inquiry, message: 'Message sent successfully!' })
  } catch (error) {
    next(error)
  }
}

exports.getContacts = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, read } = req.query
    const query = read !== undefined ? { read: read === 'true' } : {}
    const contacts = await ContactInquiry.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
    const total = await ContactInquiry.countDocuments(query)
    res.json({ success: true, data: contacts, total, page: parseInt(page), pages: Math.ceil(total / limit) })
  } catch (error) {
    next(error)
  }
}

exports.markAsRead = async (req, res, next) => {
  try {
    const contact = await ContactInquiry.findByIdAndUpdate(req.params.id, { read: true }, { new: true })
    if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' })
    res.json({ success: true, data: contact })
  } catch (error) {
    next(error)
  }
}

exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await ContactInquiry.findByIdAndDelete(req.params.id)
    if (!contact) return res.status(404).json({ success: false, message: 'Contact not found' })
    res.json({ success: true, message: 'Contact deleted' })
  } catch (error) {
    next(error)
  }
}
