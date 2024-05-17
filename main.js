let container = document.createElement("div");
container.classList.add("container");

let title = document.createElement("h1");
title.classList.add("title");
title.textContent = "slider";

let slider = document.createElement("img");
slider.classList.add("slider");
slider.src = "img/1.jpg";

let btnWrap = document.createElement("div");
btnWrap.classList.add("btn-wrap");

let backBtn = document.createElement("button");
let nextBtn = document.createElement("button");

backBtn.textContent = "<";
nextBtn.textContent = ">";

backBtn.classList.add("back-btn", "btn");
nextBtn.classList.add("next-btn", "btn");

document.body.append(container);

btnWrap.append(backBtn, nextBtn);

container.append(title, slider, btnWrap);

/////////////////////////

let texts = ["text1", "text2", "text3", "text4", "text5", "text6", "text7"];

let indexSlide = 1;

let slideInterval = setInterval(nextSlide, 2000);

////////////////////////

let i = 1;

if (i > 5) {
  i = 1;
}

function nextSlide() {
  i++;
  if (i > 5) {
    i = 1;
  }

  slider.src = "img/" + [i] + ".jpg";
}

backBtn.addEventListener("click", function () {
  clearInterval(slideInterval);
  i--;
  if (i == 0) {
    i = 5;
  }

  slider.src = "img/" + [i] + ".jpg";

  slideInterval = setInterval(nextSlide, 2000);
});

nextBtn.addEventListener("click", function () {
  clearInterval(slideInterval);
  i++;
  if (i > 5) {
    i = 1;
  }

  slider.src = "img/" + [i] + ".jpg";
  slideInterval = setInterval(nextSlide, 2000);
});

// if (window.jQuery) {
//   var vJq = jQuery.fn.jquery;
//   console.log(vJq);
// }
