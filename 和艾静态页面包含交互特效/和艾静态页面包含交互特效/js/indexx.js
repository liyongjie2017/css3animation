$(document).ready(function() {
/*	鼠标放在每个li上 底下会有蓝色条出现,鼠标移开移除*/
	$(".head .nav li").hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	/*鼠标点击每个li 被点击的li 底下会有蓝色条出现，*/
	$(".head .nav li").click(function(event) {
		$(this).addClass('active').siblings().removeClass('active');
	});
	/*鼠标放在微信icon上,底下会有二维码浮现,鼠标移开隐藏*/
	$(".wx").hover(function() {
		$(this).find('.erweima').stop().slideToggle();
	});
	/*鼠标放在微博icon上,底下会有二维码浮现,鼠标移开隐藏*/
	$(".wb").hover(function() {
		$(this).find('.erweima').stop().slideToggle();
	});
	/*鼠标点击"搜索按钮",会弹出输入错误的对话框*/
	$(".form-group-r button").click(function(event) {
			alert("您的输入有误,请重新输入!");
	});
	$(".suggest .suggest-bd button").click(function(event){
		alert("提交信息成功!");
	});
	/*热门职位内的标签可以进行ajax效果的切换*/
	$(".hot-position .position-bd .tab li").hover(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var eq=$(this).parent().siblings(".tab-cont").eq($(this).index());
			eq.addClass('active').siblings('.tab-cont').removeClass('active');
		});

	/*点击三角是置顶功能 随即渐渐消失*/
	$(".back-top").click(function(event) {
			$("body,html").stop().animate({"scrollTop":0},800);
	});

	var btop=null;
	$(window).scroll(function(event) {
		btop=$(window).scrollTop();
		console.log(btop);
		if(btop>500){
			$(".back").stop().fadeIn('fast');
		}else if(btop>=0){
			$(".back").stop().fadeOut('fast');
		}
	});
	/*登录按钮鼠标划上去会变色*/
	$(".form-foot .btn-login").mouseover(function(){
			$(".btn-login").css({'background-color': '#3055b4','color':'white'});
	});
		$(".form-foot .btn-login").mouseleave(function(){
			$(".btn-login").css({'background-color':'white','color':'#666'});
	});


});



/*banner轮播*/
function lunbo(timeSpeed,picSpeed){

	$(".banner ul li:first").clone().appendTo($(".banner ul"));
	var $key=0; /* 控制整图片播放的关键变量*/
	/* 克隆第一张，作为最后一张*/

	var $circle=0;/* 控制小圆点的播放*/

	$(".arr-r").click(function(event) {
		autoplay();
	});


	/*左侧三角*/

	$(".arr-l").click(function(event) {
		$key--; /* 当前处于第一张，播放第二张，所以先++*/  // 先++ 后判断  再执行

		/*alert("aa");*/
		/*动画  animate()*/
		/*ul 的left 的值     $key* 盒子的宽度*/
		console.log($key);
		/*下面是判断图片的播放*/
		if($key<0)
		{
			$key=$(".banner ul li").length-2;/* 因为我们的第五张图片，看做是第一张，所以，我下次要去第二张，第二张的索引号值1*/
			$(".banner ul").css("left",-($(".banner ul li").length-1)*$(".banner ul li").width()); /* 先瞬时间跳转 原点  黄色闪电*/
		}
		$(".banner ul").stop().animate({"left":-$key*$(".banner ul li").width()},picSpeed);  /*缓缓滑动*/

        /*判断小圆点的播放*/
		$circle--;
		if($circle<0)  /*因为是4个点，最大的索引号是3  当大于3 就返回 0*/
		{
			$circle=$(".banner ol li").length-1;  
		}
		$(".banner ol li").eq($circle).addClass('active').siblings().removeClass('active');

	});


	/*开始定时器*/

	var timer=setInterval(autoplay,timeSpeed);
	function autoplay(){

		$key++;  //当前处于第一张，播放第二张，所以先++   先++ 后判断  再执行

		/*alert("aa");*/
		/*动画  animate()*/
		/*ul 的left 的值     $key* 盒子的宽度*/
		console.log($key);
		/*下面是判断图片的播放*/
		if($key>$(".banner ul li").length-1)
		{
			$key=1;/* 因为我们的第五张图片，看做是第一张，所以，我下次要去第二张，第二张的索引号值1*/
			$(".banner ul").css("left",0); /* 先瞬时间跳转 原点  黄色闪电*/
		}
		$(".banner ul").stop().animate({"left":-$key*$(".banner ul li").width()},picSpeed);  /*缓缓滑动*/

        /*判断小圆点的播放*/
		$circle++;
		if($circle>$(".banner ol li").length-1)  /*因为是4个点，最大的索引号是3  当大于3 就返回 0*/
		{
			$circle=0;  
		}
		$(".banner ol li").eq($circle).addClass('active').siblings().removeClass('active');
	}

	/*鼠标经过停止定时器*/
	$(".banner").hover(function() {
		clearInterval(timer);
		timer=null;
	}, function() {/* 鼠标离开 开启定时器*/
		clearInterval(timer);
		timer=setInterval(autoplay, timeSpeed);
	});

	/*点击小圆点 切换图片*/
	$(".banner ol li").click(function(event) {
		$key=$(this).index();
		$circle=$(this).index();
		$(this).addClass('active').siblings().removeClass("active");
		$(".banner ul").stop().animate({"left":-$key*$(".banner ul li").width()},picSpeed);  /*缓缓滑动*/
	});
	
}



































































