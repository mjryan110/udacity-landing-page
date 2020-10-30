/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navElements = document.querySelectorAll('section')
const navList = document.getElementById('navbar__list')
const fragment = document.createDocumentFragment();
const navMenuItems = document.getElementsByClassName("menu__link")

function createNavItemHTML(id, name) {
    const itemHTML = `<a class ="menu__link" data-id="${id}">${name}</a>`;
    return itemHTML;
}

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    for (let i = 0; i < navElements.length; i++) {
        const newMenuItem = document.createElement('li');
        const sectionName = navElements[i].getAttribute('data-nav');
        const sectionId = navElements[i].getAttribute('id');
        newMenuItem.innerHTML = createNavItemHTML(sectionId, sectionName)
        fragment.appendChild(newMenuItem);
    }
    navList.appendChild(fragment);
}




// Add class 'active' to section when near top of viewport
function checkViewport(element) {
    const bounding = element.getBoundingClientRect();

    return(
        bounding.top >= 0 &&
        bounding.bottom <= window.innerHeight
    )
}
// adding active class to both the nav bar item and the section
function activeClass() {
    for (let i = 0; i < navElements.length; i++) {
        if (checkViewport(navElements[i])) {
            navElements[i].classList.add("your-active-class");
            navMenuItems[i].classList.add("your-active-class");
        } else {
            navElements[i].classList.remove("your-active-class");
            navMenuItems[i].classList.remove("your-active-class");
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollSelection(event) {
    if (event.target.nodeName == 'A') {
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav()

// Scroll to section on link click
navList.addEventListener('click', function(event) {
    scrollSelection(event);
})

// Set sections as active
document.addEventListener('scroll', function() {
    activeClass();
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; 
}
