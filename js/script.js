/* ========================================
   SAVORIA RESTAURANT - CUSTOM JAVASCRIPT
   Interactive Features & Animations
   ======================================== */

// ========================================
// STATE MANAGEMENT (In-Memory Storage)
// ========================================
const AppState = {
  availableTables: 12,
  darkMode: false,
  currentSlide: 0,
  reservations: [],
  newsletterSubscribers: [],
};

// ========================================
// PAGE LOADER
// ========================================
window.addEventListener("load", function () {
  const loader = document.getElementById("pageLoader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1000);
  }

  // AOS removed - using CSS animations instead
});

// ========================================
// NAVIGATION BAR SCROLL EFFECT
// ========================================
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNav");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// ========================================
// DARK MODE TOGGLE
// ========================================
const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
  // Check for saved dark mode preference
  const savedDarkMode = AppState.darkMode;

  if (savedDarkMode) {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    AppState.darkMode = document.body.classList.contains("dark-mode");

    // Update button icon
    if (AppState.darkMode) {
      this.innerHTML = '<i class="fas fa-sun"></i>';
      showToast("Dark mode enabled", "success");
    } else {
      this.innerHTML = '<i class="fas fa-moon"></i>';
      showToast("Light mode enabled", "success");
    }
  });
}

// ========================================
// HERO SLIDESHOW
// ========================================
function initHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length === 0) return;

  function nextSlide() {
    slides[AppState.currentSlide].classList.remove("active");
    AppState.currentSlide = (AppState.currentSlide + 1) % slides.length;
    slides[AppState.currentSlide].classList.add("active");
  }

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);
}

initHeroSlideshow();

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    }
  });
});

// ========================================
// ACTIVE NAV LINK HIGHLIGHTING
// ========================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    const linkPage = href.split("/").pop();

    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html") ||
      (currentPage === "/" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

setActiveNavLink();

// ========================================
// LIVE AVAILABILITY COUNTER
// ========================================
function updateAvailability() {
  const availableTablesElement = document.getElementById("availableTables");
  if (availableTablesElement) {
    // Simulate real-time availability changes
    const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
    AppState.availableTables = Math.max(
      5,
      Math.min(15, AppState.availableTables + change)
    );

    availableTablesElement.textContent = AppState.availableTables;

    // Add pulse animation on change
    if (change !== 0) {
      availableTablesElement.style.transform = "scale(1.2)";
      setTimeout(() => {
        availableTablesElement.style.transform = "scale(1)";
      }, 300);
    }
  }
}

// Update availability every 30 seconds
setInterval(updateAvailability, 30000);

// ========================================
// QUICK RESERVATION FORM
// ========================================
const quickReservationForm = document.getElementById("quickReservationForm");
if (quickReservationForm) {
  // Set minimum date to today
  const dateInput = document.getElementById("quickDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
    dateInput.value = today;
  }

  quickReservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      date: document.getElementById("quickDate").value,
      time: document.getElementById("quickTime").value,
      guests: document.getElementById("quickGuests").value,
      timestamp: new Date().toISOString(),
    };

    // Validate form
    if (!formData.date || !formData.time || !formData.guests) {
      showToast("Please fill in all fields", "error");
      return;
    }

    // Store reservation in memory
    AppState.reservations.push(formData);

    // Show success message
    showToast("Reservation submitted! Redirecting...", "success");

    // Simulate redirect to full reservation page
    setTimeout(() => {
      window.location.href = "pages/reservations.html";
    }, 1500);
  });
}

// ========================================
// NEWSLETTER FORM
// ========================================
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("newsletterEmail");
    const email = emailInput.value.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    try {
      // Submit to backend
      const result = await subscribeToNewsletter(email);

      if (result && result.success) {
        // Clear form
        emailInput.value = "";

        // Add confetti effect
        createConfetti();

        // Success toast is already shown by subscribeToNewsletter function
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      // Error toast is already shown by subscribeToNewsletter function
    }
  });
}

// ========================================
// TOAST NOTIFICATION SYSTEM
// ========================================
function showToast(message, type = "success") {
  const toastElement = document.getElementById("notificationToast");
  if (!toastElement) return;

  const toastBody = toastElement.querySelector(".toast-body");
  const toastHeader = toastElement.querySelector(".toast-header");
  const icon = toastHeader.querySelector("i");

  // Set message
  toastBody.textContent = message;

  // Set icon and color based on type
  switch (type) {
    case "success":
      icon.className = "fas fa-check-circle text-success me-2";
      toastHeader.querySelector("strong").textContent = "Success";
      break;
    case "error":
      icon.className = "fas fa-exclamation-circle text-danger me-2";
      toastHeader.querySelector("strong").textContent = "Error";
      break;
    case "info":
      icon.className = "fas fa-info-circle text-info me-2";
      toastHeader.querySelector("strong").textContent = "Info";
      break;
    case "warning":
      icon.className = "fas fa-exclamation-triangle text-warning me-2";
      toastHeader.querySelector("strong").textContent = "Warning";
      break;
  }

  // Show toast
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}

