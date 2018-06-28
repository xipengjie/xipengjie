$(function(){
	// console.log($.cookie("username"))

	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",
		{userID:$.cookie("username")},function(data){
					// console.log(data);
					var str = "";
					var str2 = "";
				for (var i = 0; i < data.length; i++) {
					// console.log(data[i].goodsListImg);
					
					str += "<tr class='"+data[i].goodsID+"'><td class='cart_r0'><input type='checkbox' class='checkbox_c' checked='checkbox'></td><td class='cart_r1 zd_t2'><a href='#' ><img src="+data[i].goodsListImg+" ></a></td><td class='zd_t3'><a href='detail.html?id="+data[i].goodsID+"' >"+data[i].goodsName+"</a></td><td class='cart_r3 zd_t4'>￥<span>"+data[i].price+"</span></td><td class='zd_t5'>-</td><td class='cart_r4'><div><span class='cart_jia'>+</span><input type='text' value='"+data[i].number+"' id='cart_sl'><span class='cart_jian'>-</span></div></td><td class='cart_r5 zd_t7' ><a href='#'>删除</a></td><td class='cart_r6'></td></tr>";
					str2 = "";
				}; 
				$(".cart_table tbody").html(str);
				
				$("#checkbox").on("click",function(){
					$(".checkbox_c").prop("checked",$(this).prop("checked"));
					num();
				});
				$(".checkbox_c").click(function(){
					num();
				if ($(".checkbox_c:checked").length==$(".checkbox_c").length) {
					$("#checkbox").prop("checked",true);
					
				}else {
					$("#checkbox").prop("checked",false);
					
				};
			});
				num();
				function num(){
					  var num = 0;
					  var num2 = 0;
					for(var j = 0;j<$(".cart_table>tbody>tr").length;j++){
						if ($(".checkbox_c").eq(j).prop("checked")) {
							
							num2 += Number($("tr").eq(j).find('#cart_sl').val());
							num+= parseInt(Number($("tr").eq(j).find('.zd_t4').find("span").html())*Number($("tr").eq(j).find('#cart_sl').val())); 
						}
						
					}
					
					// console.log(num2);
					$(".zjjg").text(num);
					$(".zjsl").html(num2);
					// console.log(num)
				};
				
				$(".cart_jia").on("click",function(){
					var dom = $(this).next('#cart_sl');
					var value = dom.val();
					value = parseInt(value,10);
					value += 1;
					dom.val(value)
					// console.log(value)
					num();
					// console.log(dom)
					var goodsid3 = $(this).parent().parent().parent().attr("class");
					// console.log(goodsid2);
					var num5 = value;
					// console.log(num5);
					$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsid3,number:num5},function(data){
						console.log(data)
					})
				});
				$(".cart_jian").on("click",function(){
					var dom = $(this).prev('#cart_sl');
					var value = dom.val();
					value = parseInt(value,10);
					if (value>0) {
						value -= 1;
						dom.val(value);
						num();
					};
					var goodsid2 = $(this).parent().parent().parent().attr("class");
					console.log(goodsid2);
					var num4 = value;
					$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsid2,number:num4},function(data){
						console.log(data)
					})
					
					// console.log(value)
				});

				$(".zd_t7>a").on("click",function(){
					var goodsid = $(this).parent().parent().attr("class");
					$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsid,number:0},function(data){
						console.log(data);
					});
					$(this).parent().parent().css("display","none");
				});
			 // console.log(data);

		});

})
$(function(){
		var goodsid = location.search.split("=")[1];
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
			var str = "<img src="+data[0].goodsListImg+" >";
			var str6= "<img src="+data[0].goodsListImg+" >";
			$(".detail_img").html(str6);
			$("#right").html(str);
			var str1 = "<p class='detail_p'>"+data[0].goodsName+"</p>";
			$(".detail_title").html(str1);
			var str2 = "<p class='detail_price'><span>活动价￥</span>"+data[0].price+"</p>";
			$(".detail_price_box").html(str2);
			var str3 = "<input type='button' class='detail_btn2' value='立即购买'>"+"<input type='button' class='detail_btn' value='加入购物车'>";
			$("#detail_right>form").html(str3)
			$(".detail_btn").click(function(){
				$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
					console.log(data);
					if(data==0){
						alert("添加失败");
					}
					if(data == 1){
						alert("添加成功");
					}
				})
			})
		});
	});
