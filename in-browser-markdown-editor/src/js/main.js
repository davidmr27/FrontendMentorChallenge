var icons = {
    eye: '<i class="fa-solid fa-eye"></i>',
    eyeSlash: '<i class="fa-solid fa-eye-slash"></i>',
    menuOpen: '<i class="fa-solid fa-bars"></i>',
    menuClose: '<i class="fa-solid fa-xmark"></i>'
}
let menu = document.getElementById('menu');

menu.addEventListener('click', (e) => {
    let firstChild = menu.firstChild;
    let layout = document.getElementById('layout');
    let sidenav = document.getElementById('sidenav');

    if (menu.classList.contains('close')) {
        menu.classList.remove('close');
        menu.removeChild(firstChild);
        menu.innerHTML = icons.menuClose;
        menu.classList.add('open');
    } else if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.removeChild(firstChild);
        menu.innerHTML = icons.menuOpen;
        menu.classList.add('close');
    }
    layout.classList.toggle('sidenav-close');
    sidenav.classList.toggle('sidenav-close');
})

// hide and show editor and preview
let btnPreview = document.getElementById('btn-preview');
btnPreview.addEventListener('click', (e) => {
    let editor = document.getElementById('editor');
    let preview = document.getElementById('preview');

    if (btnPreview.classList.contains('preview-open')) {
        editor.style.width = '0';
        btnPreview.removeChild(btnPreview.firstChild);
        btnPreview.innerHTML = icons.eyeSlash;
    } else {
        editor.style.width = '100%';
        btnPreview.removeChild(btnPreview.firstChild);
        btnPreview.innerHTML = icons.eye;
    }
    btnPreview.classList.toggle('preview-open');
    preview.classList.toggle('content-center');
});

// Show modal delete file
let modal = document.getElementById('modal-delete-file');
let btnDelete = document.getElementById('delete-file');

btnDelete.addEventListener('click', (e) => {
    modal.style.display = 'block';
});
window.onclick = (e) => {
    // console.log(e.target);
    if(e.target.classList.contains('modal-content')) {
        modal.style.display = 'none';
    }
}