// Como uma Api funciona
// Callback
// Requisições de uma api

function clicou() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json;
    })
    .then((data) => {
      console.log(data);
    });
}

document.querySelector("#botao").addEventListener("click", clicou);
