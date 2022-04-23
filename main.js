/**
 * ! fixed header_bottom
 */
window.onscroll = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
        document.querySelector(".header_bottom").classList.add("active");
    } else {
        document.querySelector(".header_bottom").classList.remove("active");
    }
};
/*
!slider 
*/
//  slider
$(document).ready(function() {
    $(".slider").owlCarousel({
        loop: true,

        nav: true,
        items: 1,
        animateOut: "slideOutDown",
        animateIn: "flipInX",
        items: 1,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
    });
});
//  chuy huong trang chu
function Redirect() {
    window.location = "index.html";
}

// speed scroll
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 120;
//     else if (event.detail) delta = -event.detail / 3;

//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
// }

// function handle(delta) {
//     var time = 1000;
//     var distance = 300;

//     $('html, body').stop().animate({
//         scrollTop: $(window).scrollTop() - (distance * delta)
//     }, time);
// }