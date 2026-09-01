const NewsletterSubscriber = require('../../../database/models/NewsletterSubscriber.model')

exports.subscribe = async (req, res, next) => {
  try {
    const { email } = req.body

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' })
    }

    const existing = await NewsletterSubscriber.findOne({ email })

    if (existing) {
      if (existing.isActive) {
        return res.status(200).json({ success: true, message: "You're already subscribed." })
      }
      existing.isActive = true
      existing.subscribedAt = new Date()
      await existing.save()
      return res.status(200).json({ success: true, message: 'Successfully resubscribed!' })
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

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' })
    }

    const subscriber = await NewsletterSubscriber.findOne({ email })
    if (!subscriber || !subscriber.isActive) {
      return res.status(404).json({ success: false, message: 'Email not found or already unsubscribed' })
    }

    subscriber.isActive = false
    await subscriber.save()
    res.json({ success: true, message: 'Successfully unsubscribed' })
  } catch (error) {
    next(error)
  }
}
