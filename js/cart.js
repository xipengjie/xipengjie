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