const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'Week02 CSE341 API Docs',
    description: 'Contacts API'
  },
  host: 'localhost:3000',
  schemes: ['http'],
  definitions: {
    Contact: {
      // Define contact schema
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      favoriteColor: 'Blue',
      birthDay: '12/12/1999'
    }
  }
}

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/contactsRoute']

// Generate swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc)

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//     await import('./server.js')
// })
