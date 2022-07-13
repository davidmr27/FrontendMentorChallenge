function switchDarkMode() {
    let body = document.getElementById('body');
    let html = document.getElementById('html');
    let main = document.getElementById('main');
    let container = document.getElementById('container');
    let search = document.getElementById('search');
    let design = document.getElementById('design');
    let profile = document.getElementById('profile');

    let sections = [body, main, container, search, design, profile, html];
    for (let elem of sections) {
        elem.classList.toggle("darkmode");
    }
}

// switchDarkMode();

let mode = document.getElementById('mode');
mode.addEventListener('click', () => {
    switchDarkMode();
});