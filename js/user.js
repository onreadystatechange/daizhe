$(function(){
	var posting = {
		postingBox: $('.postingBox'),
		postingBox2: $('.postingBox2'),
		loadMv: $('.load-mv'),
		hideBox: $('.hide-box'),
		share: $('.postingBox textarea'),
		init: function(){
			this.shareClick();
			this.showHide();
		},
		shareClick: function(){
			var _this = this;
			this.share.on('click',function(){
				_this.postingBox.hide();
				_this.postingBox2.show();
				_this.postingBox2.find('textarea').eq(0).focus();
			});
		},
		showHide: function(){
			var _this = this;
			this.loadMv.on('click',function(){
				_this.hideBox.toggle();
			});
			$('.hotTag a').on('click',function(){
				_this.hideBox.hide();
			});
		}
	};
	posting.init();
	$('.menu a').on('click',function(){
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		$('.publishMain').removeClass('show');
		$('.publishMain').eq($(this).index()).addClass('show');
	});
});