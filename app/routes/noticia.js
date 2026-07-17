module.exports = function (application) {
  application.get("/noticia", function (req, res) {
    var connection = application.config.dbConnection(); //cria a conexão com o banco de dados
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function (error, results) {
      res.render("noticias/noticia", { noticia: results }); //envia para a view noticia.ejs o resultado da query
    });
  });
};      
