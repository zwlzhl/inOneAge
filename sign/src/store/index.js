import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import map from './modules/map';
import interview from './modules/InterView';
import message from './modules/message';


Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    map,
    interview,
    message,
  },
  plugins: [CreateLogger()]
})
