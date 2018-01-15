//设置配置文件（配置依赖模块的路径）
require.config({
	paths:{
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie"
		
	}
})
//执行代码
require(["jquery","cookie"],function($,cookie){
	//代码
	
	$(function(){	
		//验证码
			function ranCode(){
				var arr = [0,1,2,3,4,5,6,7,8,9]
				var str = "";
				for(var i = 0; i < 4;i ++){
					str += arr[Math.round(Math.random() * 9)]
					
				}
				return str
			}
			$(".show_code").html(ranCode())
			$(".show_code").click(function(){
				$(this).html(ranCode())
			})
	
			
			$("#btn3").click(function(){
				if($("#userName1").val() == $.cookie("the_user")){
					if($("#userKey1").val() == $.cookie("the_password")){
						if($("#code").val() == $(".show_code").html()){
							window.location ="../index.html";
						}else{
							$("#yzmcw").css("display","block")
						}
					}
					else{
						alert("密码错误")
					}
				}
				else{
					alert("用户名不存在")
				}
			})
			//跳转注册
			$(".zc").click(function(){
				window.location="../html/register.html"
			})
	})	
})