// ========================================
// CONFETTI EFFECT
// ========================================
function createConfetti() {
  const colors = ["#d4af37", "#ffd700", "#ffffff", "#f0f0f0"];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-10px";
    confetti.style.opacity = "1";
    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";
    confetti.style.borderRadius = "50%";

    document.body.appendChild(confetti);

    const duration = Math.random() * 3 + 2;
    const rotation = Math.random() * 360;

    confetti.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: `translateY(${
            window.innerHeight + 20
          }px) rotate(${rotation}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: duration * 1000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }
    );

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}

// ========================================
// IMAGE LAZY LOADING
// ========================================
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

initLazyLoading();

// ========================================
// MENU CARD HOVER EFFECTS
// ========================================
document.querySelectorAll(".menu-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  });
});

// ========================================
// TESTIMONIALS CAROUSEL AUTO-PLAY
// ========================================
const testimonialsCarousel = document.getElementById("testimonialsCarousel");
if (testimonialsCarousel) {
  const carousel = new bootstrap.Carousel(testimonialsCarousel, {
    interval: 5000,
    wrap: true,
    pause: "hover",
  });
}

// ========================================
// PARALLAX SCROLL EFFECT
// ========================================
function initParallax() {
  const parallaxSections = document.querySelectorAll(".parallax-section");

  window.addEventListener("scroll", function () {
    parallaxSections.forEach((section) => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      section.style.backgroundPositionY = rate + "px";
    });
  });
}

// Check if device supports parallax (not on mobile for performance)
if (window.innerWidth > 768) {
  initParallax();
}

// ========================================
// SCROLL INDICATOR CLICK
// ========================================
const scrollIndicator = document.querySelector(".scroll-indicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", function () {
    const nextSection = document.querySelector(".availability-banner");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ========================================
// FORM VALIDATION HELPERS
// ========================================
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePhone(phone) {
  const regex = /^[\d\s\-\+\(\)]+$/;
  return regex.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

function validateDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

// ========================================
// KEYBOARD NAVIGATION SUPPORT
// ========================================
document.addEventListener("keydown", function (e) {
  // ESC key to close modals
  if (e.key === "Escape") {
    const modals = document.querySelectorAll(".modal.show");
    modals.forEach((modal) => {
      const bsModal = bootstrap.Modal.getInstance(modal);
      if (bsModal) bsModal.hide();
    });
  }
});

// ========================================
// PERFORMANCE: DEBOUNCE FUNCTION
// ========================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// WINDOW RESIZE HANDLER
// ========================================
const handleResize = debounce(function () {
  // Reinitialize parallax on resize
  if (window.innerWidth > 768) {
    initParallax();
  }
}, 250);

window.addEventListener("resize", handleResize);

// ========================================
// ANIMATION ON SCROLL (AOS) REFRESH
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  // Refresh AOS on dynamic content load
  setTimeout(() => {
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }, 500);
});

// ========================================
// BACK TO TOP BUTTON (Optional)
// ========================================
function createBackToTopButton() {
  const button = document.createElement("button");
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.className = "back-to-top";
  button.setAttribute("aria-label", "Back to top");
  button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        border: none;
        color: var(--white);
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    `;

  document.body.appendChild(button);

  // Show/hide button on scroll
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      button.style.opacity = "1";
      button.style.visibility = "visible";
    } else {
      button.style.opacity = "0";
      button.style.visibility = "hidden";
    }
  });

  // Scroll to top on click
  button.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Hover effect
  button.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1) translateY(-5px)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) translateY(0)";
  });
}

createBackToTopButton();

// ========================================
// PRINT STYLES HANDLER
// ========================================
window.addEventListener("beforeprint", function () {
  console.log("Preparing to print...");
});

window.addEventListener("afterprint", function () {
  console.log("Print completed");
});

