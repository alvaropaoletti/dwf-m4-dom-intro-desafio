const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const ulList = document.querySelector("ul");
  const allLis = document.querySelectorAll("li");

  allLis.forEach((li) => li.remove());

  cosasQueAprendimos.forEach((listItem) => {
    const li = document.createElement("li");
    li.textContent = listItem.tema;
    if (listItem.class) {
      li.classList.add(listItem.class);
    }
    ulList.appendChild(li);
  });
}
main();
