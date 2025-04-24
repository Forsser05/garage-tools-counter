let count = document.querySelector(".counter-nb");
let countNum = 0;
let savedEntries = [];

// Small bounce animation when number changes
function animateCounter() {
    count.classList.add("bounce");
    setTimeout(() => count.classList.remove("bounce"), 200);
}

function increment() {
    countNum += 1;
    count.innerHTML = countNum;
    animateCounter();
}

function decrement() {
    if (countNum > 0) {
        countNum -= 1;
    }
    count.innerHTML = countNum;
    animateCounter();
}

function reset() {
    countNum = 0;
    count.innerHTML = countNum;
    animateCounter();
}

function displaySave() {
    const savedValueElement = document.querySelector("#saved-entries");
    savedValueElement.innerText = `Tool Log: ${save()}`;
    reset(); // Auto reset after logging
}

// Save the current count to the log and format it
function save() {
    savedEntries.push(countNum);
    return savedEntries.join(" tools - ");
}
