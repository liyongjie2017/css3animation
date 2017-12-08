$(document).ready(function() {
	$(".head .nav li").hover(function(){
		$(this).toggleClass('on');
	});
	$(".head .nav li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	$(".wx").hover(function(){
		$(this).find('.erweima').stop().slideToggle();
	});
	$(".hot-position .position-bd .tab li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var el=$(this).parent().siblings(".tab-cont").eq($(this).index());
		el.addClass('active').siblings('.tab-cont').removeClass('active');
	});
	var btop=null;
	$(window).scroll(function(event) {
		/* Act on the event */
		btop=$(window).scrollTop();
		console.log(btop);
		if(btop>600){
			$(".back").stop().fadeIn('fast');
		}else if(btop>=0){
			$(".back").stop().fadeOut('fast');
		}
	});
	$(".banner ul li").eq(0).clone().appendTo($(".banner ul"));
	$(".back-top").click(function(event) {
		/* Act on the event */
		$("body,html").stop().animate({"scrollTop":0},800);
	});
	var key=0;
	var circle=0;
	$(".banner .arrow-r").click(function(){

		right($(".banner ul"),600);
	});
	$(".banner .arrow-l").click(function(){

		left($(".banner ul"),600);
	})

	var timer=setInterval(function(){
		right($(".banner ul"),600);
	}, 3000);
	$(".banner").hover(function(){
		 clearInterval(timer);
		 timer=null;
	},function(){
		timer=setInterval(function(){
		right($(".banner ul"),600);
		}, 3000);
	})
	

	var timerad1=setInterval(function(){
		right($("#ad1 ul"),600);
	}, 3000);
	$("#ad1").hover(function(){
		 clearInterval(timerad1);
		 timerad1=null;
	},function(){
		timerad1=setInterval(function(){
		right($("#ad1 ul"),600);
		}, 3000);
	})

	var timerad2=setInterval(function(){
		right($("#ad2 ul"),600);
	}, 3000);
	$("#ad2").hover(function(){
		 clearInterval(timerad2);
		 timerad2=null;
	},function(){
		timerad2=setInterval(function(){
		right($("#ad2 ul"),600);
		}, 3000);
	})
	
	

	function right(el,speed){
		var length=$(el).children().length-2;
		var width=$(el).children().width();
		key++;
		if(key>length){
			$(el).css("left",0);
			key=1;
		}
		$(el).stop().animate({"left":-width*key},speed);
	}
	function left(el,speed){
		var length=$(el).children().length-1;
		var width=$(el).children().width();
		key--;
		circle--;
		if(key<0){
			key=length;
			$(el).css("left",-width*key);
			key=key-1;
		}
		$(el).stop().animate({"left":-width*key},speed);
	}
});