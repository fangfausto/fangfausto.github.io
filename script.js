$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script code
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script code
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script code
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click code
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click code
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script code
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script code
    var typed = new Typed(".typing", {
        strings: ["Web Designer", "Software Developer", "Graphic Designer","Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", "Software Developer", "Graphic Designer","Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});