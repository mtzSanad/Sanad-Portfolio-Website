$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })

    //Showing menu btn 
    $('.menu-btn').click(function () {
        $('.navbar .app-menu').toggleClass("show")
        $('.menu-btn i').toggleClass("show")
    })

    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "Freelancer", "Data Scientist", "Product Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing1", {
        strings: ["Full Stack Developer", "Freelancer", "Data Scientist", "Product Manager"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
})