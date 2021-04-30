// JJH 210409

window.onload = function(){
    const slider = document.querySelector('.s3_box1');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
    });
};


$(function(){
    $('.contain').disableSelection();
    //text drag block

    const win_h = $(window).height();
    $('.contain').each(function(index){
        $(this).attr("data-index",win_h * index);
    });
    $('.contain').on('mousewheel',function(e){
        const sectionPos = parseInt($(this).attr('data-index'));
        if(e.originalEvent.wheelDelta >= 0) {
            $('html, body').stop().animate({scrollTop:sectionPos - win_h},500);
            return false;
        } else if (e.originalEvent.wheelDelta < 0) {
            $('html, body').stop().animate({scrollTop:sectionPos + win_h},500);
            return false;
        }
    });
    //scroll event

    $(window).scroll(function() {  
        const position = $(window).scrollTop();
        lnbOn();
        function lnbOn(){
            $('.main_lnb li a').removeClass('on');
            if(position < win_h){
                $('.main_lnb li:nth-child(1) a').addClass('on');
                buttonWhite();
            }else if(position < $('#section3').offset().top){
                $('.main_lnb li:nth-child(2) a').addClass('on');
                buttonWhite();
            }else if(position < $('#section4').offset().top){
                $('.main_lnb li:nth-child(3) a').addClass('on');
                buttonNavy();
            }else if(position < $('#section5').offset().top){
                $('.main_lnb li:nth-child(4) a').addClass('on');
                buttonWhite();
            }else if(position < $('#section6').offset().top){
                $('.main_lnb li:nth-child(5) a').addClass('on');
                buttonWhite();
            }else if(position < $('#section7').offset().top){
                $('.main_lnb li:nth-child(6) a').addClass('on');
                buttonNavy();
            }else{
                $('.main_lnb li:nth-child(7) a').addClass('on');
                buttonNavy();
            }
        }
        function buttonWhite() {
            $('.login > li > a').css('color','#ffffff');
            $('.mypage').css('background-position','top');
        }
        function buttonNavy() {
            $('.login > li > a').css('color','#3D405B');
            $('.mypage').css('background-position','bottom');
        }
    });
    //scroll lnb move && login color change

    $('.main_lnb > li > a').on().click(function(e){
        e.preventDefault();
        const target = $(this).attr('href');
        const offset = $(target).offset();
        $('html, body').animate({scrollTop:offset.top},500);
        $('.main_lnb > li > a').removeClass('on');
        $(this).addClass('on');
    });
    //lnb slide and button

    setInterval(function(){
        $('#sec1_inner_box').delay(2000);
        $('#sec1_inner_box').animate({'margin-left':'-100vw'},2000);
        $('#sec1_inner_box').delay(2000);
        $('#sec1_inner_box').animate({'margin-left':'0'},2000);
    });
    //section1 auto slide
   
    $('.s5_box1').hover(function(){
        $(this).stop().animate({'width':'80vw'},1000);
        $('.s5_box2,.s5_box3').stop().animate({'width':'10vw'},1000);
        s5_box1In();
        s5_box2Out();
        s5_box3Out();
            // over
            
        }, function(){
            $(this).stop().animate({'width':'33vw'},1000);
            $('.s5_box2,.s5_box3').stop().animate({'width':'33vw'},1000);
            // out
            reset();
        }
    );
    $('.s5_box2').hover(function(){
        $(this).stop().animate({'width':'80vw'},1000);
        $('.s5_box1,.s5_box3').stop().animate({'width':'10vw'},1000);
        s5_box1Out();
        s5_box2In();
        s5_box3Out();
            // over
        }, function(){
            $(this).stop().animate({'width':'33vw'},1000);
            $('.s5_box1,.s5_box3').stop().animate({'width':'33vw'},1000);
            reset();
            // out
        }
    );
    $('.s5_box3').hover(function(){
        $(this).stop().animate({'width':'80vw'},1000);
        $('.s5_box1,.s5_box2').stop().animate({'width':'10vw'},1000);
        s5_box1Out();
        s5_box2Out();
        s5_box3In();
            // over
        }, function(){
            $(this).stop().animate({'width':'33vw'},1000);
            $('.s5_box1,.s5_box2').stop().animate({'width':'33vw'},1000);
            reset();
            // out
        }
    );

    function s5_box1Out(){
        $('.sec5_box1_coverbg, .s5_box1_1').stop().fadeOut();
        reset();
    }
    function s5_box1In(){
        $('.sec5_box1_coverbg, .s5_box1_1').stop().fadeIn();
        $('.s5_boox1_1_blank').stop().animate({'color':'#ff6550','font-size':'12.5rem'},1000);
        $('.s5_box1_1_subtitle').stop().animate({'color':'#3D405B','margin-top':'-9.25rem'},1000);
        $('.s5_box1_1_title').stop().animate({'color':'#3D405B'},1000);
    }
    function s5_box2Out(){
        $('.s5_box2_1, .sec5_box2_coverbg, .s5_box2_2').stop().fadeOut();
        reset();
    }
    function s5_box2In(){
        $('.sec5_box2_coverbg').stop().fadeIn();
        //$('.s5_box2_2').stop().animate({'top':'24.75rem'},800);
        $('.s5_box2_1').stop().fadeIn().animate({'opacity':'0'},800);
        $('.s5_box2_2').stop().animate({'font-size':'6.5rem','line-height':'9.5rem'},1000);
        $('.s5_box2_2_maintitle').stop().animate({'font-size':'8rem'},1000);
    }
    function s5_box3Out(){
        $('.sec5_box3_coverbg, .s5_box3_1, .s5_box3_2, .s5_box3_3, .s5_box3_4').stop().fadeOut();
        reset();
    }
    function s5_box3In(){
        $('.sec5_box3_coverbg, .s5_box3_1, .s5_box3_2, .s5_box3_3, .s5_box3_4').stop().fadeIn();
        $('.s5_box3_1_subtitle').stop().animate({'font-size':'8.5rem','line-height':'12.5rem'},1000);
        $('.s5_box3_1_title').stop().animate({'color':'#ffc776','font-size':'12.5rem','line-height':'10.5rem'},1000);
    }
    function reset(){
        $('.sec5_box1_coverbg, .s5_box1_1, .s5_boox1_1_blank, .s5_box1_1_subtitle, .s5_box1_1_title, .s5_box2_1, .sec5_box2_coverbg, .s5_box2_2, .sec5_box3_coverbg, .s5_box3_1, .s5_box3_2, .s5_box3_3, .s5_box3_4, .s5_box2_2_title, .s5_box2_2_maintitle, .s5_box3_1_subtitle, .s5_box3_1_title').removeAttr("style");
    }

    $('.s5_box1').click(function(){
        const moveIndex = "event_blank.html"
        $(location).attr('href',moveIndex);
    });
    $('.s5_box2').click(function(){
        const moveIndex = "event_insta.html"
        $(location).attr('href',moveIndex);
    });
    $('.s5_box3').click(function(){
        const moveIndex = "event_thisYes.html"
        $(location).attr('href',moveIndex);
    });

    //section5 box slide

    let i=0;
    $('.btn_playstop').click(function(e){
        e.preventDefault();
        //play상태->play실행을 멈추고, 버튼을 변경
        if(i==0){
            $(this).css('backgroundPosition','0 0');
            i=1;
        }
        //stop상태->play모드를 다시 실행, 버튼을 변경
        else if(i==1){
            $(this).css('backgroundPosition','100% 100%');
            i=0;
        }
    });
    //section6 hover, playbtn

    $('.sec7_box1_1_imgbox').hover(function(){
        $(this).css('transform','scale(1.1)').css('mix-blend-mode','normal');
    },function(){
        $(this).css('transform','scale(1.0)').css('mix-blend-mode','luminosity');
    });
    $('.sec7_box1_5_imgbox').hover(function(){
        $(this).css('transform','scale(1.1)').css('mix-blend-mode','normal');
    },function(){
        $(this).css('transform','scale(1.0)').css('mix-blend-mode','luminosity');
    });
    $('.sec7_box1_4_imgbox').hover(function(){
        $(this).css('transform','scale(1.1)').css('mix-blend-mode','normal');
    },function(){
        $(this).css('transform','scale(1.0)').css('mix-blend-mode','luminosity');
    });
    //section7 img 

    setInterval(function(){
        changImg1();
    },4000);
    setInterval(function(){
        changImg2();
    },8000);


    function changImg1() {
        $('.popbutton').attr("src","img/index/popup_dog_hover.png");
    }

    function changImg2() {
        $('.popbutton').attr("src","img/index/popup_wolf_hover.png");
    }

    $('.sec3_arrow_left').click(function(e){
        e.preventDefault();
    });

});