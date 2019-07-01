$(function(){
    $(".wx-nav-con1-ul").on("mouseenter"," li ",fn1);
    function fn1(){
        // $(this).css({"color":"#00E"});
       $(".wx-nav").css({"background":"#fff"});
        // $(".wx-nav-con2").css({"height":"308px"})
        // $(".wx-nav-con2").animate({"height":"308px"},1000,"swing");
        $(".wx-nav-con2").slideDown();
        // $(".wx-nav-none").slideDown();
        // $(".wx-nav-con2 .wx-nav-none").eq(index).animate({})
        // $(".wx-nav-con2 .wx-nav-none").eq(index).slideDown();
        // $(".wx-nav-con2 .wx-nav-none").eq(index).siblings().removeClass("wx-nav-on");
        var index = $(this).index();
        console.log( index);
        // $(".wx-nav-con2 .wx-nav-none").eq(index).slideDown();
        // if(index>6){
        //     $(".wx-nav-con2").animate({"height":0},1000,"swing")
        // }else{
            $(".wx-nav-con2 .wx-nav-none").eq(index).animate({"height":"500px"});
            $(".wx-nav-con2 .wx-nav-none").eq(index).addClass("wx-nav-on").siblings().removeClass("wx-nav-on");
        // }
      
    }
    // $(".wx-nav-con1-ul li").on("mouseleave","li",fn2);
    // function fn2(){
    //     setTimeout(function(){
    //         $(".wx-nav").css({"background":"#f7f7f5"});
    //     },1000)
    //     $(".wx-nav-con2").animate({"height":"0"},1000,"swing")
    // }

    /*----------------------------倒计时-------------------------------- */

var startTime = new Date();
var endTime = new Date("2019/7/6 18:20:20");

var s = difTime(startTime,endTime);
function getHDTime(){
    if(s < 0){
        h1.innerHTML = "活动结束";
        return;
    }
    var d = parseInt(s / 60 / 60 / 24);
    var h = parseInt((s / 60 / 60 / 24 - d)*24);
    var m = parseInt(((s / 60 / 60 / 24 - d)*24 - h) * 60);
    var second = parseInt((((s / 60 / 60 / 24 - d)*24 - h) * 60 - m) * 60);
    var str = "距离商品活动结束还剩" + d + "天" + h + "时" + m + "分" + second + "秒";
    //console.log(str);
    //把转换后的时间给h1的innerHTML
    // console.log(str);
    $(".wx-conent-2 span").eq(0).html(str);
}
getHDTime();
    //获取两个时间之间的时间差的秒数
    function difTime(startTime,endTime){
    return (endTime.getTime() - startTime.getTime())/1000;
}
var timer = setInterval(showTime,1000);
		
		function showTime(){
			if(s < 0){
				h1.innerHTML = "活动结束";
				clearInterval(timer);
				return;
			}
			s--;
			getHDTime();
//			当s秒数为0时表示活动结束
			if(s < 0){
				//h1的innerHTML ： 活动结束 。
				h1.innerHTML = "活动结束";
				clearInterval(timer);
			}
		}






/*----------------------------------------------------banner--------------------------------------------*/
var box = document.getElementById("box");
var boxLi = box.children;
// var boxLi = $(".wx-banner-box").children();
var index = 0;
setInterval(autoPlay,2000);
function autoPlay(){
    for(var i = 0; i < boxLi.length; i++){
         animate(boxLi[i],"opacity",0,10);
       // $(boxLi[index]).animate({"opacity":"0"},2000)
        // console.log(0)
    }
    if(index == 4){
        index = 0;
    }else{
        index++;
    }
    // $(boxLi[index]).animate({"opacity":"100"},2000)
    animate(boxLi[index],"opacity",100,10);
    //  console.log(boxLi[index])
}

/*----------------------------------------------------slide--------------------------------------------*/
    $(".wx-slide-con2 ").on("mouseover","li",fn2)
    function fn2(){
        $(this).find("span").css({"background":"#eee"});
        var index = $(this).index();
       // console.log($(".wx-slide-con1 .wx-slide-off").eq(index));
    //    console.log(index)
        $(".wx-slide-con2 p").eq(index).addClass("wx-slide-on");    
    }
    $(".wx-slide-con2 ").on("mouseleave","li",fn3
        // $(".wx-slide-con2 ").off("mouseover","li",fn3);
        // console.log(0)
    )
    function fn3(){
        $(this).find("span").css({"background":"white"});
        var index = $(this).index();
       // console.log($(".wx-slide-con1 .wx-slide-off").eq(index));
    //    console.log(index)
        $(".wx-slide-con2 p").eq(index).removeClass("wx-slide-on");    
    }
    







})

