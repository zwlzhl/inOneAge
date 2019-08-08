// import {addExam} from '@/service/index'
// 模块所有的状态
const state = {
    list:[],
    current:{
      company:'',
      phone:'',
      address:'',
      description:''
    }
  }
  
  // 模块内的同步改变
  const mutations = {
    updateState(state, payload){
      state.current = {...state.current, ...payload};
    }
  }
  
  // 模块内的异步改变
  const actions = {
    async submit(state,{...payload}){
       return new Promise(async (resolve,reject)=>{
         //增加经纬度获取位置
         payload.longitude=payload.longitude.location.lng
         payload.latitude=payload.latitude.location.lat
         //序列号地址
         payload.address=JSON.stringify(payload.address)
         let result=await addExam(payload)
         resolve(result)
         console.log(result,'11111')
       })
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  