const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let index = 0;

const updateSlider = () => {
  slider.style.transform = `translateX(-${index * 100}%)`;
};

nextBtn.addEventListener("click", () => {
  index = (index + 1) % 3;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + 3) % 3;
  updateSlider();
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target); // Ensures animation runs only once
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("[data-animate]").forEach((element) => {
    observer.observe(element);
  });
});
