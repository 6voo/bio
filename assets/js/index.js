var landing = document.getElementById("landing");
var audio = document.getElementById("audio");

function playMedia() {
    landing.style.opacity = 0;
    landing.style.pointerEvents = 'none';
    audio.play()
}