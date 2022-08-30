const mainContainer = window.document.querySelector(".main-container");

mainContainer.addEventListener("mouseenter", function () {
  if (!mainContainer.classList.contains("hover")) {
    mainContainer.classList.add("hover");
  }
  mainContainer.classList.remove("clicked");
});

mainContainer.addEventListener("mouseleave", function () {
  if (mainContainer.classList.contains("hover")) {
    mainContainer.classList.remove("hover");
    mainContainer.classList.remove("clicked");
  }
});

mainContainer.addEventListener("click", function () {
  if (mainContainer.classList.contains("hover")) {
    mainContainer.classList.remove("hover");
    mainContainer.classList.add("clicked");
  }
});
