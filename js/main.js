//设置配置文件（配置依赖模块的路径）
require.config({
	paths:{
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"swiper" : "swiper-3.4.2.jquery.min",
		"zepto"  :"zepto.min"
	}
})
//执行代码
require(["jquery","cookie","swiper","zepto"],function($,cookie,swiper,zepto){
	//代码
	
	$(function(){		
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
		//轮播图
		$(document).ready(function () {
		   document.querySelector("html").style.fontSize = document.documentElement.clientWidth/2380*30+"px";
		    var mySwiper = new Swiper ('.swiper-container', {
		
		        direction: 'horizontal',  //轮播方向
		
		        autoplay:3000,  //自动轮播
		
		        loop: true,   //循环
		
		        autoplayDisableOnInteraction : false  //用户操作后不停止
		
		    });
		
		});
		//商品切换
		var $uli = $("#tab-left #tab-nav a");
		var $oli = $("#tab-left #tab-case .se");
		$oli.addClass('hide');	 $oli.eq(0).removeClass().addClass('show');
			$uli.addClass('normal');
			$uli.eq(0).removeClass().addClass('hover')
			$uli.mouseover(function(){
				var $index = $(this).index()
				$(this).removeClass().addClass("hover").siblings().removeClass().addClass("normal")
				$oli.eq($index).removeClass().addClass("show").siblings().removeClass().addClass("hide")
			})
		
		//右侧栏
		var oYcl = document.getElementById("ycl")
		oYcl.style.height=document.documentElement.clientHeight+"px"
		
		//跳转list页
		$(".tolist").click(function(){
			window.location="html/list.html"
		})
	})
	
})
