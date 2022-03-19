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