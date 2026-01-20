// Heart & Soul Restaurant - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');

      // Animate hamburger to X
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = navLinks.classList.contains('active')
        ? 'rotate(45deg) translate(5px, 5px)'
        : 'none';
      spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
      spans[2].style.transform = navLinks.classList.contains('active')
        ? 'rotate(-45deg) translate(7px, -6px)'
        : 'none';
    });

    // Close mobile menu when clicking on a link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };

      // Create or update message element
      let messageDiv = contactForm.querySelector('.form-message');
      if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.className = 'form-message';
        contactForm.insertBefore(messageDiv, contactForm.firstChild);
      }

      // Simulate form submission (replace with actual API call)
      messageDiv.className = 'form-message success';
      messageDiv.textContent = 'Thank you for your message! We\'ll get back to you soon.';

      // Reset form
      contactForm.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        messageDiv.style.display = 'none';
      }, 5000);

      // Log form data (for development - remove in production)
      console.log('Form submitted:', formData);

      // In production, you would send this data to your server:
      /*
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        messageDiv.className = 'form-message success';
        messageDiv.textContent = 'Thank you for your message! We\'ll get back to you soon.';
        contactForm.reset();
      })
      .catch(error => {
        messageDiv.className = 'form-message error';
        messageDiv.textContent = 'Sorry, something went wrong. Please try again or call us directly.';
      });
      */
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.card, .menu-item, .gallery-item, .faq-item').forEach(el => {
    observer.observe(el);
  });

  // Navbar scroll effect
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)';
      navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.15)';
    }

    lastScroll = currentScroll;
  });

  // Gallery Lightbox Functionality
  const lightbox = document.getElementById('lightbox');

  if (lightbox) {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxCurrent = document.getElementById('lightbox-current');
    const lightboxTotal = document.getElementById('lightbox-total');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    const galleryData = [];

    // Collect gallery data
    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      const title = item.dataset.title || item.querySelector('.gallery-overlay h3')?.textContent || '';
      const description = item.dataset.description || item.querySelector('.gallery-overlay p')?.textContent || '';

      galleryData.push({
        src: img.src,
        alt: img.alt,
        title: title,
        description: description
      });

      // Add click event to gallery item
      item.addEventListener('click', () => {
        openLightbox(index);
      });
    });

    // Set total count
    lightboxTotal.textContent = galleryData.length;

    // Open lightbox
    function openLightbox(index) {
      currentIndex = index;
      updateLightboxContent();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Update lightbox content
    function updateLightboxContent() {
      const item = galleryData[currentIndex];
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
      lightboxTitle.textContent = item.title;
      lightboxDescription.textContent = item.description;
      lightboxCurrent.textContent = currentIndex + 1;
    }

    // Navigate to previous image
    function showPrevious() {
      currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
      updateLightboxContent();
    }

    // Navigate to next image
    function showNext() {
      currentIndex = (currentIndex + 1) % galleryData.length;
      updateLightboxContent();
    }

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;

      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          showPrevious();
          break;
        case 'ArrowRight':
          showNext();
          break;
      }
    });
  }
});
