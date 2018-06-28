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
