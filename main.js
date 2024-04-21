let btn = document.querySelector("#btnn");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
let scroll = document.querySelector("#scroll");
let height = document.documentElement.scrollHeight - document.body.clientHeight;

window.onscroll = function () {
  let scrollTop = document.body.scrollTop;
  scroll.style.width = `${(scrollTop / height) * 100}%`;
};
