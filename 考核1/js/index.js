//banner轮播
function play(){
	var list=document.getElementById("pic2").getElementsByTagName("li")
			var box=document.getElementById("banner")
			var Left=document.getElementById("left")
			var Right=document.getElementById("right")
			var Btn=document.getElementById("btn").getElementsByTagName("li")
			var i=0,f=0
			list[i].className="bl"
			Btn[f].className="active"
			while(f<Btn.length){
				Btn[f].index=f
				Btn[f].onclick=function(){
					i=this.index
					var f=0
					while(f<Btn.length){
						Btn[f].className=""
						list[f].className=""
						f++
					}
					this.className="active"
					list[this.index].className="bl"
				}
				f++
			}
			function play(){
				var e=i
				i<list.length-1?i++:i=0
				list[i].className="bl"
				list[e].className=""
				Btn[i].className="active"
				Btn[e].className=""
			
			}
			Right.onclick=play
			Left.onclick=function(){
				var e=i
				i>0?i--:i=list.length-1
				list[i].className="bl"
				list[e].className=""
				Btn[i].className="active"
				Btn[e].className=""
			}
			var time=setInterval(play,2000)
			box.onmouseover=function(){
				clearInterval(time)
			}
			box.onmouseout=function(){
			time=setInterval(play,2000)
			}			
}
play()



//自动播放选项卡
function play1(){
	   var oTab = document.getElementById('cus3_txt');
	   var oTab1=document.getElementById("cus3_bg");
		var aBtn = oTab.getElementsByTagName('li');
		var aDiv = document.getElementById("cus3_box");
		var aDiv1=aDiv.getElementsByTagName("ul")
		var iNum = 0;
		var timer = null;
		for(var i=0; i<aBtn.length; i++){
			aDiv1[0].style.display="block"
			aBtn[i].index=i;
			aBtn[i].onclick=function(){
				for(var i=0; i<aBtn.length; i++){
					aDiv1[i].style.display="none"
					aBtn[i].style.color="black"
					aBtn[i].style.borderBottom="none"
				}
				aDiv1[this.index].style.display="block"
				this.style.borderBottom="1px solid #ff0000"
				this.style.color="#ff0000"
			}
			
		};
		function paly2(){
			clearInterval(timer)	
		timer = setInterval(function(){//自动播放选项卡
		for(var i=0; i<aBtn.length; i++){
				aDiv1[i].style.display="none"
					aBtn[i].style.color="black"
					aBtn[i].style.borderBottom="none"
			}
			iNum++;
			if(iNum>=aBtn.length){
				iNum=0;	
			}
			iNum%=aBtn.length;
			
			aDiv1[iNum].style.display="block"
			aBtn[iNum].style.borderBottom="1px solid #ff0000"
			aBtn[iNum].style.color="#ff0000"
		},2000);
		}

		oTab1.onmouseover=function(){
			clearInterval(timer)	
		};
		oTab1.onmouseout=function(){
			paly2()
		}
	
}
play1()

//导航栏---------------选项卡
		function Tag(aa,bb){
			var b=document.getElementById(aa).getElementsByTagName("li")
			var a=document.getElementById(bb).getElementsByTagName("ul")
				var i=0;
			a[i].style.display="block"
				while(i<a.length){
					b[i].index=i
					b[i].onclick=function(){
						var i=0
						while(i<a.length){
						a[i].style.display="none"
						b[i].style.color="black"  
					i++
					}
					a[this.index].style.display="block"
						this.style.color="#ff0000"
					}
					i++
				}
				
		}
			Tag("nav_list","nav2")
//返回顶部
function back(){
	var oTop = document.getElementById("top");
	var oTop2 = document.getElementById("nav4");
			var oTop1 = 0;
			var timer=null;
			var off=true;
			window.onscroll=function(){
				oTop1 = document.documentElement.scrollTop || document.body.scrollTop;
				var nav3 = document.documentElement.scrollTop || document.body.scrollTop;
				if(oTop1>300 || nav3>188){
					oTop.style.display='block'
					oTop2.style.top="0"+'px'
					oTop2.style.transform="top 0.5+'s'"
				}else{
					oTop.style.display='none'
					oTop2.style.top="-80"+'px'
				};	
				
				if(!off){
					clearInterval(timer);	
				}
				off=false;	
			};
				
			oTop.onclick=function(){
				
				timer=setInterval(function(){
					var backTop = Math.floor(oTop1/4);
					if(backTop == 0){
						clearInterval(timer)
					}else{
						if(document.documentElement.scrollTop){
							document.documentElement.scrollTop-=backTop;
						}else{
							document.body.scrollTop-=backTop;	
						}
						//document.documentElement.scrollTop = document.body.scrollTop-=backTop;			
						off=true;
					}

				},30)
				
			}
}
back()


	//无缝滚动
