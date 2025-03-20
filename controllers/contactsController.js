const { application, response } = require('express')
const contactsModel = require('../models/contactsModel')
const singleContactModel = require('../models/contactsModel')
const addNewContactModel = require('../models/contactsModel')
const updateContactModel = require('../models/contactsModel')
const deleteContactModel = require('../models/contactsModel')

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

const modifyContact = async (req, res) => {
  try{
    const updateId = req.params.id
    const updatedData = req.body
    const updatedContact = await updateContactModel.updateContact(updateId, updatedData)
    res.setHeader("Content-Type", "application/json")
    res.status(200).json({message: "Contact updated sucessfully", updatedContact})
  }catch(error) {
    res.status(400).json({error: error.message})
  }
}

const removeContact = async (req, res) => {
  try{
    const deletedId = req.params.id
    const deletedContact = await deleteContactModel.deleteContact(deletedId)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({message:"Contact deleted successfully", deletedContact})
  }catch(error) {
    res.status(400).json({error:error.message})
  }
}
  
module.exports = { getContacts, getContactById, createNewContact, modifyContact, removeContact}









// const { addNewContact } = require('../models/contactModel');

// const createContact = async (req, res) => {
//   try {
//     const newContactId = await addNewContact(req.body);
//     res.status(201).json({ message: 'Contact created successfully', id: newContactId });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };