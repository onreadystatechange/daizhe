/**
	状态 status 交互
	@Author zeki
	@Updata 2016/10/15
*/


normal();
function normal(){
	//z-index 层级问题
	var zIndex  = 1000;
	$(".z_indexClick").click(function(){
        zIndex++;
	});
    //标签
    $("#label").toggle(function(){
        $(".tagsFrame").show().css("z-index",zIndex);;
        $(this).find("i").addClass("i_tag_hov");
    },function(){
        $(".tagsFrame").hide();
		if($(".token").size()==0){
			$(this).find("i").removeClass("i_tag_hov");
		}
	});
	$("#tagoK").click(function(){
        $(".tagsFrame").hide();
		if($(".token").size()==0){
			$(this).find("i").removeClass("i_tag_hov");
		}
	});
	$(".ztag").on('click',function(){
		$(this).hide();
		$(".taginput").focus();
	});
	tagInput();
    //照片
    $("#photograph").click(function(){
        //$(".photoImg").show();
		var videoYn=$("#inputVideo").val();
		if(videoYn && videoYn.length>0){
			alert('别贪心，照片和视频只能选一个');
			return;
		}else{
			$(this).find("i").addClass("i_photo_hov");
		}
    });
    $(".videoFrame2 .close").click(function(){
        $(this).parent().fadeOut();
		$(".videoFrame2 embed").attr('src','');
		$("#inputVideo").val('');
		$("#upfile").show().css("z-index",zIndex);;
        $("#videos").find("i").removeClass("i_video_hov");
    });
    $("#videoCancel").click(function(){
		var inputVideo=$("#inputVideo").val().replace(/\s*/,'').replace('http://','');
		if(!inputVideo || inputVideo.length==0){
			$("#videos").click();
		}else{
			$(".videoFrame1").hide();
			$(".videoFrame2 embed").attr('src','');
			$("#inputVideo").val('');
			$("#upfile").show().css("z-index",zIndex);;
			$("#videos").find("i").removeClass("i_video_hov");
		}
    });
    //视频
    $("#videos").toggle(function(){
		var imgS=$("#imgPreviewBox"),
			inputVideo=$("#inputVideo").val().replace(/\s*/,'').replace('http://','');
		var imgReg = /img[0-9]+\.daizhe\.cn/;
		if(imgS.find('img').size()>0 && imgReg.test(imgS.find('img:eq(0)').attr('src'))){
			alert('别贪心，照片和视频只能选一个');
			return;
		}else if(inputVideo && inputVideo.length>0){
			alert('别贪心，只能上传一个视频');
			return;
		}else{
			//$(".videoFrame1").show().css("z-index",zIndex);
			$(".videoFrame1").show();
			$(this).find("i").addClass("i_video_hov");
		}
    },function(){
		var imgS=$("#imgPreviewBox"),
			inputVideo=$("#inputVideo").val().replace(/\s*/,'').replace('http://','');
		var imgReg = /img[0-9]+\.daizhe\.cn/;
		if(imgS.find('img').size()>0 && imgReg.test(imgS.find('img:eq(0)').attr('src'))){
			alert('别贪心，照片和视频只能选一个');
			return;
		}else if(inputVideo && inputVideo.length>0){
			alert('别贪心，只能上传一个视频');
			return;
		}else{
			$(".videoFrame1").hide();
			$(this).find("i").removeClass("i_video_hov");
		}
	});
	$("#videoK").click(function(){
		var videoURL=$("#videoURL").val().replace(/\s*/,'').replace('http://','');
		var urlOut='';
		if (videoURL.indexOf('.html')!=-1 && videoURL.indexOf('.youku.com')!=-1){
				var regexYouku1 = /id_[0-9a-zA-Z]+/;
				if (videoURL.match(regexYouku1)){
					var youKu1 = videoURL.match(regexYouku1);
					var urlOut = 'http://player.youku.com/player.php/sid/'+youKu1[0].replace('id_','')+'/v.swf';
				}else{
					alert("该视频不支持！");
					$(".videoFrame1").hide();
					$("#videos").find("i").removeClass("i_video_hov");
					return;
				}
		}
		if (videoURL.indexOf('.swf')!=-1 && videoURL.indexOf('.youku.com')!=-1){
				var regexYouku2 = /sid\/[0-9a-zA-Z]+/;
				if (videoURL.match(regexYouku2)){
					var youKu2 = videoURL.match(regexYouku2);
					var urlOut = 'http://player.youku.com/player.php/sid/'+youKu2[0].replace('sid/','')+'/v.swf';
				}else{
					alert("该视频不支持！");
					$(".videoFrame1").hide().css("z-index",zIndex);;
					$("#videos").find("i").removeClass("i_video_hov");
					return;
				}
		}
		
		//土豆
		if (videoURL.indexOf('.html')!=-1 && videoURL.indexOf('.tudou.com')!=-1){
				var regexTudou1 = /albumplay\/[0-9a-zA-Z]+/;
				if (videoURL.match(regexTudou1)){
					var tuDou1 = videoURL.match(regexTudou1);
					var urlOut = 'http://www.tudou.com/a/'+tuDou1[0].replace('albumplay/','')+'/v.swf';
				}else{
					alert("该视频不支持！");
					$(".videoFrame1").hide();
					$("#videos").find("i").removeClass("i_video_hov");
					return;
				}
		}
		if (videoURL.indexOf('.swf')!=-1 && videoURL.indexOf('.tudou.com')!=-1){
				var regexTudou2 = /a\/[0-9a-zA-Z]+/;
				if (videoURL.match(regexTudou2)){
					var tuDou2 = videoURL.match(regexTudou2);
					var urlOut = 'http://www.tudou.com/a/'+tuDou2[0].replace('a/','')+'/v.swf';
				}else{
					alert("该视频不支持！");
					$(".videoFrame1").hide();
					$("#videos").find("i").removeClass("i_video_hov");
					return;
				}
		}
		
		//56
		if (videoURL.indexOf('.html')!=-1 && videoURL.indexOf('.56.com')!=-1){
				var regex561 = /v_[0-9a-zA-Z]+[.]html/;
				if (videoURL.match(regex561)){
					var k51 = videoURL.match(regex561);
					var urlOut = 'http://player.56.com/'+k51[0].replace('.html','')+'.swf';
				}else{
					alert("该视频不支持！");
					$(".videoFrame1").hide();
					$("#videos").find("i").removeClass("i_video_hov");
					return;
				}
		}
		if (videoURL.indexOf('.swf')!=-1 && videoURL.indexOf('.56.com')!=-1){
				var regex562 = /v_[0-9a-zA-Z]+[.]swf/;
				if (videoURL.match(regex562)){
					var k52 = videoURL.match(regex562);
					var urlOut = 'http://player.56.com/'+k52[0]+'.swf';
				}else{
					alert("该视频不支持！");
					$(".videoFrame1").hide();
					$("#videos").find("i").removeClass("i_video_hov");
					return;
				}
		}
		
		//腾讯
		if (videoURL.indexOf('.swf')!=-1 && videoURL.indexOf('static.video.qq.com')!=-1){
				var regexQq2 = /vid=[0-9a-zA-Z]+/;
				if (videoURL.match(regexQq2)){
					var qq2 = videoURL.match(regexQq2);
					var urlOut = 'http://static.video.qq.com/TPout.swf?'+qq2[0]+'&auto=0';
				}else{
					alert("该视频不支持！");
					$(".videoFrame1").hide();
					$("#videos").find("i").removeClass("i_video_hov");
					return;
				}
		}
		if (videoURL.indexOf('.html')!=-1 && videoURL.indexOf('.qq.com')!=-1){
			if(videoURL.indexOf('?vid=')!=-1){
				var regexQq1 = /vid=[0-9a-zA-Z]+/;
				if (videoURL.match(regexQq1)){
					var qq1 = videoURL.match(regexQq1);
					//console.log(qq1[0]);
					var urlOut = 'http://static.video.qq.com/TPout.swf?vid='+qq1[0].replace('vid=','')+'&auto=0';
				}else{
					alert("该视频不支持！");
					$(".videoFrame1").hide();
					$("#videos").find("i").removeClass("i_video_hov");
					return;
				}
			}else{
				var regexQq1 = /\/[0-9a-zA-Z]+[.]html/;
				if (videoURL.match(regexQq1)){
					var qq1 = videoURL.match(regexQq1);
					var qq3 = qq1[0].replace(/\//,"")
					var urlOut = 'http://static.video.qq.com/TPout.swf?vid='+qq3.replace('.html','')+'&auto=0';
				}else{
					alert("该视频不支持！");
					$(".videoFrame1").hide();
					$("#videos").find("i").removeClass("i_video_hov");
					return;
				}
			}
		}
		if(urlOut.length>0){
			$(".videoFrame2 embed").attr('src',urlOut);
			$(".videoFrame2").show();
			$("#inputVideo").val(urlOut);
			$("#upfile").hide();
			$(".videoFrame1").hide();
			//$("#videos").find("i").removeClass("i_video_hov");
		}else{
			alert("请输入正确的视频地址！");
			//$(".videoFrame1").hide();
			//$("#videos").find("i").removeClass("i_video_hov");
			return;
		}
		
	});
    //
    $(".status_1").focusin(function(){
		var login_uid = "";
		if(login_uid == ''|| login_uid==0){
			loginPop("http://www.daizhe.cn/status/index/category/1");return false;
		}else{
			$(".postingBox").hide();
			$(".postingBox2").show();
			$(".postingBox2 textarea").focus();
		}
    });
    $(".status_1").hover(function(){
        $(this).find(".r1").addClass("r1_hov");
    },function(){
        $(this).find(".r1").removeClass("r1_hov");
    });
}
	function imgClose(){
		$("#imgPreviewBox .close").click(function(){
			// console.log('111');
			$(this).prev().remove();
			if($(this).siblings('img').size()==0){
				$(this).parent().fadeOut().empty();
				$("#photograph").find("i").removeClass("i_photo_hov");
			}else if($(this).siblings('img').size()>0 && $(this).siblings('img').size()<6){
				if($('.photo_addImg').html()==undefined){
					$('.photo_number').before('<div class="photo_addImg"></div>');
				}
			}
			$(this).remove();
		});
	}
	function tagInput(){
		$(".taginput").focusin(function(){
			$(".ztag").hide();
			//alert($(this).position());
		});
		$(".taginput").focusout(function(){
			var tagValue=$(this).val();
			var tags=$(this).siblings(".token").length;
			if (tagValue.length==0 && tags==0){
				$(".ztag").show();
			}
		});
		$(".taginput").keydown(function(event){
			var tagCnt=$(this).siblings(".token").length;
			var tagValue=$(this).val().replace(/\s*/,'');
			var sigPos=$(this).position();
			if(tagCnt>0 && event.keyCode == 8 && sigPos == 0){
				$(this).prev(".token").remove();
			}
			if(tagCnt>0 && event.keyCode == 8 && sigPos == 1){
				$(this).prev(".token").remove();
			}
			if (tagCnt>=3){
				$(this).val('');
				//console.log(tagCnt);
				return false;
			}
			if(tagValue.length>8){
				tagValue=tagValue.substring(0,8);
			}
			if(tagCnt<3 && event.keyCode == 32 && tagValue != ''){
				$(this).before('<span class="token">'+tagValue+'</span>').val('');
			}
		});
	}



extendImg();
function extendImg(){
	//大图展开
	var w = $(window).width();
	var h = $(window).height();
	$(".Whole").width(w);
	$(".Whole").height(h);
	
	/* 大图点开 */
	$(".clickImg").click(function(){
		$(this).parent().prev().show();
		$("html,body").animate({scrollTop: $(this).parent().parent().parent().offset().top - 50}, 300);
		$(".Whole").show();
	});
	$(".prsibig_img .close").click(function(){
		$(this).parent().hide();
		$(".Whole").fadeOut(500);
	});
	/*$(".Whole").click(function(){
		$(".prsibig_img").hide();
		$(this).fadeOut(500);
	});*/
	//多图效果
	$(".lotGraphs").click(function(){
		var thisID=$(this).attr('id');
		multImages(thisID);
	});
	/* 视频点开 */
	$(".videoDivspn").click(function(){
		$(this).parent().prev().show();
		$("html,body").animate({scrollTop: $(this).parent().parent().parent().offset().top - 50}, 300);
		$(".Whole").show();
	});
	/*显示title*/
	$(".communityTitle").hover(function(){
		$(this).find(".showName").show();
	},function(){
		$(this).find(".showName").hide();
	});
	/*关联体验*/
	$(".tags .experience").hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	});
	function multImages(ID) {//多图大图
		var _thisID=ID,
			_parentID=_thisID.replace(/(.*)\_\d$/,'$1'),
			_thisCnt=_thisID.replace(/(.*)\_(\d)$/,'$2'),
			_allCnt=$('#'+_thisID).parent().parent().attr('data-cnt'),
			_max=parseInt(_allCnt)-1,
			_min=0,
			_prev=parseInt(_thisCnt)-1,
			_next=parseInt(_thisCnt)+1;
		var _thisImg=$('#'+_thisID).attr('src');
		var _thisImgDataSrc = $('#'+_thisID).attr('data-src');
		if(_thisImgDataSrc){
			_thisImg = _thisImgDataSrc;
		}
		var _curSor='',
			_imgHtml='<div class="pic_images m_banner"><div class="banner"><span class="img_abox"><img src="'+_thisImg+'" /><span class="closeAll"></span></span></div></div>',
			_cntHtml='<div class="bigImg_page"><span class="on">'+(parseInt(_thisCnt)+1)+'</span> / '+_allCnt+'</div>';
		if(_allCnt>1){
			_curSor='<div class="banner_ctrl"><a href="javascript:;" class="prev"></a><a href="javascript:;" class="next"></a></div>';
		}
		if(_thisCnt==0){
			_prev=_max;
		}
		if(_thisCnt==_max){
			_next=0;
		}
		$(".Whole").show();
		$(".addNewPictures").html(_imgHtml+_curSor+_cntHtml).show();
		$(".addNewPictures .closeAll").click(function(){
			$(".addNewPictures").hide();
			$(".Whole").hide();
		});
		$(".addNewPictures .prev").click(function(){
			multImages(_parentID+'_'+_prev);
		});
		$(".addNewPictures .next").click(function(){
			multImages(_parentID+'_'+_next);
		});
	}
}


