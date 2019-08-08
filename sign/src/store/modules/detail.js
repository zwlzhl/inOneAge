import { getDetail } from '../../service/index'

const state = {
	detailList: {}
}

const mutations = {
	getDetailList(state, data) {
		state.detailList = data
		console.log(state.detailList, "detaillist")
	}
}

const actions = {
	async getDetailData({ commit }, params) {
		let data = await getDetail(params)
		data.data.address = JSON.parse(data.data.address)
		data.data.start_time = new Date(parseInt(data.data.start_time * 1)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, "")
		commit("getDetailList", data.data)
	}
}

export default {
	namespaced: "detail",
	state,
	mutations,
	actions
}