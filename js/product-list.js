/**功能点1：待页面加载完成后，异步请求页头和页尾**/
$(function(){
  $('#site_header').load('data/header.php');
  $('#site_footer').load('data/footer.php');
})

/**功能点2：为“登录”按钮绑定事件监听**/
