module.exports.formulario_inclusao_noticia = function (
  application,
  request,
  response,
) {
  response.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
};

module.exports.noticias_salvar = function (application, request, response) {
  // Implementation for saving news
  var noticia = request.body;

  request.assert("titulo", "Título é obrigatório").notEmpty(); //express validator
  request.assert("resumo", "Resumo é obrigatório").notEmpty();
  request.assert("autor", "Autor é obrigatório").notEmpty();
  request
    .assert("data_noticia", "Data da notícia é obrigatória")
    .notEmpty()
    .isDate({ format: "YYYY-MM-DD" });
  request.assert("noticia", "Notícia é obrigatória").notEmpty();

  var error = request.validationErrors();

  if (error) {
    response.render("admin/form_add_noticia", {
      validacao: error,
      noticia: noticia,
    });
    return;
  }

  request.assert("noticia", "Notícia é obrigatória").notEmpty();

  var connection = application.config.dbConnection(); //cria a conexão com o banco de dados
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.salvarNoticia(noticia, function (error, results) {
    console.log(error);
    response.redirect("/noticias");
  });
};