/*left2.onmouseover = function(){
        right2.style.display = "block";
        zoom.style.display = "block";
    }*/
    /*$("#detail_left").on("mouseover",function(){
    	$("#right").css("display","block");
    	$("#zoom").css("display","block");
    	$(this).on("mouseout",function(){
    		$("#right").css("display","none");
    		$("#zoom").css("display","none");
    	})
    });*/

  /*var oBox = document.getElementById("detail_left"),
		    oBox1 = document.getElementsByClassName("detail_img")[0],
		    oZoom = document.getElementById("zoom"),
		    oBox2 = document.getElementsByClassName("right")[0],

		//oImg = document.getElementsByClassName("zoom_img")[0];

		 oImg = oBox2.children[0];
		//console.log(oBox1,oBox2);
		oBox1.onmouseover = function () {
			oZoom.style.display = "block";
			oBox2.style.display = "block";
		};
		oBox1.onmousemove = function (e) {

			var evt = e || event;
			var x = evt.pageX - oBox.offsetLeft;
			var y = evt.pageY - oBox.offsetTop;

			var _left = x - oZoom.offsetWidth / 2;
			var _top = y - oZoom.offsetHeight / 2;
			if (_left <= 0) {
				_left = 0;
			}
			if (_top <= 0) {
				_top = 0;
			}
			if (_left >= oBox1.offsetWidth - oZoom.offsetWidth) {
				_left = oBox1.offsetWidth - oZoom.offsetWidth;
			}
			if (_top >= oBox1.offsetHeight - oZoom.offsetHeight) {

				_top = oBox1.offsetHeight - oZoom.offsetHeight;
			}
			oZoom.style.left = _left + "px";
			oZoom.style.top = _top + "px";

			oImg.style.left = -oZoom.offsetLeft / oBox1.offsetWidth * oImg.offsetWidth + "px";
			oImg.style.top = -oZoom.offsetTop / oBox1.offsetHeight * oImg.offsetHeight + "px";
		};

		oBox1.onmouseout = function () {
			oZoom.style.display = "none";
			oBox2.style.display = "none";
		};
*/


/*var detail_left = document.getElementById("detail_left");
    var detail_img = document.getElementById("detail_img");
    var right2 = document.getElementById("right");
    var zoom = document.getElementById("zoom");
    var right_2 = right2.children[0];
    var left_2 = detail_img.children[0];
	console.log(left_2);
    detail_img.onmouseover = function(){
        right2.style.display = "block";
        zoom.style.display = "block";
    }
    detail_img.onmouseout = function(){
        right2.style.display = "none";
        zoom.style.display = "none";
    }
    detail_img.onmousemove = function (e){
        var evt= e || event;
        var x = evt.clientX - box.offsetLeft;
        var y = evt.clientY - box.offsetTop;

        var _left = x - zoom.offsetWidth/2;
        var _top = y - zoom.offsetHeight/2;

        if(_left <= 0){
            _left = 0;
        }
        if(_left >= detail_img.offsetWidth - zoom.offsetWidth){
			_left = detail_img.offsetWidth - zoom.offsetWidth;
		}
        if(_top <= 0){
            _top = 0;
        }
        if(_top >= detail_img.offsetHeight - zoom.offsetHeight){
			_top = detail_img.offsetHeight - zoom.offsetHeight;
		}
        zoom.style.left = _left + "px";
		zoom.style.top = _top + "px";

        right_2.style.left = -zoom.offsetLeft/detail_img.offsetWidth*right_2.offsetWidth + "px";
		right_2.style.top = -zoom.offsetTop/detail_img.offsetHeight*right_2.offsetHeight + "px";
    }
*/

//商品详情放大镜-------------------------------获取DOM元素需要放到回调函数里面


		

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

$(function(){
		$(".nav_list_all").on("mouseover",function(){
			$(this).find(".nav_list_sub").css("display","block");
			$(this).on("mouseout",function(){
				$(this).find(".nav_list_sub").css("display","none")
			})
		});
		var classid = location.search.split("=")[1];
		
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
			var str = "";
			for(var i = 0;i<data.length;i++){
				str += "<li class='shangpin'><a href='detail.html?id="+data[i].goodsID+"'><img src='"+data[i].goodsListImg+"'/><span>"+data[i].goodsName+"</span><strong>￥"+data[i].price+"</strong><button>加入购物车</button>"
			};
			$("#product-list").html(str)
		})
});


