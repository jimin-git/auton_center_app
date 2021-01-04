$(function(){
    // calender_datetrol_box
    var SlickCalenderDate = $('.calender_date').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows:true,
      //vertical : true,
      //verticalSwiping: true
    });

    var SlickCalenderTime = $('.calender_time ul').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 7,
      autoplay: false,
      arrows:true,
      vertical : false,
      verticalSwiping: false
    });
    var SlickArea = $('.area_setting_ck_list').slick({
      variableWidth:true,
      infinite: false,
      speed: 300,
      autoplay: false,
      arrows:false,
      vertical : false,
      verticalSwiping: false
    });

    //  아코디언 스크립트 버전 2
    $('.accordion_wrap div').eq(0).children().addClass('on');
    $('.accordion').click(function(){
      $(this).next().slideToggle('fast');
      $(this).toggleClass('on');
      $('.calender_control_box .calender_setting .calender_time').show();
    });

    $('.calender_date a').click(function(){
      var CalenderDate = $(this).text();
      var CalenderWeek = $(this).parent().find('p').text();
      $('.calender_ck .date_day').text(CalenderDate);
      $('.calender_ck .date_week').text(CalenderWeek);
    });
    $('.calender_time a').click(function(){
      var CalenderTime = $(this).attr('value');
      $('.calender_ck .date_time').text(CalenderTime);
    });

    $('#datepicker').datepicker({
      showOn:'button',
      dateFormat:"yy-mm-dd",
      showOtherMonths: true,
      showMonthAfterYear: true,//년 >월 순으로 변경
      dayNamesMin:['일','월','화','수','목','금','토'],
      monthNames: [ '01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월' ],
    });
    //layer_pop
    $(".layer_pop_btn").click(function(){
      $(".layer_pop").stop().fadeToggle(500);
      return false; //중요
    });
    //layer_pop 팝업 외에 영역 클릭
   $(document).click(function(e){
     if(e.target.className =="layer_pop"){return false}
     $(".layer_pop").stop().fadeOut(500);
   });
   $('.bim').click(function(){
     $(".layer_pop_con,.bim").stop().fadeOut(500);
   });

    $(window).on('load', function() {
      $('.calender_setting').hide().css('opacity','1');
    });

    $('.calender_control_box .calender_setting a').click(function(){
        $(this).parent().parent().find('a').removeClass('on');
        $(this).addClass('on');
    });
    $('.area_list_01 a').click(function(){
        var AreaListCK = $(this).parent().index();
        var AreaListCKN = AreaListCK -  parseInt(1);
        $('.area_list_01 li').removeClass('on');
        $(this).parent().addClass('on');
        $('.area_list_02 ul').removeClass('on');
        $('.area_list_02 ul').eq(AreaListCKN).addClass('on');
    });
    $('.area_list_02 a').click(function() {
      if($(this).hasClass('on') == false){
        $(this).addClass('on');
      }else {
        $(this).removeClass('on');
      }
    });

});
//지역선택
function AeraConBtnShow(){
  $('#wrap').addClass('scrollnone');
  $('.area_setting').show();
  var WindowH = $(window).height();
  var CalenderHeader = $('.calender_ck').height();
  var Header = $('.pc_nav').height();
  var AreaSTHTop = $('.area_setting .area_control_btn').height();
  var AreaSTH = WindowH - CalenderHeader - Header;
  var AreaSTCon =  AreaSTH - AreaSTHTop - 116;//116 bottom높이
  console.log(AreaSTCon);

  $('.area_setting').height(AreaSTH); //팝업높이
  $('.area_list').height(AreaSTCon); //컨텐츠높이
}
function AeraConBtnHide(){
  $('#wrap').removeClass('scrollnone');
  $('.area_setting').hide();
}

//달력선택
function DatePickerHide(){
  $("#datepicker,.bim").stop().fadeOut(500);
}
function DatePickerShow(){
  $("#datepicker,.bim").stop().fadeIn(500);
}

$(function() {
  $('.btn_reservation').click(function(){
    $(this).parents('.schedule_box').addClass('on');
  });
  $('input[type="checkbox"]').on('change',function(){
    if($(this).is(":checked") == true) {
        console.log('체크');
        $(this).parent().addClass('on');
    }else {
      $(this).parent().removeClass('on');
    }

  });
});


// 사진 추가
function setThumbnail(event) {
  var WindowW = $(window).width();
  var WindowW2 = WindowW / 2 - 10;

  for (var image of event.target.files) {
    var reader = new FileReader();
    reader.onload = function(event) {
      $('#image_container .none').hide();
      var img = document.createElement("img");
      let li = document.createElement('li');
      img.setAttribute("src", event.target.result);
      //document.querySelector("#image_container .slick-track").appendChild(li).appendChild(img);
      document.querySelector("#image_container").appendChild(li).appendChild(img);
      //document.querySelector("div#image_container").appendChild(img);
      var ImgfN =$("#image_container li").length;
      var ImgConW =  WindowW2 * ImgfN;
      $("#image_container li").css({'width':WindowW2});
      $("#image_container").css({'width':ImgConW});
     };
     reader.readAsDataURL(image);
  }


}

function goBack() {
  window.history.back();
}
//기본설정 이메일 수정선택
function emailChangeBtn(){
  $(".email_changebox").show();
  $(".btn_email_change").hide();
}
function emailChangeNone(){
  $(".btn_email_change").show();
  $(".email_changebox").hide();

}
