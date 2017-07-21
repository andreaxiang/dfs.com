<?php
header('Content-Type: text/html;charset=UTF-8');
?>
<header id="top">
  <div id="top_box">
    <ul class="lf">
      <!--位置定位-->
      <i class="icon">&#xe604;</i>
      <a href="#">定位</a>
      <!--官网首页-->
      <a href="index.html">大丰收首页</a>
    </ul>
    <!--top列表文字-->
    <ul class="rt">
      <li id="welcome">您好，欢迎光临
        <a href="#" id="btLogin">[登录]</a>
        <a href="#" id="btSignUp">[免费注册]</a>
      </li>
      <li>
        <b></b><!--分割线条-->
        <a href="#">我的订单</a>
      </li>
      <li class="vip">
        <b></b><!--分割线条-->
        <a href="#"><i class="icon">&#xe609;</i>收藏大丰收</a>
      </li>
      <li class="bjd">
        <b></b><!--分割线条-->
        <a href="#"> <i class="icon">&#xee8f;</i>五谷官网</a>
      </li>
      <li class="phone">
        <b></b><!--分割线条-->
        <a href="#"> <i class="icon">&#xe6d5;</i>手机APP</a>
      </li>
      <li class="service">
        <b></b><!--分割线条-->
        <a href="#">商家入口</a>
        <!--弹出菜单-->
        <ul class="service_items">
          <li>帮助中心</li>
          <li>售后服务</li>
          <li>在线客服</li>
          <li>投诉中心</li>
          <li>客服邮箱</li>
        </ul>
      </li>
      <li class="service">
        <a href="#">网站导航</a>
        <!--弹出菜单-->
        <ul class="service_items">
          <li>帮助中心</li>
          <li>售后服务</li>
          <li>在线客服</li>
          <li>投诉中心</li>
          <li>客服邮箱</li>
        </ul>
      </li>
    </ul>
  </div>
</header>

<!--LOGO和搜索框! -->
<div id="top_main" class="clear">
  <a href="#" class="logo lf">
    <img src="img/logo1.jpg" alt="LOGO"/>
  </a>

  <div id="settle_up">
    <i class="icon">&#xe60a;</i>
    我的购物车<b></b>
  </div>
  <div id="search_box">
    <div class="search">
      <input type="text" id="txtSearch" class="text"/>
      <button>搜索</button>
    </div>
    <div class="hot_words">
      <span>热门搜索：</span> <a href="#">农家土鸡蛋</a> <a href="#">山东樱桃</a> <a href="#">小黄鱼</a>
      <a href="#">鲍鱼</a> <a href="#">四川山核桃</a> <a href="#">车厘子</a> <a href="#">陕西苹果</a><a href="#">芒果</a>
    </div>
  </div>
</div>

<!--主导航 -->
<nav id="nav" class="clear">
  <ul id="nav_items">
    <li><a href="index.html">首页</a></li>
    <li><a href="#">原产地</a></li>
    <li><a href="#">品牌街</a></li>
    <li class="active"><a href="product-list.html">生鲜超市</a></li>
    <li><a href="#">用户论坛</a></li>
  </ul>
  <span>客服热线：400-9677-168</span>
</nav>

