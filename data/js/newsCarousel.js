$(function () {
  var n = 0;

  function run() {
    n++;
    if (n > 5) n = 0;
    $(".rightPic").animate({top: -26 * n}, 1000);
  }
  var timer = setInterval(run, 2000);

  $(".rightPic li").hover(function () {
    clearInterval(timer);
  }, function () {
    timer = setInterval(run, 2000)
  })
})
