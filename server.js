require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('./database/connect')
const cors = require('cors')

const professionalRoute = require('./routes/professionalRoutes')
const contactsRoute = require('./routes/contactsRoute')
const contactRoute = require('./routes/contactsRoute')
const addToContactRoute = require('./routes/contactsRoute')
const updateContactRoute = require('./routes/contactsRoute')
const deleteContactRoute = require('./routes/contactsRoute')

const port = process.env.PORT || 8080
const host = process.env.HOST
const app = express()

app.use(bodyParser.json()).use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})
app.use(cors()) // Enable CORS for all requests

// Code for swagger API documentation
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Route to retrieve professional data from user collection in mongodb database.
app.use('/', professionalRoute)
// Route to retrieve conatact data from contact collection in mongodb database.
app.use('/', contactsRoute)
// Route to get a contantact based on the id
app.use('/', contactRoute)
// Route to add a contact(s) to the contacts collection
app.use('/', addToContactRoute)
// Route to delete a contact
app.use('/', updateContactRoute)
// Route to delete contact
app.use('/', deleteContactRoute)

/* ***********************
 * Log statement to confirm server operation
 *************************/
mongodb.initDB((err, mongodb) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(port)
    console.log(`Connected to DB and listening on ${host}:${port}`)
  }
})

// app.listen(port, () => {
//   console.log(`app listening on ${host}:${port}`)
// })
