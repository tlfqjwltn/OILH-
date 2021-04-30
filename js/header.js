$(function(){
    $('section').disableSelection();
    
    $('.header_logo').click(function(){
        const moveIndex = "main.html"
        $(location).attr('href',moveIndex);
    });
    //header logo_move index page

    $('.gnb_left li:nth-child(1)').click(function(e){
        e.preventDefault();
        const moveIndex = "main.html"
        $(location).attr('href',moveIndex);
    });
    $('.gnb_left li:nth-child(2)').click(function(e){
        e.preventDefault();
        const moveIndex = "brand_story.html"
        $(location).attr('href',moveIndex);
    });
    $('.gnb_left li:nth-child(3)').click(function(e){
        e.preventDefault();
        const moveIndex = "product1.html"
        $(location).attr('href',moveIndex);
    });
    $('.gnb_left li:nth-child(4)').click(function(e){
        e.preventDefault();
        const moveIndex = "event.html"
        $(location).attr('href',moveIndex);
    });
    $('.gnb_left li:nth-child(5)').click(function(e){
        e.preventDefault();
        const moveIndex = "subscribe.html"
        $(location).attr('href',moveIndex);
    });
    $('.gnb_left li:nth-child(6)').click(function(e){
        e.preventDefault();
        const moveIndex = "community.html"
        $(location).attr('href',moveIndex);
    });

    $('.header_logo').click(function(){
        const moveIndex = "main.html"
        $(location).attr('href',moveIndex);
    });
    //header logo_move index page
    $('.footer_logo').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});