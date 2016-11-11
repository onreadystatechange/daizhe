/**
 * Created by JoonW on 2016/10/12.
 */
$(function(){
    var index = {
        now : 0,
        next :0,
        timer : null,
        init:function(){
            this.banner();
        },
        banner:function(){
            var that = this;
            var bannerCon = $('.banner-con');
            var bannerItem = $('.banner-item');

            $('.banner-next').click(function(){
                that.next++;
                that.next %=6;
                bannerItem.eq(that.now).animate({'opacity':0},500).end().eq(that.next).animate({'opacity':1},500);
                that.now = that.next;
            });
            $('.banner-prev').click(function(){
                that.next--;
                if(that.next <0){
                    that.next = 5;
                }
                bannerItem.eq(that.now).animate({'opacity':0},500).end().eq(that.next).animate({'opacity':1},500);
                that.now = that.next;
            });
        }
    }
    // setTimeout(function(){
        index.init();
    // },200)
})