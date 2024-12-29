// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').slice(1); // Remove "#" from href
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
      document.querySelectorAll('nav a').forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    });
  });
  
  // Typing Animation Effect for Text
  const typingText = document.querySelector('.typing-text');
  const words = ["a Frontend Developer", "a Problem Solver", "an Innovator"];
  let wordIndex = 0;
  let charIndex = 0;
  let typingDirection = 1;
  
  function type() {
    const word = words[wordIndex];
    typingText.textContent = word.slice(0, charIndex) + "|";
  
    if (charIndex === word.length && typingDirection === 1) {
      typingDirection = -1;
      setTimeout(type, 1000); // Pause at the end of a word
    } else if (charIndex === 0 && typingDirection === -1) {
      typingDirection = 1;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500); // Pause at the beginning of a new word
    } else {
      charIndex += typingDirection;
      setTimeout(type, 100);
    }
  }
  type();
  
  // Form Validation
  const form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const description = document.getElementById('description').value.trim();
  
    if (!email || !name || !subject || !description) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Message sent successfully!');
    form.reset();
  });
  
  // Email Validation Function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Dynamic Year Update in Footer (if you add a footer)
  const footerYear = document.querySelector('.footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
  