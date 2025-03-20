const express = require('express')
const router = new express.Router()
const contactsController = require('../controllers/contactsController')
const contactController = require('../controllers/contactsController')
const addToContactsController = require("../controllers/contactsController")
const updateContactController = require("../controllers/contactsController")
const deleteContactController = require('../controllers/contactsController')

// Get all contacts in the in the contacts collection
router.get('/contacts', contactsController.getContacts)
// Get a single contact based on Id
router.get('/contacts/:id', contactController.getContactById)
// Add a new contact to contacts collection
router.post('/contacts', addToContactsController.createNewContact)
// update a contact
router.put('/contacts/:id', updateContactController.modifyContact)
// delet a contact
router.delete('/contacts/:id', deleteContactController.removeContact)

module.exports = router