// ========================================
// ACCESSIBILITY: SKIP TO MAIN CONTENT
// ========================================
function createSkipLink() {
  const skipLink = document.createElement("a");
  skipLink.href = "#main-content";
  skipLink.textContent = "Skip to main content";
  skipLink.className = "skip-link";
  skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--primary-color);
        color: var(--secondary-color);
        padding: 8px 16px;
        text-decoration: none;
        z-index: 10000;
        transition: top 0.3s;
    `;

  skipLink.addEventListener("focus", function () {
    this.style.top = "0";
  });

  skipLink.addEventListener("blur", function () {
    this.style.top = "-40px";
  });

  document.body.insertBefore(skipLink, document.body.firstChild);
}

createSkipLink();

// ========================================
// ERROR HANDLING
// ========================================
window.addEventListener("error", function (e) {
  console.error("An error occurred:", e.error);
});

window.addEventListener("unhandledrejection", function (e) {
  console.error("Unhandled promise rejection:", e.reason);
});

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================
console.log(
  "%c🍽️ Welcome to Savoria Restaurant 🍽️",
  "font-size: 20px; font-weight: bold; color: #d4af37;"
);
console.log(
  "%cWhere Culinary Art Meets Unforgettable Experiences",
  "font-size: 14px; color: #666;"
);
console.log(
  "%cWebsite by: [Your Name]",
  "font-size: 12px; font-style: italic; color: #999;"
);

// ========================================
// DEVELOPMENT HELPERS
// ========================================
if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
) {
  console.log(
    "%c🔧 Development Mode Active",
    "background: #222; color: #bada55; padding: 5px 10px; border-radius: 3px;"
  );

  // Expose state for debugging
  window.AppState = AppState;
}

// ========================================
// BACKEND API INTEGRATION
// ========================================

// API Configuration
const API_BASE_URL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/api"
    : "/api"; // For production

// API Helper Function
async function apiCall(endpoint, method = "GET", data = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "API request failed");
    }

    return result;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

// ========================================
// RESERVATION SUBMISSION
// ========================================
async function submitReservation(formData) {
  try {
    showToast("Processing your reservation...", "info");

    const result = await apiCall("/reservations", "POST", formData);

    if (result.success) {
      showToast(
        `Reservation confirmed! Confirmation #: ${result.confirmationNumber}`,
        "success"
      );
      createConfetti();

      // Store in local state
      AppState.reservations.push({
        ...formData,
        confirmationNumber: result.confirmationNumber,
        id: result.reservationId,
      });

      return result;
    }
  } catch (error) {
    showToast("Failed to create reservation. Please try again.", "error");
    throw error;
  }
}

// ========================================
// CONTACT FORM SUBMISSION
// ========================================
async function submitContactForm(formData) {
  try {
    showToast("Sending your message...", "info");

    const result = await apiCall("/contact", "POST", formData);

    if (result.success) {
      showToast(result.message || "Message sent successfully!", "success");
      return result;
    }
  } catch (error) {
    showToast("Failed to send message. Please try again.", "error");
    throw error;
  }
}

// ========================================
// NEWSLETTER SUBSCRIPTION
// ========================================
async function subscribeToNewsletter(email, name = "") {
  try {
    showToast("Subscribing...", "info");

    const result = await apiCall("/newsletter/subscribe", "POST", {
      email,
      name,
    });

    if (result.success) {
      showToast(result.message || "Successfully subscribed!", "success");
      AppState.newsletterSubscribers.push(email);
      return result;
    }
  } catch (error) {
    const errorMsg = error.message || "Subscription failed. Please try again.";
    showToast(errorMsg, "error");
    throw error;
  }
}

// ========================================
// EVENT INQUIRY SUBMISSION
// ========================================
async function submitEventInquiry(formData) {
  try {
    showToast("Submitting event inquiry...", "info");

    const result = await apiCall("/events/inquiry", "POST", formData);

    if (result.success) {
      showToast(
        result.message || "Event inquiry submitted successfully!",
        "success"
      );
      return result;
    }
  } catch (error) {
    showToast("Failed to submit inquiry. Please try again.", "error");
    throw error;
  }
}

// ========================================
// FETCH RESERVATIONS (Admin)
// ========================================
async function fetchReservations() {
  try {
    const result = await apiCall("/reservations", "GET");

    if (result.success) {
      return result.reservations;
    }
  } catch (error) {
    console.error("Failed to fetch reservations:", error);
    return [];
  }
}

// ========================================
// EXPORT FUNCTIONS FOR OTHER PAGES
// ========================================
window.SavoriaUtils = {
  showToast,
  validateEmail,
  validatePhone,
  validateDate,
  createConfetti,
  AppState,
  // API Functions
  submitReservation,
  submitContactForm,
  subscribeToNewsletter,
  submitEventInquiry,
  fetchReservations,
  apiCall,
};

console.log("✅ Savoria scripts loaded successfully!");
console.log("✅ Backend API integration ready!");
