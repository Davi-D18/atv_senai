const container = document.querySelector(".container");
const containerLoader = document.querySelector(".container-loader");

window.addEventListener("load", () => {
  container.style.display = "none";
  const loader = document.createElement("div");
  loader.classList.add("loader");
  containerLoader.appendChild(loader);

  setTimeout(() => {
    loader.remove();
    containerLoader.style.display = "none";
    container.style.display = "block";
  }, 2000);
});
