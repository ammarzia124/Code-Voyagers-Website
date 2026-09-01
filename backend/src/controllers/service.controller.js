const ServiceRequest = require('../../../database/models/ServiceRequest.model')

exports.getServiceRequests = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, status } = req.query
    const query = status ? { status } : {}
    const requests = await ServiceRequest.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
    const total = await ServiceRequest.countDocuments(query)
    res.json({ success: true, data: requests, total, page: parseInt(page), pages: Math.ceil(total / limit) })
  } catch (error) {
    next(error)
  }
}

exports.createServiceRequest = async (req, res, next) => {
  try {
    const { name, email, phone, service, message, budget, timeline } = req.body
    const request = await ServiceRequest.create({ name, email, phone, service, message, budget, timeline })
    res.status(201).json({ success: true, data: request, message: 'Service request submitted!' })
  } catch (error) {
    next(error)
  }
}

exports.updateServiceRequest = async (req, res, next) => {
  try {
    const request = await ServiceRequest.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!request) return res.status(404).json({ success: false, message: 'Request not found' })
    res.json({ success: true, data: request })
  } catch (error) {
    next(error)
  }
}
