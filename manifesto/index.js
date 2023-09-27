window.addEventListener("load", () => {
  const container = document.getElementById("container");
  const center = container.dataset.coord;
  const cCoord = center.split(",");
  const whalf = window.innerWidth/2;
  const hhalf = window.innerHeight/2;
  const scale = Math.min(window.innerWidth, window.innerHeight)/3;
  const coordsX = [0,1,0,-1];
  const coordsY = [1,0,-1,0];

  function display(rule, x, y, isCenter = false) {
    const link = document.createElement("a");
    if (isCenter) {
      link.style.left = whalf +"px";
      link.style.top = hhalf+"px";
      link.classList = "center";
    } else {
      link.style.left = whalf+(x*scale)+"px";
      link.style.top = hhalf+(y*scale)+"px";
    }
    link.innerText = rule;
    if (!isCenter) link.onclick = () => {
      const text = `<!doctypehtml><title>website-making manifesto</title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><link href=https://iguannalin.github.io/ctw/manifesto/index.css rel=stylesheet><script src=https://iguannalin.github.io/ctw/manifesto/index.js></script><div data-coord=${+cCoord[0]+x},${+cCoord[1]+y} id=container></div>`;
      const blob = new Blob([text], {type: "text/html"});
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, '_blank');
      window.URL.revokeObjectURL(blobUrl);
    }
    document.body.appendChild(link);
  }

  function assign(rules) {
    if (rules[center]) display(rules[center], 0, 0, true);
    coordsX.forEach((x,index) => {
      const coord = `${+cCoord[0]+x},${+cCoord[1]+coordsY[index]}`;
      if (rules[coord]) {
        display(rules[coord], x, coordsY[index]);
      }
    })
    
  }

  fetch("https://iguannalin.github.io/ctw/manifesto/manifesto.json").then((r) => r.json()).then((d) => {
    assign(d);
  })
});