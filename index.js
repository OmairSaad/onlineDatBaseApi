const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Omair12:aeiou123321@urlshortner.tgbnxm3.mongodb.net/hurr')
.then((e)=>{
    console.log("Connedted to Online Db! ");
})
.catch(er=>{
    console.log("Err ", er);
}) 
app.use('/', require('./Routers/route'));
app.listen(3000, ()=>{ 
    console.log("Running.........");
}) 