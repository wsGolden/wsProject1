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
			//精选分类菜单显示
			$(".title").mouseover(function(){
				$("#classes").css("display","block")
			})
			$(".title").mouseleave(function(){
				$("#classes").css("display","none")
			})
					//搜索框商品店铺切换
		var $sear=$("#searul");
		var $seardt=$("#searul dt");
		var oDt=document.getElementById("seardt")
		var $seara=$("#searul a")
		var $seardd=$("#searul dd")
		$sear.mouseover(function(){
			
			$seara.css({"display":"block"})
			$seardd.css({"display":"block","backgroundColor":"#fff"})
		})
		$sear.mouseleave(function(){
			
			$seara.css({"display":"none"})
			$seardd.css({"display":"none"})
		})
		$.each($seara,function(){
			$(this).mouseover(function(){
				$(this).css({"color":"#fff","backgroundColor":"#ffa500"})
			})
			$(this).mouseleave(function(){
				$(this).css({"color":"#000","backgroundColor":"#fff"})
			})
			$(this).click(function(){			
				oDt.innerHTML=this.innerHTML
				$seara.css({"display":"none"})
				$seardd.css({"display":"none"})
			})
		})
			//购物车显示消失
		var $cartcon=$("#cart-con");
		var $cartcon1=$("#cart-con1");
		$cartcon.mouseover(function(){
			$cartcon1.css("display","block")
			$cartcon.css("backgroundColor","#fff")
		})
		
		$cartcon1.mouseover(function(){
			$cartcon1.css("display","block")
			$cartcon.css("backgroundColor","#fff")
		})
		$cartcon1.mouseleave(function(){
			$cartcon1.css("display","none")
			$cartcon.css("backgroundColor","#fafafa")
			
		})
		$cartcon.mouseleave(function(){
			$cartcon1.css("display","none")
			$cartcon.css("backgroundColor","#fafafa")
		})
		//列表
		$("#files li:has(ul)").click(function(){
		if($(this).children("ul").is(":hidden")){
				$(this).find("em").html("-")
			} else {
				$(this).find("em").html("+")
			}
			$(this).children("ul").toggle("slow");
})
			//获取商品
		$.getJSON("../js/list.json",function(data){
				$(data).each(function(index,value){
					var oDiv=document.createElement("div")
					oDiv.className="goods-content"
					var oImg=document.createElement("img")
					var oDivbox=document.getElementById("goods")
					
					let img = new Image();
					var oA=document.createElement("a")
					oA.className="oA"
					oA.href="../html/details.html?id="+value.id;
					img.src="../listimg/"+value.src;
					oA.appendChild(img)
					oDiv.appendChild(oA)
					oDivbox.appendChild(oDiv)
										
					var oName=document.createElement("div")
					oName.className="goods-name"
					oName.innerHTML=value.name
					oDiv.appendChild(oName)
					
					
					var oPrice=document.createElement("div")
					oPrice.className="goods-price"
					oPrice.innerHTML=value.price
					oDiv.appendChild(oPrice)
					
					var oKc=document.createElement("div")
					oKc.className="goods-kc"
					oKc.innerHTML=value.kc
					oDiv.appendChild(oKc);

				})
		})
		//右侧栏
		var oYcl = document.getElementById("ycl")
		oYcl.style.height=document.documentElement.clientHeight+"px";
		//跳转注册页
		$(".zc").click(function(){
			window.location="register.html"
		})
		//跳转登录页
		$(".dl").click(function(){
			window.location="login.html"
		})
	 
	})
	
})
