module.exports.noticias = function (application, request, response) {
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticias(function (error, results) {
    response.render("noticias/noticias", { noticias: results });
  });
};

module.exports.noticia = function (application, request, response) {
  var connection = application.config.dbConnection(); //cria a conexão com o banco de dados
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticia(function (error, results) {
    response.render("noticias/noticia", { noticia: results }); //envia para a view noticia.ejs o resultado da query
  });
};
