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
  /*轮播图*/
  var size=$(".lb li").size();
  var i = 0;
  var timer = setInterval(move,2000);
  function move(){
  		i++;
  		if (i == size) {
                i = 0;
           }
            $(".lb li").eq(i).fadeIn(500).siblings().fadeOut(500);
            $(".lb_jy li").eq(i).addClass("lb_jy_color").siblings().removeClass();
           
           	$(".lb_jy li").mousemove(function(){
           		$(this).addClass("lb_jy_color").siblings().removeClass();
           		var index = $(this).index();
 				i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
 				//$(".pic li").eq(index).show().siblings().hide();
 				$(".lb li").eq(index).fadeIn(500).siblings().fadeOut(500);
           	});
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
  	
  	
  	
  	
  	$(".dztj_head_right").click(function(){
  		$(".dztj_box ul").removeClass().addClass("a");
  	});
  	$(".dztj_head_left").click(function(){
  		$(".dztj_box ul").removeClass().addClass("b");
  	});

	$(".du li").hover(function(){
		$(this).removeClass("de2").addClass("de");
	},function(){
		$(this).removeClass("de").addClass("de2");
	});
	$(".mt_left a").hover(function(){
		$(this).removeClass("de2").addClass("de");
	},function(){
		$(this).removeClass("de").addClass("de2");
	});
	$(window).scroll(function(){
		if($(window).scrollTop() >= 700){
			$("#home_top").css("display","block");
		}else{
			$("#home_top").css("display","none");
		}
	});
	$(".yc_nav_d").hover(function(){
		$(this).find(".yc_bg_js").css("background","#c40000");
		$(this).find(".yc_zt_js").css("color","white");
		$(this).find(".yc_dh_js").stop().animate({
			right:"30px",
			opacity:'1'
		},400).css("display","block");
	},function(){
		$(this).find(".yc_bg_js").css("background","#eaeaea");
		$(this).find(".yc_zt_js").css("color","#c40000");
		
		$(this).find(".yc_dh_js").stop().animate({
			right:"80px",
			opacity:'0'
		},400);
	});
	

	$("#seek_txt").on("input",function(){
		var val = $(this).val();
		var url = "https://suggest.taobao.com/sug?code=utf-8&q="+val+"&k=1&area=c2c&bucketid=18";
		var str = "";
		$.ajax(url,{
			type:"post",
			dataType:'jsonp',
			crossDomain:true,
			success:function(data){
				for(var k  = 0;k<data.result.length;k++){
					str += "<li><a href='#'>"+data.result[k][0]+"</a></li>"
				};
				$("#sousuo").html(str)
			}
		})
	});
	
	
		$.get("http://datainfo.duapp.com/shopdata/getclass.php?callback=?",function(data){
			
			var str1 = "";
			var str = "";
			var str2 = "";
			var data = JSON.parse(data);
			for(var j = 3;j<data.length;j++){
				str1 += "<li><a href='list.html?classID="+data[j].classID+"' class='nav_list_sub_a'>"+data[j].className+"</a><span>&#xe65f;</span><ul class='nav_list_sub_b'></ul></li>"
			};
			$(".nav_list_sub").html(str1);

			for(var k = 0;k<data.length;k++){
				str += "<li><a href='list.html?classID="+data[k].classID+"'>"+data[k].className+"</a></li>"
			};
			for(var l = data.length-1;l>0;l--){
				str2 += "<li><a href='list.html?classID="+data[l].classID+"'>"+data[l].className+"</a></li>"
			};
			$(".nav_list_sub_b:odd").html(str);
			$(".nav_list_sub_b:even").html(str2);
			$(".nav_list_sub li").on("mouseover",function(){
				// console.log($(this).find(".nav_list_sub_b:even"));
				console.log($(this).find(".nav_list_sub_b:odd"));
				$(this).find(".nav_list_sub_b:even").show().css("display","block");
			 	$(this).find(".nav_list_sub_b:odd").show().css("display","block");
			 	$(this).on("mouseout",function(){
			 		$(this).find(".nav_list_sub_b").hide().css("display","none")
			 	});
			 	

			});



			// $(".nav_list_sub").on("mouseover",function(){
			// 	$(this).find(".nav_list_sub_b:even").html(str).show().css("display","block");
			// 	$(this).find(".nav_list_sub_b:odd").html(str2).show().css("display","block");
			// 	$(this).on("mouseout",function(){
			// 		$(this).find(".nav_list_sub_b").hide().css("display","none")
			// 	})
			// });
		
		});
		
		$("#seek_txt2").on("input",function(){
		var val = $(this).val();
		var url = "https://suggest.taobao.com/sug?code=utf-8&q="+val+"&k=1&area=c2c&bucketid=18";
		var str = "";;
		$.ajax(url,{
			type:"post",
			dataType:'jsonp',
			crossDomain:true,
			success:function(data){
				for(var k  = 0;k<data.result.length;k++){
					str += "<li><a href='#'>"+data.result[k][0]+"</a></li>"
				};
				$("#sousuo2").html(str);
			}
		})
	});

})
