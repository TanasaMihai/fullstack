const express = require('express');                                // create a constant "app" alows to create a application express

const app = express();

app.use((req, res, next) => {
console.log('Request Received !!!');
  next();
});

app.use((req, res, next) => {
  res.status(555);                                                 //reponse status
  next();
});

app.use((req, res, next) => {                                      //methode request / response with function 'next'
    res.json({ message: 'YOUR Request Has Been  Received  !!!' }); //message return en json HTTP page
  next();                                                          //lignes 5.6.7 is a function in app Express  and is a middleware
});                                                                

app.use((req, res, next) => {
    console.log('Response sent successfuly  !!! ');
});

module.exports = app;