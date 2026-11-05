const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
 
menuToggle.onclick = function () {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "Close" : "Menu";
};
 
const galleryTrack = document.getElementById("galleryTrack");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");
 
if (galleryTrack && galleryPrev && galleryNext) {
  
  function stepSize() {
    const firstItem = galleryTrack.querySelector(".gallery-item");
    const gap = parseFloat(getComputedStyle(galleryTrack).gap) || 0;
    return firstItem.offsetWidth + gap;
  }
 
  galleryNext.onclick = function () {
    galleryTrack.scrollBy({ left: stepSize() });
  };
 
  galleryPrev.onclick = function () {
    galleryTrack.scrollBy({ left: -stepSize() });
  };
}
 