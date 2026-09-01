const mongoose = require('mongoose')
const env = require('./env')

const connectDatabase = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('MongoDB connection error:', err.message)
    process.exit(1)
  }
}

module.exports = connectDatabase
