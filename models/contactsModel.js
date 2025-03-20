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

const  updateContact = async (contactId, updatedData) => {
  if(!ObjectId.isValid(contactId)){
    throw new Error("The contact ID is invalid")
  }
  const {firstName, lastName, email, favoriteColor, birthDay} = updatedData
  // if(!firstName || !lastName || !email || !favoriteColor || !birthDay){
  //   throw new Error("You must insert all the fields, they are all required")
  // }
  const result = await mongodb.getDb().collection('contacts').updateOne({_id: new ObjectId(contactId)}, { $set: updatedData })
  if (result.matchedCount === 0) {
    throw new Error("No contact found with the given ID");
  }

  if (result.modifiedCount === 0) {
    return { message: "No changes made. The contact data is already up to date." };
  }

  return { message: "Contact updated successfully", modifiedCount: result.modifiedCount };
}


const deleteContact =  async (contactId) => {
    if(!ObjectId.isValid(contactId)){
      throw new Error("No contact found with this given ID")
    }
    const result = await mongodb.getDb().collection('contacts').deleteOne({_id: new ObjectId(contactId)})
    if( result.deletedCount === 0){
      throw new Error("No contact found with this given ID")
    }
    return {message: "Contact deleted successfully", deletedCount: result.deletedCount }
}

module.exports = { getAllContacts, getOneContact, addNewContact, updateContact, deleteContact}
