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