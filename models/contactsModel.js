const { ObjectId } = require('mongodb')
const mongodb = require('../database/connect')

const getAllContacts = async () => {
  return await mongodb.getDb().collection('contacts').find().toArray()
}

const getOneContact = async (contactId) => {
  // Note, the (req, res) is only present in the controller
  // but not in the model so "req.params" will not work here
  // const contactId = req.params.id;
  return await mongodb
    .getDb()
    .collection('contacts')
    .findOne({ _id: new ObjectId(contactId) })
}

const addNewContact = async (contactData) => {
  const {firstName, lastName, email, favoriteColor, birthDay} = contactData
  if(!firstName || !lastName || !email || !favoriteColor || !birthDay){
    throw new Error("You must insert all the fields, they are all required")
  }
  const result = await mongodb.getDb().collection('contacts').insertOne(contactData)
  return result.insertedId
}

module.exports = { getAllContacts, getOneContact, addNewContact }
