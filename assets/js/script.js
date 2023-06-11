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

// teste gradient -------------

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    console.log('pc')

} else{
        var spot_cont = document.getElementById('gradient_container');

        document.body.addEventListener('mousemove', item_hover)

        var spot = document.getElementById('spotlight');

}

function item_hover(evt) {

    var spothalf = spot.offsetWidth / 2;

    evt = evt || window.event;

    var x = evt.clientX;
    var y = evt.clientY;

    var kt = document.getElementById('spotlight');
    kt.style.left = x - spothalf + 'px';
    kt.style.top = y - spothalf + 'px';
}