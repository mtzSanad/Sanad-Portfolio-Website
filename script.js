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
})