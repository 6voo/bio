document.onkeydown = (e) => {
    if ((e.ctrlKey && e.key == 'S')                 ||
        (e.ctrlKey && e.shiftKey && e.key == 'I')   ||
        (e.ctrlKey && e.key == 'U')                 ||
        (e.ctrlKey)                                 || // Realized it was easier to block the keybind keys lol
        (e.shiftKey)                                ||
        (e.altKey)) {
        e.preventDefault();
    };
}

addEventListener("contextmenu", (event) => event.preventDefault());