let count = 0;

const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  countEl.textContent = count;
}
