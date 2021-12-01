$('.prod-list-1-menu-bar > ul > li:not(:last-child)').mouseenter(function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    
    var index = $(this).index();
    
    $('.prod-list-1-bar > ul.active').removeClass('active');
    $('.prod-list-1-bar > ul').eq(index).addClass('active');
});

$('.my-1').owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    }
});

$('.my-2').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:5
        }
    },
    autoplayTimeout:1000, // 오토 플레이 주기
    autoplayHoverPause:true // 마우스 올리면 멈추게하기
})

