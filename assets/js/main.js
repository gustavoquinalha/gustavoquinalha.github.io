let containerBg;

var rows = 10;
var columns = 10;

window.onload = function() {
  containerBg = document.querySelector(".container-bg");
  btnRestart = document.querySelector(".restart");
  for (let i = 0; i < rows * columns; i++) {
    var html = document.createElement("div");
    html.className = "item item-" + (i + 1);
    containerBg.append(html);
  }

  containerBg.addEventListener("click", resetDivs);

  insertDivs();
};

function insertDivs() {
  const rands = [];
  let count = 0;
  while (count < 8) {
    const rand = Math.floor(Math.random() * 100 + 1);
    if (!(rand in rands)) {
      rands.push(rand);
      count++;
    }
  }
  rands.forEach(r => {
    document.querySelector(`.item-${r}`).classList.add("white");
  });
}

function resetDivs() {
  const whites = document.querySelectorAll(".white");
  Array.from(whites).forEach(r => r.classList.remove("white"));
  insertDivs();
}

setInterval(function(){ resetDivs(); }, 8000);