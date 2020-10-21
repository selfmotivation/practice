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

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // Output date
    currentDay.innerHTML = daysOfTheWeek[dayOfTheWeek];
    currentMonth.innerHTML = `${day} ${months[month]}`;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
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
        document.body.style.backgroundImage = "url('assets/images/night/01.jpg')";
        greeting.textContent = 'Good night, ';
        document.body.style.color = 'white';
    } else if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('assets/images/morning/01.jpg')";
        greeting.textContent = 'Good morning, ';
        } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('assets/images/day/01.jpg')";
        greeting.textContent = 'Good afternoon, ';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('assets/images/evening/01.jpg')";
        greeting.textContent = 'Good evening, ';
        document.body.style.color = 'white';
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
            localStorage.setItem('name', e.target.innerText);
            name.blur();
            // Make sure the field is not empty
            if (localStorage.getItem('name') === '') {
                name.textContent = '[Enter name]';
                localStorage.removeItem('name');
            }
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
        if (localStorage.getItem('name') === '') {
            name.textContent = '[Enter name]';
            localStorage.removeItem('name');
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
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
            // Make sure the field is not empty
            if (localStorage.getItem('focus') === '') {
                focus.textContent = '[Enter focus]';
                localStorage.removeItem('focus');
            }
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
        if (localStorage.getItem('focus') === '') {
            focus.textContent = '[Enter focus]';
            localStorage.removeItem('focus');
        }
    }
}

// Changing Text inside Focus, Name
function changeText() {
    if (this.textContent === '[Enter name]' || this.textContent === '[Enter focus]') {
        this.textContent = '';
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', changeText);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', changeText);

// Run
showTime();
setBgGreet();
getName();
getFocus();