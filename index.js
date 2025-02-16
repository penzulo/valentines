const handleScroll = () => {
  const nav = document.querySelector("nav");
  if (!nav) return;
  if (window.scrollY > 0) {
    nav.classList.add("bg-rose-500");
    nav.classList.remove("bg-transparent");
  } else {
    nav.classList.add("bg-transparent");
    nav.classList.remove("bg-rose-500");
  }
};
const toggleMobileMenu = () => {
  const mobileMenu = document.getElementById("mobileMenu");
  if (!mobileMenu) return;
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
};
window.addEventListener("scroll", handleScroll);
