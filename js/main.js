 //모바일메뉴

 $(document).ready(function () {

    

 $('.ham').click(function () {
    $('.mgnb_wrap').animate({
        left: '0'
     
    });

  

    $('.mgnb_close').click(function () {
        $('.mgnb_wrap').animate({
            left: '100%'
            
        });
     
    });

});

//depth2
$('.depth2').hide();

$('.gnb>li').mouseenter(function () {
    $(this).children('.depth2').stop().fadeIn();
});

$('.gnb>li').mouseleave(function () {
    $(this).children('.depth2').stop().fadeOut();
});

//모바일2차메뉴
$('.mdepth2').hide();
$('.mgnb_list > li').click(function(){
 $(this).children('.mdepth2').stop().slideDown();
 $(this).siblings().children('.mdepth2').stop().slideUp();
});



});

