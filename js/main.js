/**
 * main.js
 * Entry point for the static website JavaScript.
 * Modules: year, smoothScroll, contactForm
 */

// ===========================
// Module: Current Year
// Updates footer copyright year dynamically.
// ===========================
(function setCurrentYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

// ===========================
// Module: Active Nav Link
// Highlights the nav link corresponding to the visible section.
// ===========================
(function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.header__nav-link');

  if (!sections.length || !navLinks.length) return;

  /**
   * Updates the active nav link based on scroll position.
   */
  function updateActiveLink() {
    let currentId = '';

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top <= 100) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('header__nav-link--active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('header__nav-link--active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
})();

// ===========================
// Module: Contact Form
// Handles basic client-side form validation and submission feedback.
// ===========================
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  if (!form || !statusEl) return;

  /**
   * Displays a status message to the user.
   * @param {string} message - The message to display.
   * @param {boolean} isError - Whether the message is an error.
   */
  function showStatus(message, isError = false) {
    statusEl.textContent = message;
    statusEl.style.color = isError ? '#dc2626' : '#16a34a';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      showStatus('Please fill in all fields.', true);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus('Please enter a valid email address.', true);
      return;
    }

    // Simulate a successful form submission
    showStatus('Thank you! Your message has been sent.');
    form.reset();
  });
})();
