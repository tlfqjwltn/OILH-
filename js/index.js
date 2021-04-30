$(function(){
    $('section').disableSelection();

    setDateBox();
    function setDateBox() {
        const date = new Date();
        const getYear = date.getFullYear();

        $("#year_box").append("<option value=''>년도</option>");
        for (var y = (getYear - 91); y <= (getYear); y++) {
        $("#year_box").append("<option value='" + y + "'>" + y + " 년" + "</option>");
        }
        var month;
        $("#month_box").append("<option value=''>월</option>");
        for (var i = 1; i <= 12; i++) {
        $("#month_box").append("<option value='" + i + "'>" + i + " 월" + "</option>");
        }
        var day;
        $("#day_box").append("<option value=''>일</option>");
        for (var i = 1; i <= 31; i++) {
        $("#day_box").append("<option value='" + i + "'>" + i + " 일" + "</option>");
        }
    }
    //fill select box
    
    $(".landing_btn").click(function(e){
        check_adult();
    });
    function check_adult() {
        const date = new Date();
        const nowYear = date.getFullYear();
        const adultYear = (nowYear - 18);
        var selectYear = $("select[name=year]").val(); //선택한 년도 불러오기
        var selectMonth = $("select[name=month]").val();
        var selectDay = $("select[name=day]").val();
        var selectCheck = $("checkbox[name=l_check]").val();
        if(selectYear == 0){
            $('.year').removeClass('hidden');
        }else if(selectYear >= adultYear){
            $('.adult').removeClass('hidden');
        }else if(selectMonth == 0){
            $('.month').removeClass('hidden');
        }else if(selectDay == 0){
            $('.day').removeClass('hidden');
        }else if($("input:checkbox[name=l_check]").is(":checked") == false){
            $('.checkbox').removeClass('hidden');
        }else{
            $(location).attr('href','main.html')
        }
    }
    //landing_btn click effect
    $('.close_alert').click(function(e){
        e.preventDefault();
        $('.alert').addClass('hidden');
    });
    //close alert

    function moveIndex(){
        const moveIndex = "main.html"
        $(location).attr('href',moveIndex);
    }
    setTimeout(moveIndex, 10000);
    //after 5sec move index page
});
