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
		//
			
	})

})