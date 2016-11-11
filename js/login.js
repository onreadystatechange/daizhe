/**
 * Created by zy on 2016/10/14.
 */
$(function(){
    init = function(){
        blurfocus();
    },
    blurfocus = function(){
        var uname = $(".loginName"),
            password = $(".password"),
            passwordT = $(".sPassword"),
            phone = $(".phone"),
            validate = {
                uname:true,
                psw:true,
                mcode:true,
                mphone:true
        };
        uname.focus(function(){
            uname.css({
                border:"1px solid skyblue"
            })
        });
        /*验证阶段*/
        /*用户名验证*/
        uname.blur(function(){
                 uname.css({
                     border:"1px solid #eee"
                 });
                /* var unamed = $(".loginName").val();*/
                $.getJSON('../js/usermessages.json',function(data){
                    var unamed = $(".loginName").val(),
                        reg1 =  /^1(3|4|5|7|8)\d{9}$/,
                        s1 = $(".error1"),
                        s2 = $(".error2"),
                        s3 = $(".error3"),
                        s4 = $(".error4")
                    validate.uname = true;
                    for(var i in data){
                        if(data[i].username == unamed){
                            validate.uname = false;
                            break;
                        }
                    }
                        if(validate.uname){
                            $(".e1").css({
                                display:"block"
                            })
                        }else{
                            $(".errorImg1").css({
                                display:"block"
                            })
                            s1.html("用户名错误")
                    }
                        if (unamed.length == 0){
                            $(".errorImg1").css({
                                display:"block"
                            })
                            s1.html("用户名不能为空")
                        }
                        if((!reg1.test(unamed))){
                            $(".errorImg1").css({
                                display:"block"
                            })
                            s1.html("用户名必须是手机号")
                        }
                });

        });
        password.focus(function(){
            password.css({
                border:"1px solid skyblue"
            })
        });
        /*密码验证*/
        password.blur(function(){
            password.css({
                border:"1px solid #eee"
            });
            var reg =  /^[\w]{6,12}$/;
            var passworda =$('.password').val(),
                s1 = $(".error1"),
                s2 = $(".error2"),
                s3 = $(".error3"),
                s4 = $(".error4")
            if(passworda.length<=6||(!reg.test(passworda))){
                $(".errorImg2").css({
                    display:"block"
                });
                s2.html("密码必须是6-12位字母数字下划线组成的");
                }else{
                 $(".e2").css({
                display:"block"
                    })
                }
        });
        passwordT.focus(function(){
            passwordT.css({
                border:"1px solid skyblue"
            })
        });
        /*确认密码验证*/
        passwordT.blur(function(){
            var passworda =$('.password').val(),
                passwordt = $(".sPassword").val(),
                s1 = $(".error1"),
                s2 = $(".error2"),
                s3 = $(".error3"),
                s4 = $(".error4")
            $(".sPassword").css({
                border:"1px solid #eee"
            })
            if(!(passwordt==passworda)){
                $(".errorImg3").css({
                    display:"block"
                })
                s3.html("密码不一致")
            }else{
                $(".e3").css({
                    display:"block"
                })
            }
        });
        phone.focus(function(){
            phone.css({
                border:"1px solid skyblue"
            })
        });
        phone.blur(function(){
            phone.css({
                border:"1px solid #eee"
            })
        });
        /*存储*/
        $(".logBtn").click(function(){
            //return;
            var flag = true;
            for(var i in validate){
                if(!validate[i]){
                    flag = false;
                    break;
                }
            }
            if(flag){
                alert('验证通过，正在存储数据...');
                var user = {
                    username: $(".loginName").val(),
                    password: $(".password").val(),
                    code:$(".sPassword").val(),
                    phone:$(".phone").val(),
                    isLogin: false
                };
                $.cookie('usermessages',JSON.stringify(user),{expires:7,path:'/daizhe'});
                //跳转到登录页面
                location.href = 'based.html';
            }else{
                alert('部分数据不合法');
            }
        });
    },

    init();
})