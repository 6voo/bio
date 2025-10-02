var bio = document.getElementById("profile-bio")

var text = "just a curious mind with a keyboard :p"
var bioLength = text.length
let titles = text.split('')
let index = 0

let interval = setInterval(() => {
    if (index  === bioLength) {
        clearInterval(interval);

        setTimeout(() => { 
            index = 0;

        }, 200)

    } else {
        bio.textContent += titles[index]
        index += 1
    }

}, 85)
