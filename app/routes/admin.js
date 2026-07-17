module.exports = function (application) {
  application.get("/formulario_inclusao_noticia", function (req, res) {
    res.render("admin/form_add_noticia");
  });

  application.post("/noticias/salvar", function (req, res) {
    var noticia = req.body;

    req.assert("titulo", "Título é obrigatório").notEmpty(); //express validator
    req.assert("resumo", "Resumo é obrigatório").notEmpty();
    req.assert("autor", "Autor é obrigatório").notEmpty();
    req
      .assert("data_noticia", "Data da notícia é obrigatória")
      .notEmpty()
      .isdate({ format: "YYYY-MM-DD" });

    var error = req.valiationErrors();

    if (error) {
      res.render("admin/form_add_noticia", {
        validacao: error,
        noticia: noticia,
      });
      return;
    }

    req.assert("noticia", "Notícia é obrigatória").notEmpty();

    var connection = application.config.dbConnection(); //cria a conexão com o banco de dados
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, results) {
      console.log(error);
      res.redirect("/noticias");
    });
  });
};
