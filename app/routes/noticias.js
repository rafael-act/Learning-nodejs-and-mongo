var dbconnection=require("../../config/dbconnection");//importa o arquivo dbconnection.js

module.exports = function (application) {
  application.get("/noticias", function (req, res) {
var connection = application.config.dbConnection();//cria a conexão com o banco de dados  
    connection.query(
      "SELECT * FROM noticias",
      function (error, results, fields) {
        console.log(results);
        res.render("noticias/noticias", { noticias: results });//envia para a view noticias.ejs o resultado da query
      },
    );
  });
};
