function GoTop($ct) {
  this.$ct = $ct;
  this.$target = $('<a class="goTop-btn">返回顶部</a>');
}
GoTop.prototype.creatNode = function() {
  this.$target.appendTo(this.$ct);
  this.$target.hide()
}
GoTop.prototype.bindEvent = function() {
  var _this = this;
  $(window).on('scroll',function() {
    if ($(window).scrollTop() < 100) {
      _this.$target.hide();
    }else {
      _this.$target.show();
    }
  });
  this.$target.on('click',function() {
    $(window).scrollTop(0);
  });
}
var GoTop1 = new GoTop($('body'));
GoTop1.creatNode();
GoTop1.bindEvent();