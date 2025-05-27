const express = require('express');
const mongoose = require('mongooes');
const dotenc =  require('dotenv'); 
const cors = require('cors');

dotenv.config();
const app =express();

app.use(cors());
app.use(express.json());

//mongoose connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("MongoDB connected"))
    .catch(err => console.error("MongoDb connection fialed"));


//routes
app.get('/' , (req,res) => res.send("API Running"));

