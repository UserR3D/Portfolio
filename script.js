const place = document.querySelectorAll(".placeholder");
const li = document.querySelectorAll(".header a");
const mobileLi = document.querySelectorAll(".mobile-ul li");
const button = document.querySelector(".header-mobile button");
const gridBottom = document.querySelector(".grid-bottom");
const x = {
  breakPointLarge: window.matchMedia("(max-width: 1024px)"),
  breakPointMedium: window.matchMedia("(max-width: 768px)"),
};
let y = 90;

function media() {
  if (x.breakPointLarge.matches) {
    y = 400;
  }
  if (x.breakPointMedium.matches) {
    y = 300;
  }
}

window.addEventListener("resize", media);
media();

function activeClass(active) {
  console.log(window.innerHeight);
  active.classList.toggle("active");
  active.classList.toggle("detail");
  if (active.classList.contains("active")) {
    active.style.bottom = `${active.offsetHeight - y}px`;
  } else {
    active.style.bottom = `-40px`;
  }
}

function handleDetail(action) {
  action.classList.toggle("detail");
}

function clickButton(event) {
  event.preventDefault();
  switch (event.currentTarget.innerText) {
    case "Skills":
      activeClass(document.querySelector(".skills"));
      break;
    case "Laboratório":
      activeClass(document.querySelector(".lab"));
      break;
    case "Sobre":
      handleDetail(document.querySelector(".main-class"));
      handleDetail(document.querySelector(".name"));
      break;
    case "Contato":
      handleDetail(document.querySelector(".contato"));
  }
}

li.forEach((item) => {
  item.addEventListener("click", clickButton);
});

place.forEach((item) => {
  item.addEventListener("click", (event) => {
    activeClass(event.currentTarget);
  });
});

button.addEventListener("click", () => {
  handleDetail(document.querySelector(".mobile-ul"));
});

mobileLi.forEach((item) => {
  item.addEventListener("click", clickButton);
});