/*右侧板块1轮播*/

function right1(time1,pic1){

	$("#ad1 ul li:first").clone().appendTo($("#ad1 ul"));
	var $key=0; 
	var $circle=0;

/*判断图片的播放*/
		if($key<0)
		{
			$key=$("#ad1 ul li").length-1;
			$("#ad1 ul").css("left",-($("#ad1 ul li").length-1)*$("#ad1 ul li").width()); 
		}

		$("#ad1 ul").stop().animate({"left":-$key*$("#ad1 ul li").width()},pic1);

/*判断小圆点的播放*/
		$circle--;
		if($circle<0)
		{
			$circle=$("#ad1 ol li").length-2;  
		}
		$("#ad1 ol li").eq($circle).addClass('current').siblings().removeClass('current');

/*开始定时器*/

	var timer1=setInterval(autoplay,time1);
	function autoplay(){
		$key++; 
/*判断图片的播放*/
		if($key>$("#ad1 ul li").length-1)
		{
			$key=1;
			$("#ad1 ul").css("left",0);
		}
		$("#ad1 ul").stop().animate({"left":-$key*$("#ad1 ul li").width()},pic1);

/*判断小圆点的播放*/
		$circle++;
		if($circle>$("#ad1 ol li").length-1)
		{
			$circle=0;  
		}
		$("#ad1 ol li").eq($circle).addClass('current').siblings().removeClass('current');
	}

/*鼠标经过停止定时器*/
	$("#ad1").hover(function() {
		clearInterval(timer1);
		timer1=null;
	},
	 function() {
		clearInterval(timer1);
		timer1=setInterval(autoplay, time);
	});

/*点击小圆点 切换图片*/
	$("#ad1 ol li").click(function(event) {
		$key=$(this).index();
		$circle=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$("#ad1 ul").stop().animate({"left":-$key*$("#ad1 ul li").width()},pic1);
	});

}














/*右侧板块2轮播*/

function right2(time2,pic2){

	$("#ad2 ul li:first").clone().appendTo($("#ad2 ul"));
	var $key=0; 
	var $circle=0;

/*判断图片的播放*/
		if($key<0)
		{
			$key=$("#ad2 ul li").length-1;
			$("#ad2 ul").css("left",-($("#ad2 ul li").length-1)*$("#ad2 ul li").width()); 
		}

		$("#ad2 ul").stop().animate({"left":-$key*$("#ad2 ul li").width()},pic2);

/*判断小圆点的播放*/
		$circle--;
		if($circle<0)
		{
			$circle=$("#ad2 ol li").length-2;  
		}
		$("#ad2 ol li").eq($circle).addClass('current').siblings().removeClass('current');

/*开始定时器*/

	var timer2=setInterval(autoplay,time2);
	function autoplay(){
		$key++; 
/*判断图片的播放*/
		if($key>$("#ad2 ul li").length-1)
		{
			$key=1;
			$("#ad2 ul").css("left",0);
		}
		$("#ad2 ul").stop().animate({"left":-$key*$("#ad2 ul li").width()},pic2);

/*判断小圆点的播放*/
		$circle++;
		if($circle>$("#ad2 ol li").length-1)
		{
			$circle=0;  
		}
		$("#ad2 ol li").eq($circle).addClass('current').siblings().removeClass('current');
	}

/*鼠标经过停止定时器*/
	$("#ad2").hover(function() {
		clearInterval(timer2);
		timer2=null;
	},
	 function() {
		clearInterval(timer2);
		timer2=setInterval(autoplay, time);
	});

/*点击小圆点 切换图片*/
	$("#ad2 ol li").click(function(event) {
		$key=$(this).index();
		$circle=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$("#ad2 ul").stop().animate({"left":-$key*$("#ad2 ul li").width()},pic2);
	});

}

















































