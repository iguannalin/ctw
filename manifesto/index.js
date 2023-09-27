window.addEventListener("load", () => {
  const container = document.getElementById("container");
  const center = container.dataset.coord;
  console.log({center});
  const coordsX = [0,1,0,-1];
  const coordsY = [1,0,-1,0];
  
  function assign(text) {
    coordsX.forEach((x) => {
      coordsY.forEach((y) => {
        const coord = `${x++},${y}`;
        if (d[coord]) {}
      })
    })
    
      const link = document.createElement("a");
      link.innerText = t;
      link.onclick = () => {
        const text = `<!doctypehtml><title>2150</title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><script src=https://iguannalin.github.io/ctw/2150/index.js></script><div id=container><h1 id=heading data-total="${total}"></h1><img id=img> <button id=link>let’s go shopping</button></div>`;
        const blob = new Blob([text], {type: "text/html"});
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl, '_blank');
        window.URL.revokeObjectURL(blobUrl);
      }
  }

  fetch("manifesto.json").then((r) => r.json()).then((d) => {
    console.log(d);
  })
});