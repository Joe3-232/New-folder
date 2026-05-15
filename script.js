let count = 0;
let currentStep = 1;

const counterDisplay = document.getElementById('counter');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const stepInput = document.getElementById('stepValue');
const darkModeBtn = document.getElementById('darkModeBtn');

function updateDisplay() {
    counterDisplay.textContent = count;
    
    if (count > 0) {
        counterDisplay.style.color = "#00b894";
        counterDisplay.style.textShadow = "0 0 10px rgba(0,184,148,0.3)";
    } else if (count < 0) {
        counterDisplay.style.color = "#d63031";
        counterDisplay.style.textShadow = "0 0 10px rgba(214,48,49,0.3)";
    } else {
        counterDisplay.style.color = "#2d3436";
        counterDisplay.style.textShadow = "none";
    }
    
    counterDisplay.classList.add('counter-bounce');
    setTimeout(() => {
        counterDisplay.classList.remove('counter-bounce');
    }, 300);
}

function increase() {
    count += currentStep;
    updateDisplay();
}

function decrease() {
    count -= currentStep;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
increaseBtn.addEventListener('click', increase);

stepInput.addEventListener('change', (e) => {
    let val = parseInt(e.target.value);
    if (isNaN(val) || val < 1) {
        currentStep = 1;
        stepInput.value = 1;
    } else if (val > 100) {
        currentStep = 100;
        stepInput.value = 100;
    } else {
        currentStep = val;
    }
});

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = '☀️ Light Mode';
    } else {
        darkModeBtn.textContent = '🌙 Dark Mode';
    }
});

updateDisplay();