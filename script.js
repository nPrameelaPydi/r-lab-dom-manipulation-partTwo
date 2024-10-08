//import "./styles.css";

var menuLinks = [
    { text: 'About', href: '/about' },
    {
        text: 'Catalog', href: '#', subLinks: [
            { text: 'All', href: '/catalog/all' },
            { text: 'Top selling', href: '/catalog/top' },
            { text: 'Search', href: '/catalog/search' },
        ]
    },
    {
        text: 'Orders', href: '#', subLinks: [
            { text: 'New', href: '/orders/new' },
            { text: 'Pending', href: '/orders/pending' },
            { text: 'History', href: '/orders/history' },
        ]
    },
    {
        text: 'Account', href: '#', subLinks: [
            { text: 'Profile', href: '/account/profile' },
            { text: 'Sign out', href: '/account/signout' },
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
//console.log(subMenuEl);
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

    if (clickedLink) {
        // Update the mainEl immediately
        mainEl.innerHTML = `<h1>${clickedLink.text}</h1>`;
        console.log("Updated mainEl: " + mainEl.innerHTML);
    }

    if ((link.classList.contains('active'))) {
        if (clickedLink && clickedLink.subLinks) {
            subMenuEl.style.top = '100%';
            buildSubMenu(clickedLink.subLinks);

        }
    } else {
        subMenuEl.style.top = '0';
        //mainEl.innerHTML = `<h1>${clickedLink.text}</h1>`;
    }
});


subMenuEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName !== 'A') {
        return;
    }
    console.log(e.target.textContent);
    //console.log("Clicked link text: " + e.target.textContent);
    subMenuEl.style.top = '0';

    topMenuLinks.forEach(link => link.classList.remove('active'));

    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
    //console.log("Updated mainEl: " + mainEl.innerHTML);

});


//helper function
function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(subLink => {
        const subMenuItem = document.createElement('a');
        subMenuItem.setAttribute('href', subLink.href);
        subMenuItem.textContent = subLink.text;
        subMenuEl.appendChild(subMenuItem);
    })
}





