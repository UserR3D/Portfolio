const place = document.querySelectorAll(".placeholder");
const mobileLi = document.querySelectorAll(".mobile-ul li");
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

function media() {
  if (window.innerWidth > 1024) {
    window.scrollTo(0, 0);
  }
  if (x.breakPointLarge.matches) {
    mobileLi.forEach((item) => {
      item.addEventListener("click", (event) => {
        switch (event.currentTarget.innerText) {
          case "Skills":
            document
              .querySelector(".skills")
              .scrollIntoView({ behavior: "smooth" });
            break;
          case "Laboratório":
            document
              .querySelector(".lab")
              .scrollIntoView({ behavior: "smooth" });
            break;
        }
      });
    });
    place.forEach((item) => {
      item.classList.remove("active");
      item.style.bottom = `0px`;
    });
  }
}
window.addEventListener("resize", media);
media();

document.querySelectorAll(".header a").forEach((item) => {
  item.addEventListener("click", clickButton);
});

place.forEach((item) => {
  item.addEventListener("click", (event) => {
    activeClass(event.currentTarget);
  });
});

document
  .querySelector(".header-mobile button")
  .addEventListener("click", () => {
    handleDetail(document.querySelector(".mobile-ul"));
  });

document.querySelectorAll(".mobile-ul li").forEach((item) => {
  item.addEventListener("click", clickButton);
});
