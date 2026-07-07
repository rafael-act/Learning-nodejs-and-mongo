var dbconnection=require("../../config/dbconnection");//importa o arquivo dbconnection.js

module.exports = function (app) {
  var connection = dbconnection();
  app.get("/noticias", function (req, res) {

    connection.query(
      "SELECT * FROM noticias",
      function (error, results, fields) {
        console.log(results);
        res.render("noticias/noticias", { noticias: results });//envia para a view noticias.ejs o resultado da query
      },
    );
  });
};
