const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! Asiateacher will get back to you soon.');
        contactForm.reset();
    });
}
const menuToggle = document.getElementById('theme-toggle');
const navLinks = document.querySelector('nav');
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click',() => {
        navLinks.classList.toggle('active');
    });
}