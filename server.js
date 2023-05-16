/*const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Lê o arquivo index.html e envia para o cliente
  fs.readFile('ficheiroemHTML.html', (err, data) => { 
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
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    // Lidar com a recepção de um arquivo enviado pelo GitHub
    const fileStream = fs.createWriteStream('./ficheiros/' + Date.now() + '.html');
    req.pipe(fileStream);
    req.on('end', () => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Arquivo recebido e salvo com sucesso!');
    });
  } else if (req.method === 'GET' && req.url === '/obter-arquivos') {
    // Obter a lista de arquivos no diretório de arquivos
    fs.readdir('caminho/para/diretorio/arquivos', (err, files) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Erro interno do servidor');
      } else {
        // Filtrar apenas os arquivos HTML
        const htmlFiles = files.filter(file => path.extname(file).toLowerCase() === '.html');

        // Enviar a lista de arquivos como uma resposta JSON
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(htmlFiles));
      }
    });
  } else {
    // Rota padrão para retornar o conteúdo do arquivo "ficheiroemHTML.html"
    fs.readFile('ficheiroemHTML.html', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Erro interno do servidor');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  }
});

server.listen(8000, () => {
  console.log('Servidor a funcionar na porta 8000');
});
