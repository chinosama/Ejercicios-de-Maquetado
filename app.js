const express = require("express");
const app = express();
const port = 3030;

app.get("/",(req,res) => res.send("Bienvenidos a mi sitio web"))

app.listen(3030,()=> console.log("servidor corriendo en http://localhost:"+ port))