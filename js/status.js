/**
	状态 status
	@Author zeki
	@Updata 2016/10/15
*/







// 用户名登录
$(function(){

	$.ajax({
		type: 'post',
		url: 'http://localhost/login/index.php/Home/Index/checkUserName',
		data: {
			username: 1456	
		},
		success: function(data){
			console.log(data);
		}

	});


})