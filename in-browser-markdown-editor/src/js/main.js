var icons = {
    eye: '<i class="fa-solid fa-eye"></i>',
    eyeSlash: '<i class="fa-solid fa-eye-slash"></i>',
    menuOpen:  '<i class="fa-solid fa-bars"></i>',
    menuClose: '<i class="fa-solid fa-xmark"></i>'
}
let menu = document.getElementById('menu');

menu.addEventListener('click', (e) => {
    let firstChild = menu.firstChild;

    if(menu.classList.contains('close')){
        menu.classList.remove('close');
        menu.removeChild(firstChild);
        menu.innerHTML = icons.menuClose;
        menu.classList.add('open');
    }else if(menu.classList.contains('open')){
        menu.classList.remove('open');
        menu.removeChild(firstChild);
        menu.innerHTML = icons.menuOpen;
        menu.classList.add('close');
    }
})

// hide and show editor and preview
let btnPreview = document.getElementById('btn-preview');
btnPreview.addEventListener('click', (e) =>{
    // se maximiza el preview
    // se oculta el editor
    let iconEyesSlash = '<i class="fa-solid fa-eye-slash"></i>';
    let editor = document.getElementById('editor');
    if(btnPreview.classList.contains('preview-open')){
        editor.style.width = '0';
        btnPreview.removeChild(btnPreview.firstChild);
        btnPreview.innerHTML = icons.eyeSlash;
    }else{
        editor.style.width = '100%';
        btnPreview.removeChild(btnPreview.firstChild);
        btnPreview.innerHTML = icons.eye;
    }
    btnPreview.classList.toggle('preview-open');
});