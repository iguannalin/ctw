window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const heading = document.getElementById("heading");
  const link = document.getElementById("link");
  const img = document.getElementById("img");
  const container = document.getElementById("container");
  let total;

  function displayItem(item) {
    console.log(item);
    let total = Number(sessionStorage.getItem("total"));
    // let page = sessionStorage.getItem("page");
    // page++;
    if (!total) // initial
    {
      total = 2150;
      // page = 1;
    } else if (total > 0)
    {
      total -= item.regularPrice;
      heading.innerHTML = `you ran out of ${item.name.split(" ")[0]}, so you bought some ${item.name}<br><br>you have $${Math.round(total * 100) / 100} left.`
      img.src = item.imageThumbnail;
      img.width = "200";
      // link.href = `${page}.html`;
      link.innerHTML = "continue shopping";
    } else {
      heading.innerHTML = `you now have $${total}.`
      container.removeChild(img);
      container.removeChild(link);
    }
    sessionStorage.setItem("total", total);
    // sessionStorage.setItem("page", page);
    link.onclick = () => {
      window.open("");
      opened.document.writeln(`<!doctypehtml><title>2150</title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><script src=index.js></script><div id=container><h1 id=heading>your grandma left you $2150 before she died.</h1><img id=img> <a href=1.html id=link>let’s go shopping</a></div>`);
    }
  }

  function startShopping(groceries) {
    if (!groceries) return;
    displayItem(groceries[getRandomInt(0, groceries.length)]);
  }
          

  fetch("https://seasons986.pythonanywhere.com/groceries").then((r) => r.json()).then((d) => {
    if (d) {
      startShopping(Array.from(d.pageProps.data.results));
    }
  })
});