const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// CORS for react app, assuming port 3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

// use middleware to serve static images
app.use(express.static('public'))

// read data from options file
const carpinchos = fs.readFileSync('./carpinchos.json', 'utf-8');
const carpinchoData = JSON.parse(carpinchos);

app.get('/carpinchos', (req, res) => {
  // return data from file
  res.json(carpinchoData)
})

app.post('/order', (req, res) => {
  // create a random order number
  const orderNumber = Math.floor(Math.random() * 10000000000);

  res
    // set status to 201 (created)
    .status(201)

    // return "order number" as the response
    .json({ orderNumber })
})

if (require.main === module) {
  app.listen(3030, () => console.log('Carpincho server listening on port 3030!'))
}

module.exports = app;