const throng = require('throng')
const PORT = process.env.PORT || 8080;
//newly line added
const WORKERS = process.env.WEB_CONCURRENCY || 1
//newly line added
throng({
  workers: WORKERS,
  lifetime: Infinity
}, start)

function start() {
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const router = require('./config/router');


mongoose.connect("mongodb+srv://lav:fL6ytZix7wPGBT58@cluster0-jltch.mongodb.net/shop-db?retryWrites=true&w=majority",{useUnifiedTopology : true , useNewUrlParser: true})
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
}