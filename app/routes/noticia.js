var dbconnection=require("../../config/dbconnection");//importa o arquivo dbconnection.js

module.exports = function (app) {
  app.get("/noticia", function (req, res) {
var connection = app.config.dbConnection();//cria a conexão com o banco de dados  
    connection.query(
      "SELECT * FROM noticias WHERE id_noticia = 1",
      function (error, results, fields) {
        console.log(results);
        res.render("noticias/noticia", { noticia: results });//envia para a view noticias.ejs o resultado da query
      },
    );
  });
};
