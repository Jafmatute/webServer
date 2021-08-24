/** @format */
//importaciones
const express = require("express");
require("dotenv").config();

//express
const app = express();
const port = process.env.PORT;

//Mostrar index html
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(
    `Su proyecto está corriendo en el puerto http://localhost:${port}`
  );
});
