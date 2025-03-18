const getProfessionalModel = require('../models/professionalModel')

const getData = async (req, res, next) => {
  const user = await getProfessionalModel.getUserData()
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json(user)

  // const user = await getProfessionalModel.getUserData();
  // return res.json(user);
}

module.exports = { getData }

// const mongodb = require('../database/connect');

// const getData = async (req, res, next) => {
//   // const result = await mongodb.getDb().db().collection('user').find(); // This version is used when your database is empty in database connection code.
//   const result = await mongodb.getDb().collection('user').find();
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]); // we just need the first one (the only one)
//   });
// };

// module.exports = { getData };
