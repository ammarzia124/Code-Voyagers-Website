const express = require('express')
const router = express.Router()
const { getServiceRequests, createServiceRequest, updateServiceRequest } = require('../controllers/service.controller')

router.get('/', getServiceRequests)
router.post('/', createServiceRequest)
router.put('/:id', updateServiceRequest)

module.exports = router
