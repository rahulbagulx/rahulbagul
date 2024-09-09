// Toggle the mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  toggleMenuAnimation();
});

function toggleMenuAnimation() {
  const bars = document.querySelectorAll('.menu-toggle .bar');
  bars.forEach((bar, index) => {
    bar.classList.toggle(`bar${index + 1}`);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
