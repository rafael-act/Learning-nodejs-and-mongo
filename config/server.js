var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");
console.log("Servidor rodando na porta 3000");

module.exports = app;