const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const env = require('./src/config/env')
const corsOptions = require('./src/config/cors')
const connectDatabase = require('./src/config/db')
const errorHandler = require('./src/middleware/errorHandler')

const contactRoutes = require('./src/routes/contact.routes')
const newsletterRoutes = require('./src/routes/newsletter.routes')
const serviceRoutes = require('./src/routes/service.routes')

const app = express()

app.use(helmet())
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
})
app.use('/api', limiter)

app.use('/api/contact', contactRoutes)
app.use('/api/newsletter', newsletterRoutes)
app.use('/api/services', serviceRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use(errorHandler)

connectDatabase().then(() => {
  app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`)
  })
})

module.exports = app
