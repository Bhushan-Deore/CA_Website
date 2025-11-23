// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Testimonial Slider
let slideIndex = 1;
let slideInterval;
let isPaused = false;
const pauseBtn = document.getElementById('pauseBtn');

// Initialize slider when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startSlider();
});

function startSlider() {
    // Clear any existing interval first
    clearInterval(slideInterval);
    
    // Start new interval only if not paused
    if (!isPaused) {
        slideInterval = setInterval(() => {
            plusSlides(1);
        }, 10000);
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("testimonial-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}

// Pause/Play functionality
// pauseBtn.addEventListener('click', function() {
//     isPaused = !isPaused;
//     document.querySelector('.testimonial-slider').classList.toggle('paused');
    
//     if (isPaused) {
//         clearInterval(slideInterval);
//     } else {
//         startSlider();
//     }
// });

// Form Submission
// const contactForm = document.getElementById('contactForm');
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! We will contact you soon.');
//     contactForm.reset();
// });

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // stop normal form submission
  
    emailjs.sendForm('service_cvs9xlm', 'template_uuezjer', this)
      .then(function() {
        alert('Thank you for your message! We will contact you soon.');
        document.getElementById('contactForm').reset();
      }, function(error) {
        alert('Send failed — please try again later.');
        console.error('EmailJS error:', error);
      });
  });

//Automatic Year Updater
document.getElementById("year").textContent = new Date().getFullYear();