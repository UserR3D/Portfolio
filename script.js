const place = document.querySelectorAll(".placeholder");
const li = document.querySelectorAll(".header a");

function activeClass(active) {
  active.classList.toggle("active");
  active.classList.toggle("detail");
  console.log();
  if (active.classList.contains("active")) {
    active.style.bottom = `${active.offsetHeight - 90}px`;
  } else {
    active.style.bottom = `-40px`;
  }
}

function handleDetail(action) {
  action.classList.toggle("detail");
}

function clickButton(event) {
  event.preventDefault();
  switch (event.currentTarget.innerHTML) {
    case "Skills":
      activeClass(document.querySelector(".skills"));
      break;
    case "Laboratório":
      activeClass(document.querySelector(".lab"));
      break;
    case "Sobre":
      handleDetail(document.querySelector(".main-class"));
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
