async function clicou() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");

  let json = await response.json();

  let resp = await json[0].title;

  console.log(resp);
}

let btn = document.querySelector("#botao");
btn.addEventListener("click", clicou);
