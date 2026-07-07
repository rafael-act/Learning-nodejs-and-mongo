const { response } = require("express");

module.exports = function (app) {
  app.get("/noticias", function (req, res) {
    var mysql = require("mysql");

    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123456",
      database: "portal_noticias",
    });

    connection.query(
      "SELECT * FROM noticias",
      function (error, results, fields) {
        console.log(results);
        res.render("noticias/noticias", { noticias: results });//envia para a view noticias.ejs o resultado da query
      },
    );
  });
};
