const apiUrl = 'https://github.com/TiagoRochaMartins/server2test/blob/main/testebloco.txt'; 

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const content = atob(data.content); // Decodifica o conteúdo do arquivo a partir da codificação base64
    document.getElementById('conteudo-arquivo').textContent = content; // Insere o conteúdo do arquivo em um elemento HTML com o id "conteudo-arquivo"
  })
  .catch(error => {
    console.error('Erro ao obter o conteúdo do arquivo:', error);
  });
