function inserir() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Title: "titulo de teste",
      body: "Corpo de teste",
      userId: 2,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
}

let btn = document.querySelector("#inserir");
btn.addEventListener("click", inserir);
