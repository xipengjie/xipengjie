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