$(function(){
	//评论显示头像
	$(".leftheadImg, .rightheadImg").hover(function(){
		$(this).find(".model_imgFloat").show();
	},function(){
		$(this).find(".model_imgFloat").hide();
	});
});




var lock = false;
function fixAjax(){
	//删除状态
	$('.del').click(function(){
		var _this = $(this);
		_status_id = _this.attr('data-status_id');
		_delBox    = _this.children(".siSureDel");
		_delBox.show();
	});
	$('.yes').click(function(){

		var _this  = $(this);
		_status_id = _this.attr('data-status_id'),
			_delBox    = $("#siSureDel"+_status_id);
		_delBox.show();
		delStatus(_status_id);
	});
	$('.no').click(function(){
		var _this = $(this);
		_status_id = _this.attr('data-status_id');
		_delBox   = $("#siSureDel"+_status_id);
		_delBox.hide();
	});
	//删除按钮
	$(".person_delate").click(function(){
		$(this).next().show();
	});
	$(".floatingDel").hover(function(){
		$(this).find(".person_delate").show();
	},function(){
		$(this).find(".person_delate").hide();
	});
	
	$(".jx_heart").unbind('click').click(function(){
		var _this=$(this),status_id=_this.attr('data-status_id'),
			_next=_this.parent().parent().parent().parent().next();
		$.ajax({
			type:"post",
			url:'/status/do',
			data:{'ajax':'add-favorite','status_id':status_id},
			dataType:"json",
			success:function(result){
				if(result.code == 1){
					var flag = result.data.flag;
					if(flag == 1){
						var isfollowta = result.data.isfollowta,
						isfollowme = result.data.isfollowme,
						user_name = result.data.user_name,
						avatar = result.data.avatar,
						avatar = result.data.avatar,
						signature = result.data.signature,
						cd_class = result.data.certifiedArr['cd_class'],
						cd_title = result.data.certifiedArr['cd_title'],
						_btn_fav_cnt = _this.siblings('.jx_iLike'),
						_btn_fav = parseInt(_btn_fav_cnt.html());
						var insertHtml = '<li class="ib_hover" id="sf_'+status_id+'_"><a href="/user/"><img src="'+avatar+'" class="headImg" /></a><div class="model_imgFloat"><span class="f_san"></span><h4><a href="/user/" class="name">'+user_name+'</a>';
						if(cd_class){
							insertHtml += '<a class="model_title model_'+cd_class+' communityTitle" href="/passport/certified" target="_blank"><i class="showName"><span class="name">'+cd_title+'</span><span class="g_san"></span></i></a>';
						}
						insertHtml += '</h4><p>'+signature+'</p><div class="likeMe like_"></div></div></li>';
						_this.addClass('jx_hearted');
						_btn_fav_cnt.text(_btn_fav + 1).attr('style','cursor:hand');
						//alert(_next.find('li').length);
						if(_next.find('li').length > 0){
							_next.find('li:eq(0)').before(insertHtml);
						}else{
							_next.find('ul').html(insertHtml);
						}
						fixAjaxs("#who"+status_id+"_");
					}else if(flag == 0){
						// alert('已喜欢过，请不要重复点击');
						_btn_fav_cnt = _this.siblings('.jx_iLike'),
						_btn_fav     = parseInt(_btn_fav_cnt.html());
						_removeElm   = _next.find('#sf_'+status_id+'_'+0);
						// console.log(_removeElm);
						if(_removeElm.length>0){
							_this.removeClass('jx_hearted');
							_btn_fav_cnt.text(_btn_fav - 1).attr('style','cursor:hand');
							_removeElm.remove();
						}
						return false;
					}
				}else if(result.code == -1){
					loginPop("http://www.daizhe.cn/status/index/category/1");
					return false;
				}else{
					alert(result.msg);
					return false;
				}
			}
		});
	});
	//喜欢展开
	$(".jx_iLike").toggle(function() {
		if(parseInt($(this).text())>0){
			$(this).parent().parent().parent().parent().next().slideDown();
		}
		$(".model_comments").hide();
	}, function() {
		$(this).parent().parent().parent().parent().next().slideUp();  
		// $(".model_comments").hide();
	});
	//展开评论
	$(".jx_comment").unbind('click').click(function(){
		var _this 			= $(this),
			_comment_type   = 9,
			_relate_id      = _this.attr('data-relate_id'),
			_commentListBox = $('#commentListBox_' + _comment_type + '_' + _relate_id),
			_commentBox     = $('#commentBox_' + _comment_type + '_' + _relate_id);
		if(_commentListBox.find('li').length == 0){
			showComList(_comment_type, _relate_id, 1);
		}
		$(".iLike_box").hide();
		$(this).parent().parent().parent().next().next().slideToggle();
	});
	
	//收起评论
	$(".putAway").unbind('click').click(function(){
		$("html,body").animate({scrollTop: $(this).parent().offset().top}, 300);
		$(this).parent().slideUp();
	});
	
	//发布评论
	$('.commentSubmit').each(function(){
		var _this = $(this),
			_comment_type = _this.attr('data-comment_type'),
			_relate_id    = _this.attr('data-relate_id');
		_this.unbind('click').click(function(){
			addComment(_comment_type, _relate_id);
		});
	});
	//头像显示
	$(".information_headImg").hover(function(){
		$(this).find(".model_imgFloat").show();
	},function(){
		$(this).find(".model_imgFloat").hide();
	})
	}
	//删除状态
	function delStatus(status_id){
		if(status_id > 0){
			$.ajax({
				type:"post",
				url:'/status/do',
				data:{'ajax':'del','status_id':status_id},
				dataType:"json",
				success:function(result){
					if(result.code == 1){
						if($('#statusData_' + status_id).length > 0){
							$('#statusData_' + status_id).slideUp();
							$('#statusData_' + status_id).next('.iLike_box').hide();
							$('#commentBox_9_' + status_id).hide();
						}
					}else if(result.code == -1){
						loginPop("http://www.daizhe.cn/status/index/category/1");
						return false;
					}else{
						alert(result.msg);
						return false;
					}
				}
			});
		}else{
			return false;
		}
	}

	function fixAjaxs(elm){
		_elm=$(elm);
		//头像显示浮框
		$(".iLike_box .ib_hover").hover(function () {
			$(this).find(".model_imgFloat").show();
		}, function () {
			$(this).find(".model_imgFloat").hide();
		});
		//关注
		//$(".likeMe a").hover(
		_elm.hover(
		function(){
			//alert($(this).attr('class'));
			var orgClass=$(this).attr('class'),newClass='';
			switch(orgClass){
				case 'attention':
					$(this).attr('class','attention_hov');
					break;
				case 'yi_attention':
				case 'together':
					$(this).attr('class','qu_attention').html('<i></i>取消关注');
					break;
				default:
					break;
			}
		},function(){
			var orgClass=$(this).attr('class'),followta=$(this).attr('data-followta'),followme=$(this).attr('data-followme');
			switch(orgClass){
				case 'attention_hov':
					$(this).attr('class','attention');
					break;
				case 'qu_attention':
					if(followta == '1' && followme == '1') $(this).attr('class','together').html('<i></i>互相关注');
					else $(this).attr('class','yi_attention').html('<i></i>已关注');
					break;
				default:
					break;
			}
		});
		_elm.unbind('mousedown').mousedown(function(){
			var _this=$(this);
			var uids=_this.attr("data-uid");
			var _that=$(".like_"+uids+" a");
			$.ajax({
				url:'/user/do',
				type:'post',
				data:{'ajax':'follow','type':1,'id':uids},
				dataType:'json',
				success:function(result){
					if(result.code == '1'){
						//console.log(result.data);
						if(result.data != 'undefined' && result.data > 0){
							if(result.data == 1){
								//_this.attr('class','yi_attention').attr('data-followta','1').html('<i></i>已关注');
								_that.attr('class','yi_attention').attr('data-followta','1').html('<i></i>已关注');
							}else if(result.data == 2){
								//_this.attr('class','together').attr('data-followta','1').attr('data-followme','1').html('<i></i>互相关注');
								_that.attr('class','together').attr('data-followta','1').attr('data-followme','1').html('<i></i>互相关注');
							}else{
								//_this.attr('class','attention').attr('data-followta','0').html('<i></i>关注');
								_that.attr('class','attention').attr('data-followta','0').html('<i></i>关注');
							}
						}else{
							//_this.attr('class','attention').attr('data-followta','0').html('<i></i>关注');
							_that.attr('class','attention').attr('data-followta','0').html('<i></i>关注');
						}
					}else if(result.code == "-1"){
						loginPop("http://www.daizhe.cn/status/index/category/1");
						return false;
					}else{
						alert(result.msg);
						return false;
					}
				}
			});
		});
	}
	//添加评论
	function addComment(comment_type, relate_id){
		var _commentContent = $('#commentContent_' + comment_type + '_' + relate_id),
			_commentReplyHead = $('#commentReplyHead_' + comment_type + '_' + relate_id),
			_commentFid = $('#commentFid_' + comment_type + '_' + relate_id),
			_commentCnt = $('#commentCnt_' + comment_type + '_' + relate_id),
			_commentSubmit = $('#commentSubmit_' + comment_type + '_' + relate_id),
			_commentListBox = $('#commentListBox_' + comment_type + '_' + relate_id);
		var _content   = _commentContent.val(),
			_replyhead = _commentReplyHead.val(),
			_fid = $.trim(_commentFid.val());
		if(_fid > 0 && _content.indexOf(_replyhead) < 0){
			_fid = 0;
			_content = $.trim(_content.replace(/\u56DE\u590D\uFF1A[^\u3000]*\u3000/g, ''));
		}else{
			_content = $.trim(_content.replace(_replyhead, ''));
		}
		if(_content == ''){
			alert('评论内容不能为空！');
			return false;
		}
		if(_content.length > 500){
			alert('字符过长！');
			return false;
		}
		//add
		$.ajax({
			type:'post',
			url:'/comment/do/',
			data:{"ajax":"add", "comment_type":comment_type, "relate_id":relate_id, "comment_fid":_fid, "content":_content},
			dataType:"json",
			beforeSend:function(){
				_commentSubmit.attr('disabled',true);
			},
			success:function(result){
				if(result.code == 1){
					_commentContent.val('');
					_commentReplyHead.val('');
					_commentFid.val('');
					_commentListBox.html('');
					showComList(comment_type, relate_id, 1);
							$("#statusData_"+relate_id+" .jx_comment em").html(parseInt($("#statusData_"+relate_id+" .jx_comment em").html())+1);
				}else if(result.code == -1){
					loginPop("http://www.daizhe.cn/status/index/category/1");
					return false;
				}else{
					alert(result.msg);
					return false;
				}
			},
			complete:function(){
				_commentSubmit.removeAttr('disabled');
			}
		});
	}

	/*获取评论*/
	function showComList(comment_type, relate_id, page){
		var _commentListBox = $('#commentListBox_' + comment_type + '_' + relate_id),
			_commentCnt     = $('#commentCnt_' + comment_type + '_' + relate_id),
			_commentBtnMore = $('#commentBtnMore_' + comment_type + '_' + relate_id);
		if(!lock){
			$.ajax({
				type:'post',
				url:'/comment/do',
				data:{"ajax":"listnew", "comment_type":comment_type, "relate_id":relate_id, "page":page},
				dataType:"json",
				beforeSend:function(){
					lock=true;
				},
				success:function(result){
					if(result.code == 1){
						var total = result.data.total;
						if(total > 0){
							var curpage = result.data.curpage;
							var pagenum = result.data.pagenum;
							_commentListBox.append(result.data.list);
							_commentCnt.html(total);
							//更多按钮
							if(curpage < pagenum){
								_commentBtnMore.html('<a href="javascript:showComList(' + comment_type + ',' + relate_id + ',' + (page + 1) + ')">查看更多</a>');
							}else if(curpage == pagenum){
								_commentBtnMore.find('a').remove();
							}
							fixCommentAjax(comment_type,relate_id,page);
							fixAjax();
							fixAjaxs(".likeMe a");
						}
					}
				},
				complete:function(){
					lock = false;
				}
			});
		}
	}
	function fixCommentAjax(comment_type, relate_id, page){
		var _statusData = $('#statusData_' + relate_id),
			_commentBox = $('#commentBox_' + comment_type + '_' + relate_id),
			_commentListBox = $('#commentListBox_' + comment_type + '_' + relate_id),
			_commentContent = $('#commentContent_' + comment_type + '_' + relate_id),
			_commentReplyHead = $('#commentReplyHead_' + comment_type + '_' + relate_id),
			_commentFid = $('#commentFid_' + comment_type + '_' + relate_id);
								// console.log(_commentBox.html());
		_commentListBox.find('.re').each(function(){
			var _this = $(this),
				_comment_type = _this.attr('data-comment_type'),
				_comment_fid = _this.attr('data-comment_id'),
				_user_name = _this.attr('data-user_name');
			_this.click(function(){
				_commentFid.val(_comment_fid);
				_commentReplyHead.val('回复：' + _user_name + '　');
				_commentContent.focus().val('回复：' + _user_name + '　');
				$("html,body").animate({scrollTop: _statusData.offset().top}, 300);
			});
		});
	}








