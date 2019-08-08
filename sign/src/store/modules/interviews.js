import { getSign } from '../../service/index'
const state = {
  a: []
}

const mutations = {
  getDataList(state, data) {
    //console.log(state, "data.dataaaa")
    state.a = data
    //console.log(state.a, "ssssssssssssss")
  }
}

const actions = {
  async getSignData({ commit }, params) {
   // console.log(params, "params")
    let data = await getSign(params); 
    data.data.forEach(item=> {
      item.address = JSON.parse(item.address)
      item.start_time = new Date(parseInt(item.start_time*1)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, "")
    })
    //console.log('getsigndata', data);
    commit("getDataList", data.data)
  }
}

export default {
  namespaced: "interviews",
  state,
  mutations,
  actions
}