/**
 * Created by Administrator on 2017/5/4.
 */
define(function(require, exports, module){
  var $ = require("jquery");
  var swiper = require("swiper")($);
  /*element*/
  (function() {
    if (!
        /*@cc_on!@*/
        0) return;
    var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
    var i= e.length;
    while (i--){
      document.createElement(e[i]);
    }
  })()

  $(document).ready(function(e) {

    win_width=$(window).width();
    banner_slide = new Swiper('.ban_box', {
      wrapperClass: 'ban_cut',
      slideClass: 'ban_bin',
      speed: 500,
      loop: true,
      autoplay: 4500,
      autoplayDisableOnInteraction: true,
      grabCursor: true,
      lazyLoading: true,
      keyboardControl: true,
      lazyLoadingOnTransitionStart: true,
      slidesPerView: 1,
      pagination: '.ban_pager',
      paginationClickable :true
    });
    $('.ban_ctrl .ctrl_lt').click(function(){
      banner_slide.slidePrev();
    });
    $('.ban_ctrl .ctrl_rt').click(function(){
      banner_slide.slideNext();
    });



    if(win_width>767){
      title_height=$('.win_cut').attr('data-title-height');
      //$('.title-box').css('top',title_height+'%');
      //$('.price-box,.anenst-content').css('top',Math.abs(title_height)+13+'%');
      var IE9 = (navigator.userAgent.indexOf("MSIE 9.0") > 0) ? true : false;
      var title=[];
      var hash=[];
      var data_title="";

      if($('.win_bin').length>1){
        $('.win_bin').each(function(index, element) {
          data_title=$(this).find('.win_back').attr('data-title');
          if(typeof(data_title)!='undefined'){
            title[index]=data_title;
          }else{
            title[index]='';
          }

          data_hash = $(this).attr('data-hash');
          if (typeof(data_hash) != 'undefined'){
            hash[index] = data_hash;
          }
          else {
            hash[index] = '';
          }

        });
      }else{
        $('.page_box').hide();
      }

      window_slide = new Swiper('.win_box', {
        wrapperClass: 'win_cut',
        slideClass: 'win_bin',
        direction: 'vertical',
        speed: 700,
        hashnav: true,
        roundLengths: true,
        keyboardControl: true,
        lazyLoading: true,
        lazyLoadingOnTransitionStart: true,
        slidesPerView: 'auto',
        mousewheelControl: IE9 ? false : true,
        pagination: $('.win_bin').length > 2 ? '.page_box' : 'null',
        bulletClass: 'page_cut',
        bulletActiveClass: 'active',
        paginationClickable: true,
        paginationBulletRender: function(index,className){
          if (title[index] != '') {
            return '<div class="' + className + '" data-index="' + (index + 1) + '"><span></span><font>' + title[index] + '</font></div>';
          } else {
            return '';
          }
        },
        onInit: function(swiper) {
          if (hash[swiper.activeIndex] != '') {
            eval(hash[swiper.activeIndex] + '_function()');
          }
        },
        onSlideChangeStart: function(swiper) {
          if (hash[swiper.activeIndex] != '') {
            eval(hash[swiper.activeIndex] + '_function()');
          }
        }
      });

      if (IE9) {
        window_time = '';
        window.onmousewheel = function(e) {
          clearTimeout(window_time);
          window_time = window.setTimeout(function() {
            if (e.wheelDelta > 0) {

              window_slide.slidePrev();
            } else {
              window_slide.slideNext();
            }
          }, 500);
        }
      }
      function slide1_function(){
        /**/
      }
      function slide2_function(){
        /**/
      }

      function slide3_function(){
        pro_slide = new Swiper('.pro_box', {
          wrapperClass: 'pro_cut',
          slideClass: 'pro_bin',
          pagination: '.swiper-pagination',
          keyboardControl: true,
          slidesPerView: 4,
          grabCursor: true,
          observer:true,
          preventClicks: false,
          breakpoints: {
            992: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }
        });
        $('.pro_ctrl .ctrl_lt').click(function(){
          pro_slide.slidePrev();
        });
        $('.pro_ctrl .ctrl_rt').click(function(){
          pro_slide.slideNext();
        });
      }

      function slide4_function(){
        base_slide = new Swiper('.base_box', {
          wrapperClass: 'base_cut',
          slideClass: 'base_bin',
          pagination: '.swiper-pagination',
          keyboardControl: true,
          slidesPerView: 3,
          grabCursor: true,
          preventClicks: false,
          breakpoints: {
            1200: {
              slidesPerView: 2
            }
          }
        });
        $('.base_ctrl .ctrl_lt').click(function(){
          base_slide.slidePrev();
        });
        $('.base_ctrl .ctrl_rt').click(function(){
          base_slide.slideNext();
        });
      }

      function slide5_function(){
        info_slide = new Swiper('.info_box', {
          wrapperClass: 'info_cut',
          slideClass: 'info_bin',
          grabCursor: true,
          pagination: '.swiper-pagination',
          keyboardControl: true,
          preventClicks: false,
          slidesPerView: 2
        });
        $('.info_ctrl .ctrl_lt').click(function(){
          info_slide.slidePrev();
        });
        $('.info_ctrl .ctrl_rt').click(function(){
          info_slide.slideNext();
        });
      }

      function slide6_function(){
        /**/
      }

    }else{

    }

    $(".nav_menu").on("click",function(){
      var menu_ul=$(".fcsp_header ul");
      menu_ul.height() == 0 ? menu_ul.css("height","362px") : menu_ul.css("height","0px");
      menu_ul.height() == 0 ? $(this).find(".iconfont").addClass("icon-guanbi").removeClass("icon-caidan") : $(this).find(".iconfont").addClass("icon-caidan").removeClass("icon-guanbi");
    });

    var timer=null;
    $(window).resize(function(){
      window_hg=$(window).width();
      if((window_hg>767&&win_width<767)||(window_hg<767&&win_width>767)){
        clearTimeout(timer);
        timer=window.setTimeout(function(){
          window.location.reload();
        },300);
      }
    });

  });

  /*product�ֲ�*/
  $(function(){
    var sWidth = $("#slider_name").width();
    var len = $("#slider_name .silder_panel").length;
    var index = 0;
    var picTimer;
    var btn = "<a class='prev'><i class=\"iconfont icon-zuo\"></i></a><a class='next'><i class=\"iconfont icon-you\"></i></i></a>";
    $("#slider_name").append(btn);

    $("#slider_name .silder_nav li").css({"opacity":"0.6","filter":"alpha(opacity=60)"}).mouseenter(function() {
      index = $("#slider_name .silder_nav li").index(this);
      showPics(index);
    }).eq(0).trigger("mouseenter");

    $("#slider_name .prev").click(function() {
      index -= 1;
      if(index == -1) {index = len - 1;}
      showPics(index);
    });

    $("#slider_name .next").click(function() {
      index += 1;
      if(index == len) {index = 0;}
      showPics(index);
    });

    $("#slider_name").hover(function() {
      clearInterval(picTimer);
    },function() {
      picTimer = setInterval(function() {
        showPics(index);
        index++;
        if(index == len) {index = 0;}
      },3000);
    }).trigger("mouseleave");

    function showPics(index) {
      //console.log(index);
      var nowLeft = -index * $("#slider_name").width();
      $("#slider_name .silder_con").stop(true,false).animate({"left":nowLeft},300);
      $("#slider_name .silder_nav li").removeClass("current").eq(index).addClass("current");
      $("#slider_name .silder_nav li").stop(true,false).animate({"opacity":"0.5"},300).eq(index).stop(true,false).animate({"opacity":"1"},300);
    }
  });

  news_slide = new Swiper('.news_box', {
    wrapperClass: 'news_cut',
    slideClass: 'news_bin',
    speed: 500,
    loop: true,
    autoplay: 4500,
    autoplayDisableOnInteraction: true,
    grabCursor: true,
    keyboardControl: true,
    slidesPerView: 1,
    pagination: '.news_pager',
    paginationClickable :true
  });

  $(function(){
    if(typeof(province)=='undefined'){

    }else{
      $.each(province, function (k, p) {
        var option = "<option value='" + p.ProID + "'>" + p.ProName + "</option>";
        $("#selProvince").append(option);
      });

      $("#selProvince").change(function () {
        var selValue = $(this).val();
        $("#selCity option:gt(0)").remove();
        $.each(city, function (k, p) {
          if (p.ProID == selValue) {
            var option = "<option value='" + p.CityID + "'>" + p.CityName + "</option>";
            $("#selCity").append(option);
          }
        });
      });
    }

    /*$("#selCity").change(function () {
     var selValue = $(this).val();
     $("#selDistrict option:gt(0)").remove();
     $.each(District, function (k, p) {
     if (p.CityID == selValue) {
     var option = "<option value='" + p.Id + "'>" + p.DisName + "</option>";
     $("#selDistrict").append(option);
     }
     });
     });*/

  })

});