$(function (){
	$('#loginpop_box_email .text').on('focusin', function () {
		$(this).css("border","1px solid #d4ecef");
	});
	$('#loginpop_box_email .text').on('focusout', function () {
		$(this).css("border","1px solid #dcdcdc");
	});
	
	$('.loginpop_mask').css('height', $('body').height());
	$('.loginpop_box .close').on('click', function () {
		$('.loginpop_box, .loginpop_mask').fadeOut();
	});
	$("#loginpop_from_mail").click(function(){
		$('#loginpop_container').animate({scrollTop:240},200,function(){
			$('#loginpop_box_email').focus()
		});
	});
	$("#loginpop_from_Socialog").click(function(){
		$('#loginpop_container').animate({scrollTop:0},200);
	});

	$('#loginpop_form_loginname').on('focusin', function () {
		setLoginPopSuccess($(this).attr('id'));
		$(this).parent().find('.note').hide();
	});	
	$('#loginpop_form_password').on('focusin', function () {
		setLoginPopSuccess($(this).attr('id'));
		$(this).parent().find('.note').hide();
	});
	$('#loginpop_form_loginname').blur(function(){
		checkLoginPopLoginName();
	});
	$('#loginpop_form_password').blur(function(){
		checkLoginPopPassword();
	});
	$('#loginpop_form_loginname_error, #loginpop_form_password_error').on('click', function(){
		$(this).parent().find('.text').focus();
	});
	$('#loginpop_box_email .note').on('click', function(){
		$(this).parent().find('.text').focus();
	});
	$('#loginpop_form_submit').on('click',function(){
		var loginpop_form_loginname = $.trim($('#loginpop_form_loginname').val());
		var loginpop_form_password = $.trim($('#loginpop_form_password').val());
		var loginpop_form_rememberme = $("#loginpop_form_rememberme").is(":checked") ? 1 : 0;
		var validLoginName = checkLoginPopLoginName();
		var validPassword = checkLoginPopPassword();
		if(validLoginName && validPassword){
			$.ajax({
				url: '/passport/login',
				type: 'post',
				data: {'LoginForm[loginName]':loginpop_form_loginname, 'LoginForm[password]':loginpop_form_password, 'LoginForm[rememberMe]':loginpop_form_rememberme},
				dataType: 'json',
				success:function(result){
					if(result.code == 1){
												window.location.reload();
											} else {
						setLoginPopErrorMsg('loginpop_form_password', result.msg);
						return false;
					}
				}
			});
		}
	});
    
});
function loginPop(url) {
	if(typeof(url) == 'undefined'){
		url = 'http://www.daizhe.cn/status/index/category/1';
	}
	$('.loginpop_box').find('a.email').attr('href', '/passport/login?regfrom=%2Fstatus%2Findex%2Fcategory%2F1&return_url=' + encodeURIComponent(url));
	$('.loginpop_box').find('a.douban').attr('href', '/passport/doubanlogin?regfrom=%2Fstatus%2Findex%2Fcategory%2F1&return_url=' + encodeURIComponent(url));
	$('.loginpop_box').find('a.weibo').attr('href', '/passport/weibologin?regfrom=%2Fstatus%2Findex%2Fcategory%2F1&return_url=' + encodeURIComponent(url));
	$('.loginpop_box').find('a.qq').attr('href', '/passport/qqlogin?regfrom=%2Fstatus%2Findex%2Fcategory%2F1&return_url=' + encodeURIComponent(url));
	$('.loginpop_box').find('a.weixin').attr('href', '/passport/weixinlogin?regfrom=%2Fstatus%2Findex%2Fcategory%2F1&return_url=' + encodeURIComponent(url));
	$('.loginpop_box').find('.log4 a').attr('href', '/passport/regist/pos/3/?regfrom=%2Fstatus%2Findex%2Fcategory%2F1&return_url=' + encodeURIComponent(url));
	$('.loginpop_mask, .loginpop_box').fadeIn();
};
function setLoginPopErrorMsg(id, message){
	if($('#' + id).val().length > 0){
		$('#' + id).css('color','#ffffff');
	}
	$('#' + id).addClass("pwerror");
	$('#' + id).parent().find('.note').hide();
	$('#' + id).parent().find('.errorImg').show();
	$('#' + id + '_error').html(message);
	$('#' + id).parent().find('.error').show();
}
function setLoginPopSuccess(id){
	$('#' + id).removeClass("pwerror");
	if($('#' + id).val().length > 0){
		$('#' + id).parent().find('.note').hide();
		$('#' + id).css('color','#333333');
	} else {
		$('#' + id).parent().find('.note').show();
	}
	$('#' + id).parent().find('.error').hide();
	$('#' + id).parent().find('.errorImg').hide();
	//$('#' + id + '_error').html('').hide();
}
function checkLoginPopLoginName(){
	if($.trim($('#loginpop_form_loginname').val()).length==0){
		setLoginPopErrorMsg('loginpop_form_loginname', '邮箱或手机不能为空');
		return false;
	// }else{
		// var searchStr = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
	    // if(!searchStr.test($('#loginpop_form_loginname').val())){
			// setLoginPopErrorMsg('loginpop_form_loginname', '邮箱地址错误');
			// return false;
		// }
	// }
	}else if(!isEmail($('#loginpop_form_loginname').val()) && !isMobile($('#loginpop_form_loginname').val())){
		setLoginPopErrorMsg('loginpop_form_loginname', '邮箱地址或手机号格式错误');
		return false;
	}
	setLoginPopSuccess('loginpop_form_loginname');
	return true;
}
function checkLoginPopPassword(){
	if($('#loginpop_form_password').val().length== 0){
		setLoginPopErrorMsg('loginpop_form_password', '密码不能为空');
		return false;
	}
	setLoginPopSuccess('loginpop_form_password');
	return true;
}
function isEmail(email) {
	var searchStr = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
	if (!searchStr.test(email)) {
		return false;
	}
	return true;
}
function isMobile(mobile) {
	var searchStr = /^((13|14|15|16|17|18)+\d{9})$/;
	if (!searchStr.test(mobile)) {
		return false;
	}
	return true;
}



	
$(".leftheadImg, .rightheadImg").hover(function(){
	$(this).find(".model_imgFloat").show();
},function(){
	$(this).find(".model_imgFloat").hide();
});

