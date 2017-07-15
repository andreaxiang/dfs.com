/**功能点1：待页面加载完成后，异步请求页头和页尾**/
$(function(){
  $('#site_header').load('data/header.php');
  $('#site_footer').load('data/footer.php');
})