$(function(){
	$(".logging_right_btn").on("click",function(){
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:$(".logging_right_yx_a").val(),password:$(".logging_right_psw_a").val()},function(data){
			
			data = JSON.parse(data);
			console.log(data);
			if(data == 0){
				$(".logging_right_yx").append('<span class="i">用户名不存在</span>');
			}else if(data == 2){
				$(".logging_right_psw").append('<span class="i">密码错误</span>');
			}else{
				$(".logging_right_psw span").replaceWith("");
				$.cookie("username",data.userID,{expires:7,path:"/"});
				location.href = "index.html";
			};
		});
	});
	$(".logging_right_yx input").on("blur",function(){
		$(".logging_right_yx").removeClass("f");
	});
	 $(".logging_right_yx input").on("focus",function(){
     	$(".logging_right_yx").addClass("f")
     });
     $(".logging_right_psw input").on("blur",function(){
		$(".logging_right_psw").removeClass("f");
	});
	 $(".logging_right_psw input").on("focus",function(){
     	$(".logging_right_psw").addClass("f")
     });
})

$(function(){
	
	
	$(".login_sjh input").on("blur",function(){
		$(".login_sjh").removeClass("f")
		var sjh = $(this).val();
		var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
		
    	
       if (!myreg.test(sjh)) {
            $(".login_sjh").append('<div class="sjh_zz"><em></em>请输入正确的手机号</div>');
            $(".login_sjh strong").replaceWith('<div class="sjh_zz"><em></em>请输入正确的手机号</div>');
            $(".login_sjh").removeClass("j")
        } 
        else{
        	$(".login_sjh div").replaceWith('<strong class="sjh_zz2"></strong>');
        	$(".login_sjh").append('<strong class="sjh_zz2"></strong>');
        	$(".login_sjh").addClass("j")
        }
	});
	
     $(".login_sjh input").on("focus",function(){
     	$(".login_sjh").addClass("f")
     });
     
     $(".login_szmm input").on("blur",function(){
     	$(".login_szmm").removeClass("f");
     	var szmm =$(this).val();
     	var mima = /^[0-9A-Za-z]{6,20}$/;
     	
     	if (!mima.test(szmm)) {
            $(".login_szmm").append('<div class="sjh_zz"><em></em>请输入正确的密码格式</div>');
            $(".login_szmm strong").replaceWith('<div class="sjh_zz"><em></em>请输入正确的密码格式</div>');
            $(".login_szmm").removeClass("j")
            
        } 
        else{
        	$(".login_szmm div").replaceWith('<strong class="sjh_zz2"></strong>');
        	$(".login_szmm").append('<strong class="sjh_zz2"></strong>');
        	$(".login_szmm").addClass("j")
        	
        }
     });
     $(".login_szmm input").on("focus",function(){
     	$(".login_szmm").addClass("f")
     });
     $(".login_qrmm input").on("focus",function(){
     	$(".login_qrmm").addClass("f")
     });
     $(".login_qrmm input").on("blur",function(){
     	$(".login_qrmm").removeClass("f");
     	var qrmm = $(this).val();
     	var szmm = $(".login_szmm input").val();
     	
     	if(qrmm != szmm){
     		$(".login_qrmm").append('<div class="sjh_zz"><em></em>请输入相同的密码</div>');
            $(".login_qrmm strong").replaceWith('<div class="sjh_zz"><em></em>请输入相同的密码</div>');
     	}
     	else{
     		 $(".login_qrmm div").replaceWith('<strong class="sjh_zz2"></strong>');
        	$(".login_qrmm").append('<strong class="sjh_zz2"></strong>');
     	}
     });
     
     
     
    
     
    
     $(".login_btn").on("click",function(){
     	 $.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:$(".login_sjh input").val(),password:$(".login_szmm input").val()},function(data){
     	 	data = JSON.parse(data);
	     	if(data == 0){
	     		$(".login_sjh").append("<span class='login_sjh_q'>手机号已注册</span>");
	     	}else  if(data == 1){
	     		location.href = "login.html";
	     	}else{
				alert("注册失败，请重试");
			};
     	});
    
     })
     
})
