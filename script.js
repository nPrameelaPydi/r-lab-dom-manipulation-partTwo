//import "./styles.css";

var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
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
/***********Part 2 - DOM Manipulation *******************/

//Creating the Submenu
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';


//*******Adding Menu Interaction*******
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = navEl.querySelectorAll('a');
//console.log(topMenuLinks);
navEl.addEventListener('click', (evt) => {
    //console.log(`click detected`);
    evt.preventDefault();
    //console.log(evt.target);
    //HTML is Case-Insensitive: In HTML, tag names are case-insensitive. This means that both <a> and <A> will be recognized as the same tag. 
    //JavaScript's tagName Property: The tagName property of an element returns the tag name in uppercase. Therefore, it will always return 'A' for an anchor element.
    if (evt.target.tagName !== 'A') {
        return;
    }
    console.log(evt.target.textContent);

    evt.target.classList.toggle('active'); // toggles active class
    //Removing active class from all other links
    topMenuLinks.forEach(ele => {
        if (ele !== evt.target) {
            ele.classList.remove('active');
        }
    })


    //*****Adding Submenu Interaction*******
    let link = evt.target;
    //console.log(link);    

    let clickedLink = menuLinks.find(item => item.text === link.textContent);
    //console.log(clickedLink);

    if ((link.classList.contains('active'))) {
        if (clickedLink && clickedLink.subLinks) {
            subMenuEl.style.top = '100%';
        }
    } else {
        subMenuEl.style.top = '0';
    }



});





