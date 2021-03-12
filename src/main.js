import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMeta from 'vue-meta'
import { router } from './routes'

// Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
