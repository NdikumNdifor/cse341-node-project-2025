const contactsModel = require('../models/contactsModel')
const singleContactModel = require('../models/contactsModel')

const getContacts = async (req, res) => {
  const contacts = await contactsModel.getAllContacts()
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(contacts)
}

const getContactById = async (req, res) => {
  const contactId = req.params.id
  const contact = await singleContactModel.getOneContact(contactId)
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(contact)
}

module.exports = { getContacts, getContactById }
