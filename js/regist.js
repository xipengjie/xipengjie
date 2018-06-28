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
