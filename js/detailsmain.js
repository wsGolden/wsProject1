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
		//放大镜
				//获取大盒子
		var oDiv = document.getElementById("pic_box")
		//获取小图
		var oSmallPic=byClassName(oDiv,"small_pic")[0];
		//获取遮罩层
		var Mark=byClassName(oSmallPic,"mark")[0];
		//获取滑块
		var oFloat=byClassName(oSmallPic,"float_layer")[0];
		//获取大图盒子
		var oBigPic=byClassName(document,"big_pic")[0];
		//获取大图
		var oBigImg=oBigPic.getElementsByTagName("img")[0];
		//获取class兼容
		//鼠标移入
		Mark.onmouseenter=function(){
			oFloat.style.display="block"
			oBigPic.style.display="block"
		}
		Mark.onmouseleave=function(){
			oFloat.style.display="none"
			oBigPic.style.display="none"
		}
		//鼠标跟随
		Mark.onmousemove=function(evt){
			var e=evt||window.event;
			var left=e.offsetX-oFloat.offsetWidth/2;
			var top=e.offsetY-oFloat.offsetHeight/2;
			//设置边界
			if(left<=0){
				left=0
			}
			else if(left>=Mark.offsetWidth-oFloat.offsetWidth){
				left=Mark.offsetWidth-oFloat.offsetWidth
			}
			if(top<=0){
				top=0
			}
			else if(top>=Mark.offsetHeight-oFloat.offsetHeight){
				top=Mark.offsetHeight-oFloat.offsetHeight
			}
			oFloat.style.left=left+"px";
			oFloat.style.top=top+"px";
			//计算比例
			var pX=left/(Mark.offsetWidth-oFloat.offsetWidth)
			var pY=top/(Mark.offsetHeight-oFloat.offsetHeight);
			//计算大图位置
			oBigImg.style.left=-pX*(oBigImg.offsetWidth-oBigPic.offsetWidth)+"px"
			oBigImg.style.top=-pY*(oBigImg.offsetHeight-oBigPic.offsetHeight)+"px"
		
		}
		
//		获取类名兼容
		function byClassName(obj,className){
			if(obj.getElementsByClassName){
				return obj.getElementsByClassName(className)
			}
			else{
				var arr=[];
				var eler=document.getElementsByTagName("*")
				for(var i=0;i<eler.length;i++){
					if(eler[i].className==className()){
						arr.push(eler[i])
					}
				}
				return arr;
			}
		}
		//商城评分
		//获取页面元素
				const oUl = document.getElementById("ul1");
				const oLis = oUl.getElementsByTagName("li");
				
				
				let onOff = false; //是否点击过
				let nowIndex = -1; //点过的下标 
				//给li添加移入事件
				for(let i = 0;i < oLis.length;i ++){
					oLis[i].index = i; //记录下标 
					oLis[i].onmouseenter = function(){
						if(onOff){
							if(this.index >= nowIndex){
								for(let i = 0;i < oLis.length;i ++){
									oLis[i].style.background = "url(../detailstimg/star.gif) no-repeat 0 0";
								}
								for(let i = 0;i <= this.index;i ++){
									oLis[i].style.background = "url(../detailstimg/star.gif) no-repeat 0 -28px";
								}
							}
						}else{
							//没点过
							//将所有的星星变为灰色 
							for(let i = 0;i < oLis.length;i ++){
								oLis[i].style.background = "url(../detailstimg/star.gif) no-repeat 0 0";
							}
							for(let i = 0;i <= this.index;i ++){
								oLis[i].style.background = "url(../detailstimg/star.gif) no-repeat 0 -28px";
							}
						}
					}
					oLis[i].onclick = function(){
						nowIndex = this.index;
						onOff = true;
					}
				}
				
				//购买数量
				$(".increase").click(function(){
						$("#num").val(parseInt($("#num").val()) + 1)
					});
					$(".decrease").click(function(){
						if(parseInt($("#num").val()) == 0){
							$("#num").val(0)
						}else{
							$("#num").val(parseInt($("#num").val())- 1)
						}
				})
					
					//获取商品
						//获取商品
			$.getJSON("../js/details.json",function(data){
				$(data).each(function(index,value){
					var oDiv=document.getElementById("main_right")
					
					let img = new Image();
					img.src=value.str
					oDiv.appendChild(img)
				

				})
		})
	 
	})

})