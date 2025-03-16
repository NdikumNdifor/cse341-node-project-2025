require("dotenv").config()

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require("./database/connect")

const professionalRoute = require("./routes/professionalRoutes");

const port = process.env.PORT || 8080;
const host = process.env.HOST
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })

app.use("/", professionalRoute);


/* ***********************
 * Log statement to confirm server operation
 *************************/
mongodb.initDB((err, mongodb) => {
  if(err){
    console.log(err);
  }else{
    app.listen(port);
    console.log(`Connected to DB and listening on ${host}:${port}`);
  }
}); 


// app.listen(port, () => {
//   console.log(`app listening on ${host}:${port}`)
// })