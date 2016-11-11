/**
 * Created by zy on 2016/10/13.
 */
$(function(){
        init = function(){
        register();
        againclick();
        efocus();
    },
            /*验证*/
        register = function(){
            $(".logBtn").click(function(){
                var uname = $(".loginName").val(),
                    upassword = $("#login_from_login_password").val(),
                    pic = $(".errorImg"),
                    error = $(".error")
                $.getJSON("../js/usermessages.json",function(usermess){
                    for(var i =0;i<usermess.length;i++){
                        if(usermess[i].username == uname && usermess[i].password == upassword){
                            alert("亲爱的"+usermess[i].username+"欢迎来到待着")
                            usermess.isLogin = true;
                            $.cookie('usermess',JSON.stringify(user),{expires:7,path:'/daizhe'});
                            break;
                        }else{
                            pic.css({
                                display:"block"
                            }),
                            error.css({
                                display: "inline-block",
                                zIndex:"999",
                                backgroundColor:'#fff'
                            })
                            error.html("您输入的用户名或密码错误")
                        }
                    }
                })
            })
   },
            /*点击取消错误提示*/
        againclick = function(){
            $(".bgf7").click(function(){
             var pic = $(".errorImg"),
                 error = $(".error")
                pic.css({
                    display:"none"
                })
                error.css({
                    display:"none"
                })
            })
        },
            /*选框变色*/
        efocus = function(){
                var uname = $(".loginName"),
                    upassword = $("#login_from_login_password");
            uname.focus(function(){
                    $(this).css({
                        border:"1px solid skyblue"
                    })
                });
            uname.blur(function(){
                $(this).css({
                    border:"1px solid #eee"
                })
            });
            upassword.focus(function(){
                $(this).css({
                    border:"1px solid skyblue"
                })
            });
            upassword.blur(function(){
                $(this).css({
                    border:"1px solid #eee"
                })
            })



        }
    init();
})