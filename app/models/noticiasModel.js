module.exports = function () {
  this.getNoticias = function (connection, callback) {
    connection.query("SELECT * FROM noticias", callback);
    console.log(callback + " teste");
  };

  this.getNoticia = function (connection, id_noticia, callback) {
    connection.query("SELECT * FROM noticias WHERE id_noticia = 1;", callback);
    console.log(callback + " teste");
  };

  this.salvarNoticia = function (noticia, connection, callback) {
    connection.query("INSERT INTO noticias SET ?", noticia, callback);
    console.log(callback + " teste");//mysql suporta informacao com SET(PEGA O JSON E TRANSFORMA EM STRING)
  };
  return this;
};
