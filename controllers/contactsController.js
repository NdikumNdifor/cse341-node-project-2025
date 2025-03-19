const { application } = require('express')
const contactsModel = require('../models/contactsModel')
const singleContactModel = require('../models/contactsModel')
const addNewContactModel = require('../models/contactsModel')

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

const createNewContact = async (req, res) => {
  try{
    const newContactId = await addNewContactModel.addNewContact(req.body)
    res.setHeader('Content-Type', 'application/json')
    res.status(201).json({message: 'Contact created succesfully', id: newContactId})
  }catch(error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { getContacts, getContactById, createNewContact}









// const { addNewContact } = require('../models/contactModel');

// const createContact = async (req, res) => {
//   try {
//     const newContactId = await addNewContact(req.body);
//     res.status(201).json({ message: 'Contact created successfully', id: newContactId });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };