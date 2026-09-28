const progressBar = document.getElementById("progressBar");
const background = document.querySelector(".hero-background");
const startAgain = document.getElementById("startAgain");

window.addEventListener("scroll", function() {

    // Find how far down the page we are
    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent =
        (scrollTop / pageHeight) * 100;

    // Change the progress bar
    progressBar.style.width = percent + "%";

    // Move the background slower than the page
    background.style.transform =
        "translateY(" + scrollTop * 0.15 + "px)";
});

startAgain.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});