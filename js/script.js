$(function() {
    $(window).scroll(function() {
        var hHieght = $('.home').height()
        var wHeight = $(window).scrollTop()
        if (wHeight >= hHieght)
            $('.scrollnav').slideDown();
        else
            $('.scrollnav').slideUp();
    });

    $('nav li a').click(function() {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1500)
    })

})