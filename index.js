 // particles.js configuration
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/demo/particles.json');

// Optional: Audio greeting
const audio = new Audio('https://badalsingh1802.github.io/audio/greeting.mp3');
window.addEventListener('load', () => {
  setTimeout(() => {
    audio.play();
  }, 1000);
});

var typed = new Typed('#typed', {
    strings: ["Breaking Bugs & Building Dreams...", "Developer by Mind, Hacker by Heart", "Crafting Clean & Secure Code"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });