window.onload = function(){
	var init = function(){
				banner();
				returnTop();
				fabu();
		},
		banner = function(){
			var mySwiper = new Swiper ('.swiper-container', {
				    direction: 'horizontal',
				    effect : 'fade',
				    loop: true,
				    autoplay : 2500,
				    autoplayDisableOnInteraction : false, 
				    // 如果需要分页器
				    pagination: '.swiper-pagination',
				    paginationClickable :true
	
			})
		},
			/*返回顶部
			-------------------------------------------------------------*/
		returnTop = function(){
				var $Provide = $('.Provide'),$Feedback = $('.Feedback');
				var $backToTopEle = $('<div class="backToTop"></div>').prependTo($("body")).click(function() {
					$("html, body").animate({ scrollTop: 0 }, 500);
				})
				var $backToTopFun = function(){
					var st = $(document).scrollTop(), winh = $(window).height();
					(st > 1000)? $backToTopEle.show()&&$Provide.show()&&$Feedback.show(): $backToTopEle.hide()&&$Provide.hide()&&$Feedback.hide();
					//IE6下的定位
					if (!window.XMLHttpRequest) {
						$backToTopEle.css("top", st + winh - 166);	
					}
				};
				$(window).bind("scroll", $backToTopFun);
				$backToTopFun();
				$(".backToTop").hover(function(){
					$(this).addClass("on2")
					},function(){
					$(this).removeClass("on2")
				})
			},
			/*发布固定定位*/
		fabu = function(){
			var navH = $(".fabu").offset().top;
			$(window).scroll(function(){
				var scroH = $(this).scrollTop();
				if(scroH>=navH){
					$(".fabu").css({"position":"fixed","top":0,"left":"50%","margin-left":"188px","z-index":"999"});
				}else if(scroH<navH){
					$(".fabu").css({"position":"static","margin":"0 auto"});
				}
				console.log(scroH==navH);
			})	
		}
	init();
	}



				
