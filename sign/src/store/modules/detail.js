import { getDetail, upDataInofo } from '../../service/index'

const state = {
	detailList: {},
	newInfo: {}
}

const mutations = {
	getDetailList(state, data) {
		state.detailList = data
		console.log(state.detailList, "detaillist")
	},

	updatainfodata(state, data) {
		state.newInfo = data
	}
}

const actions = {
	//获取面试详情
	async getDetailData({ commit }, params) {
		let data = await getDetail(params)
		data.data.address = JSON.parse(data.data.address)
		data.data.start_time = new Date(parseInt(data.data.start_time * 1)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, "")
		commit("getDetailList", data.data)
	},

	//更新面试信息
	async upDataInfoData({commit}, payload) {
		console.log(payload)
		let data = await upDataInofo(payload)
		console.log(data, "跟新")
		commit("updatainfodata")
	}
	
}

export default {
	namespaced: "detail",
	state,
	mutations,
	actions
}