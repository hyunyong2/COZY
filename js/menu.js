$(function(){
    $('header li').hover(function(){
        $(this).children('.sub').stop().slideToggle();
    });
});
