const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const router=require('../backend/routes/productroutes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/product',router);
mongoose.connect("mongodb+srv://kamal:root@cluster0.hqfjcj4.mongodb.net/?retryWrites=true&w=majority")
.catch((err) => console.log(err));

app.listen(4000,  ()=> {
    console.log("Express server is running");
  });