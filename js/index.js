// // 一
// var home = {
// 	template:"#Home"
// };


// var FUJI = {
// 	template:"#FUJI"
// };

// // 二
// // routers

// // 三
// var router = new VueRouter({
// 	"routers":[
// 		{path:"/",component:home},
// 		{path:"/FUJI",component:FUJI}

// 	]
// });

// // 四
// var APP = new Vue({
// 	"router":router,
// 	data:{

// 	}
// }).$mount("#app");


// 一、
var home = Vue.extend({
	template:"#home"
});

var FUJI = Vue.extend({
	template:"#FUJI"
});

// 二
Vue.component('home', home);
Vue.component('FUJI', FUJI);

// 三
var app = new Vue(
{
	el: '#app',
	data: {
		view: '',
		query:[],
		hideSearch: true
	}
});

// 四
var route = function () 
{
	var hash = location.hash;
	hash = hash.slice(1).replace(/^\//, '');
	hash = hash.split('/');
    
	app.view = hash[0] || 'home';//
    app.query = hash.slice(1);
};

// 对hash改变注册事件
window.addEventListener('hashchange', route);
window.addEventListener('load', route);