$(function(){
	$(".app_q").mouseover(function(){
		$(".app1").removeClass("app_ewm2").addClass("app_ewm");	
		$(".app2").removeClass("app_ewm2").addClass("app_ewm");		
		$(".app_QR").css("display","block");
	});
	$(".app_q").mouseout(function(){
		$(".app1").removeClass("app_ewm").addClass("app_ewm2");
		$(".app2").removeClass("app_ewm").addClass("app_ewm2");
		
		$(".app_QR").css("display","none");
	});
  
  var size=$(".lb li").size()
  console.log(size)
  var i = 0;
  var timer = setInterval(move,3000);
  function move(){
  		i++;
  		if (i == size) {
                i = 0;
           }
            $(".lb li").eq(i).fadeIn(500).siblings().fadeOut(500);
            $(".lb_jy li").eq(i).addClass("lb_jy_color").siblings().removeClass();
           
           	$(".lb_jy li").mouseover(function(){
           		$(this).addClass("lb_jy_color").siblings().removeClass();
           		var index = $(this).index();
 				i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
 				//$(".pic li").eq(index).show().siblings().hide();
 				$(".lb li").eq(index).fadeIn(500).siblings().fadeOut(500);
           	})
  	};
  		
  		
  	$(".tp_cb_a").hover(function(){
  	$(this).find("img").animate({
  		"opacity":1
  	},200)
  	},function(){
  		$(this).find("img").animate({
  			"opacity":.7
  		},200)
  	});
})
