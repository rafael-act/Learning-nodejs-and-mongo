var express = require("express");
var consign = require("consign");  
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
 

var app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(bodyParser.urlencoded({ extended: true }));//urlencoded tratativa de forma de receber dados de formulários
app.use(expressValidator());//expressValidator validação de dados de formulários
console.log("Servidor rodando na porta 3000");

consign().include("app/routes")
.then("config/dbConnection.js")
.then("app/models")
.into(app);

module.exports = app;