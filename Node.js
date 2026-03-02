const express = require("express");

const app = express();

app.use(express.json());

app.post("/save",(req,res)=>{

console.log(req.body);

res.send("Saved");

});

app.listen(3000,()=>{

console.log("Server running");

});