const http = require('http');
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
});

