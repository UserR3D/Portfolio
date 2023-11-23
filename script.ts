const place = document.querySelectorAll<HTMLElement>(".placeholder");
const mobileLi = document.querySelectorAll<HTMLElement>(".mobile-ul li");
const skills = document.querySelector<HTMLElement>(".skills");
const lab = document.querySelector<HTMLElement>(".lab");
const x = {
  breakPointLarge: window.matchMedia("(max-width: 1024px)"),
  breakPointMedium: window.matchMedia("(max-width: 768px)"),
};

function activeClass(active: HTMLElement) {
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

function handleDetail(action: HTMLElement) {
  action.classList.toggle("detail");
}

function clickButton(selector: HTMLElement, e: Event) {
  e.preventDefault();
  switch (selector.innerText) {
    case "Skills":
      if (skills) activeClass(skills);
      break;
    case "Laboratório":
      if (lab) activeClass(lab);
      break;
    case "Sobre":
      handleDetail(document.querySelector(".main-class")!);
      handleDetail(document.querySelector(".name")!);
      break;
    case "Contato":
      handleDetail(document.querySelector(".contato")!);
      break;
  }
}

function media() {
  if (window.innerWidth > 1024) {
    window.scrollTo(0, 0);
  }
  if (x.breakPointLarge.matches) {
    mobileLi.forEach((item) => {
      item.addEventListener("click", () => {
        if (item) {
          switch (item.innerText) {
            case "Skills":
              if (skills) skills.scrollIntoView({ behavior: "smooth" });
              break;
            case "Laboratório":
              lab?.scrollIntoView({ behavior: "smooth" });
              break;
          }
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
  if (item instanceof HTMLElement)
    item.addEventListener("click", (e) => {
      clickButton(item, e);
    });
});

place.forEach((item) => {
  item.addEventListener("click", () => {
    activeClass(item);
  });
});

const btn = document.querySelector<HTMLButtonElement>(".header-mobile button");
btn?.addEventListener("click", () => {
  handleDetail(document.querySelector(".mobile-ul")!);
});

document.querySelectorAll(".mobile-ul li").forEach((item) => {
  if (item instanceof HTMLElement)
    item.addEventListener("click", (e) => {
      clickButton(item, e);
    });
});
