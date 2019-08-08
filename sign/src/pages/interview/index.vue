<template>
  <div class="wrap">
    <div class="test">
      <div class="testNav">
        <div :class="{'selected':tab === -1,'testTitle':true}" @click="changTab(-1)">未开始</div>
        <div :class="{'selected':tab === 0,'testTitle':true}" @click="changTab(0)">已打卡</div>
        <div :class="{'selected':tab === 1,'testTitle':true}" @click="changTab(1)">已放弃</div>
        <div :class="{'selected':tab === 4,'testTitle':true}" @click="changTab(4)">全部</div>
      </div>
      <div class="content">
        <!-- <div class="none" ><p>当前分类没有面试</p></div> -->
        <div class="inner" v-for="(item, index) in list" :key="index" @click="jumpDetail(item.id)">
          <li>
            <span class="tit">{{item.company}}</span>
            <span class="NoStart">{{item.status === -1 ? '未开始' : item.status === 0 ? '已打卡' : '已放弃'}}</span>
          </li>
          <li class="address">{{item.address.address}}</li>
          <li>
            <span class="time">面试时间：{{item.start_time}}</span>
            <span class="notReminded">{{item.remind === -1 ? '未提醒' : '已提醒'}}</span>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      tab: -1
    };
  },
  computed: {
    ...mapState({
      list: state => state.interviews.a
    })
  },
  created() {
    this.getSignList({ status: -1 });
  },
  methods: {
    changTab(index) {
      this.tab = index;
      if (index !== 4) {
        this.getSignList({ status: index });
      } else {
        this.getSignList();
      }
     // console.log(this.getSignList, "sinfList")
    },
    jumpDetail(id) {
      wx.navigateTo({
        url: "../detail/main?id=" + id
      });
    },
    ...mapActions({
      getSignList: "interview/getSignData"
    })
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.test {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.testNav {
  width: 100%;
  height: 100rpx;
  display: flex;
  border: 1px solid #ccc;
  border-bottom: 12rpx solid #ccc;
}
.testNav div {
  flex: 1;
  line-height: 100rpx;
  text-align: center;
}
.selected {
  color: #2e78a3;
  border-bottom: 2px solid #217ab7;
}
.content {
  flex: 1;
  overflow-y: auto;
  margin: 0;
  padding: 0;
}
.none {
  width: 100%;
  height: 200rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
}
.inner {
  width: 91%;
  height: 210rpx;
  padding: 0 30rpx;
  margin-top: 30rpx;
}
.inner li {
  line-height: 70rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tit {
  font-size: 40rpx;
}
.NoStart {
  background: #f4f4f4;
  width: 100rpx;
  height: 55rpx;
  display: inline-block;
  color: #aeaeb0;
  padding: 2rpx 4rpx;
}
.address {
  color: #b5b5b5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.time {
  color: #939393;
}
.notReminded {
  background: #f7f1f4;
  width: 100rpx;
  height: 55rpx;
  display: inline-block;
  color: #e39287;
  padding: 2rpx 4rpx;
}
</style>
