$(function(){
	 
	
	$(".click-menu-btn").click(function(){
		$("#click-menu").stop().slideDown()
		$("body").css("overflow","hidden")
	})
	$(".close").click(function(){
		$("#click-menu").stop().slideUp()
		$("body").css("overflow","auto")
	})
	/* //클릭메뉴 */


	/* 클릭메뉴컨텐츠1 */
	$(".list").mouseover(function(){
		$(this).find(".change").css("top","0px")
		$(this).find(".default").css("top","60px")
	})
	$(".list").mouseout(function(){
		$(this).find(".default").css("top","0px")
		$(this).find(".change").css("top","-60px")
	})
		/* //클릭메뉴컨텐츠1 */


		/* sns-icon */
	$(".sns-icon").mouseover(function(){
		$(this).find(".sns-icon-none").stop().hide()
		$(this).find(".sns-icon-color").stop().show()
	})
	$(".sns-icon").mouseout(function(){
		$(this).find(".sns-icon-color").stop().hide()
		$(this).find(".sns-icon-none").stop().show()
	})
	/* //sns-icon */


	/* slideimg */
	let now = 0
	$(".slider").hide().eq(0).show()

	setInterval(function(){
		let next = (now + 1)%4 

		$(".slider").eq(now).fadeOut()
		$(".slider").eq(next).fadeIn()
		$(".slider-btn li").css("background","#d4d4d4")
		$(".btn").eq(next).css("background","rgba(255, 204, 0)")

		now = next
	},4000)
	$(".btn.s1").click(function(){
		now = 0
	})
	$(".btn.s2").click(function(){
		now = 1
	})
	$(".btn.s3").click(function(){
		now = 2
	})
	$(".btn.s4").click(function(){
		now = 3
	})
	/* //slideimg */


	/* slider-btn */
	$(".btn.s1").click(function(){
		$(".slider").stop().fadeOut()
		$(".slider").eq(0).stop().fadeIn()
		$(".slider-btn li").css("background","#d4d4d4")
		$(".btn").eq(0).css("background","rgba(255, 204, 0)")
	})
	$(".btn.s2").click(function(){
		$(".slider").stop().fadeOut()
		$(".slider").eq(1).stop().fadeIn()
		$(".slider-btn li").css("background","#d4d4d4")
		$(".btn").eq(1).css("background","rgba(255, 204, 0)")
	})
	$(".btn.s3").click(function(){
		$(".slider").stop().fadeOut()
		$(".slider").eq(2).stop().fadeIn()
		$(".slider-btn li").css("background","#d4d4d4")
		$(".btn").eq(2).css("background","rgba(255, 204, 0)")
	})
	$(".btn.s4").click(function(){
		$(".slider").stop().fadeOut()
		$(".slider").eq(3).stop().fadeIn()
		$(".slider-btn li").css("background","#d4d4d4")
		$(".btn").eq(3).css("background","rgba(255, 204, 0)")
	})
	/* //slider-btn */

	/* category */
	$(".menu li").mouseover(function(){
		$(this).find("img").stop().animate({"margin-top":"-15px","margin-bottom":"15px"},100)
	})
	$(".menu li").mouseout(function(){
		$(this).find("img").stop().animate({"margin-top":"0px","margin-bottom":"0px"},100)
	})
	/* //category */

	/* video */
	var video = $(".video-ad").get(0);
	var videoPlayed = false;
	
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop() + 80;
		var videoTop = $(".video-ad").offset().top;

		if (scrollTop > videoTop && !videoPlayed) {
			video.play(); 
			videoPlayed = true; 
	
			setTimeout(function() {
				$(".video-btn li").fadeIn();
			}, 2800);
			
			// $(window).off('scroll');
		}
	});



	/* //video */

	/* top */
	$(window).scroll(function(){
		if($(this).scrollTop() > 250){
			$("#top").stop().fadeIn(100)
		}else{
			$("#top").stop().hide()
		}
	})
	
	$("#top").click(function(){
		$("html").animate({"scrollTop":"0"},500)
	})
	/* //top */



	/* swiper */
	var swiper = new Swiper(".mySwiper", {
		slidesPerView:  1,
		spaceBetween: 0,
		centeredSlides: false,
		keyboard: {
			enabled: true,
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
			dragSize: 100,
			
		},
		breakpoints: {
			600: {
				slidesPerView: 4,
				spaceBetween: 20,
			},}
	});

	/* //swiper */


	/* ad */
	$(".ad-name li").eq(0).show().siblings().hide()
	$(".change-count span").eq(0).show().siblings().hide()
	$(".ad-img li").eq(0).show().siblings().hide()

	let num = $(".ad-name li").index()
	let num2 = $(".change-count span").index()
	let num3 = $(".ad-img li").index()
		$(".cursor-left").hide()

		$(".cursor-right").click(function(){
			num++
			$(".ad-name li").eq(num).fadeIn().siblings().hide()
			if(num > 5){
				$(".cursor-right").hide()
			}else if(num > 0){
				$(".cursor-left").show()
			}
		})
		$(".cursor-right").click(function(){
			num2++
			$(".change-count span").eq(num2).fadeIn().siblings().hide()
		})
		$(".cursor-right").click(function(){
			num3++
			$(".ad-img li").eq(num3).fadeIn().siblings().hide()
		})
			
		
			$(".cursor-left").click(function(){
				num--
				$(".ad-name li").eq(num).fadeIn().siblings().hide()
				if(num < 1){
					$(".cursor-left").hide()
				}else if(num < 6){
					$(".cursor-right").show()
				}
			})
			$(".cursor-left").click(function(){
				num2--
				$(".change-count span").eq(num2).fadeIn().siblings().hide()
			})
			$(".cursor-left").click(function(){
				num3--
				$(".ad-img li").eq(num3).fadeIn().siblings().hide()
			})

			$(window).scroll(function(){
				if($(window).scrollTop() > 1500){
					$(".ad-title").css({"opacity":"1" ,"padding-top" :"5%","transition-delay":"0.7s"})
				}else{
					$(".ad-title").css({"opacity":"0" , "padding-top" :"7%","transition-delay":"0s"})
				}
			})
			$(window).scroll(function(){
				if($(window).scrollTop() > 1500){
					$(".ad-name").css({"opacity":"1" ,"padding-top" :"0%",
				"transition-delay":"1.2s"})
				}else{
					$(".ad-name").css({"opacity":"0" , "padding-top" :"2%",
					"transition-delay":"0s"})
				}
			})
			$(window).scroll(function(){
				if($(window).scrollTop() > 1500){
					$(".ad-img").css({"opacity":"1" ,"padding-top" :"0%",
					"transition-delay":"1s"})
				}else{
					$(".ad-img").css({"opacity":"0" , "padding-top" :"2%",
					"transition-delay":"0s"})
				}
			})
			$(window).scroll(function(){
				if($(window).scrollTop() > 1500){
					$(".ad-cursor").css({"opacity":"1" ,"padding-top" :"0%",
					"transition-delay":"1.4s"})
				}else{
					$(".ad-cursor").css({"opacity":"0" , "padding-top" :"2%",
					"transition-delay":"0s"})
				}
			})
	/* //ad */

	/* youtube */
	// $(".youtube-cursor-right img").click(function () {
	// 	$(".youtube-video").stop().animate({ "margin-left": "-320px" }, 500, function () {
	// 		$(".youtube-video li:first-child").insertAfter(".youtube-video li:last-child");
	// 		$(".youtube-video").css({ "margin-left": "5px" });
	// 	});
	// });

	// $(".youtube-cursor-left img").click(function(){
	// 	$(".youtube-video").animate({"margin-left":"320px"},500,
	// 	function () {
	// 		$(".youtube-video li:last-child").insertBefore(".youtube-video li:first-child");
	// 		$(".youtube-video").css({ "margin-left": "5px" });
	// 	})
	// })
	
	function slideRight() {
    $(".youtube-video").stop().animate({ "margin-left": "-320px" }, 500, function () {
        $(".youtube-video li:first-child").insertAfter(".youtube-video li:last-child");
        $(".youtube-video").css({ "margin-left": "5px" });
			});
	}

	function slideLeft() {
			$(".youtube-video").animate({ "margin-left": "320px" }, 500, function () {
					$(".youtube-video li:last-child").insertBefore(".youtube-video li:first-child");
					$(".youtube-video").css({ "margin-left": "5px" });
			});
	}

	$(".youtube-cursor-right img").click(function () {
			slideRight();
	});

	$(".youtube-cursor-left img").click(function(){
			slideLeft();
	});


	setInterval(slideRight, 4000);
	/* //youtube */

	/* job */
	$(".job-cont li").mouseover(function(){
		$(this).find(".job-cont-img img").css("transform","scale(1.1)")
	})
	$(".job-cont li").mouseout(function(){
		$(this).find(".job-cont-img img").css("transform","scale(1)")
	})
	/* job */

})