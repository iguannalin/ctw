window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  const key = atob(container.dataset.key);
  const value = atob(container.dataset.value);
  const palettes = ["fde725","a0da39","4ac16d","1fa187","277f8e","365c8d","46327e","440154","f0f921","febd2a","f48849","db5c68","b83289","8b0aa5","5302a3","0d0887"];

  function showContent() {
    document.body.style.backgroundColor = "#"+palettes[getRandomInt(0, palettes.length)];
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerHTML = key;
    const p = document.createElement("div");
    p.innerHTML = value;
    div.appendChild(h2);
    div.appendChild(p);
    container.appendChild(div);
  }

  setInterval(showContent, 500);
});