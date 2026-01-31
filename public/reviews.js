// Reviews Page JavaScript

// ---- Hamburger menu ----
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
    hamburger.setAttribute("aria-expanded", !expanded);
    nav.classList.toggle("open");
  });
}

// ---- Default Reviews Data ----
const defaultReviews = [
  {
    name: "Aayush K.",
    rating: 5,
    text: "I got ChatGPT & Netflix both from ALL PREMIUM. Delivery was super fast!",
    timestamp: "2025-01-15T10:00:00.000Z",
    isDefault: true
  },
  {
    name: "Priya R.",
    rating: 5,
    text: "Affordable and 100% working accounts. Highly recommended!",
    timestamp: "2025-01-14T12:00:00.000Z",
    isDefault: true
  },
  {
    name: "Rohan S.",
    rating: 5,
    text: "Great service! My Canva Pro was activated within minutes.",
    timestamp: "2025-01-13T15:30:00.000Z",
    isDefault: true
  },
  {
    name: "Neha P.",
    rating: 5,
    text: "My go-to for all OTT and AI tools. Super easy process!",
    timestamp: "2025-01-12T09:00:00.000Z",
    isDefault: true
  },
  {
    name: "Aditya M.",
    rating: 5,
    text: "Very professional and trustworthy. I've purchased multiple plans!",
    timestamp: "2025-01-11T14:00:00.000Z",
    isDefault: true
  }
];

let allReviews = [];
let currentFilter = "all";
let currentSort = "newest";

// ---- Initialize Reviews System ----
window.addEventListener("DOMContentLoaded", () => {
  loadAllReviews();
  initReviewForm();
  initFilters();
  updateStats();
});

// ---- Load All Reviews ----
function loadAllReviews() {
  // Get user reviews from localStorage
  const userReviews = JSON.parse(localStorage.getItem("sabkapremium_reviews") || "[]");
  
  // Combine default + user reviews
  allReviews = [...userReviews, ...defaultReviews];
  
  displayReviews();
}

// ---- Display Reviews ----
function displayReviews() {
  const container = document.getElementById("all-reviews-container");
  const noReviewsMsg = document.getElementById("no-reviews");
  
  if (!container) return;
  
  // Filter reviews
  let filteredReviews = allReviews;
  
  if (currentFilter !== "all") {
    const filterRating = parseInt(currentFilter);
    filteredReviews = filteredReviews.filter(r => r.rating === filterRating);
  }
  
  // Sort reviews
  filteredReviews.sort((a, b) => {
    switch(currentSort) {
      case "newest":
        return new Date(b.timestamp) - new Date(a.timestamp);
      case "oldest":
        return new Date(a.timestamp) - new Date(b.timestamp);
      case "highest":
        return b.rating - a.rating;
      case "lowest":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });
  
  // Clear container
  container.innerHTML = "";
  
  // Check if no reviews
  if (filteredReviews.length === 0) {
    noReviewsMsg.style.display = "flex";
    return;
  } else {
    noReviewsMsg.style.display = "none";
  }
  
  // Add reviews to DOM
  filteredReviews.forEach(review => {
    const reviewCard = createReviewCard(review);
    container.appendChild(reviewCard);
  });
}

// ---- Create Review Card ----
function createReviewCard(review) {
  const card = document.createElement("div");
  card.className = "review-card-large";
  
  const stars = "⭐".repeat(review.rating);
  const date = new Date(review.timestamp).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  
  const badge = review.isDefault ? "" : '<span class="new-badge">New</span>';
  
  card.innerHTML = `
    <div class="review-header">
      <div class="review-author">
        <div class="author-avatar">${review.name.charAt(0).toUpperCase()}</div>
        <div class="author-info">
          <div class="author-name">${escapeHTML(review.name)} ${badge}</div>
          <div class="review-date">${date}</div>
        </div>
      </div>
      <div class="review-stars-large">${stars}</div>
    </div>
    <div class="review-content">
      <p>"${escapeHTML(review.text)}"</p>
    </div>
  `;
  
  return card;
}

// ---- Initialize Review Form ----
function initReviewForm() {
  const reviewForm = document.getElementById("review-form");
  const reviewText = document.getElementById("review-text");
  const charCounter = document.getElementById("char-counter");

  if (!reviewForm) return;

  // Character counter
  if (reviewText && charCounter) {
    reviewText.addEventListener("input", () => {
      charCounter.textContent = reviewText.value.length;
    });
  }

  // Handle form submission
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("review-name").value.trim();
    const rating = document.querySelector('input[name="rating"]:checked');
    const text = reviewText.value.trim();

    if (!name || !rating || !text) {
      alert("❌ Please fill all required fields!");
      return;
    }

    if (text.length < 10) {
      alert("❌ Please write at least 10 characters in your review.");
      return;
    }

    // Create review object
    const review = {
      name: name,
      rating: parseInt(rating.value),
      text: text,
      timestamp: new Date().toISOString(),
      isDefault: false
    };

    // Save to localStorage
    saveReview(review);

    // Reload reviews
    loadAllReviews();
    updateStats();

    // Reset form
    reviewForm.reset();
    charCounter.textContent = "0";

    // Show success message
    alert("🎉 Thank you for your review! Your feedback has been submitted successfully and is now visible to everyone.");

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---- Save Review ----
function saveReview(review) {
  let reviews = JSON.parse(localStorage.getItem("sabkapremium_reviews") || "[]");
  reviews.unshift(review); // Add to beginning
  // Keep only last 100 reviews
  if (reviews.length > 100) reviews = reviews.slice(0, 100);
  localStorage.setItem("sabkapremium_reviews", JSON.stringify(reviews));
}

// ---- Initialize Filters ----
function initFilters() {
  const ratingFilter = document.getElementById("rating-filter");
  const sortFilter = document.getElementById("sort-filter");
  
  if (ratingFilter) {
    ratingFilter.addEventListener("change", (e) => {
      currentFilter = e.target.value;
      displayReviews();
    });
  }
  
  if (sortFilter) {
    sortFilter.addEventListener("change", (e) => {
      currentSort = e.target.value;
      displayReviews();
    });
  }
}

// ---- Update Stats ----
function updateStats() {
  const totalReviewsEl = document.getElementById("total-reviews");
  if (totalReviewsEl) {
    totalReviewsEl.textContent = allReviews.length;
  }
}

// ---- Escape HTML ----
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
