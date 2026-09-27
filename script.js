// =========================
// SCROLL TO TELL
// =========================

// Get elements
const progressBar = document.getElementById("progressBar");
const seed = document.getElementById("seed");
const growingTree = document.getElementById("growingTree");
const forestBackground = document.getElementById("forestBackground");
const forest = document.getElementById("forest");
const reveals = document.querySelectorAll(".reveal");
const clouds = document.querySelector(".clouds");


// =========================
// SCROLL EVENT
// =========================

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = (scrollTop / documentHeight) * 100;

    // Progress bar
    progressBar.style.width = `${scrollPercent}%`;


    // =========================
    // PARALLAX
    // =========================

    if (clouds) {
        clouds.style.transform =
            `translateY(${scrollTop * 0.08}px)`;
    }

    if (forestBackground) {
        forestBackground.style.transform =
            `translateY(${scrollTop * -0.03}px)`;
    }


    // =========================
    // SEED ANIMATION
    // =========================

    const seedPosition = seed.getBoundingClientRect();

    if (
        seedPosition.top < window.innerHeight * 0.75 &&
        seedPosition.bottom > 0
    ) {
        seed.classList.add("grow");
    }


    // =========================
    // TREE GROWTH
    // =========================

    const treePosition = growingTree.getBoundingClientRect();

    if (
        treePosition.top < window.innerHeight &&
        treePosition.bottom > 0
    ) {

        const progress =
            1 - (treePosition.top / window.innerHeight);

        const clampedProgress =
            Math.max(0.1, Math.min(progress, 1));

        growingTree.style.transform =
            `translateX(-50%) scaleY(${clampedProgress})`;
    }


    // =========================
    // FOREST GROWTH
    // =========================

    const forestPosition = forest.getBoundingClientRect();

    if (
        forestPosition.top < window.innerHeight * 0.8
    ) {
        forest.classList.add("grow");
    }


    // =========================
    // REVEAL TEXT
    // =========================

    reveals.forEach((element) => {

        const position =
            element.getBoundingClientRect();

        if (
            position.top < window.innerHeight * 0.8
        ) {
            element.classList.add("visible");
        }

    });

});


// =========================
// RESTART BUTTON
// =========================

const restartButton =
    document.getElementById("restartButton");

restartButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});