 import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js'

 // 实例化API核心类
 var qqmapsdk = new QQMapWX({
    key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
  });

  
// 模块所有的状态
const state = {
   
  }
  
  // 模块内的同步改变
  const mutations = {
    updateState(state, payload){
      state.current = {...state.current, ...payload};
    }
  }
  
  // 模块内的异步改变
  const actions = {
      getSuggestion({commit},payload){
        qqmapsdk.getSuggestion({
            keyword: payload,
            success:(res)=>{
                console.log(res,'res....')
            }
        })
      },
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  