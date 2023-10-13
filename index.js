window.addEventListener("load", () => {
  const container = document.getElementById("container");
  let count = (window.innerWidth/160) *(window.innerHeight/16)

  function makeProgress() {
    const progress = document.createElement("progress");
    container.appendChild(progress);
  }

  for (let i = 0; i < (window.innerHeight/16); i++) setTimeout(makeProgress, i); //init
  window.onscroll = () => makeProgress();
});