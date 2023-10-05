window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  const subtitle = document.getElementById("subtitle");

  function loadShelf(data) {
    data.forEach((item) => {
      // const div = document.createElement("div");
      const a = document.createElement("a");
      a.innerText = item.name;
      a.href = item.url;
      a.onmouseover = () => subtitle.innerText = item.description;
      a.onmouseout = () => subtitle.innerText = "~";
      a.style.height = Math.max(15, (item.name.length))+"ch";
      a.style.fontSize = Math.max(16, item.name.length % 24)+"px";
      // div.appendChild(a);
      container.appendChild(a);
    })
  }

  fetch("sites.json").then((r) => r.json()).then((d) => {
    loadShelf(d);
  });
});