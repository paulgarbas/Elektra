$(document).ready(function(){
    $(".hamburger").click(function() {
        // $(".nav-mobile").css("background-color", "#F4F4F4");
        $(".nav-mobile-navigation").slideToggle();
    });

    $('.hamburger').toggle(function () {
        $(".nav-mobile").addClass("background-color");
    }, function () {
        $(".nav-mobile").removeClass("background-color");
    });
});
           
