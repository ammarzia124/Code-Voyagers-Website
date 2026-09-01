const nodemailer = require('nodemailer')
const env = require('../config/env')

const transporter = nodemailer.createTransport({
  host: env.MAILER_HOST,
  port: env.MAILER_PORT,
  auth: {
    user: env.MAILER_USER,
    pass: env.MAILER_PASS,
  },
})

const sendContactEmail = async (data) => {
  if (!env.MAILER_USER) return

  await transporter.sendMail({
    from: env.MAILER_USER,
    to: env.MAILER_USER,
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
  if (!env.MAILER_USER) return

  await transporter.sendMail({
    from: env.MAILER_USER,
    to: email,
    subject: 'Welcome to Code Voyagers Newsletter',
    html: `
      <h2>Welcome to Code Voyagers!</h2>
      <p>Thank you for subscribing to our newsletter. You will receive updates on our latest projects, insights, and industry trends.</p>
    `,
  })
}

const sendContactNotification = async (inquiry) => {
  if (!env.MAILER_USER) return

  await transporter.sendMail({
    from: env.MAILER_USER,
    to: env.MAILER_USER,
    replyTo: inquiry.email,
    subject: `New Contact: ${inquiry.name} — ${inquiry.serviceInterested}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${inquiry.name}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      ${inquiry.company ? `<p><strong>Company:</strong> ${inquiry.company}</p>` : ''}
      <p><strong>Service:</strong> ${inquiry.serviceInterested}</p>
      <p><strong>Message:</strong></p>
      <p>${inquiry.message}</p>
    `,
  })
}

module.exports = { sendContactEmail, sendContactNotification, sendNewsletterWelcome }