$(".jx_comment").unbind('click').click(function(){
	var _this 			= $(this),
		_comment_type   = 9,
		_relate_id      = _this.attr('data-relate_id'),
		_commentListBox = $('#commentListBox_' + _comment_type + '_' + _relate_id),
		_commentBox     = $('#commentBox_' + _comment_type + '_' + _relate_id);
	if(_commentListBox.find('li').length == 0){
		showComList(_comment_type, _relate_id, 1);
	}
	$(".iLike_box").hide();
	$(this).parent().parent().parent().next().next().slideToggle();
});







// lightbox


(function() {
	// Use local alias
	var $ = jQuery;

	var LightboxOptions = (function() {
		function LightboxOptions() {
			this.fadeDuration = 300; //透明效果过渡时间 (500ms)
			this.fitImagesInViewport = false; //根据窗口大小自动调整图片尺寸(true)
			this.resizeDuration = 300; //尺寸变化效果过渡时间(700ms)
			this.positionFromTop = 50; //与顶部的距离 (50px)
			this.showImageNumberLabel = true; //显示页码标签(true)
			this.alwaysShowNavOnTouchDevices = true; //在触摸设备上始终显示上下页按钮(false)
			this.wrapAround = true; //持续显示上下页按钮(false)
		}

		// Change to localize to non-english language
		LightboxOptions.prototype.albumLabel = function(curImageNum, albumSize) {
			return "<span class='lb-on'>" + curImageNum + "</span> / " + albumSize;
		};

		return LightboxOptions;
	})();

	var Lightbox = (function() {
		function Lightbox(options) {
			this.options = options;
			this.album = [];
			this.currentImageIndex = void 0;
			this.init();
		}

		Lightbox.prototype.init = function() {
			this.enable();
			this.build();
		};

		// Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
		// that contain 'lightbox'. When these are clicked, start lightbox.
		Lightbox.prototype.enable = function() {
			var self = this;
			$('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]',
			function(event) {
				self.start($(event.currentTarget));
				return false;
			});
		};

		// Build html for the lightbox and the overlay.
		// Attach event handlers to the new DOM elements. click click click
		Lightbox.prototype.build = function() {
			var self = this;
			var html  = "<div id='lightboxOverlay' class='lightboxOverlay'></div>" +
						"<div id='lightbox' class='lightbox'>" +
						"	<div class='lb-outerContainer'>" +
						"		<div class='lb-closeContainer'><a class='lb-close'></a></div>" +
						"		<div class='lb-container'>" +
						"			<img class='lb-image' src='' />" +
						"			<div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div>" +
						"			<div class='lb-loader'><a class='lb-cancel'></a></div>" +
						"		</div>" +
						"		<div class='lb-dataContainer'>" +
						"			<div class='lb-data'>" +
						"				<span class='lb-caption'></span>" +
						"				<span class='lb-number'></span>" +
						"			</div>" +
						"		</div>" +
						"	</div>" +
						"</div>";
			$(html).appendTo($('body'));

			// Cache jQuery objects
			this.$lightbox = $('#lightbox');
			this.$overlay = $('#lightboxOverlay');
			this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
			this.$container = this.$lightbox.find('.lb-container');

			// Store css values for future lookup
			this.containerTopPadding = parseInt(this.$container.css('padding-top'), 10);
			this.containerRightPadding = parseInt(this.$container.css('padding-right'), 10);
			this.containerBottomPadding = parseInt(this.$container.css('padding-bottom'), 10);
			this.containerLeftPadding = parseInt(this.$container.css('padding-left'), 10);

			// Attach event handlers to the newly minted DOM elements
			this.$overlay.hide().on('click', function() {
				self.end();
				return false;
			});

			this.$lightbox.hide().on('click', function(event) {
				if ($(event.target).attr('id') === 'lightbox') {
					self.end();
				}
				return false;
			});

			this.$outerContainer.on('click', function(event) {
				if ($(event.target).attr('id') === 'lightbox') {
					self.end();
				}
				return false;
			});

			this.$lightbox.find('.lb-prev').on('click', function() {
				if (self.currentImageIndex === 0) {
					self.changeImage(self.album.length - 1);
				} else {
					self.changeImage(self.currentImageIndex - 1);
				}
				return false;
			});

			this.$lightbox.find('.lb-next').on('click', function() {
				if (self.currentImageIndex === self.album.length - 1) {
					self.changeImage(0);
				} else {
					self.changeImage(self.currentImageIndex + 1);
				}
				return false;
			});

			//this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
			this.$lightbox.find('.lb-close').on('click', function() {
				self.end();
				return false;
			});
		};

		// Show overlay and lightbox. If the image is part of a set, add siblings to album array.
		Lightbox.prototype.start = function($link) {
			var self = this;
			var $window = $(window);

			$window.on('resize', $.proxy(this.sizeOverlay, this));

			$('select, object, embed').css({
				visibility: "hidden"
			});

			this.sizeOverlay();

			this.album = [];
			var imageNumber = 0;

			function addToAlbum($link) {
				self.album.push({
					link: $link.attr('href'),
					title: $link.attr('data-title') || $link.attr('title')
				});
			}

			// Support both data-lightbox attribute and rel attribute implementations
			var dataLightboxValue = $link.attr('data-lightbox');
			var $links;

			if (dataLightboxValue) {
				$links = $($link.prop("tagName") + '[data-lightbox="' + dataLightboxValue + '"]');
				for (var i = 0; i < $links.length; i = ++i) {
					addToAlbum($($links[i]));
					if ($links[i] === $link[0]) {
						imageNumber = i;
					}
				}
			} else {
				if ($link.attr('rel') === 'lightbox') {
					// If image is not part of a set
					addToAlbum($link);
				} else {
					// If image is part of a set
					$links = $($link.prop("tagName") + '[rel="' + $link.attr('rel') + '"]');
					for (var j = 0; j < $links.length; j = ++j) {
						addToAlbum($($links[j]));
						if ($links[j] === $link[0]) {
							imageNumber = j;
						}
					}
				}
			}

			// Position Lightbox
			var top = $window.scrollTop() + this.options.positionFromTop;
			var left = $window.scrollLeft();
			this.$lightbox.css({
				top: top + 'px',
				left: left + 'px'
			}).fadeIn(this.options.fadeDuration);

			this.changeImage(imageNumber);
		};

		// Hide most UI elements in preparation for the animated resizing of the lightbox.
		Lightbox.prototype.changeImage = function(imageNumber) {
			var self = this;

			this.disableKeyboardNav();
			var $image = this.$lightbox.find('.lb-image');

			this.$overlay.fadeIn(this.options.fadeDuration);

			$('.lb-loader').fadeIn('slow');
			this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption, .lb-closeContainer').hide();

			this.$outerContainer.addClass('animating');

			// When image to show is preloaded, we send the width and height to sizeContainer()
			var preloader = new Image();
			preloader.onload = function() {
				var $preloader, imageHeight, imageWidth, maxImageHeight, maxImageWidth, windowHeight, windowWidth;
				$image.attr('src', self.album[imageNumber].link);

				$preloader = $(preloader);

				$image.width(preloader.width);
				$image.height(preloader.height);

				if (self.options.fitImagesInViewport) {
					// Fit image inside the viewport.
					// Take into account the border around the image and an additional 10px gutter on each side.
					windowWidth = $(window).width();
					windowHeight = $(window).height();
					maxImageWidth = windowWidth - self.containerLeftPadding - self.containerRightPadding - 220;
					maxImageHeight = windowHeight - self.containerTopPadding - self.containerBottomPadding - 120;

					// Is there a fitting issue?
					if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
						if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
							imageWidth = maxImageWidth;
							imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
							$image.width(imageWidth);
							$image.height(imageHeight);
						} else {
							imageHeight = maxImageHeight;
							imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
							$image.width(imageWidth);
							$image.height(imageHeight);
						}
					}
				}
				self.sizeContainer($image.width(), $image.height());
			};

			preloader.src = this.album[imageNumber].link;
			this.currentImageIndex = imageNumber;
		};

		// Stretch overlay to fit the viewport
		Lightbox.prototype.sizeOverlay = function() {
			this.$overlay.width($(window).width()).height($(document).height());
		};

		// Animate the size of the lightbox to fit the image we are showing
		Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
			var self = this;

			var oldWidth = this.$outerContainer.outerWidth();
			var oldHeight = this.$outerContainer.outerHeight();
			var newWidth = imageWidth + this.containerLeftPadding + this.containerRightPadding;
			var newHeight = imageHeight + this.containerTopPadding + this.containerBottomPadding;

			function postResize() {
				self.$lightbox.find('.lb-dataContainer').width(newWidth);
				self.$lightbox.find('.lb-closeContainer').width(newWidth);
				//修正上下页热区宽度
				self.$lightbox.find('.lb-prev').width(newWidth * 0.34 + 100);
				self.$lightbox.find('.lb-next').width(newWidth * 0.64 + 100);
				self.showImage();
			}

			if (oldWidth !== newWidth || oldHeight !== newHeight) {
				this.$outerContainer.animate({
					width: newWidth,
					height: newHeight
				},
				this.options.resizeDuration, 'swing', function() {
					postResize();
				});
			} else {
				postResize();
			}
		};

		// Display the image and it's details and begin preload neighboring images.
		Lightbox.prototype.showImage = function() {
			this.$lightbox.find('.lb-loader').hide();
			this.$lightbox.find('.lb-image').fadeIn('slow');

			this.updateNav();
			this.updateDetails();
			this.preloadNeighboringImages();
			this.enableKeyboardNav();
		};

		// Display previous and next navigation if appropriate.
		Lightbox.prototype.updateNav = function() {
			// Check to see if the browser supports touch events. If so, we take the conservative approach
			// and assume that mouse hover events are not supported and always show prev/next navigation
			// arrows in image sets.
			var alwaysShowNav = false;
			try {
				document.createEvent("TouchEvent");
				alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true: false;
			} catch(e) {}

			//showNav
			alwaysShowNav = true;

			this.$lightbox.find('.lb-nav').show();

			if (this.album.length > 1) {
				if (this.options.wrapAround) {
					if (alwaysShowNav) {
						this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
					}
					this.$lightbox.find('.lb-prev, .lb-next').show();
				} else {
					if (this.currentImageIndex > 0) {
						this.$lightbox.find('.lb-prev').show();
						if (alwaysShowNav) {
							this.$lightbox.find('.lb-prev').css('opacity', '1');
						}
					}
					if (this.currentImageIndex < this.album.length - 1) {
						this.$lightbox.find('.lb-next').show();
						if (alwaysShowNav) {
							this.$lightbox.find('.lb-next').css('opacity', '1');
						}
					}
				}
			}
		};

		// Display caption, image number, and closing button.
		Lightbox.prototype.updateDetails = function() {
			var self = this;

			// Enable anchor clicks in the injected caption html.
			// Thanks Nate Wright for the fix. @https://github.com/NateWr
			if (typeof this.album[this.currentImageIndex].title !== 'undefined' && this.album[this.currentImageIndex].title !== "") {
				this.$lightbox.find('.lb-caption').html(this.album[this.currentImageIndex].title).fadeIn('fast').find('a').on('click',
				function(event) {
					location.href = $(this).attr('href');
				});
			}

			if (this.album.length > 1 && this.options.showImageNumberLabel) {
				this.$lightbox.find('.lb-number').html(this.options.albumLabel(this.currentImageIndex + 1, this.album.length)).fadeIn('fast');
			} else {
				this.$lightbox.find('.lb-number').hide();
			}

			this.$outerContainer.removeClass('animating');

			//this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration,
			this.$lightbox.find('.lb-dataContainer, .lb-closeContainer').fadeIn(this.options.resizeDuration, function() {
				return self.sizeOverlay();
			});
		};

		// Preload previous and next images in set.
		Lightbox.prototype.preloadNeighboringImages = function() {
			if (this.album.length > this.currentImageIndex + 1) {
				var preloadNext = new Image();
				preloadNext.src = this.album[this.currentImageIndex + 1].link;
			}
			if (this.currentImageIndex > 0) {
				var preloadPrev = new Image();
				preloadPrev.src = this.album[this.currentImageIndex - 1].link;
			}
		};

		Lightbox.prototype.enableKeyboardNav = function() {
			$(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
		};

		Lightbox.prototype.disableKeyboardNav = function() {
			$(document).off('.keyboard');
		};

		Lightbox.prototype.keyboardAction = function(event) {
			var KEYCODE_ESC = 27;
			var KEYCODE_LEFTARROW = 37;
			var KEYCODE_RIGHTARROW = 39;

			var keycode = event.keyCode;
			var key = String.fromCharCode(keycode).toLowerCase();
			if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
				this.end();
			} else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
				if (this.currentImageIndex !== 0) {
					this.changeImage(this.currentImageIndex - 1);
				} else if (this.options.wrapAround && this.album.length > 1) {
					this.changeImage(this.album.length - 1);
				}
			} else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
				if (this.currentImageIndex !== this.album.length - 1) {
					this.changeImage(this.currentImageIndex + 1);
				} else if (this.options.wrapAround && this.album.length > 1) {
					this.changeImage(0);
				}
			}
		};

		// Closing time. :-(
		Lightbox.prototype.end = function() {
			this.disableKeyboardNav();
			$(window).off("resize", this.sizeOverlay);
			this.$lightbox.fadeOut(this.options.fadeDuration);
			this.$overlay.fadeOut(this.options.fadeDuration);
			$('select, object, embed').css({
				visibility: "visible"
			});
		};

		return Lightbox;

	})();

	$(function() {
		var options = new LightboxOptions();
		var lightbox = new Lightbox(options);
	});

}).call(this);