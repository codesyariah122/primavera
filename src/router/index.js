import vue from 'vue'
import vueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

vue.use(vueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		component: About
	}
]

const router = new vueRouter({
	routes,
	mode: 'history'
})

export default router