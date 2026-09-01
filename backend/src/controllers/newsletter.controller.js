const NewsletterSubscriber = require('../../../database/models/NewsletterSubscriber.model')

exports.subscribe = async (req, res, next) => {
  try {
    const { email } = req.body
    const existing = await NewsletterSubscriber.findOne({ email })
    if (existing) {
      if (existing.subscribed) {
        return res.status(409).json({ success: false, message: 'Email is already subscribed' })
      }
      existing.subscribed = true
      existing.subscribedAt = new Date()
      existing.unsubscribedAt = undefined
      await existing.save()
      return res.json({ success: true, message: 'Successfully resubscribed!' })
    }
    await NewsletterSubscriber.create({ email })
    res.status(201).json({ success: true, message: 'Successfully subscribed!' })
  } catch (error) {
    next(error)
  }
}

exports.unsubscribe = async (req, res, next) => {
  try {
    const { email } = req.body
    const subscriber = await NewsletterSubscriber.findOne({ email })
    if (!subscriber || !subscriber.subscribed) {
      return res.status(404).json({ success: false, message: 'Email not found or already unsubscribed' })
    }
    subscriber.subscribed = false
    subscriber.unsubscribedAt = new Date()
    await subscriber.save()
    res.json({ success: true, message: 'Successfully unsubscribed' })
  } catch (error) {
    next(error)
  }
}