function rolling(){
	var oImg = document.getElementById("images_box");
	var oImages=document.getElementById("images");
	var aLi=oImages.getElementsByTagName("li");
	var timer=null;
	var Num=3;
	oImages.innerHTML+=oImages.innerHTML;
	oImages.style.width=aLi[0].offsetWidth*aLi.length+'px';
	
	function autoPlay1(){
		timer=setInterval(function(){
			if(oImages.offsetLeft==-(oImages.offsetWidth/2)){
				oImages.style.left=0;
			}else if(oImages.offsetLeft>0){
				oImages.style.left=-(oImages.offsetWidth/2)+'px';
			}
			oImages.style.left=oImages.offsetLeft+Num+'px';
		},30)
	};
	autoPlay1();
	oImg .onmouseover=function(){
		clearInterval(timer);
	};
	oImg .onmouseout=function(){
		autoPlay1();
	}
	}
rolling();


//banner左侧菜单-----------面向对象
//function list(){
//	function Tab(json){
//		this.json=json
//		this.oMenu=document.getElementById(this.json['id']);
//		this.aBtns=document.getElementsByClassName('L1');
//		this.aMenuLists=document.getElementsByClassName('z_l1');
//	}
//	function Tab1(json){
//		this.json=json
//		this.oMenu=document.getElementById(this.json['id']);
//		this.aBtns=document.getElementsByClassName('shop');
//		this.aMenuLists=document.getElementsByClassName('memu2_box');
//	}
//	Tab1.prototype.init=function(){
//		var _This=this;
//		for(var i=0;i<this.aBtns.length; i++){
//		this.aBtns[i].index=i; 
//			this.aBtns[i][_This.json.ev]=function(){
//				_This.btn(this)
//			}
//		
//		}
//	}
//	Tab.prototype.init=function(){
//		var _This=this;
//		for(var i=0;i<this.aBtns.length; i++){
//		this.aBtns[i].index=i; 
//			this.aBtns[i][_This.json.ev]=function(){
//				_This.btn(this)
//				
//			}
//		
//		}
//	}
//		Tab.prototype.btn=function(This){
//			if(this.aMenuLists[This.index].style.display=="block"){
//				this.aMenuLists[This.index].style.display="none";
//			}else{
//				for(var i=0;i<this.aBtns.length; i++){
//					this.aMenuLists[i].style.display="none";
//				};
//				this.aMenuLists[This.index].style.display="block";
//			}
//			
//			
//		}
//		Tab1.prototype.btn=function(This){
//			if(this.aMenuLists[This.index].style.display=="block"){
//				this.aMenuLists[This.index].style.display="none";
//			}else{
//				for(var i=0;i<this.aBtns.length; i++){
//					this.aMenuLists[i].style.display="none";
//				};
//				this.aMenuLists[This.index].style.display="block";
//			}
//			
//			
//		}
//	 var memo= new Tab({	
//		id:'l_list',
//		ev:'onclick',
//	})
//	memo.init();
//	
//	var memo= new Tab1({	
//		id:'memu_list',
//		ev:'onclick'
//	})
//	memo.init();
//}
//
//list()

//购物车-----------冒泡事件
	function Btn1(obj1,obj2){
		var oShop=document.getElementById(obj1)
	var oDiv2=document.getElementById(obj2)
	var oicon=document.getElementById("icon")
	var shopImg=document.getElementById("shop_img")
	
	oShop.onclick = function(e){
   			oDiv2.style.display = "block";
   			oicon.style.display="block"
   			shopImg.style.display="none"
   			e = e || window.event;
    		if(window.event){    //阻止事件冒泡
       			 e.cancelBubble = true;
    		} else {
        		e.stopPropagation();
     }
   	}
	 document.onclick = function(e){
    e = e || window.event;
     var target = e.target || e.srcElement;
    if(target.id === "obj2" || target.id === "obj1") {
        return;
     } else {
         oDiv2.style.display = "none";
         oicon.style.display="none"
   		shopImg.style.display="block"
     }
   	}
	}
	//Btn1("help1","help2")
	Btn1("shop","memu2_box3")


			
			
			
