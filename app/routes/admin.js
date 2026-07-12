module.exports = function (application) {
  application.get("/formulario_inclusao_noticia", function (req, res) {
    res.render("admin/form_add_noticia");
  });

  application.post("/noticias/salvar", function (req, res) {
    var noticia = req.body;

    var connection = application.config.dbConnection(); //cria a conexão com o banco de dados
    var noticiasModel = new application.app.models.noticiasModel;

    noticiasModel.salvarNoticia(noticia, connection, function (error, results) {
      res.redirect("/noticias");
    }
    );
  });
}