/**功能点2：为“登录”按钮绑定事件监听**/
let loginUname = null;  //全局变量，当前登录的用户名
let loginUid = null;    //全局变量，当前登录的用户编号
$('#bt-login').click(function(){
  var n = $('[name="uname"]').val();
  var p = $('[name="upwd"]').val();
  //发起异步POST请求，进行登录验证
  $.ajax({
    type: 'POST',
    url: 'data/user-login.php',
    data: {uname: n, upwd: p},
    success: function(data){
      console.log('开始处理响应消息');
      if(data.code<0){  //登录失败
        $('p.alert').html(data.msg);
      }else {           //登录成功
        $('.dialog').hide();
        $('#welcome').html('欢迎您：'+data.uname);
        loginUname = data.uname; //在全局范围保存登录用户名
        loginUid = data.uid;//在全局范围保存登录用户编号
      }
    },
    error: function(){
      alert('响应消息有问题！请检查Network！');
    }
  });
});
