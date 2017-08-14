
	//NProgress.start();
    //
	//NProgress.done();
    //
	//$('.navs ul').prev('a').on('click', function () {
	//	$(this).next().slideToggle();
	//});

	//权限管理  在 login页面不用跳转

	//第一次访问的时候没有$.cookie('PHPSESSID')  所以要取反，才可以进去
	//if(!$.cookie('PHPSESSID')&&location.pathname != '/login'){
	//	window.location.href = '/login';
	//}
    //
    //
	////模板的渲染
	//var html = template('tp_aside',JSON.parse($.cookie('tcInfo')));
	////将模板渲染到容器中
	//$('.aside .profile').html(html);
	define(['jquery','cookie','template'],function($,ck,template){
		if(!$.cookie('PHPSESSID')&&location.pathname != '/login'){
			window.location.href = '/login';
		}


		if(location.pathname!='/login'&&location.pathname!='/dashboard/login'&&location.pathname!='/views/dashboard/login') {

			//模板的渲染
			var html = template('tp_aside', JSON.parse($.cookie('tcInfo')));
			//将模板渲染到容器中
			$('.aside .profile').html(html);
		}
	})