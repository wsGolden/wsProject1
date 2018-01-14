function ajax(url,fnWin,fnFaild){
//1.创建ajax对象
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//2.连接服务器
	xhr.open("GET",url,true);
	//3.发送请求
	xhr.send();
	//4.接收返回
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				if(typeof fnWin == "function"){
					fnWin(xhr.responseText)
				}
			}else{
				if(typeof fnFaild == "function"){
					fnFaild();
				}
			}
		}
	}
}