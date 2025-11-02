document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Display success message
  const success = document.getElementById("successMessage");
  success.textContent = "Form submitted successfully!";
  success.style.display = "block";

  // Optionally clear inputs
  this.reset();

  // Hide message after 3 seconds
  setTimeout(() => {
    success.style.display = "none";
  }, 3000);
});
// Dropdown toggle for mobile
document.querySelectorAll(".dropdown > .dropbtn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const dropdown = this.nextElementSibling;
    dropdown.classList.toggle("show");
  });
});

// Close dropdowns if clicking outside
window.addEventListener("click", function (e) {
  document.querySelectorAll(".dropdown-content").forEach((menu) => {
    if (!menu.parentElement.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const dropdownTrigger = document.querySelector("nav ul li.services");
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener("click", () => {
      const dropdownMenu = dropdownTrigger.querySelector(".dropdown");
      dropdownMenu.classList.toggle("show");
    });
  }
});
