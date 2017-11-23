var Show1 = {
	template:'#show1'
}
var Show2 = {
	template:'#show2'
}
var Show3 = {
	template:'#show3'
}
var Show4 = {
	template:'#show4'
}

var router = new VueRouter({
	routes:[
		{path:'/show1',component:Show1},
		{path:'/show2',component:Show2},
		{path:'/show3',component:Show3},
		{path:'/show4',component:Show4},
		{path:'*',redirect:'/show1'}
	]
})
new Vue({
	el:'.list',
	data:{
		isShow:false,
		item:false
	},
	methods:{
		chgColor:function(){
			console.log('111');
			this.style.backgroundColor='red'
		}
	},
	router:router
})