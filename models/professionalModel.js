const mongodb = require('../database/connect')

const getUserData = async (req, res) => {
  const result = await mongodb.getDb().collection('user').find().toArray()
  return result[0] // Return the first user object

  // const result = await mongodb.getDb().collection('user').find();
  // result.toArray().then((lists) => {
  //     res.setHeader('Content-Type', 'application/json');
  //     res.status(200).json(lists[0]); // we just need the first one (the only one)
  // })
}

module.exports = { getUserData }
