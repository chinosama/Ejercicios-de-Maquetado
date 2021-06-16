const { ENGINE_METHOD_PKEY_ASN1_METHS } = require("constants");
const express = require("express");
const app = express();
const port = 3030;
const path = require("path");
app.use(express.static('public'));


app.get("/",(req,res) => res.sendFile(path.join(__dirname,"views","home.html")));

app.get("/contact",(req,res) => res.sendFile(path.join(__dirname,"views","contact.html")));

app.get("/about",(req,res) => res.sendFile(path.join(__dirname,"views","about.html")));

app.listen(3030,()=> console.log("servidor corriendo en http://localhost:"+ port))