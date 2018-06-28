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


		
