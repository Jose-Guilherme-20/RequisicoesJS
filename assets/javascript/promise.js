// Promise é uma função assicrona
// Catch somente se der erro
// finally executado dando certo ou errado

function clicou() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data[0].title);
    })
    .catch((error) => {
      console.log("Aconteceu um erro " + error);
    })
    .finally(() => {
      alert("ACABOU");
    });
}
document.querySelector("#botao").addEventListener("click", clicou);
