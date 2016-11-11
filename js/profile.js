$(function(){
	var lis = $('.main_nav li');
	lis.on('click',function(){
		$(this).siblings().removeClass('show');
		$(this).addClass('show');
		$('.main_inner > div').removeClass('show');
		$('.main_inner > div').eq($(this).index()).addClass('show');
	});
});