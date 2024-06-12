const icons = ["alanIcon", "blackIcon", "orangeIcon", "blueIcon", "greenIcon", "yellowIcon", "redIcon"];
const imgs = ["alan", "black", "orange", "blue", "green", "yellow", "red"];

icons.forEach((icon, i) => {
  document.getElementById(icon).addEventListener("click", () => {
    imgs.forEach((el) => {
      document.getElementById(el).style.display = el === imgs[i] ? "inline" : "none";
      document.getElementById(el + "d").open = el === imgs[i] ? true : false;
    });
  });
});
