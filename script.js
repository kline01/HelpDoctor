const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.oninput = () => {
  content.innerHTML = "";

  items
    .filter((item) =>
      item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
};

function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

fetch("./data/tabela_22.json")
  .then((data) => data.json())
  .then((users) => {
    users.forEach((user) => {
      addHTML(user.codigo + " - " +user.procedimento);
      items.push(user.codigo + " - " + user.procedimento);
    });
  });
