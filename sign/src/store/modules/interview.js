import { getSign } from '../../service/index'
const state = {
  a: []
}

const mutations = {
  getDataList(state, data) {
    //console.log(state, "data.dataaaa")
    state.a = data.data
    //console.log(state.signList, "ssssssssssssss")
  }
}

const actions = {
  async getSignData({ commit }, params) {
   // console.log(params, "params")
    let data = await getSign(params);
    //console.log('getsigndata', data);
    commit("getDataList", data)
  }
}

export default {
  namespaced: "interview",
  state,
  mutations,
  actions
}