function animate(ele,params,speedTime,callBack){//ele == li0 li1 
	/*
	 * var callBack = function(){alert("执行完了")};
	 * callBack();
	 */
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		var flag = true;
		for(var attr in params){
			var current = 0;
			if(attr === "opacity"){
				current = getStyle(ele,attr)*100;
			}else{
				current = Math.ceil(parseFloat(getStyle(ele,attr)));
				if(attr == "width"){
					console.log(current,getStyle(ele,attr))
				}
			}
			var speed = (params[attr] - current)/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(current != params[attr]){//没有到达目标值
				flag = false;
			}
			
			if(attr === "opacity"){
				ele.style[attr] = (current + speed)/100;
			}else if(attr === "zIndex"){//zIndex的处理
				ele.style[attr] = params[attr];
			}else{
				ele.style[attr] = current + speed + "px";
			}
		}
		
		if(flag){//true所有的属性都到达了目标值 
			//清除定时器
			clearInterval(ele.timer);
			if(callBack){
				callBack();
			}
		}
	},speedTime);
}
function getStyle(ele,attr){
	return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
}

/* -----------------------------banner-nav--------------------------*/
// $(".wx-banner-nav-1 li").bind("mouseover",function(){
//     $(this).css({"background":"white"});
//     $(".wx-banner-nav-3")[0].style.display = "block";
//     var index = $(this).index();
//     $(".wx-banner-nav-3-top div").eq(index).removeClass("wx-banner-nav-off");
//     $(".wx-banner-nav-3-bottom div").eq(index).removeClass("wx-banner-nav-off");

//     // $(".box2")[0].style.display="block";
//     // $(this).addClass("on").siblings().removeClass("on");
//     // var index = $(this).index();
//     // console.log(index);
//     // $(".box2 div").eq(index).addClass("active").siblings().removeClass("active")
// })
// $(".wx-banner-nav").mouseleave(function(){
//     $(".wx-banner-nav-3")[0].style.display = "none";
//     $(this).css({"background":"white"});
// // $(".box2 div").eq(index).addClass("active").siblings().removeClass("active")

// })




$(".wx-banner-nav").on("mouseover",".wx-banner-nav-1 li",function(){
    // $(this).css({"background":"white"});
    $(this).addClass("wx-banner-nav-color").siblings().removeClass("wx-banner-nav-color");
    $(".wx-banner-nav-3")[0].style.display = "block";
    var index = $(this).index();
    $(".wx-banner-nav-3-top div").eq(index).addClass("wx-banner-nav-3-top-1").siblings().removeClass("wx-banner-nav-3-top-1");
    $(".wx-banner-nav-3-bottom div").eq(index).addClass("wx-banner-nav-3-top-1").siblings().removeClass("wx-banner-nav-3-top-1");
    // $(".wx-banner-nav-3-top div").eq(index).removeClass("wx-banner-nav-off");
    // $(".wx-banner-nav-3-bottom div").eq(index).removeClass("wx-banner-nav-off");
})
$(".wx-banner-nav").mouseleave(function(){
    $(".wx-banner-nav-3")[0].style.display = "none";
    $(".wx-banner-nav-1 li").removeClass("wx-banner-nav-color");
})
// $(".wx-banner-nav").on("mouseleave",".wx-banner-nav-1 li",function(){
//     $(this).css({"background":"#C8BAE3"});
//     var index = $(this).index();
//     $(".wx-banner-nav-3-top div").eq(index).addClass("wx-banner-nav-off");
//     $(".wx-banner-nav-3-bottom div").eq(index).addClass("wx-banner-nav-off");
// })
// // $(".wx-banner-nav").mouseover(function(){
// //     $(".wx-banner-nav-3")[0].style.display = "none";
// // })
// $(".wx-banner-nav").mouseleave(function(){
//     $(".wx-banner-nav-3")[0].style.display = "none";
// })




/*--------------------------------页面滚动--------------------------------- */
$(window).scroll(function(){
    var stop = $("body,html").scrollTop();
    $(".wx-slide").animate({top: stop + 150},20)
    // console.log(stop)
    if(stop > 300){
        // $(".wx-slide-con2 li").eq(3).addClass("wx-slide-on")
        $(".wx-slide-con2 li").eq(3)[0].style.display = "block";
    }else{
        $(".wx-slide-con2 li").eq(3)[0].style.display = "none";
    }
   
})
$(".wx-slide-con2 li").eq(3).click(function(){
    // $("body,html").scrollTop().animate
    $("body,html").animate({"scrollTop":"0"},500)
})


