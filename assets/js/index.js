var landing = document.getElementById("landing");
var bio = document.getElementById("bio");
var audio = document.getElementById("audio");

function playMedia() {
    landing.style.opacity = 0;
    landing.addEventListener('transitionend', () => landing.remove())

    bio.style.opacity = 1;
    audio.play()
}