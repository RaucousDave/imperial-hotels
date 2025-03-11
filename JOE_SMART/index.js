document.addEventListener("DOMContentLoaded", () => {
  const tags = document.querySelectorAll(".content-tags a");
  const contents = document.querySelectorAll(".carousel .content");

  tags.forEach((tag, index) => {
    tag.addEventListener("click", (event) => {
      event.preventDefault(); // Prevents any unintended navigation

      // Remove 'active' class from all tags and content
      tags.forEach((t) => t.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Add 'active' class to the clicked tag and corresponding content
      tag.classList.add("active");
      contents[index].classList.add("active");
    });
  });
});
