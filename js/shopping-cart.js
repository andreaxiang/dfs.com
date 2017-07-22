/**功能点1：读取上一个页面保存的Cookie，获得用户名和用户编号**/
//解析出loginUname和loginUid，若没有则必须跳转回“登录页面”
//'loginUname=xxx; loginUid=xxx'
var cookieArray = document.cookie.split('; ');
var cookieObject = { };
for(var i=0; i<cookieArray.length; i++){
  var pair = cookieArray[i].split('=');//loginUname=xxx
  var key = pair[0]; //loginUname
  var value = pair[1];  //qiangdong
  cookieObject[key] = value;
}
if(!cookieObject.loginUid){  //没有需要的Cookie数据
  location.href="../market.html";
}

/**功能点2：页面加载完后，异步请求页头和页尾**/
$(function(){
  $('#site_header').load('data1/header.php',function(){
    //异步请求完成(即页头加载完成)后的回调
    $('#welcome').html('欢迎回来：'+cookieObject.loginUname);
  });
  $('#site_footer').load('data1/footer.php');
})