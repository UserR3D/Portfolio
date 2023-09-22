const place = document.querySelectorAll(".placeholder");
const li = document.querySelectorAll(".header a");
const mobileLi = document.querySelectorAll(".mobile-ul li");
const button = document.querySelector(".header-mobile button");
const gridBottom = document.querySelector(".grid-bottom");
const x = {
  breakPointLarge: window.matchMedia("(max-width: 1024px)"),
  breakPointMedium: window.matchMedia("(max-width: 768px)"),
};

function activeClass(active) {
  if (x.breakPointLarge.matches) {
    return false;
  } else {
    active.classList.toggle("active");
    if (active.classList.contains("active")) {
      active.style.bottom = `${active.offsetHeight - 100}px`;
    } else {
      active.style.bottom = `0px`;
    }
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
      break;
  }
}

function scrollSmooth(div) {
  div.scrollIntoView({ behavior: "smooth" });
}

function media() {
  if (window.innerWidth > 1024) {
    window.scrollTo(0, 0);
  }
  if (x.breakPointLarge.matches) {
    mobileLi.forEach((item) => {
      item.addEventListener("click", (event) => {
        switch (event.currentTarget.innerText) {
          case "Skills":
            scrollSmooth(document.querySelector(".skills"));
            break;
          case "Laboratório":
            scrollSmooth(document.querySelector(".lab"));
            break;
        }
      });
    });
  }
}
window.addEventListener("resize", media);
media();

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
