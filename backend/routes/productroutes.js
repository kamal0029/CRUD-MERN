const products=require('../model/models');
const express=require('express');
const router=express.Router();
router.get("/", (req, res) => {
    res.send("express is here");
  });
  
  router.post("/create", (req, res) => {
    const newPost = new products({
      title: req.body.title,
      price: req.body.price,
    });
  
    newPost
      .save()
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });
  
  router.get("/posts", (req, res) => {
    products.find()
      .then((items) => res.json(items))
      .catch((err) => console.log(err));
  });
  
  router.delete("/delete/:id", (req, res) => {
    console.log(req.params);
    products.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });
  
  router.put("/update/:id", (req, res) => {
    products.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        description: req.body.description,
      }
    )
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });
  module.exports=router;