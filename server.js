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

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Lê o arquivo index.html e envia para o cliente
    fs.readFile('ficheiro1.html', (err, data) => { 
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Erro interno do servidor');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Adiciona o link para a página 2 no GitHub
        const content = data.toString().replace('<a href="ficheiro2.html">Abrir Página 2</a>', '<a href="ficheiro2.html">Abrir Página 2</a>');
        res.end(content);
      }
    });
  } else {
    // URL inválido - Retorna um erro 404
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Página não encontrada');
  }
});

server.listen(8000, () => {
  console.log('Servidor a funcionar na porta 8000');
});


