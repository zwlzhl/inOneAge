import {getDecrpyt} from '../../service/index'

const state = {
	getDecrpytList: {}
}

const mutations = {
	getdecrpytlist(state, data) {
		state.getDecrpytList = data
		console.log(state, "getDecrpytList")
	}
}

const actions = {
	async getDecrpytData({commit}, params) {
		let data = await getDecrpyt(params) 
		//console.log(data, "getdeacpyt")
		commit("getdecrpytlist", data.data)
	}
}

export default {
	namespaced: "personal",
	state,
	mutations,
	actions
}