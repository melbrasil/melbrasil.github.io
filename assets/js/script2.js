// menu hamburguer --------

var btnToggleMenu = document.querySelector('.btn--toggle-menu');

function toggleMenu() {
    var mainNav = document.querySelector('#main-navigation');
    mainNav.classList.toggle('menu-is-open');
    document.body.classList.toggle("no-scroll");
}

btnToggleMenu.addEventListener("click", toggleMenu);


console.log("teste");

// menu selecionado --------

var anchor = document.querySelector("#main-navigation").querySelectorAll("a");
console.log(anchor);
for(var i = 0; i < anchor.length; i++) {
    if(window.location.href === anchor[i].href) {
        anchor[i].classList.add("active");
    }
    if(window.location.href.indexOf("about") > -1) {
        document.body.classList.add("about");
    } else if (window.location.href.indexOf("contacts") > -1) {
        document.body.classList.add("contacts");
    } else {
        document.body.classList.add("home");
    }    
}

