// ===== Dark Theme Toggle =====
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Toggle theme
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// ===== AI Section Demo (Homepage only) =====
const aiText = [
  "AI is adapting to your signing style...",
  "Learning idioms and expressions...",
  "Improving accuracy with each gesture...",
  "Making SignSpeak smarter for you!",
];

let aiIndex = 0;
const aiCard = document.querySelector(".ai-card");

if (aiCard) {
  setInterval(() => {
    aiCard.textContent = aiText[aiIndex];
    aiIndex = (aiIndex + 1) % aiText.length;
  }, 3000);
}
