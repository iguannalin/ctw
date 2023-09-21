window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");

  function displayItems(arr) {
    arr.forEach((el) => {
      const p = document.createElement("p");
      p.innerText = el;
      p.style.top = `${getRandomInt(0,window.innerHeight)}px`;
      p.style.left = `${getRandomInt(0,window.innerWidth)}px`;
      p.onmouseenter = (e) => {
        e.target.style.filter = "blur(0px)";
        e.target.style.color = "#00ff00";
      }
      container.appendChild(p);
    });
  }

  fetch("manifesto.json").then((elems) => elems.json()).then((items) => {
    console.log(items);
    displayItems(items);
  });
});