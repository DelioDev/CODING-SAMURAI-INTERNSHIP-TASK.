
    // Toggle menu visibility
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open');

      // Change icon
      const icon = menuToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });
