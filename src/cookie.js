/*

 Básico script que añade cookies a un documento.
 Se requiere de dicho documento para la ejecución.

 Una vez ejecutado, en la consola del navegador al mostrar las cookies del
 documento (document.cookie) vemos las cookies que hemos añadido.



*/



var http = require('http');
var fs = require('fs');
var cookie = require('cookie');

http.createServer(function(req,res) {

  var setCookies = [];
  setCookies.push(cookie.serialize('nombre1','Nestor'));
  setCookies.push(cookie.serialize('nombre2','Aitor'));
  setCookies.push(cookie.serialize('nombre3','Omar'));

  res.setHeader('Set-Cookie',setCookies);
  res.writeHead(200, { 'Content-Type': 'text/html'});

  fs.createReadStream('./res/index.html').pipe(res);


}).listen(8080);

console.log('Server en el puerto 8080');
