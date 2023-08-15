const url = 'https://exemplo.com/api/recurso';
const headers = new Headers();
headers.append('X-AUTH-TOKEN', '6e0a2d6c-11f3-4864-8349-66c3b12c6676');
headers.append('Content-Type', 'application/json');

const options = {
  method: 'GET', // Método da requisição (GET, POST, etc.)
  headers: headers, // Adicionando os cabeçalhos à requisição
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Manipule a resposta da requisição aqui
  })
  .catch(error => {
    // Lida com erros de requisição aqui
  });
