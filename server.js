'use strict';
console.log('server file is connected, but not neccessarily up on its PORT');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
//use
const app = express();
//middle wear
app.use(cors());
const PORT = process.env.PORT || 5555;

app.get('/', (request, response) => {
  response.status(200).send('Hello from the Server!');
});


//database connect 
const Cat = require('./models/cat');



//routes
app.get('/cats', getCats);


function getCats(req, res, next){
  try {
    console.log('we made it to the get Cats');
    let dataBaseResults = Cat.find();
    res.status(200).send(dataBaseResults);
  } catch (error) {
    next(error);
  }
}













app.get('*', (req,res) => {
  res.status(404).send('Not Found');
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
