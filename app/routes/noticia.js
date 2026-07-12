var dbconnection=require("../../config/dbconnection");//importa o arquivo dbconnection.js

module.exports = function (app) {
  app.get("/noticia", function (req, res) {
var connection = app.config.dbConnection();//cria a conexão com o banco de dados  
    connection.query(
      "SELECT * FROM noticias WHERE id_noticia = 2;",
      function (error, results, fields) {
        console.log(results);
        res.render("noticias/noticias", { noticias: results });//envia para a view noticias.ejs o resultado da query
      },
    );
  });
};
