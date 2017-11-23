var List = {
	template:'#list'
}
var Show = {
	template:'#show'
}

var router = new VueRouter({
	routes:[
		{path:'/list',component:List},
		{path:'/show',component:Show},
		{path:'*',redirect:'/index'}
	]
})
new Vue({
	el:'doc-name',
	router:router
})