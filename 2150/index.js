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
    console.log(item);
    // let total = Number(sessionStorage.getItem("total"));
    // let page = sessionStorage.getItem("page");
    // page++;
    let total = heading.dataset.total;
    if (total != 2150 && total >= 500) {
      heading.innerHTML = `you ran out of ${item.name.split(" ")[0]}, so you bought some ${item.name}<br><br>you have $${Math.round(total * 100) / 100} left.`
      img.src = item.imageThumbnail;
      img.width = "200";
      // link.href = `${page}.html`;
      link.innerHTML = "continue shopping";
    } 
    // else {
      //   heading.innerHTML = `you now have $${total}.`
      //   container.removeChild(img);
      //   container.removeChild(link);
      // }
      // sessionStorage.setItem("total", total);
      // sessionStorage.setItem("page", page);
      total -= item.regularPrice;
    // link.onclick = () => {
      // const opened = window.open(`data:text/html,<div style="line-height:1em;word-wrap:break-word;"id=d><script>for(i=0;1e4>i;i++)d.innerHTML+=Math.random()<.5&&"\u29F8"||"\u29F9"</script>`, "_self");
      // const opened = window.open("");
      // opened.document.writeln(`<!doctypehtml><title>2150</title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><script src=https://iguannalin.github.io/ctw/2150/index.js></script><div id=container><h1 id=heading data-total="${total}"></h1><img id=img> <a id=link>let’s go shopping</a></div>`);
      // console.log({opened});
    // }
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