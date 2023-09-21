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

  function displayItem(item) {
    let total = heading.dataset.total;
    if (total != 2150 && total >= 500) {
      heading.innerHTML = `you ran out, so you bought some ${item.name}<br><br>you have $${Math.round(total * 100) / 100} left.`
      img.src = item.imageThumbnail;
      img.width = "200";
      link.innerHTML = "continue shopping";
    } else if (total != 2150) {
      heading.innerHTML = `you have $${Math.round(total * 100) / 100} left<br><br>good luck!`;
      container.removeChild(img);
      container.removeChild(link);
    }
    total -= item.regularPrice;
      
    link.onclick = () => {
      const text = `<!doctypehtml><title>2150</title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><script src=https://iguannalin.github.io/ctw/2150/index.js></script><div id=container><h1 id=heading data-total="${total}"></h1><img id=img> <button id=link>let’s go shopping</button></div>`;
      const blob = new Blob([text], {type: "text/html"});
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, '_blank');
      window.URL.revokeObjectURL(blobUrl);
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