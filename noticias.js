var http = require("http"); //importar arquivos externos

var server = http.createServer(function (request, response) {
  var categoria = request.url;

if (categoria == "/tecnologia") {
  response.end("<html><body><h1>Noticias de tecnologia</h1></body></html>");
}else if (categoria == "/moda") {
    response.end("<html><body><h1>Noticias de moda</h1></body></html>");
}else if (categoria == "/beleza") {
    response.end("<html><body><h1>Noticias de beleza</h1></body></html>");
}else
  response.end("<html><body><h1>Noticias do dia</h1></body></html>");
});

server.listen(3000);
