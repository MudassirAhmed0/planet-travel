AOS.init({ once: true });
const gap = (window.innerWidth / 100) * 1.23762376238;
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: gap
});
document.querySelectorAll(".faq").forEach((item) => {
  item.addEventListener("click", () => {
    const offsetHeight =
      item.parentElement.querySelector(".faq_answer p").offsetHeight;
    const tarEl = item.parentElement.querySelector(".faq_answer");
    if (tarEl.classList.contains("active")) {
      tarEl.style.maxHeight = 0;
    } else {
      tarEl.style.maxHeight = offsetHeight + "px";
    }
    tarEl.classList.toggle("active");
  });
});
