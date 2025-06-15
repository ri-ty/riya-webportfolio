// 🌍 Splash Screen Animation
window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('hello-grid');
    const splashGreetings = [
      "HELLO", "HOLA", "BONJOUR", "NAMASTE", "CIAO", "KONNICHIWA",
      "SALUT", "OLA", "HALLO", "ZDRAVO", "HEI", "SZIA", "YASAS", "ALOHA"
    ];
    for (let i = 0; i < 100; i++) {
      const word = splashGreetings[Math.floor(Math.random() * splashGreetings.length)];
      const span = document.createElement('span');
      span.textContent = word;
      grid.appendChild(span);
    }
  
    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
      document.getElementById("typewriter-text").textContent = "";
      typeSubheading();
    }, 4000);
  });
  
  // ✍️ Typewriter for Subheading
  const subText = "I AM CURRENTLY A BTECH CSE STUDENT AT BENNETT UNIVERSITY";
  let index = 0;
  function typeSubheading() {
    const target = document.getElementById("typewriter-text");
    if (index < subText.length) {
      target.textContent += subText.charAt(index);
      index++;
      setTimeout(typeSubheading, 80);
    }
  }
  
  // 🍔 Hamburger Menu
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }
  
  // 👤 Contact Popup
  function openPopup() {
    document.getElementById('contact-popup').style.display = 'block';
  }
  function closePopup() {
    document.getElementById('contact-popup').style.display = 'none';
  }
  