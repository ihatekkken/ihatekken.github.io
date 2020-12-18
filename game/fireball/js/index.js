/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
var blocks = 10;
var paddleWidth = 125;
var paddleHeight = 8;
var ballSize = 28;
var speed = 3;

/*for (i=1;i<=blocks;i++) {
  $('body').append('<div class="block"></div>');
}*/

$('body').append('<div class="ball" style="width:'+ballSize+'px;height:'+ballSize+'px;"></div><div class="paddle" style="width:'+paddleWidth+'px;height:'+paddleHeight+'px;"></div>');

/* CHANGE HUE */
setInterval(function() {$('.ball').css('background','hsla('+H+',100%,70%,1)');},40);
var H = 0;
setInterval(function() {
  if(H <= 360) {H++;}
  else {H = 0;}
},20);

/* PADDLE INTERACTION */
$(document).bind('mouseenter touchstart',function(e) {
  e.preventDefault();
  $(this).bind('mousemove touchmove',function(e) {
    mouseX = e.originalEvent.pageX;
    $('.paddle').css('left',mouseX-(paddleWidth/2)+'px');
  });
});
$(document).bind('mouseleave touchend',function(e) {
  $(document).unbind('mousemove touchmove');
});

var ballX = 0;
var ballY = 0;
var moveX = speed;
var moveY = speed;

setInterval(function() {
  var paddleX = Math.round($('.paddle').position().left);
  var paddleY = Math.round($('.paddle').position().top);
  var height = $(document).height();
  var width = $(document).width();
  
  ballX = ballX+(moveX);
  if (ballX >= width-ballSize) {moveX = -speed;}
  else if (ballX <= 0) {moveX = +speed;}
  
  ballY = ballY+(moveY);
  if (ballY >= height-ballSize) {moveY = -speed;}
  else if (ballY <= 0) {moveY = +speed;}
  
  if (moveY > 0 && ballY >= paddleY-ballSize && ballY <= paddleY+paddleHeight) {
    if (ballX >= paddleX-ballSize && ballX <= paddleX+paddleWidth) {
      moveY = -speed;
      $('.paddle').addClass('wave').css({
        'color':'hsla('+H+',100%,70%,1)',
        'border':'2px solid hsla('+H+',100%,70%,1)'
      });
      setTimeout(function() {$('.wave').removeClass('wave');},400);
    }
  }
  
  $('.ball').css({
    '-webkit-transform':'translate3D('+ballX+'px,'+ballY+'px,0)',
    '-moz-transform':'translate3D('+ballX+'px,'+ballY+'px,0)'
  });   
  
  $('.block').each(function(){
    var blockWidth = $(this).width();
    var blockHeight = $(this).height();
    var blockX = Math.round($(this).position().left);
    var blockY = Math.round($(this).position().top);
    
    if (moveY < 0 && ballY >= blockY-ballSize && ballY <= blockY+blockHeight) {
      if (ballX >= blockX-ballSize && ballX <= blockX+blockWidth) {
        moveY = +speed;
        $(this).addClass('wave').css('color','hsla('+H+',100%,70%,1)').delay(400).fadeOut(100);
      }
    }
  });
},1);

setInterval(function () {
  var floatTypes = Array('floatOne','floatTwo','floatThree','floatFour','floatFive');
  var floatType = floatTypes[Math.floor(Math.random()*floatTypes.length)];
  $('body').append('<div class="tail" style="width:'+ballSize+'px;height:'+ballSize+'px;left:'+ballX+'px;top:'+ballY+'px;-webkit-animation:'+floatType+' .9s 1;-moz-animation:'+floatType+' .9s 1;box-shadow:inset 0 0 0 2px hsla('+H+',100%,70%,1);background:hsla('+H+',100%,70%,1);"></div>');
  
  $('.tail').each(function() {
    var div = $(this);
    setTimeout(function() {$(div).remove();},800);
  });
},20);console.log("\u002f\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u000d\u000a\u0020\u002a\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u0009\u0009\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0020\u0020\u0020\u0020\u0020\u0020\u4ee3\u7801\u5e93\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u0077\u0077\u002e\u0064\u006d\u0061\u006b\u0075\u002e\u0063\u006f\u006d\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0009\u0009\u0020\u0020\u52aa\u529b\u521b\u5efa\u5b8c\u5584\u3001\u6301\u7eed\u66f4\u65b0\u63d2\u4ef6\u4ee5\u53ca\u6a21\u677f\u0009\u0009\u0009\u002a\u000d\u000a\u0020\u002a\u0020\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u0009\u002a\u000d\u000a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002a\u002f");