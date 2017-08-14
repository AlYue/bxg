/**
 * Created by 南南南南南左岸 on 2017/8/14.
 */
define(['jquery','cookie'],function($){
    $('#formLogin').submit(function(e){
        //获取发送请求的数据
        var data = $(this).serialize();
        //请求数据
        $.ajax({
            //url:'http://api.botue.com/login',   //请求的地址
            url:'api/login',
            data:data,    //请求的地址
            type:'post',   //请求的方式
            success:function(result){
                //接收数据 用cookie保存到其他页面使用    在相同域名下 cookie信息可以共享
                //接收到的是字符串，然后ajax已经将字符串转为对象  cookie存的是字符串
//                    var info = result.result;
                //讲对象转为字符串
                //var info = JSON.stringify(result.result);
                //将字符串存到cookie中   键  值
                $.cookie('tcInfo',JSON.stringify(result.result));
                //alert('登录成功');
                location.href = '/';

            },
            error:function(result){
                alert('登录失败');
            }
        });


        //阻止默认行为
        return false;
    })
})
