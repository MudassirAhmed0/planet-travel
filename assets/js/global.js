AOS.init({ once: true });
const gap = (window.innerWidth / 100) * 1.23762376238;
const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: gap,
  centeredSlides: true,
  loop: true
});
const partnersGap = (window.innerWidth / 100) * 9.53449242849;
const partnersSwiper = new Swiper(".partnersSwiper", {
  slidesPerView: "auto",
  spaceBetween: partnersGap
});
document.querySelectorAll(".faq").forEach((item) => {
  item.addEventListener("click", () => {
    const offsetHeight =
      item.parentElement.querySelector(".faq_answer p").offsetHeight;
    const tarEl = item.parentElement.querySelector(".faq_answer");

    const plusIcon = item.querySelector("#plusIcon");
    if (tarEl.classList.contains("active")) {
      tarEl.style.maxHeight = 0;
      plusIcon.classList.remove("active");
    } else {
      tarEl.style.maxHeight = offsetHeight + "px";
      plusIcon.classList.add("active");
    }
    tarEl.classList.toggle("active");
  });
});
