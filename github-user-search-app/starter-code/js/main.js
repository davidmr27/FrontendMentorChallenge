var notAvailable = document.getElementById('search__notfound');

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

function removeAllDarkMode() {
    let body = document.getElementById('body');
    let html = document.getElementById('html');
    let main = document.getElementById('main');
    let container = document.getElementById('container');
    let search = document.getElementById('search');
    let design = document.getElementById('design');
    let profile = document.getElementById('profile');
    let sections = [body, main, container, search, design, profile, html];
    for (let elem of sections) {
        elem.classList.remove("darkmode");
    }
}

function switchModeLightText() {
    let mode = document.getElementById('mode');
    mode.lastElementChild.firstElementChild.src = "./assets/icon-sun.svg";
    mode.firstElementChild.innerText = 'light';
    mode.classList.add("dark");
}
function switchModeDarkText() {
    let mode = document.getElementById('mode');
    mode.lastElementChild.firstElementChild.src = "./assets/icon-moon.svg";
    mode.firstElementChild.innerText = 'dark';
    mode.classList.remove("dark");
}
// switchDarkMode();

let mode = document.getElementById('mode');
mode.addEventListener('click', (evt) => {
    if (!mode.classList.contains("dark")) {
        let text = mode.firstElementChild;
        let img = mode.lastElementChild.firstElementChild;
        img.src = "./assets/icon-sun.svg";
        text.innerText = 'light';
        mode.classList.add("dark");
    } else {
        let text = mode.firstElementChild;
        let img = mode.lastElementChild.firstElementChild;
        img.src = "./assets/icon-moon.svg";
        text.innerText = 'dark';
        mode.classList.remove("dark");
    }
    switchDarkMode();
});

function fetchUserGithub(username) {
    console.log(username);
    fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(userinfo => {
            if (userinfo['message'] === 'Not Found') {
                throw new Error('Not Found user')
            }
            notAvailable.style.display = 'none';
            updateUserProfileComponent(userinfo);
        })
        .catch(err => {
            notAvailable.style.display = 'block';
            console.log(err)
        });
}

fetchUserGithub('vidm27')

function updateUserProfileComponent(userinfo) {
    let profileImg = document.getElementById('profile__img');
    let name = document.getElementById('name');
    let username = document.getElementById('username');
    let biography = document.getElementById('biography');
    let joinedDate = document.getElementById('joined');
    let location = document.getElementById('location');
    let twitter = document.getElementById('twitter');
    let website = document.getElementById('website');
    let company = document.getElementById('company');
    let repository = document.getElementById('repository');
    let followers = document.getElementById('followers');
    let following = document.getElementById('following');

    profileImg.src = userinfo['avatar_url'];
    name.textContent = userinfo['name'];
    username.textContent = `@${userinfo['login']}`;

    if (userinfo['company'] === null) {
        company.textContent = "Not Available";
    } else {
        company.textContent = userinfo['company'];
    }

    if (userinfo['location'] === null) {
        location.textContent = "Not Available";
    } else {
        location.textContent = userinfo['location'];
    }

    if (userinfo['twitter_username'] === null) {
        twitter.textContent = "Not Available";
    } else {
        twitter.textContent = userinfo['twitter_username'];
    }

    if (userinfo['bio'] === null) {
        biography.textContent = "This profile has no bio";
    } else {
        biography.textContent = userinfo['bio'];
    }

    repository.textContent = userinfo['public_repos'];
    followers.textContent = userinfo['followers'];
    following.textContent = userinfo['following'];
    website.textContent = userinfo['html_url'];
    website.href = userinfo['html_url'];
    let dateFormat = new Date(Date.parse(userinfo['created_at'])).toDateString();
    joinedDate.textContent = `Joined ${dateFormat}`;
}


let button = document.getElementById('search__button');
button.addEventListener('click', (e) => {
    let searchInput = document.getElementById('search__input');
    fetchUserGithub(searchInput.value);
})

function changeModeComputer(modeMatch){
if (modeMatch === true) {
    switchDarkMode();
    switchModeLightText();
}else{
    switchModeDarkText();
    // switchDarkMode();
    removeAllDarkMode();
}
}

//DARKMODE
const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
changeModeComputer(darkMode.matches);
darkMode.addEventListener('change', (e)=>{changeModeComputer(darkMode.matches)})