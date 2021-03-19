const express = require('express');
const cors = require("cors");
const path = require('path')
require('dotenv').config();
const mongoose = require('mongoose');
const doc = require('./config/schema'); // importing schema of document
const app = express()
const port = process.env.PORT || 8000; 
var fs = require('fs')
var filename = '../src/components/urlShortner/url-id.json'
var jsonData = require('../src/components/urlShortner/url-id.json')
app.use(express.json());
app.use(cors());

// importing database connection file
const { conn } = require('./config/dbConnection');
const { json } = require('express');
conn(); //calling function to connect db


var con = mongoose.connection;
app.get('/', (req,res)=>{
    res.send("hello Api is Working")
})





app.get('/req', (req,res) => {
  
    doc.find({},function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
      }
  });  
    // res.send("working")
});


app.get(`/drocks`,(req,res)=>{
    res.send("yoyoy")
})


app.get('/delete',(req,res)=>{
  // console.log(req.query.name);
  doc.deleteOne({ shortUrl: req.query.shortUrl }, function (err) {
    if (err) return res.status.json(handleError(err));
    res.status(200).json({ success:true, message:'Deleted succesfully' })
    console.log("deleted")
    // deleted at most one tank document
  });
  
})

const handleError = (err)=>{
  return { success:false,error:err } 
}



app.post('/writeJson',(req,res)=>{
  res.send("Done")
  console.log(jsonData['url-id'])

  jsonData['url-id']+=1;
fs.writeFile(filename, JSON.stringify(jsonData), function writeJSON(err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(jsonData));
  console.log('writing to ' + filename);
  console.log('---Done----- ' + filename);
  
});
})



//Inserting Data in the database
app.post('/insert', (req, res) => {
    var newDoc = new doc({
      url: req.body.url,
      shortUrl: `dshort@${jsonData['url-id']}.com`,
    })
    console.log(newDoc)
    newDoc.save((err,data)=>{
      if(err) console.log(err);
      else console.log("Data inserted")
    })
    console.log(newDoc)
    res.send("newDoc"); 
  });

app.listen(port,()=>{
    console.log(`Server is now running on port : ${port}`)
  })