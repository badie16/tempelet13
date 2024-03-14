// start toggle nav
let btnOpen = document.querySelector(".btnOpen");
let menu = document.querySelector(".links");

btnOpen.onclick = function () {
  menu.classList.toggle("open");
  btnOpen.classList.toggle("fa-times");
};
// end toggle nav
// start
let header = document.querySelector("header");
let boxsFetiur = document.querySelector(".featured .boxs");
let H1Fetiur = document.querySelectorAll(".featured .box h1 span");
let started = false;
window.onscroll = function () {
  if (scrollY >= 150) {
    header.classList.add("scrole");
  }
  if (scrollY <= 150) {
    header.classList.remove("scrole");
  }
  if (scrollY + innerHeight >= boxsFetiur.offsetTop) {
    if (!started) {
      H1Fetiur.forEach(function (el) {
        let data = el.dataset.num;
        let count = setInterval(function () {
          el.textContent++;
          if (el.textContent == data) {
            clearInterval(count);
          }
        }, 2000 / +data);
      });
    }
    started = true;
  }
};

// end onscrol

let form = document.querySelector("#formEmail");
form.onsubmit = (e) => {
	e.preventDefault();
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "data.php", true);
	xhr.onload = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			let r = xhr.response;
			console.log(r);
		}
	};
	xhr.send(new FormData(form));
};

