
const inputSearch = document.querySelector("input[type='search']");
const offScreenMenu = document.querySelector('.off-screen-menu');
const hamMenu = document.querySelector(".ham-menu");
const menuLinks = document.querySelector(".services-click");
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle('active');

})
menuLinks.addEventListener('click', () => {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove('active');
  });



inputSearch.oninput = () => {
  content.innerHTML = "";

  items
    .filter((item) =>
      item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
};


const content = document.getElementsByClassName("content")[0]; // Corrigido
let items = [];

function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

fetch("./data/tabela_22.json")
  .then((data) => data.json())
  .then((users) => {
    users.forEach((user) => {
      addHTML(user.codigo + " - " + user.procedimento);
      items.push(user.codigo + " - " + user.procedimento);
    });
  })
  .catch((error) => console.error("Erro ao buscar ou processar os dados:", error));