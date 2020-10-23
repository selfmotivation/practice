// DOM Elements
const time = document.querySelector('.time'),
    greeting = document.querySelector('.greeting'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus'),
    currentMonth = document.querySelector('.month'),
    currentDay = document.querySelector('.day');

// Date values
let months = {
    0: "января",
    1: "февраля",
    2: "марта",
    3: "апреля",
    4: "мая",
    5: "июня",
    6: "июля",
    7: "августа",
    8: "сентября",
    9: "октября",
    10: "ноября",
    11: "декабря",
}

let daysOfTheWeek = {
    0: "Воскресенье",
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота"
}

// Show Time
function showTime() {
    let today = new Date(),
        day = today.getDate(),
        dayOfTheWeek = today.getDay(),
        month = today.getMonth(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();


    // Output date
    currentDay.innerHTML = daysOfTheWeek[dayOfTheWeek];
    currentMonth.innerHTML = `${day} ${months[month]}`;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

    // Change Background Image Every Hour
    if (min == 59 && sec == 59) {
        setTimeout(getImage, 1000);
    }
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 6) {
        // Night
        document.body.style.backgroundImage = `url('./assets/images/${bgImagesList[hour]}')`;
        greeting.textContent = 'Good night, ';
    } else if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = `url('./assets/images/${bgImagesList[hour]}')`;
        greeting.textContent = 'Good morning, ';
        } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = `url('./assets/images/${bgImagesList[hour]}')`;
        greeting.textContent = 'Good afternoon, ';
    } else {
        // Evening
        document.body.style.backgroundImage = `url('./assets/images/${bgImagesList[hour]}')`;
        greeting.textContent = 'Good evening, ';
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure Enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            // Make sure the field is not empty
            if (e.target.innerText === '') {
                if (localStorage.getItem('name') === null) {
                    name.textContent = '[Enter name]';
                    localStorage.removeItem('name');
                }
            } else {
                localStorage.setItem('name', e.target.innerText);
            }
            name.blur();
        }
    } else {
        if (e.target.innerText === '') {
            if (localStorage.getItem('name') === null) {
                name.textContent = '[Enter name]';
            } else {
                name.textContent = localStorage.getItem('name');
            }
        } else {
            if (name.textContent !== '[Enter name]') {
                localStorage.setItem('name', e.target.innerText);
            }
        }
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure Enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            // Make sure the field is not empty
            if (e.target.innerText === '') {
                if (localStorage.getItem('focus') === null) {
                    focus.textContent = '[Enter focus]';
                    // localStorage.removeItem('focus');
                }
            } else {
                localStorage.setItem('focus', e.target.innerText);
            }
            focus.blur();
        }
    } else {
        if (e.target.innerText === '') {
            if (localStorage.getItem('focus') === null) {
                focus.textContent = '[Enter focus]';
                localStorage.removeItem('focus');
            } else {
                focus.textContent = localStorage.getItem('focus');
            }
        } else {
            if (focus.textContent !== '[Enter focus]') {
                localStorage.setItem('focus', e.target.innerText);
            }
        }
    }
}

// Changing Text inside Focus, Name
function changeText() {
        this.textContent = '';
}

// Background Image Change
const base = './assets/images/';
let bgImagesList = [];

function viewBgImage(data) {
    const body = document.querySelector('body');
    const src = data;
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {      
        body.style.backgroundImage = `url(${src})`;
    }; 
}

let i = new Date().getHours();

function getImage() {
    const index = ((i+1) % 24);
    const imageSrc = base + bgImagesList[index];
    viewBgImage(imageSrc);
    i++;
    btn.disabled = true;
    setTimeout(function() {
        btn.disabled = false
    }, 1000);
} 

const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

// Set Background Images List
function createBgImagesList() {
    let dayTime;
    let i = 0;
    while (i < 24) {
        if (i < 6) {
            dayTime = 'morning/';
            addImagesToList(dayTime);
        } else if (i < 12) {
            dayTime = 'day/';
            addImagesToList(dayTime);
        } else if (i < 18) {
            dayTime = 'evening/';
            addImagesToList(dayTime);
        } else {
            dayTime = 'night/';
            addImagesToList(dayTime);
        }
        i++;
    }
}

// Add random images to list
function addImagesToList(dayTime) {
    let imgQuantity = 0;
    imgQuantity = Math.floor(Math.random() * 20 + 1);
    if (imgQuantity < 10) {
        imgQuantity = '0' + imgQuantity;
    }
    // Check if there is the same Img in List already
    if (bgImagesList.indexOf(`${dayTime}${imgQuantity}.jpg`) == -1) {
        bgImagesList.push(`${dayTime}${imgQuantity}.jpg`);
    } else addImagesToList(dayTime);
}




name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', changeText);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', changeText);

// Run
showTime();
getName();
getFocus();
createBgImagesList();
setBgGreet();