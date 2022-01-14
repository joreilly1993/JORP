const counter = document.getElementById("counter");
const counterDiv = document.getElementById("counter-div");
let score = 0;
const scoreCounter = document.getElementById("score");
const reset = document.getElementById("reset");


counter.addEventListener("click", function() {
    scoreCounter.textContent = score++;
});

reset.addEventListener("click", () => {
    scoreCounter.textContent = score = 0;
});

