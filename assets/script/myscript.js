(function ($) {
    let jarakContent = $(document).scrollTop();
    if (jarakContent > 50) {
        $('.navbar').removeClass('bg-transparent').addClass('bg-dark')
    }

    $(".nav-link").on("click", function (e) {
        let hrefTujuan = $(this).attr("href");
        let tujuan = $(hrefTujuan);
        $('html, body').animate({
            scrollTop: tujuan.offset().top,
            // setInterval: 500,
        }, 800);
        e.preventDefault();
    });

    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 50) {
            $('.navbar-expand-lg').removeClass('bg-transparent').addClass('bg-dark', 400, 'swing');
        } else {
            $('.navbar-expand-lg').removeClass('bg-dark').addClass('bg-transparent', 400, 'swing');
        }

        // // parallax
        // $(' ')

    });

    $('.nav-link').on('click', function () {
        $('.collapse').collapse('hide');
    });

    // parallax
    $('windows').on('scroll', function () {
        let winScroll
    })


})(jQuery);




