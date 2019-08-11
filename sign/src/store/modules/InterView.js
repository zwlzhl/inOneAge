
import { sign, addSign, signDetail, updateSign } from '@/service/user'

const moment = require('moment')
function formatTime(start_time) {
  return moment(start_time * 1).format('YYYY-MM-DD HH:mm')
}

// 模块所有的状态
const state = {
  viewList: [],
  interviewState: {},
  signDetailData: {},
  // checkAddress: '',
  // checkAddressLocation: {}
}


// 模块内的同步改变
const mutations = {

  // checkAddress (state, payload) {
  //   console.log('payload',payload)
  //   state.checkAddress = payload.address
  //   state.checkAddressLocation = payload.location
  // },
  updateSign(state, payload) {
    payload.map(item => {
      item.start_time = formatTime(item.start_time)
      return item
    });
    state.viewList = payload;
  },
  upInterviewState(state, payload) {
    state.interviewState = payload
  },
  //面试详情数据
  upSignDetail(state, payload) {
    payload.start_time = formatTime(payload.start_time)
    state.signDetailData = payload
  }
}

// 模块内的异步改变
const actions = {
  async getLocation({ commit }, payload) {
    const res = await sign(payload);
    commit('updateSign', res.data)
  },
  //添加面试
  async addSign({ commit }, payload) {
    // return new Promise(async (resolve, reject)=>{
    //   // 填充经纬度
    //  payload.latitude = payload.address.location.lat;
    //  payload.longitude = payload.address.location.lng;
    //  // 序列号地址
    //  payload.address = JSON.stringify(payload.address);
    //  let res = await addSign(payload);
    //  resolve(res);
     if (res.code === 0) {
      wx.showToast({
        title: res.msg,
        icon: 'success',
        duration: 4000
      })
      wx.navigateTo({
        url: "../interviews/main"
      })
    }
  //  })
},
  //获取面试详情
  async signDetail({ commit }, payload) {
    let res = await signDetail(payload)
    commit('upSignDetail', res.data)
  },
  //更新面试信息
  async updateSign({ commit, dispatch }, payload) {
    let { id } = payload;
    let res = await updateSign(payload)
    if (res.code === 0) {
     let data = await dispatch('signDetail', { id })
     console.log(data,"data....")
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
