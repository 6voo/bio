var landing = document.getElementById("landing");
var bio = document.getElementById("bio");
var audio = document.getElementById("audio");

function playMedia() {
    landing.style.opacity = 0;
    bio.style.opacity = 100;
    landing.style.pointerEvents = 'none';
    audio.play()
}