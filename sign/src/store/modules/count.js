import {signCont} from '@/service/user'
// 模块所有的状态
const state = {
   list:[]
  }
  
  
  // 模块内的同步改变
  const mutations = {
    updateSign(state, payload){
      state.list = payload;
      }
  }

  // 模块内的异步改变
  const actions = {
    async getLocation({commit},payload){
        const res = await getViewList(params);
        commit('updateLocation', res.data)
    }
   }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }