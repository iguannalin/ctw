window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const w = window.innerWidth;
  const h = window.innerHeight;

  function display(key, value) {
    const link = document.createElement("a");
    let rw = getRandomInt(0,w);
    let rh = getRandomInt(0,h);
    link.style.left = rw+"px";
    link.style.top = rh+"px";
    link.innerHTML = key;
    setInterval(() => {
      rw = (rw > w ? 0 : rw+1);
      link.style.left = rw+"px";
      rh = (rh > h ? 0 : rh+1);
      link.style.top = rh+"px";
    }, 20);
    link.onclick = () => {
      const text = `<!doctypehtml><title>how-to live with tech</title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><link href=https://iguannalin.github.io/ctw/how-to/index.css rel=stylesheet><script src=https://iguannalin.github.io/ctw/how-to/spam.js></script><div data-key=${key} data-value=${value} id=container></div>`;
      const blob = new Blob([text], {type: "text/html"});
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, "_blank", `popup,location,status,scrollbars,resizable,width=400, height=400, left=${getRandomInt(0,500)}, top=${getRandomInt(0,500)}`);
      window.URL.revokeObjectURL(blobUrl);
    }
    document.body.appendChild(link);
  }

  fetch("https://iguannalin.github.io/ctw/how-to/things.json").then((r) => r.json()).then((d) => {
    console.log(Object.keys(d));
    Object.keys(d).forEach((key) => {
      display(key, d[key]);
    });
  })
});