const required = ['PORT', 'MONGODB_URI', 'CORS_ORIGIN', 'NODE_ENV', 'MAILER_HOST', 'MAILER_USER', 'MAILER_PASS']

const missing = required.filter((key) => !process.env[key])
if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(', ')}`)
  process.exit(1)
}

const env = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGODB_URI: process.env.MONGODB_URI,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  CLIENT_URL: process.env.CORS_ORIGIN,
  JWT_SECRET: process.env.JWT_SECRET || 'dev-secret-change-in-production',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  MAILER_HOST: process.env.MAILER_HOST,
  MAILER_PORT: parseInt(process.env.MAILER_PORT || '587'),
  MAILER_USER: process.env.MAILER_USER,
  MAILER_PASS: process.env.MAILER_PASS,
}

module.exports = env
