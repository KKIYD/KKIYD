const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

function toggleVideo(button) {
  const videoContainer = button.nextElementSibling;
  videoContainer.classList.toggle("expanded");
}

// Fast Count Effect
const counters = document.querySelectorAll(".stat");
counters.forEach((counter) => {
  const target = +counter.getAttribute("data-count");
  const speed = 100; // smaller = faster
  let count = 0;

  const updateCount = () => {
    const increment = Math.ceil(target / speed);
    count += increment;
    if (count < target) {
      counter.innerText = count;
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
