const navToggleBtn = document.getElementById("navToggleBtn");
const sideNav = document.querySelector(".side-navbar");
function cssStyle(element, style) {
  for (const property in style) element.style[property] = style[property];
}
bodyWrapper_Style = {
  background: "rgba(0,0,0,0.5)",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: 1000,
  transition: "opacity 1s",
  opacity: 0,
};
const bodyWrapper = document.createElement("div");
bodyWrapper.id = "bodyWrapper";
bodyWrapper.classList = "d-lg-none";
cssStyle(bodyWrapper, bodyWrapper_Style);
navToggleBtn.addEventListener("click", () => {
  sideNav.style.zIndex = 1001;
  document.body.prepend(bodyWrapper);
  setTimeout(() => {
    bodyWrapper.style.opacity = 1;
  }, 100);
  sideNav.style.transform = "translateX(0)";
});
bodyWrapper.addEventListener("click", () => {
  cssStyle(sideNav, { transform: "translateX(100%)" });
  bodyWrapper.style.opacity = 0;
  document.body.removeChild(bodyWrapper);
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoHeight: true,

  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
