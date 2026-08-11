module.exports.index = function (application, request, response) {
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);
  noticiasModel.getUltimasNoticias(function (error, results) {
    response.render("home/index", { noticias: results });
  });
}