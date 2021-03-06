/**功能点1：待页面加载完成后，异步请求页头和页尾**/
$(function(){
  /*$('#site_header').load('data/header.php');*/
  $('#site_footer').load('data/footer.php');
})


//发起异步GET请求，获取产品列表，重建分页条
function loadProduct(pno){
  $.ajax({
    //url: 'data/3_product_list.php', //不带分页
    url: 'data/4_product_list.php?pageNum='+pno,  //带分页
    success: function(pager){
      //console.log('开始处理分页对象');
      //console.log(pager);
      //1.根据分页器对象中的数据构建产品列表
      var html = '';
      $.each(pager.data, function(i, p){
        html += `
        <li>
          <div class="mainCol-ct">
            <a href="#"><img src="${p.pic}"></a>
          </div>
          <p><a href="#">${p.pname}</a></p>
          <div class="price_bar">
            <span class="new_price fl"><em>&yen;${p.price}</em></span>
            <span class="original_price fr">&yen;${p.price}＋3</span>
          </div>
          <div class="prod_cover">
            <aside class="store_ti">
              <a href="#" target="_blank">${p.supplier} &gt;</a>
            </aside>
            <a href="${p.pid}" class="addcart">加入购物车</a>
          </div>
        </li>  
        `;
      });
      $('#plist ul').html(html);
      //2.根据分页器对象重新构建一个分页条
      var html = '';
      if(pager.pageNum-2>0){  //当前页-2
        html += `<li><a href="${pager.pageNum-2}">${pager.pageNum-2}</a></li> `;
      }
      if(pager.pageNum-1>0){  //当前页-1
        html += `<li><a href="${pager.pageNum-1}">${pager.pageNum-1}</a></li> `;
      }
      html += `<li class="active"><a href="#">${pager.pageNum}</a></li> `;
      if(pager.pageNum+1<=pager.pageCount){ //当前页+1
        html += `<li><a href="${pager.pageNum+1}">${pager.pageNum+1}</a></li> `;
      }
      if(pager.pageNum+2<=pager.pageCount){ //当前页+2
        html += `<li><a href="${pager.pageNum+2}">${pager.pageNum+2}</a></li> `;
      }
      $('ol.pager').html(html);
    },
    error: function(){
      alert('异步请求商品列表出错！请检查响应消息');
    }
  });
}

/**功能点3：页面加载完后，异步请求产品列表**/
$(function(){
  //发起异步GET请求，获取产品列表，重建分页条     
  loadProduct(1);
});

/**功能点4：为分页条中超链接绑定监听，实现异步分页请求**/
$('ol.pager').on('click', 'li a', function(e){
  e.preventDefault();
  var pno = $(this).attr('href');//要分页显示的页号
  //发起异步GET请求，获取产品列表，重建分页条 
  loadProduct(pno);
});


/**功能点5：为每个商品下面的“添加到购物车”绑定监听——事件代理**/
$('#plist').on('click','a.addcart', function(e){
  e.preventDefault();
  var pid = $(this).attr('href');
  //把当前登录用户编号+商品编号提交给服务器，执行购物车条目添加
  $.ajax({
    type: 'POST',  
    url: 'data/5_cart_detail_add.php',
    data: {'uid': loginUid, 'pid': pid},
    success: function(data){
      if(data.code<0){
        alert('添加失败！错误原因：'+data.msg);
      }else {
        alert('添加成功！该商品已购买：'+data.count);
      }
    },
    error: function(){
      alert('添加购物车商品出错！请检查响应消息！');
    }
  });
});

/**功能点6：为“去购物车结算”绑定事件监听**/
//下面的做法错误！异步请求来的页头中的内容都是后添加到DOM上！
/*$('#settle_up').click(function(){
  alert(999999);
});*/
$(document.body).on('click', '#settle_up', function(){
  //把当前登录用户名和编号保存入Cookie
  document.cookie = 'loginUname='+loginUname;
  document.cookie = 'loginUid='+loginUid;
  //跳转到购物车详情页面
  location.href = 'shoppingcart.html';
});
