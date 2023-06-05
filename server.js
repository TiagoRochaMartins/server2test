/*const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Lê o arquivo index.html e envia para o cliente
  fs.readFile('ficheiro1.html', (err, data) => { 
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Erro interno do servidor');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(8000, () => {
  console.log('Servidor a funcionar na porta 8000');
});*/

/*const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Lê o arquivo index.html e envia para o cliente
  
  fs.readFile('FicheirosHTMLWEB/ficheiro1.html', (err, data) => { 
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Erro interno do servidor');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(8000, () => {
  console.log('Servidor a funcionar na porta 8000');
});*/

/*const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './ficheiro1.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Página não encontrada');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      if (filePath === './ficheiro1.html') {
        data = data.toString().replace('<a href="ficheiro2.html">Abrir Página 2</a>', '<a href="/ficheiro2.html">Abrir Página 2</a>');
      }
      res.end(data);
    }
  });
});

server.listen(8000, () => {
  console.log('Servidor a funcionar na porta 8000');
});*/

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './FicheirosHTMLWEB/ficheiro1.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Página não encontrada');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      if (filePath === './FicheirosHTMLWEB/ficheiro1.html') {
        data = data.toString()
          .replace('<a href="ficheiro2.html">Abrir Página 2</a>', '<a href="/FicheirosHTMLWEB/ficheiro2.html">Abrir Página 2</a>')
          .replace('<a href="ficheiro3.html">Abrir Página 3</a>', '<a href="/FicheirosHTMLWEB/ficheiro3.html">Abrir Página 3</a>')
          .replace('<a href="ficheiro4.html">Abrir PáginaQRCode</a>', '<a href="/FicheirosHTMLWEB/ficheiro4.html">Abrir Página 4</a>')
          .replace('<a href="contactos.html">Abrir PáginaContactos</a>', '<a href="/FicheirosHTMLWEB/contactos.html">Contactos</a>');
      }
      res.end(data);
    }
  });
});

server.listen(8000, () => {
  console.log('Servidor em execução na porta 8000');
  
});







