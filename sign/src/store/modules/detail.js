import { getDetail } from '../../service/index'

const state = {
	detailList: {}
}

const mutations = {
	getDetailList(state, data) {
		state.detailList = data.data
		console.log(state, "detaillist")
	}
}

const actions = {
	async getDetailData({ commit }, params) {
		let data = await getDetail(params)
		console.log(data, "datadetail")
		commit("getDetailList", data)
	}
}

export default {
	namespaced: "detail",
	state,
	mutations,
	actions
}