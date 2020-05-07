$(document).ready(function () {

    let hrefTujuan = $(this).attr("href");
    let tujuan = $(hrefTujuan);
    $(".nav-link").on("click", function () {
       
        let hrefTujuan = $(this).attr("href");
        let tujuan = $(hrefTujuan);

        console.log(tujuan);
    
      $('html body').animate({
          scroll: tujuan.offset().top,
        }, 2000, 'easeInOutExpo'); 

        //  event.preventDefault();
    });
    
    // console.log(tujuan.offset())

    // $('body').on('scroll', function (e) {
    //     console.log(e)
    // });
    
});


