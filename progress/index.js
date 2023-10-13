window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  let count = (window.innerWidth/160) *(window.innerHeight/16)

  function makeProgress() {
    // if (count <= 0) clearInterval(interval);
    // count--;
    // for (let i = 0; i < 50; i++) {
      console.log("scrolling")
    const progress = document.createElement("progress");
    container.appendChild(progress);
    // }
    // progress.style.position = "absolute";
    // progress.style.backgroundColor = "red";
    // progress.style.left = getRandomInt(0, window.innerWidth)+"px";
    // progress.style.top = getRandomInt(0, window.innerHeight)+"px";
  }

  for (let i = 0; i < (window.innerHeight/16); i++) setTimeout(makeProgress, i); //init
  window.onscroll = () => makeProgress();

  // const interval = setInterval(makeProgress, 50);
  // let delta = 1;
  // setInterval(() => {
  //   if (container.clientWidth > window.innerWidth) delta = -1;
  //   else if (container.clientWidth <= 0) delta = 1;
  //   container.style.width = (container.clientWidth+delta+"px");
  // }, 25);
});