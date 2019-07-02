$(function(){


    //---------------------------------------------------------------热卖专区
//  var result = '';
//     $.ajax({
//         url: "data/data.json",
//         type: "get",
//         dataType: "json",
//         success: function(json){
//             $.each(json["code5"],function(index,val){
//                 // var val = value.code1;
//                 // $.each(json["code1"],function(index,val){
//                 result += '<ul class="wx-conent-5-con-3"> <li class=" onon on active "><div  class="wx-conent-4-bottom1-top"><div class="on active"><img src="'+val.imgurl01+'" alt=""></div> </div><p class="wx-conent-4-bottom1-2"><span >'+val.title+'</span></p><p ><span >'+val.cont+'</span> </p><p class="wx-conent-4-bottom1-3"><span style="color:red">'+val.price+'</span> </p></li></u>'
//                 $(".wx-conent-5-con-2").html(result)
//             // })
//         })
//         }
//     })
















    var result = '';
    $.ajax({
        url: "data/data.json",
        type: "get",
        dataType: "json",
        success: function(json){
            $.each(json["code1"],function(index,val){
                // var val = value.code1;
                // $.each(json["code1"],function(index,val){
                result += ' <li class=" onon on active "><div  class="wx-conent-4-bottom1-top"><div class="on active"><img src="'+val.imgurl01+'" alt=""></div> </div><p class="wx-conent-4-bottom1-2"><span >'+val.title+'</span></p><p ><span >'+val.cont+'</span> </p><p class="wx-conent-4-bottom1-3"><span style="color:red">'+val.price+'</span> </p></li>'
                $(".wx-conent-5-con-3").html(result)
            // })
        })
        }
    })
 
    $(".wx-conent-5-con-3 ").on("click",".yuanxing1 li",function(){
        var index = $(this).index()
        $(".wx-conent-5-con-3 .onon").eq(index+1).addClass("active").siblings().removeClass("active");

     })
     $(".wx-conent-5-con-3").on("mouseenter","li",function(){
        $(".wx-conent-5-con-3 li").eq(0)[0].style.display = "none";
    })
     $(".wx-conent-5-con-3").on("mouseleave",function(){
        $(".wx-conent-5-con-3 li").eq(0)[0].style.display = "block";
    })

    var result1 = '';
    $.ajax({
        url: "data/data.json",
        type: "get",
        dataType: "json",
        success: function(json){
            $.each(json["code2"],function(index,val){
                // var val = value.code1;
                // $.each(json["code1"],function(index,val){
                result1 += ' <li class=" onon on active "><div  class="wx-conent-4-bottom1-top"><div class="on active"><img src="'+val.imgurl01+'" alt=""></div> </div><p class="wx-conent-4-bottom1-2"><span >'+val.title+'</span></p><p ><span >'+val.cont+'</span> </p><p class="wx-conent-4-bottom1-3"><span style="color:red">'+val.price+'</span> </p></li>'
                $(".wx-conent-5-con-4").html(result1)
            // })
        })
        }
    })
 
    $(".wx-conent-5-con-4 ").on("click",".yuanxing1 li",function(){
        var index = $(this).index()
        $(".wx-conent-5-con-4 .onon").eq(index+1).addClass("active").siblings().removeClass("active");

     })
     $(".wx-conent-5-con-4").on("mouseenter","li",function(){
        $(".wx-conent-5-con-4 li").eq(0)[0].style.display = "none";
    })
     $(".wx-conent-5-con-4").on("mouseleave",function(){
        $(".wx-conent-5-con-4 li").eq(0)[0].style.display = "block";
    })
    var result2 = '';
    $.ajax({
        url: "data/data.json",
        type: "get",
        dataType: "json",
        success: function(json){
            $.each(json["code3"],function(index,val){
                // var val = value.code1;
                // $.each(json["code1"],function(index,val){
                result2 += ' <li class=" onon on active "><div  class="wx-conent-4-bottom1-top"><div class="on active"><img src="'+val.imgurl01+'" alt=""></div> </div><p class="wx-conent-4-bottom1-2"><span >'+val.title+'</span></p><p ><span >'+val.cont+'</span> </p><p class="wx-conent-4-bottom1-3"><span style="color:red">'+val.price+'</span> </p></li>'
                $(".wx-conent-5-con-5").html(result2)
            // })
        })
        }
    })
 
    $(".wx-conent-5-con-5 ").on("click",".yuanxing1 li",function(){
        var index = $(this).index()
        $(".wx-conent-5-con-5 .onon").eq(index+1).addClass("active").siblings().removeClass("active");

     })
     $(".wx-conent-5-con-5").on("mouseenter","li",function(){
        $(".wx-conent-5-con-5 li").eq(0)[0].style.display = "none";
    })
     $(".wx-conent-5-con-5").on("mouseleave",function(){
        $(".wx-conent-5-con-5 li").eq(0)[0].style.display = "block";
    })
    var result3 = '';
    $.ajax({
        url: "data/data.json",
        type: "get",
        dataType: "json",
        success: function(json){
            $.each(json["code4"],function(index,val){
                // var val = value.code1;
                // $.each(json["code1"],function(index,val){
                result3 += ' <li class=" onon on active "><div  class="wx-conent-4-bottom1-top"><div class="on active"><img src="'+val.imgurl01+'" alt=""></div> </div><p class="wx-conent-4-bottom1-2"><span >'+val.title+'</span></p><p ><span >'+val.cont+'</span> </p><p class="wx-conent-4-bottom1-3"><span style="color:red">'+val.price+'</span> </p></li>'
                $(".wx-conent-5-con-6").html(result3)
            // })
        })
        }
    })
 
    $(".wx-conent-5-con-6 ").on("click",".yuanxing1 li",function(){
        var index = $(this).index()
        $(".wx-conent-5-con-6 .onon").eq(index+1).addClass("active").siblings().removeClass("active");

     })
     $(".wx-conent-5-con-6").on("mouseenter","li",function(){
        $(".wx-conent-5-con-6 li").eq(0)[0].style.display = "none";
    })
     $(".wx-conent-5-con-6").on("mouseleave",function(){
        $(".wx-conent-5-con-6 li").eq(0)[0].style.display = "block";
    })
    var result4 = '';
    $.ajax({
        url: "data/data.json",
        type: "get",
        dataType: "json",
        success: function(json){
            $.each(json["code5"],function(index,val){
                // var val = value.code1;
                // $.each(json["code1"],function(index,val){
                result4 += ' <li class=" onon on active "><div  class="wx-conent-4-bottom1-top"><div class="on active"><img src="'+val.imgurl01+'" alt=""></div> </div><p class="wx-conent-4-bottom1-2"><span >'+val.title+'</span></p><p ><span >'+val.cont+'</span> </p><p class="wx-conent-4-bottom1-3"><span style="color:red">'+val.price+'</span> </p></li>'
                $(".wx-conent-5-con-7").html(result4)
            // })
        })
        }
    })
 
    $(".wx-conent-5-con-7 ").on("click",".yuanxing1 li",function(){
        var index = $(this).index()
        $(".wx-conent-5-con-7 .onon").eq(index+1).addClass("active").siblings().removeClass("active");

     })
     $(".wx-conent-5-con-7").on("mouseenter","li",function(){
        $(".wx-conent-5-con-7 li").eq(0)[0].style.display = "none";
    })
     $(".wx-conent-5-con-7").on("mouseleave",function(){
        $(".wx-conent-5-con-7 li").eq(0)[0].style.display = "block";
    })
    var result5 = '';
    $.ajax({
        url: "data/data.json",
        type: "get",
        dataType: "json",
        success: function(json){
            $.each(json["code6"],function(index,val){
                // var val = value.code1;
                // $.each(json["code1"],function(index,val){
                result5 += ' <li class=" onon on active "><div  class="wx-conent-4-bottom1-top"><div class="on active"><img src="'+val.imgurl01+'" alt=""></div> </div><p class="wx-conent-4-bottom1-2"><span >'+val.title+'</span></p><p ><span >'+val.cont+'</span> </p><p class="wx-conent-4-bottom1-3"><span style="color:red">'+val.price+'</span> </p></li>'
                $(".wx-conent-5-con-8").html(result5)
            // })
        })
        }
    })
 
    $(".wx-conent-5-con-8 ").on("click",".yuanxing1 li",function(){
        var index = $(this).index()
        $(".wx-conent-5-con-8 .onon").eq(index+1).addClass("active").siblings().removeClass("active");

     })
     $(".wx-conent-5-con-8").on("mouseenter","li",function(){
        $(".wx-conent-5-con-8 li").eq(0)[0].style.display = "none";
    })
     $(".wx-conent-5-con-8").on("mouseleave",function(){
        $(".wx-conent-5-con-8 li").eq(0)[0].style.display = "block";
    })

//-----------------------------------------------------------------精品
var res = "";
$.ajax({
    url: "data/data0.json",
    type: "get",
    dataType: "json",
    success: function(json){
        $.each(json,function(index,val){
            res +=' <li><a href=""><div><img src="'+val.imgurl+'" alt=""></div><p >'+val.title+'</p><p >'+val.message+' </p><p >'+val.price+'</p> </a></li>'
        })
        $(".wx-conent-6-box ul").html(res);
    }
})

$(".wx-conent-6-right").on("click","li",function(){
    var index = $(this).index()
    var res = "";
$.ajax({
    url: "data/data"+index+".json",
    type: "get",
    dataType: "json",
    success: function(json){
        $.each(json,function(index,val){
            res +=' <li><a href=""><div><img src="'+val.imgurl+'" alt=""></div><p >'+val.title+'</p><p >'+val.message+' </p><p >'+val.price+'</p> </a></li>'
        })
        $(".wx-conent-6-box ul").html(res);
    }
})
})








    $(".wx-nav-con1-ul").on("mouseenter"," li ",fn1);
    function fn1(){
        // $(this).css({"color":"#00E"});
       $(".wx-nav").css({"background":"#fff"});
        $(".wx-nav-con2").slideDown();
        var index = $(this).index();
        console.log( index);
            $(".wx-nav-con2 .wx-nav-none").eq(index).animate({"height":"500px"});
            $(".wx-nav-con2 .wx-nav-none").eq(index).addClass("wx-nav-on").siblings().removeClass("wx-nav-on");
      
    }

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
var index = 0;
var imglen = $("#box li").length;
// console.log(imglen)
// console.log(0)
// function autoPlay(){
var timer = setInterval(autoPlay,3000)
function autoPlay(){
        index++;
        if(index>=imglen){
            index=0;
        }
        selecting(index);
}
function selecting(index){
    $("#box li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    $(".box1 span").eq(index).animate({"height": "6px"},1000).siblings().animate({"height":"4px"});
}
// autoPlay();
$(".wx-banner").mouseover(function(){
    clearInterval(timer);
    // alert(0)
})
$(".wx-banner").mouseleave(function(){
    timer = setInterval(autoPlay,3000);
})

$(".box1 span").on("click",function(){
    var index = $(this).index();
    // console.log(index)
    $(this).animate({"height":"6px"}).siblings().animate({"height":"4px"});
    $("#box li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
})




/*----------------------------------------------------slide--------------------------------------------*/
    $(".wx-slide-con2 ").on("mouseover","li",function(){
        $(this).find("span").css({"background":"#eee"});
        var index = $(this).index();
       // console.log($(".wx-slide-con1 .wx-slide-off").eq(index));
       console.log(index)
        $(".wx-slide-con2 p").eq(index).addClass("wx-slide-on");    
    })
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
    
/*-----------------------------------热卖专区数据请求--------------------------------------------- */
// $.ajax({
//     url: 'data/data.json',
//     type: 'get',
//     dataType: 'json',
//     success: function(json){
//         var result = "";
//         $.each(json,function(index,val){
//             result += '<li class="wx-conent-4-bottom1 ha1"> <div  class="wx-conent-4-bottom1-top"><div class="on active"><img src="'+val.imgurl01+'" alt=""></div><p class="wx-conent-4-bottom1-2"><span >5色可选</span><span class="on ">'+val.title+'</span><p ><span >限时直降</span> <span ><ul class="yuanxing on"><li></li><li></li><li></li><li></li><li></li></ul></span> </p><p class="wx-conent-4-bottom1-3"> <span class="on active">'+val.price+'</span></p></li> '
//             // result += '<li class="wx-conent-4-bottom1 ha1"> <div  class="wx-conent-4-bottom1-top"><div class="on active"><img src="'+val.imgurl01+'" alt=""></div><div class="on"><img src="'+val.imgurl01+'" alt=""></div><div class="on"><img src="img/c3.png" alt=""></div><div class="on"><img src="img/c4.png" alt=""></div><div class="on"><img src="img/c5.png" alt=""></div></div><p class="wx-conent-4-bottom1-2"><span >5色可选</span><span class="on ">电光蓝</span><span class="on">羽毛白</span><span class="on">骑士黑</span><span class="on">溶岩橙</span><span class="on">武士黑</span></p><p ><span >限时直降</span> <span ><ul class="yuanxing on"><li></li><li></li><li></li><li></li><li></li></ul></span> </p><p class="wx-conent-4-bottom1-3"> <span class="on active">￥2900.6</span><span class="on ">￥3900.6</span><span class="on ">￥4900.6</span><span class="on ">￥1900.6</span><span class="on ">￥5900.6</span> </p></li> '
//             console.log(val.imgurl01)
//         })
//         $(".remai").html(result);
//     }
// })
$(" .yuanxing ").on("click","li",function(){
// alert(0);
    var index = $(this).index();
     if($(this).parent().parent().attr("class") == "wx-conent-4-bottom1 ha1"){
        $(this).parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
        $(this).parent().parent().find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
        $(this).parent().parent().children("p").eq(3).find("span").eq(index).addClass("active").siblings().removeClass("active");
        }
    
        if($(this).parent().parent().attr("class") == "wx-conent-4-bottom1 ha2"){
        $(this).parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
        $(this).parent().parent().find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
        $(this).parent().parent().children("p").eq(3).find("span").eq(index).addClass("active").siblings().removeClass("active");
        }
        if($(this).parent().parent().attr("class") == "wx-conent-4-bottom1 ha3"){
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






})


/* -----------------------------banner-nav--------------------------*/
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
// $(".yuanxing").on("click","li",function(){

// var index = $(this).index();
//  if($(this).parent().parent().attr("class") == "wx-conent-4-bottom1 ha1"){
//     $(this).parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
//     $(this).parent().parent().find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
//     $(this).parent().parent().children("p").eq(3).find("span").eq(index).addClass("active").siblings().removeClass("active");
//     }

//     if($(this).parent().parent().attr("class") == "wx-conent-4-bottom1 ha2"){
//     $(this).parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
//     $(this).parent().parent().find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
//     $(this).parent().parent().children("p").eq(3).find("span").eq(index).addClass("active").siblings().removeClass("active");
//     }
//     if($(this).parent().parent().attr("class") == "wx-conent-4-bottom1 ha3"){
//     $(this).parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
//     $(this).parent().parent().find("p").eq(0).find("span").eq(index+1).addClass("active").siblings().removeClass("active");
//     $(this).parent().parent().children("p").eq(3).find("span").eq(index).addClass("active").siblings().removeClass("active");
//     }

//             // $(this).parent().parent().parent().find("div").eq(index+1).addClass("active").siblings().removeClass("active");
            
//             //原来的
//             // $(".wx-conent-4-bottom1-top div").eq(index).addClass("active").siblings().removeClass("active");
//             // $(".wx-conent-4-bottom1-2 span").eq(index+1).addClass("active").siblings().removeClass("active");
//             // $(".wx-conent-4-bottom1-3 span").eq(index).addClass("active").siblings().removeClass("active");
           
// })
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
})  

        
$(".wx-conent-6-box").on("mouseenter","li",function(){
    // $(this)[0].style.position = "absolute";
    $(this).animate({"top":"-5px"})
})
$(".wx-conent-6-box").on("mouseleave","li",function(){
    $(this).animate({"top":"0"})
})
