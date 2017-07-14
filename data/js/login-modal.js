var modal = document.querySelector("#dialog-overlay");
var dialog = document.querySelector("#dialog-box");
var btnLogin = document.querySelector("#btnLogin");
var enterLogin = document.querySelector("#enterLogin");
var btnSignUp = document.querySelector("#btnSignUp");

btnLogin.onclick = function(e){
  e.preventDefault()
  modal.style.display = "block";
  dialog.style.display = "block";
};
enterLogin.onclick = function(){
  modal.style.display = "block";
  dialog.style.display = "block";
};
btnSignUp.onclick = function(){
  modal.style.display = "block";
  dialog.style.display = "block";
};

modal.onclick = function(e){
  e.preventDefault()
  modal.style.display = "none";
  dialog.style.display = "none";
};

/*<script language="javascript">
    // 登录 / 注册 切换
  $(document).on('click','#mytest .process',function () {
    var url = $(this).data('url'),
      state = $(this).find('li').text();

    $.get(url, function(result){
      if(state == '注册'){
        $('body .layer-ext-espresso').css({'height':'590px','top':'172px'});
      }else{
        $('body .layer-ext-espresso').css({'height':'432px','top':'257px'});
      }
      $('#mytest').html(result);
    });
  });

// 下次自动登录
$(document).on('click','.remember i',function (e) {
  if ($(this).hasClass('no-check')) {
    $(this).removeClass('no-check');
    $('#remember_user').prop('checked',false);
  }else {
    $(this).addClass('no-check');
    $('#remember_user').prop('checked', true);
  }
});

//登录弹框
$('#enter_login').on('click', function(){
  //获取页面并加载到layer中
  $.get("/user/pop-login", function(result){
    layer.open({
      type: 1,
      title: false,
      shade: 0.4,
      closeBtn: 1,
      id: 'form_id',
      shadeClose: true,
      area : ['432px','420px'],
      content:'<div id="mytest">'+result+'</div>'
    });
  });
});
//注册弹框
$('#enter_register').on('click', function(){
  //获取页面并加载到layer中
  $.get("/user/pop-register", function(result){
    layer.open({
      type: 1,
      title: false,
      shade: 0.4,
      closeBtn: 1,
      id: 'form_id',
      shadeClose: true,
      area : ['432px','590px'],
      content:'<div id="mytest">'+result+'</div>'
    });
  });
});

//collect
$('#collect').on('click', function(){
  layer.alert('您可以通过菜单栏或使用快捷键Ctrl+D收藏我们哟~~', {
    title: '大丰收168温馨提醒'
    ,icon: 1,
    shade: 0.5,
    closeBtn: 0
  })
});
$(function(){
  $(".dfs-ctm-navi li").hover(function() {
      $(this).addClass('dfs-navi-active');
    },
    function() {
      $(this).removeClass('dfs-navi-active');
    });


  $(".storedom").trigger("click");

  $(".public-top-layout .layout-top-citywide").on("click",function(){
    if($(this).hasClass("disable")){
      return ;
    }
    $(".area-pop").fadeIn(100);
  })
  //顶部下拉查单移入事件
  $(".quick-menu dl").hover(function() {
    $(this).addClass("hover");
  },function() {
    $(this).removeClass("hover");
  });

  //所在地
  getLoc();

  $("#cnzz_stat_icon_1260215089 a").text("  ");
});

</script>*/