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
		//购物车
		if($.cookie("goods")){
		$.ajax("../js/list.json")
			.then(function(data){
				var a = $.cookie("goods");
//				console.log(a)			
					html = "";
					html+=`
						<div id="goods">
							<li style="width: 110px;">
								<input type="checkbox" />
							</li>
							<li style="width: 460px;">
								<div class="goodsimg">
									<img src="../listimg/${data[a].src}" />
								</div>
								<span>
									<p>${data[a].name}</p>
									
								</span>
							</li>
							<li style="width: 110px;">
								<span class="price">${data[a].price}</span>
							</li>
							<li style="width: 240px;">
								<div id="num">
									<b id="num_left">-</b>
									<input type="text" value="1" id="good"/ >
									<b id="num_right">+</b>
								</div>
								<p style="color: #D70057; line-height: 20px;font-size: 12px;">库存仅剩1件</p>
							</li>
							<li style="width: 110px;color: #d70057;">
								<span class="price">${data[a].price}</span>
							</li>
							<li style="width: 110px;">
								
									
								<span class="del">	
									删除
								</span>
							</li>
						</div>
					`
					$(html).appendTo("#cart");
	$(".goodsAll").html($("#goods").length)
					$(".money").html(data[a].price)
//购买数量
				$("#num_right").click(function(){
						$("#good").val(parseInt($("#good").val()) + 1)
						$("#good").parent().parent().next().children().html($("#good").val()*$("#good").parent().parent().prev().children().html())	
					$(".goodsAll").html($("#goods").length)
					$(".money").html($("#good").val()*$("#good").parent().parent().prev().children().html())
				});
					$("#num_left").click(function(){
						if(parseInt($("#good").val()) == 0){
							$("#good").val(0)
						}else{
							$("#good").val(parseInt($("#good").val())- 1)
						}
						$("#good").parent().parent().next().children().html($("#good").val()*$("#good").parent().parent().prev().children().html())
						$(".goodsAll").html($("#goods").length)
					$(".money").html($("#good").val()*$("#good").parent().parent().prev().children().html())
					})
					
					
					$(".del").click(function(){
						$("#goods").remove()
						$.cookie("goods").remove()
					})
			})
		}
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