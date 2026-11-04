const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
 
menuToggle.onclick = function () {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "Close" : "Menu";
};
 