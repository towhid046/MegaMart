$(document).ready(function(){

    $('#carouselContainer').slick({ 
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: `<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>`,
    });

    $('.tabWrapper').slick({ 
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        arrows:false
    });

});
