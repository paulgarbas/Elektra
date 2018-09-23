$(document).ready(function(){
    // Home slider
    $('.home-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Our Projects Slider
    $('.our-projects-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Our Brands Slider
    $('.our-brands-slider').slick({
        autoplay: true,
        // variableWidth: true,
        autoplaySpeed: 5000,
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                }
            },
            {
                breakpoint: 1030,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
});

    





