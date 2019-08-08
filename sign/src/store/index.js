import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import interview from './modules/interview'
import detail from './modules/detail'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		interview,
		detail
	},
	plugins: [CreateLogger()]
})
