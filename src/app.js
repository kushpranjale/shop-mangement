const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const router = require('./config/router');
const PORT = process.env.PORT || 8080;
mongoose.connect("mongodb+srv://lav:fL6ytZix7wPGBT58@cluster0-jltch.mongodb.net/shop-db?retryWrites=true&w=majority",{ useNewUrlParser: true })
.then( () => {
  console.log("connected!!!");
})
.catch((err) => {
  console.log("not connected!!! "+err);
})
mongoose.set('useCreateIndex', true);
app.use(bodyParser.json());
app.use(cors());
app.use('/images',express.static(path.join('src/images')))
app.use("/api", router);
app.use(express.static(path.join(__dirname,'../public')));
app.get('*',(req,res)=> {
  res.sendFile(path.join(__dirname,'../public/index.html'))
})
app.listen(PORT,()=>{
    console.log("listening")
})