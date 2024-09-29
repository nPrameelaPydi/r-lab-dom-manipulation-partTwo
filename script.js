//import "./styles.css";

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

//*****Part 1: Getting Started*********/
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add("flex-ctr");

//****Part 2: Creating a Menu Bar*********/
const navEl = document.getElementById('top-menu');
navEl.style.height = '100%';
navEl.style.backgroundColor = 'var(--top-menu-bg)';
navEl.classList.add("flex-around");

//*****Part 3: Adding Menu Buttons*********/
for (const ele of menuLinks) {
    const aEl = document.createElement('a');
    aEl.setAttribute('href', ele.href);
    aEl.textContent = ele.text;
    navEl.appendChild(aEl);
}

//*****Part 4: Adding Interactivity*****/
