const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Track the current scroll position
let scrollPosition = 0;

// Scroll amount for each arrow click
const scrollAmount = 200;

// Update card sizes based on position
function updateCardSizes() {
  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    const containerRect = carousel.parentElement.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;

    // If the card is near the center, make it active
    if (Math.abs(cardCenter - containerCenter) < cardRect.width / 2) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

// Scroll left
leftArrow.addEventListener('click', () => {
  scrollPosition -= scrollAmount;
  carousel.style.transform = `translateX(${scrollPosition}px)`;
  updateCardSizes();
});

// Scroll right
rightArrow.addEventListener('click', () => {
  scrollPosition += scrollAmount;
  carousel.style.transform = `translateX(${scrollPosition}px)`;
  updateCardSizes();
});

// Initial sizing
updateCardSizes();


function scrollToPortfolio() {
  const section = document.getElementById("portfolio");
  section.scrollIntoView({ behavior: "smooth" });
}


// script.js
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


const experiences = {
  teachyst: {
      position: "Founder & CEO <span class='highlight'>@Teachyst</span>",
      date: "Sep 2024 - Present",
      location: "India",
      responsibilities: [
          "✔ White Labeled NextGen LMS",
          "✔ Platform for educators and creators"
      ]
  },
  dimension: {
      position: "Software Engineer <span class='highlight'>@Dimension</span>",
      date: "Jan 2023 - Aug 2024",
      location: "USA",
      responsibilities: [
          "✔ Developed AI-driven recommendation engine",
          "✔ Scaled backend services to handle 1M+ users"
      ]
  },
  emitrr: {
      position: "Product Manager <span class='highlight'>@Emitrr</span>",
      date: "Jul 2021 - Dec 2022",
      location: "Canada",
      responsibilities: [
          "✔ Led the development of a customer support automation tool",
          "✔ Coordinated between engineering and marketing teams"
      ]
  },
  trryst: {
      position: "UI/UX Designer <span class='highlight'>@Trryst</span>",
      date: "Mar 2020 - Jun 2021",
      location: "Germany",
      responsibilities: [
          "✔ Designed user-friendly interfaces for mobile and web",
          "✔ Conducted user research to improve engagement"
      ]
  }
};

// Select all buttons and the details section
const buttons = document.querySelectorAll(".company");
const positionEl = document.getElementById("position");
const dateEl = document.getElementById("date");
const locationEl = document.getElementById("location");
const responsibilitiesEl = document.getElementById("responsibilities");

// Function to update content
function updateExperience(companyKey) {
  const experience = experiences[companyKey];
  
  // Add console.log to debug if the function is being called
  console.log('Updating experience for:', companyKey);

  // Add null checks to prevent errors if elements aren't found
  if (positionEl) positionEl.innerHTML = experience.position;
  if (dateEl) dateEl.textContent = experience.date;
  if (locationEl) locationEl.textContent = experience.location;

  if (responsibilitiesEl) {
    responsibilitiesEl.innerHTML = "";
    experience.responsibilities.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        responsibilitiesEl.appendChild(li);
    });
  }

  // Update active button
  buttons.forEach(btn => btn.classList.remove("active"));
  const activeButton = document.querySelector(`[data-company="${companyKey}"]`);
  if (activeButton) activeButton.classList.add("active");
}

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
      const companyKey = button.getAttribute("data-company");
      updateExperience(companyKey);
  });
});

// Add this: Set initial experience when page loads
// Set it to 'teachyst' or whichever company should show first
document.addEventListener('DOMContentLoaded', () => {
  updateExperience('teachyst');
});
