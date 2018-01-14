define(function(){
	
	new Slider("slide1");
//ES5
function Slider(id){
	//实例属性
	this.ele = Tools.$id(id);
	this.ullis = Tools.$tagName(Tools.$tagName(Tools.$id(id),"ul")[0],"li");
	this.num = this.ullis.length;
	this.ollis = this.createEle();
	this.indexA = 0;
	this.init();
	this.addEvent();
	this.timer = null;
	this.autoPlay();
}
Slider.prototype.createEle = function(){
	let ol = Tools.$create("ol");
	let arrLis = [];
	for(let i = 0;i < this.num;i ++){
		let li = Tools.$create("li");
		ol.appendChild(li);
		arrLis.push(li);
	}
	this.ele.appendChild(ol);
	return arrLis;
}
Slider.prototype.init = function(){
	for(let i = 0;i < this.num;i ++){
		this.ullis[i].style.display = "none";
		this.ollis[i].style.backgroundColor = "yellow";
	}
	this.ullis[this.indexA].style.display = "block";
	this.ollis[this.indexA].style.backgroundColor = "green";
	this.div.innerHTML = this.ullis[this.indexA].firstChild.firstChild.alt;
}
Slider.prototype.addEvent = function(){
	for(let i = 0;i < this.num;i ++){
		this.ollis[i].index = i;
		let that = this;
		this.ollis[i].onmouseenter = function(){
			that.indexA = this.index;
			that.init();
		}
	}
}
Slider.prototype.autoPlay = function(){
	this.timer = setInterval(()=>{
		this.indexA ++;
		if(this.indexA > this.num-1){
			this.indexA = 0;
		}
		this.init();
	},3000);
	this.ele.onmouseenter = function(){
		clearInterval(this.timer);
	}.bind(this);
	this.ele.onmouseleave = function(){
		this.autoPlay();
	}.bind(this);
}
})