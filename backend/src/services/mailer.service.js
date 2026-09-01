const nodemailer = require('nodemailer')
const env = require('../config/env')

const transporter = nodemailer.createTransport({
  host: env.EMAIL_HOST,
  port: env.EMAIL_PORT,
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
})

const sendContactEmail = async (data) => {
  if (!env.EMAIL_USER) {
    console.log('Email not configured — skipping send for:', data.email)
    return
  }

  await transporter.sendMail({
    from: env.EMAIL_USER,
    to: env.EMAIL_USER,
    replyTo: data.email,
    subject: `New Contact: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  })
}

const sendNewsletterWelcome = async (email) => {
  if (!env.EMAIL_USER) return

  await transporter.sendMail({
    from: env.EMAIL_USER,
    to: email,
    subject: 'Welcome to Code Voyagers Newsletter',
    html: `
      <h2>Welcome to Code Voyagers!</h2>
      <p>Thank you for subscribing to our newsletter. You will receive updates on our latest projects, insights, and industry trends.</p>
    `,
  })
}

module.exports = { sendContactEmail, sendNewsletterWelcome }
