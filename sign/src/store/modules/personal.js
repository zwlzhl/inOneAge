import { getDecrpyt, updatePhone } from '../../service/index'

const state = {
  getDecrpytList: {},
  upDataphone: {}
}

const mutations = {
  getdecrpytlist(state, data, dataphone) {
    state.getDecrpytList = data
    state.upDataphone = dataphone
    console.log(dataphone, "getDecrpytList")
  }

} 

const actions = {
  //解密数据
  async getDecrpytData({ commit }, params) {
    let data = await getDecrpyt(params)
    //data.data.phoneNumber.substr(0,3)+"****"+this.getPhone.data.phoneNumber.substr(7)
    let dataphone = await updatePhone({phone: parseInt( data.data.phoneNumber)})
    console.log(dataphone, "getdeacpyt")
    commit("getdecrpytlist", data.data, dataphone)
  }
}

export default {
  namespaced: "personal",
  state,
  mutations,
  actions
}