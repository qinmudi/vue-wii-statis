// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import WiiStatis from './directives/index'

Vue.config.productionTip = false

Vue.use(WiiStatis,{
	'sid': '500590868',
	'cid': '500591228',
	'autoReport': 1,
	'senseHash': 1,
	'senseQuery': 1,
	'performanceMonitor': 1,
	'ignoreParams': [],
	'debug': false
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})