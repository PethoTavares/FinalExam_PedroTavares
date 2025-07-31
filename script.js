let count = 0;
let totalClicks = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clickTracker = document.getElementById("clickTracker");


incrementBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
  updateClickTracker();
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterDisplay.textContent = count;
    updateClickTracker();
  }
});


const colors = ['red', 'blue', 'green', 'purple', 'orange'];
const colorBox = document.getElementById("colorBox");
const changeColorBtn = document.getElementById("changeColor");

changeColorBtn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = randomColor;
  updateClickTracker();
});


const quotes = [
  "Believe you can and you're halfway there.",
  "You are stronger than you think.",
  "Success is not final, failure is not fatal.",
  "Push yourself, because no one else will do it for you.",
  "The only limit is your mind."
];

const showQuoteBtn = document.getElementById("showQuote");
const quoteDisplay = document.getElementById("quoteDisplay");

showQuoteBtn.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.textContent = randomQuote;
  updateClickTracker();
});


const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateClickTracker();
});


function updateClickTracker() {
  totalClicks++;
  clickTracker.textContent = `Buttons clicked: ${totalClicks}`;
}
