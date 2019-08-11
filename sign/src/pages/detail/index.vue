<template>
  <div class="wrap">
    <div class="detail">
      <ul>
        <li>
          面试地址：
          <span>{{detailList.address.address}}</span>
        </li>
        <li>
          面试时间：
          <span>{{detailList.start_time}}</span>
        </li>
        <li>
          联系方式：
          <span>{{detailList.phone}}</span>
        </li>
        <li>
          是否提醒：
          <span>{{detailList.remind === -1 ? '未提醒' : '已提醒'}}</span>
        </li>
        <li>
          面试状态：
          <span>{{detailList.status === -1 ? '未开始' : detailList.status === '0' ? '已打卡' : '已放弃'}}</span>
        </li>
        <li :class="detailList.status === 1 ? 'none' : ''">
          取消提醒：
          <span>
            <i-cell-group>
              <i-cell title="基本用法">
                <i-switch :value="switch1" @change="onSwitch"></i-switch>
              </i-cell>
            </i-cell-group>
          </span>
        </li>
      </ul>
    </div>
    <div :class="detailList.status === 1 ? 'none' : 'block'">
      <button class="go" @click="goo">去打卡</button>
      <button class="no" @click="giveUp(detailList)">放弃面试</button>
    </div>
    <i-modal 
      title="删除确认"
      :visible="visible5"
      :actions="actions5"
      @click="handleClick5(actions5, detailList)"
    >
      <view>确定放弃本次面试吗?</view>
    </i-modal>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      id: "",
			switch1: false,
			visible5: false,
			actions5: [
            {
                name: '取消'
            },
            {
                name: '放弃',
                color: '#ed3f14',
                loading: false
            }
        ]
    };
  },
  onLoad(options) {
    this.id = options.id;
    this.getDetailList({ id: this.id });
  },
  computed: {
    ...mapState({
      detailList: state => state.detail.detailList,
      newInfo: state => state.detail.newInfo
    })
  }, 
  methods: {
    onSwitch() {
      if (this.switch1 === true) {
        this.switch1 = false;
      } else {
        this.switch1 = true;
      }
    },
    giveUp(e) {
			this.visible5 = true
    },
    ...mapActions({
      getDetailList: "detail/getDetailData",
      upDataInfo: "detail/upDataInfoData"
		}),
		handleClick5 (detail, signlist) {
        if (detail.index === 0) {
          this.visible5 = false
				} 
				else {
					this.visible5 = false
          console.log(signlist, this.switch1, this.id);
          let remind = this.switch1 === false ? 1 : -1
          this.upDataInfo({
            id: this.id,
            params: {
              status: 1,
              remind: remind
            }
          })
        }
    },
    goo() {
      wx.navigateTo({
        url: '../Map/main',
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.detail {
  width: 100%;
  border: 1px solid #ccc;
  ul {
    padding: 0 20rpx;
    li {
      line-height: 80rpx;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #bbbbbb;
      span {
        color: #525252;
      }
    }
  }
}
.block {
  display: block;
  padding: 0 20rpx;
  display: flex;
  justify-content: space-around;
  margin-top: 50rpx;
  button {
    width: 300rpx;
    height: 100rpx;
    text-align: center;
    color: #fff;
    border: 0;
    outline: 0;
  }
  .go {
    background: #1a7bbf;
  }
  .no {
    background: #db4e44;
  }
}
.none {
  display: none;
}
</style>

