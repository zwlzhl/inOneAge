import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';

// 引入store子模块
import map from './modules/map';
import message from './modules/message';
import interviews from './modules/interviews'
import interview from './modules/InterView'
import detail from './modules/detail'
import personal from './modules/personal'
import count from './modules/count'


Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    map,
    interview,
    message,
    detail,
    interviews,
    personal,
    count
  },
  plugins: [CreateLogger()]
})
