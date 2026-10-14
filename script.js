const navToggle = document.getElementById("navToggle");
const navClose = document.getElementById("navClose");
const mobileNav = document.getElementById("mobileNav");

function openMobileNav() {
  if (!mobileNav || !navToggle) return;
  mobileNav.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
  mobileNav.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  if (!mobileNav || !navToggle) return;
  mobileNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  mobileNav.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (navToggle) navToggle.addEventListener("click", openMobileNav);
if (navClose) navClose.addEventListener("click", closeMobileNav);

if (mobileNav) {
  mobileNav.addEventListener("click", (event) => {
    if (event.target === mobileNav) closeMobileNav();
  });
}
