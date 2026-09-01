export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export function validatePhone(phone) {
  if (!phone) return true
  const re = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/
  return re.test(phone.replace(/\s/g, ''))
}

export function validateRequired(value) {
  return typeof value === 'string' ? value.trim().length > 0 : !!value
}

export function validateContactForm(data) {
  const errors = {}

  if (!validateRequired(data.name)) errors.name = 'Name is required'
  if (!validateRequired(data.email)) errors.email = 'Email is required'
  else if (!validateEmail(data.email)) errors.email = 'Invalid email address'
  if (data.phone && !validatePhone(data.phone)) errors.phone = 'Invalid phone number'
  if (!validateRequired(data.subject)) errors.subject = 'Subject is required'
  if (!validateRequired(data.message)) errors.message = 'Message is required'
  else if (data.message.length < 10) errors.message = 'Message must be at least 10 characters'

  return { valid: Object.keys(errors).length === 0, errors }
}
