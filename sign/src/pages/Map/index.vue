<template>
  <div>
    <Map
     show-location
    :markers="markers"
    :longitude="longitude"
    :latitude="latitude"
    ></Map>
    <div class="location" @click="location">
       <i class="iconfont icon-dingwei"></i>
    </div>
    <div class="locationRight" @click="toPersonal">
       <i class="iconfont icon-wode"></i>
       <!-- <cover-image class="mapImg" src="/static/images/timg5.jpg"></cover-image> -->
    </div>


    <div class="toAddExam" @click="toAddExam">添加面试</div>
  </div>
</template>

<script>
import '@/pages/index.vue'
import {mapState, mapActions} from 'vuex';
export default {
  data(){
    return {
      markers: []
    }
  },
  computed: {
    ...mapState({
      longitude: state=>state.map.longitude,
      latitude: state=>state.map.latitude
    })
  },
  methods: {
    ...mapActions({
      location: 'map/getLocation'
    }),

    toAddExam(){
        wx.navigateTo({
          url: '../AddExam/main',
        })
    },
    toPersonal(){
         wx.navigateTo({
          url: '../personal/main',
        })
    }
  }
}
</script>

<style lang="scss">
Map{
  width: 100%;
  height: 90%;
}
.location{
  position: fixed;
  bottom: 150rpx;
  left: 30rpx;
  i{
      font-size:60rpx;
      color:#00f;
  }
}
.locationRight{
    position: fixed;
  bottom: 150rpx;
  right: 30rpx;
    i{
      font-size:60rpx;
      color:#00f;
  }
}
// .mapImg{
//     width:150rpx;
//     height:80rpx;
//      position: fixed;
//   bottom: 120rpx;
//   right: 30rpx;
// }
.toAddExam{
    width:100%;
    height:90rpx;
    background:#000;
    color:#fff;
    text-align:center;
    line-height:90rpx;
}
</style>
