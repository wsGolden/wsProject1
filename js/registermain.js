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
		// 表单验证
		// 用户名
		// 点击
		$("form input").click(function(){
			$(this).attr("placeholder","");
			$(this).parent().css("border-color","green");
			
		})
		// 用户名   失焦 
		//
			var arrChecked = [false,false,false,false,false];
			var isChecked = true;
			$("#user").blur(function(){
				var reguser = /^[-a-z0-9\u4e00-\u9fa5]{6,20}$/i
		//		
				if($(this).val() == ""){
					$(this).attr("placeholder","请使用3-15个中、英文、数字及“-”符号");
					$(this).parent().css("border-color","#E6E6E6");
					arrChecked[0] = false;
				}else if(reguser.test($(this).val())){
					$(this).parent().css("border-color","#E6E6E6");
					arrChecked[0] = true;
				}else{
					arrChecked[0] = false;
					$(this).parent().find("em").css("display","block");
					$(this).parent().css("border-color","red")
					
				}
			})
		//  密码验证
			$("#passWord").blur(function(){
				var regpassWord = /^\w{6,20}$/
		//		[\u4e00-\u9fa5]
				if($(this).val() == ""){
					$(this).attr("placeholder","6-20个大小写英文字母、符号或数字");
					$(this).parent().css("border-color","#E6E6E6");
					arrChecked[1] = false;
				}else if(regpassWord.test($(this).val())){
					$(this).parent().css("border-color","#E6E6E6");
					$(this).parent().find("em").css("display","none");
					arrChecked[1] = true;
				}else{
					arrChecked[1] = false;
					$(this).parent().find("em").css("display","block");
					$(this).parent().css("border-color","red")
					
				}
			})
				
		   // 确认密码 
		$("#passAgain").blur(function(){
				var regpassAgain = /^\w{6,20}$/
		//		[\u4e00-\u9fa5]
				if($(this).val() == ""){
					$(this).attr("placeholder","请再次输入密码");
					$(this).parent().css("border-color","#E6E6E6");
					arrChecked[2] = false;
				}else if($(this).val() == $("#passWord").val()){
					$(this).parent().css("border-color","#E6E6E6");
					$(this).parent().find("em").css("display","none");
					arrChecked[2] = true;
				}else{
					arrChecked[2] = false;
					$(this).parent().find("em").css("display","block");
					$(this).parent().css("border-color","red")
					
				}
			})

		//邮箱
		$("#email").blur(function(){
				var regemail = /^.+((@126)|(@163)|(@qq))((\.com)|(\.cn))$/
		//		[\u4e00-\u9fa5]
				if($(this).val() == ""){
					$(this).attr("placeholder","输入常用邮箱作为验证及找回密码使用");
					$(this).parent().css("border-color","#E6E6E6");
					arrChecked[3] = false;
				}else if(regemail.test($(this).val())){
					$(this).parent().css("border-color","#E6E6E6");
					$(this).parent().find("em").css("display","none");
					arrChecked[3] = true;
				}else{
					arrChecked[3] = false;
					$(this).parent().find("em").css("display","block");
					$(this).parent().css("border-color","red")
					
				}
			})
		// 验证码
		function ranCode(){
			var arr = [0,1,2,3,4,5,6,7,8,9]
			var str = "";
			for(var i = 0; i < 4;i ++){
				str += arr[Math.round(Math.random() * 9)]
				
			}
			return str
		}
	$(".showCode").html(ranCode())
	$(".showCode").click(function(){
		$(this).html(ranCode())
	})

	$("#code").blur(function(){
	
			if($(this).val() == ""){
				$(this).attr("placeholder","输入验证码");
				$(this).parent().css("border-color","#E6E6E6");
				arrChecked[4] = false;
			}else if($(this).val() == $(".showCode").html()){
				$(this).parent().css("border-color","#E6E6E6");
				
				arrChecked[4] = true;
			}else{
				arrChecked[4] = false;
				$(this).parent().find("em").css("display","block");
				$(this).parent().css("border-color","red")
				
			}
		})

		var oBtn1 = document.getElementById("btn1")
		var oChecked = document.querySelector(".checked")
		$("#btn1").click(function(){
			
			
			if(arrChecked.indexOf(false) == -1){
				$.cookie("the_user",$('#user').val(),{"expires":7,"path":"/"});
			 	$.cookie("the_password",$('#passWord').val(),{"expires":7,"path":"/"});

			 	alert("注册成功")
			 	window.location = "../html/login.html"
			}else{
				alert("注册失败，请按规则填写注册信息")
			}
		})
		//跳转登录
		$(".dl").click(function(){
				window.location="../html/login.html"
			})

	})
})