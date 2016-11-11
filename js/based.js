/*
 * Created by zy on 2016/10/12.
 */
$(function(){
    init = function(){
        modalstop();
        inmove();
        appDown();
       /* scrollTop();*/
    },
    modalstop = function(){
        var stopbtn = $('.close');
        var  modal = $('.loginpop_bottom_box');
        stopbtn.click(function(){
            modal.fadeOut();
        })
    },
    inmove = function() {
        var divomve = $('.search_frameLeft');
        var search = $('.searBtn');
        var c =0 ;
        search.click(function(){
            if ( c == 0){
                /*console.log(c)*/
            divomve.css({
                  width:"220px"
             })
                c = 1;
                return;
             }else{
             divomve.css({
                    width:"0px"
                })
                c = 0
            }
            })
    },
    appDown = function(){
        var cl =$(".client");
        cl.hover(function(){
            $(this).find(".nav_appDown").show();
        },function () {
            $(this).find(".nav_appDown").hide();
        })
    },
    init();
     var scrollTop = {
        backTop: $('.scoll'),
        top: 0,
        timer: null,
         move:$('.backToTop'),
        init: function(){
            this.scroll();
            this.backTopClick();
        },
       scroll: function(){
            var _this = this;
            $(window).scroll(function(){
                _this.top = $(document).scrollTop();
                if(_this.top > 300){
                    _this.backTop.fadeIn();
                }
                if(_this.top < 300){
                    _this.backTop.fadeOut();
                }
            });

        },
        backTopClick: function(){
            var _this = this;
            this.move.click(function(){
                _this.top = $(document).scrollTop();
                clearInterval(_this.timer);
                _this.timer = setInterval(function(){
                    _this.top -= 30;
                    $(document).scrollTop(_this.top);
                    if(_this.top <= 0){
                        clearInterval(_this.timer);
                        _this.backTop.fadeOut(500);
                    }
                },13);
            });
        }
    };
    scrollTop.init();
    var timer = null;
    $('.islogin').on('mouseenter',function(){
        clearInterval(timer);
        $('.hide_box').slideDown();
    });
    $('.islogin').on('mouseleave',function(){
        timer = setTimeout(function(){
            $('.hide_box').slideUp();
        },800);
    });
})




