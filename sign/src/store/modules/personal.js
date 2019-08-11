import { getDecrpyt, updatePhone, fingerPrint } from '../../service/index'

const state = {
  getDecrpytList: {},
  upDataphone: {},
  getfingerPrintlist: {}
}

const mutations = {
  getdecrpytlist(state, data, dataphone) {
    state.getDecrpytList = data
    state.upDataphone = dataphone
    console.log(dataphone, "getDecrpytList")
  },

  getfingerprint(state, data) {
    state.getfingerPrintlist = data
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
  },

  //生物认证
  async getfingerPrint({commit}, payload) {
    let data = await fingerPrint(payload)
    commit("getfingerprint", data.data)
  }
}

export default {
  namespaced: "personal",
  state,
  mutations,
  actions
}