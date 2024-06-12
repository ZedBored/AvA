const icons = ["victimIcon", "darkLordIcon", "virusIcon", "agentIcon", "ballistaIcon", "primalIcon", "hazardIcon"];
const imgs = ["victim", "darkLord", "virus", "agent", "ballista", "primal", "hazard"];

icons.forEach((icon, i) => {
  document.getElementById(icon).addEventListener("click", () => {
    imgs.forEach((el) => {
      document.getElementById(el).style.display = el === imgs[i] ? "inline" : "none";
      document.getElementById(el + "d").open = el === imgs[i] ? true : false;
    });
  });
});
