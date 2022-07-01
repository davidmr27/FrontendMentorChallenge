var icons = {
    eye: '<i class="fa-solid fa-eye"></i>',
    eyeSlash: '<i class="fa-solid fa-eye-slash"></i>',
    menuOpen: '<i class="fa-solid fa-bars"></i>',
    menuClose: '<i class="fa-solid fa-xmark"></i>'
}
var templateMarkdown = {
    h1: (value) => {
        let h1Tag = `<h1 class="pre h1">${value}</h1>`;
        return h1Tag;
    },

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
let editor = document.getElementById('editor');
let preview = document.getElementById('preview');
let sectionPreview = document.getElementById('preview--editor');

let btnPreview = document.getElementById('btn-preview');
btnPreview.addEventListener('click', (e) => {
    if(editor.classList.contains('editor-close')) {
        editor.classList.remove('editor-open')
        sectionPreview.classList.toggle('preview--show');
        editor.style.display = 'block';
        return;
    }

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
let btnEditor = document.getElementById('btn-editor');
btnEditor.addEventListener('click', (e) =>{
    if(btnEditor.classList.contains('editor-open')){
        editor.style.display = 'none';
        editor.classList.add('editor-close');
        sectionPreview.classList.toggle('preview--show');
        btnPreview.removeChild(btnPreview.firstChild);
        btnPreview.innerHTML = icons.eyeSlash;
    }
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

// var memoryMarkdown =  new Array();

var rgxMarkdown = {
    h1: /^# (.*$)/gim,
    h2: /^## (.*$)/gim,
    h3: /^### (.*$)/gim,
    h4: /^#### (.*$)/gim,
    h5: /^##### (.*$)/gim,
    h6: /^###### (.*$)/gim,
    blockquote: /^> (.*$)/gim,
    link: /(\[(.+)\])(\((.+)\))/gmi,
    // paragraph: /^\d\. (\w|\d)+/gmi,
    orderNumb:/^(\s*)(\d+\.\s+)(.*)/gm,
}

var textEditor = document.getElementById('markdown-editor');
var textPreview = document.getElementById('preview');
var textarea = textEditor.firstElementChild;
textarea.addEventListener('input', (e) => {
    // console.log(e.target.value);
    let value = String(e.target.value);
    
    const toHTML = value
    .replace(rgxMarkdown.h1, '<h1 class="pre h1">$1</h1>')
    .replace(rgxMarkdown.h2, '<h2 class="pre h2">$1</h2>')
    .replace(rgxMarkdown.h3, '<h3 class="pre h3">$1</h3>')
    .replace(rgxMarkdown.h4, '<h4 class="pre h4">$1</h4>')
    .replace(rgxMarkdown.h5, '<h5 class="pre h5">$1</h5>')
    .replace(rgxMarkdown.h6, '<h6 class="pre h6">$1</h6>')
    .replace(rgxMarkdown.blockquote, '<blockquote class="pre blockquote">$1</blockquote>')
    .replace(rgxMarkdown.link, '<a class="pre link" href="$4" target="_blank">$2</a>')
    .replace(rgxMarkdown.orderNumb, `<ol>${appendLITag()}</ol>`);

    console.log(toHTML);
    textPreview.innerHTML = toHTML.trim();
});

var memoryListNumb = {
    key:  crypto.randomUUID(),
    html: '',
    elements: [],
};

function appendLITag(match,p1, offset,string, groups) {
    console.log(groups);
    console.log(match);
    // const list_item = groups.split('\n');
    // console.log(groups)
    // console.log(list_item);
    // let olHTML = '<ol class="pre list-number" >'
    // let i = 0
    // for(const item of list_item){
    //     // olHTML += `<li><span>${group}</span></li>`
    //     let clean_text = item.replaceAll(/^\d\. /gmi, '')
    //     console.log(`${i}. ${clean_text}`);
    //     i++;
    // }
    // olHTML += '</ol>'
    // return clean_text;
    return match;
}