const express = require('express');//create a constant named "express"

const app = express();// create a constant "app" alows to create a application express

app.use((req, res) => { //methode request response
   res.json({ message: 'YOUR Request Has Been  Received  !' }); //message return
});

module.exports = app;//export the app so that we can acces'it in the other files