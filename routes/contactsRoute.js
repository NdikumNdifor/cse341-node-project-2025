const express = require('express')
const router = new express.Router()
const contactsController = require('../controllers/contactsController')
const contactController = require('../controllers/contactsController')
const addToContactsController = require("../controllers/contactsController")

// Get all contacts in the in the contacts collection
router.get('/contacts', contactsController.getContacts)
// Get a single contact based on Id
router.get('/contacts/:id', contactController.getContactById)
// Add a new contact to contacts collection
router.post('/contacts', addToContactsController.createNewContact)

module.exports = router
