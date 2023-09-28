window.addEventListener("load", () => {
  const container = document.getElementById("container");
  const key = container.dataset.key;
  const value = container.dataset.value;
  
  if (!key || !value) return;
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerHTML = key;
  const p = document.createElement("p");
  p.innerHTML = value;
  div.appendChild(h2);
  div.appendChild(p);
  container.appendChild(div);
});