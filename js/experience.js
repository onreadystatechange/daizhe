$(function(){
	//item hover时背景上移
	$('.item').hover(function(){
		$(this).css({
			'background-position':'0 -171px'
		})
	},function(){
		$(this).css({
			'background-position':'0 0'
		})
	})
	//导航hover时为当前增加class且移除兄弟元素的class
	var offsetT = $('#AnchorBanner').offset().top;
	$(window).scroll(function(){
		setScroll($(this).scrollTop());
	})
	function setScroll(data){
		if(data >= offsetT){
			$('#AnchorBar').fadeIn(300);
		}else{
			$('#AnchorBar').fadeOut(600);
		}
	}
	//最新体验官
	var experience = {
		img:$('.headImg'),
		init:function(){
			this.hover();
		},
		timer:null,
		hover:function(){
			var that = this;
			this.img.hover(function(){
				$(this).parents('.commFlaotImg').siblings('.model_imgFloat').show();
			},function(){
				$(this).parents('.commFlaotImg').siblings('.model_imgFloat').hide();
			})
			$('.model_imgFloat').mouseenter(function(){
				$(this).show();
			})
			$('.model_imgFloat').mouseleave(function(){
				$(this).hide();
			})
			$('.model_title').hover(function(){
				clearTimeout(that.timer)
				$(this).find('.showName').show();
			},function(){
				$that = $(this);
				that.timer = setTimeout(function(){
					$that.find('.showName').hide();
				},100)
				$('.showName').mouseenter(function(){
					clearTimeout(that.timer);
					$(this).show();
				})
				
				$('.showName').mouseleave(function(){
					clearTimeout(that.timer);
					$(this).hide();
				})
			})
			
		}
	}
	experience.init();
	
	//分页
	var changePage = {
		wrapper:$('#listLoopArea'),
		lazyLoad:$('#listLoopArea').find('.lazyLoad'),
		num1:0,
		num2:0,
		num3:0,
		data:true,
		keys:false,
		timer:null,
		init:function(){
			this.loadData();
			this.goif();
			this.clickChangePage();
		},
		loadData:function(num1,num2,beta){
			var arr1 = num1 || 0;
			var arr2 = num2 || 0;
			var str = '';
			var that = this;
			if(beta){
				$('#listLoopArea li').remove();
			}
			$.getJSON("../js/experience.json",function(data){
				var img = new Image();
				img.onload=function(){
					that.imgHover();
					var lazyLoad = $('.lazyLoad');
					lazyLoad.scrollLoading({
						attr: "data-c",
			            container: window,
			            callback: $.noop
					})
				}
				for(var i=0; i<12;i++){
					img.src = data[arr1][arr2][i]['imgS'];
					str += '<li>'
						+'<div class="b_pic">'
						+'<img data-c="'+data[arr1][arr2][i]['imgS']+'"   alt class="experImg lazyLoad"/>'
						+'<a href="#" class="Listpic_zhezhao">'
						+'<em class="apply">'
						+'查看详情'
						+'</em>'
						+'</a>'
						+'</div>'
						+'<div class="text_info">'
						+'<h5>'
						+'<span class="tou">'+data[arr1][arr2][i]['title']+'</span>'
						+'<a href="">'+data[arr1][arr2][i]['param']+'</a>'
						+'</h5>'
						+'<div class="clear applicaFrame clearfix">'
						+'<div class="fl">'+data[arr1][arr2][i]['status']+'</div>'
						+'<div class="fr">'
						+'<em class="people">'+data[arr1][arr2][i]['people']+'</em>'
						+					'人申请'
						+				'</div>'
						+			'</div>'
						+		'</div>'
						+		'<span class="free">'+'</span>'
						+'</li>'
				}
				that.wrapper.append(str);
			})
			
		},
		//当滚动条距离小于300时，调用lodaData
		
		//当滚动条滚动时调用ifScroll
		goif:function(){
			var scrollT = 0;
			var that = this;
			
			$(window).on('scroll',function(){
				if(that.keys ){
					that.num3 = 0;
				}
				clearTimeout(that.timer);
				scrollT = $(this).scrollTop();
				if(scrollT >= $('body').innerHeight() - window.innerHeight && that.data){
					that.num3++;
					that.num2++;
					if(that.num3<=2){
						$('#yw0 a').eq(2+that.num2).addClass('on').siblings().removeClass('on');
						$('#common_ajax_loading').show().siblings('#common_ajax_mask').show();
						that.timer=setTimeout(function(){
							$('#common_ajax_loading').fadeOut(300).siblings('#common_ajax_mask').fadeOut(400);
							that.loadData(that.num1,that.num2);
						},500)
						
					}
					that.keys = false;
					
				}
				that.data = true;
			})
			
			
		}
	,
		imgHover: function(){
			$('.b_pic').hover(function(){
				$(this).find('a').show();
			},function(){
				$(this).find('a').hide();
			})
		}
	,
	//点击下面换页，只做了一个，原理相同
		clickChangePage:function(){
			var that = this;
			$('#yw0 a').click(function(){
				that.data = false;
				clearTimeout(that.timer);
				that.keys = true;
				$(this).addClass('on').siblings().removeClass('on');
				var index = $(this).index();
				if(index<3){
					index = 2;
				}
				that.num2 = index-2;
				that.loadData(that.num1,that.num2,true);
			})
			
		}
	}
	changePage.init();
})
