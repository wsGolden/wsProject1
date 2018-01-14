////ES5
//function Tools(){
//}
//Tools.prototype.$id = function(id){
//	return document.getElementById(id);
//}
//Tools.prototype.$tagName = function(target,tagName){
//	if(typeof target == "string" && this.$id(target)){
//		return this.$id(target).getElementsByTagName(tagName);
//	}else if(typeof target == "object"){
//		return target.getElementsByTagName(tagName);
//	}
//}
//Tools.prototype.$create = function(tagName){
//	return document.createElement(tagName);
//}
////ES6
//class Tools{
//	constructor(){}
//	$id(id){
//		return document.getElementById(id);
//	}
//	$tagName(target,tagName){
//		if(typeof target == "string" && this.$id(target)){
//			return this.$id(target).getElementsByTagName(tagName);
//		}else if(typeof target == "object"){
//			return target.getElementsByTagName(tagName);
//		}
//	}
//	$create(tagName){
//		return document.createElement(tagName);
//	}
//}
//单例模式
define(function(){
	

	var Tools = {
		$id : function(id){
			return document.getElementById(id);
		},
		$tagName : function(target,tagName){
			if(typeof target == "string" && this.$id(target)){
				return this.$id(target).getElementsByTagName(tagName);
			}else if(typeof target == "object"){
				return target.getElementsByTagName(tagName);
			}
		},
		$create : function(tagName){
			return document.createElement(tagName);
		}
	}
})