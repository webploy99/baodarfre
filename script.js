var content = document.getElementById("content");
// console.log(content.children);
let totop = 0;

setInterval(() => {
  totop += 80;
  if (totop < 1320) {
    content.style.marginTop = "-" + totop + "px";
  } else totop = 0;
}, 1000);

var showcontent = document.getElementById("show-content");
let topto = 0;

setInterval(() => {
  topto += 80;
  if (topto < 1320) {
    showcontent.style.marginTop = "-" + topto + "px";
  } else topto = 0;
}, 1000);

let btn = document.querySelectorAll(".btn");
let close = document.querySelector("#close");

btn.forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelector("#bgbtn").classList.toggle("show");
  });
});

close.addEventListener("click", function () {
  document.querySelector("#bgbtn").classList.toggle("show");
});