/*--------------------------------content------------------------------------------*/
$(".wx-conent-1").on("mouseover","div",function(){
    // $(this).css({"top":"5px"});
    $(this).css({"box-shadow":"0px 0px 6px -5px grey, 0px 0px 0px grey, 0px 6px 10px grey, 0px 2px 0px grey"})
    $(this).animate({
        "top":"-5px"
        
    })
   
})
$(".wx-conent-1").on("mouseleave","div",function(){
    // $(this).css({"top":"5px"});
    $(this).animate({"top":"0px"})
    var _this=this;
    setTimeout(function(){
        $(_this).css({"box-shadow":"0 0 0 0"});
    },500);   
})

var index = 0;
$(".wx-conent-3-right").click(function(){
    if(index == 3)
    {
        index = 3;
    }else{
        index++;
    }
    // $(".wx-conent-3-on ul li").eq(0)[0].style.display="none"
    $(".wx-conent-3-on ul ").animate({"left":-300*index})
})
$(".wx-conent-3-left").click(function(){
    
    if(index == 0){
        index = 0;
    }else{
        index--;
    }
    $(".wx-conent-3-on ul ").animate({"left":-300*index})
})


$(".wx-conent-4-bottom").on("mouseenter","li",fnn)
function fnn(){
    // $(this)[0].style.position = "absolute";
    $(this).animate({"top":"-5px"});  
    // console.log( $(this).find("p").find("span").eq(1))

    $(this).find("p").find("span").eq(1).addClass("active");
    // $(this).find("p").find("span").eq(1)[0].style.display="block";
    $(this).find("p").find("span").eq(0).addClass("on");
    $(this).find("ul").removeClass("on");
    $(this).find("p").find("span").eq(6).addClass("on");
    var index1 = $(this).index();
  
}
$(".yuanxing").on("click","li",function(){

var index = $(this).index();
if($(this).parent().parent().attr("class") == "wx-conent-4-bottom1 ha1"){
    $(this).parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
    $(this).parent().parent().find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
    $(this).parent().parent().children("p").eq(3).find("span").eq(index).addClass("active").siblings().removeClass("active");

    // $(this).parent().parent().parent().children("li").eq(0).find("div").eq(index+1).addClass("active").siblings().removeClass("active");
    // $(this).parent().parent().parent().children("li").eq(0).find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
    // $(this).parent().parent().parent().children("li").eq(0).find("p").eq(2).find("span").eq(index).addClass("active").siblings().removeClass("active");
    }

    if($(this).parent().parent().attr("class") == "wx-conent-4-bottom1 ha2"){
    $(this).parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
    $(this).parent().parent().find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
    $(this).parent().parent().children("p").eq(3).find("span").eq(index).addClass("active").siblings().removeClass("active");

    // $(this).parent().parent().parent().children("li").eq(1).find("div").eq(index+1).addClass("active").siblings().removeClass("active");
    // $(this).parent().parent().parent().children("li").eq(1).find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
    // $(this).parent().parent().parent().children("li").eq(1).find("p").eq(2).find("span").eq(index).addClass("active").siblings().removeClass("active");
    }
    if($(this).parent().parent().attr("class") == "wx-conent-4-bottom1 ha3"){
    //  console.log($(this).parent().parent().attr("class"))
    //  console.log($(this).parent().parent().children("p").eq(3).attr("class"))
    $(this).parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
    $(this).parent().parent().find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
    $(this).parent().parent().children("p").eq(3).find("span").eq(index).addClass("active").siblings().removeClass("active");
    }

            // $(this).parent().parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
            
            //原来的
            // $(".wx-conent-4-bottom1-top div").eq(index).addClass("active").siblings().removeClass("active");
            // $(".wx-conent-4-bottom1-2 span").eq(index+1).addClass("active").siblings().removeClass("active");
            // $(".wx-conent-4-bottom1-3 span").eq(index).addClass("active").siblings().removeClass("active");
           
        })
$(".wx-conent-4-bottom ul").on("mouseleave","li",function(){
    // $(this)[0].style.position = "absolute";
    $(this).animate({"top":"0"});  

    $(this).find("p").find("span").eq(1).removeClass("active");
    $(this).find("p").find("span").eq(2).removeClass("active");
    $(this).find("p").find("span").eq(3).removeClass("active");
    $(this).find("p").find("span").eq(4).removeClass("active");
    $(this).find("p").find("span").eq(5).removeClass("active");
    $(this).find("p").find("span").eq(0).removeClass("on");
    $(this).find("ul").addClass("on");
    $(this).find("p").find("span").eq(6).removeClass("on");

    // $(".wx-conent-4-bottom li  span").eq(0).removeClass("on");
    // $(".wx-conent-4-bottom li  span").eq(1).addClass("on");
    // $(".wx-conent-4-bottom li   ul").addClass("on");
    // $(".wx-conent-4-bottom li   span").eq(2).removeClass("on");
})
