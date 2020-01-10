import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//Home
const Home = resolve => require(['@/views/Home'], resolve)
//Rader

const Radar = resolve => require(['@/views/Radar/Radar'], resolve)


Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/HelloWorld',
			name: 'HelloWorld',
			component: HelloWorld
		},{
			path: '/',
			name: 'home',
			component: Home,
      children:[{
        path: '/Radar',
        name: 'radar',
        component: Radar
      }]
		},
    {
			path: '*',
			redirect: '/'
		},
	]
})
