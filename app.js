var app = require("./config/server");
var rotaHome = require("./app/routes/home");
rotaHome(app);
var rotaNoticias = require("./app/routes/noticias");
rotaNoticias(app);
var rotaFormularioInclusaoNoticia = require("./app/routes/formularioinclusaonoticias");
rotaFormularioInclusaoNoticia(app);

app.listen(3000, function () {
  console.log("Servidor OK. Rodando na porta 3000");
});
//O Express simplifica drasticamente esse processo de criar um servidor http na mão para js .
