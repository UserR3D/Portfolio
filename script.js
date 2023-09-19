const place = document.querySelectorAll(".placeholder");
const li = document.querySelectorAll(".header a");

function handleClick(event) {
  event.currentTarget.classList.toggle("active");
  event.currentTarget.classList.remove("detail");
}

function clickButton(event) {
  event.preventDefault();
  switch (event.currentTarget.innerHTML) {
    case "Skills":
      document.querySelector(".skills").classList.toggle("detail");
      document.querySelector(".skills").classList.toggle("active");
      break;
    case "Laboratório":
      document.querySelector(".lab").classList.toggle("detail");
      document.querySelector(".lab").classList.toggle("active");
  }
}

li.forEach((item) => {
  item.addEventListener("click", clickButton);
});

place.forEach((item) => {
  item.addEventListener("click", handleClick);
});
