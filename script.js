const place = document.querySelectorAll(".placeholder");

function handleClick(event) {
  event.currentTarget.classList.toggle("active");
}

place.forEach((item) => {
  item.addEventListener("click", handleClick);
});
