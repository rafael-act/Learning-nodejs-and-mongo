var app = require("./config/server");

app.listen(3000, function () {
  console.log("Servidor OK. Rodando na porta 3000");
});
//O Express simplifica drasticamente esse processo de criar um servidor http na mão para js .
