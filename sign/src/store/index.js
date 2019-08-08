import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import map from './modules/map';
import interview from './modules/interview'
import detail from './modules/detail'

export default new Vuex.Store({
	modules: {
    map,
		interview,
		detail
	},
	plugins: [CreateLogger()]
})
