require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('./database/connect')

const professionalRoute = require('./routes/professionalRoutes')
const contactsRoute = require('./routes/contactsRoute')
const contactRoute = require('./routes/contactsRoute')

const port = process.env.PORT || 8080
const host = process.env.HOST
const app = express()

app.use(bodyParser.json()).use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

// Route to retrieve professional data from user collection in mongodb database.
app.use('/', professionalRoute)
// Route to retrieve conatact data from contact collection in mongodb database.
app.use('/', contactsRoute)
// Route to get a contantact based on the id
app.use('/', contactRoute)

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
