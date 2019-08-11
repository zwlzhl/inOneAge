<template>
  <form class="addInterview"  @submit="submit" report-submit>
    <div class="title">面试信息</div>
    <div>
      <label for>
        <span>公司名称：</span>
        <input type="text" placeholder="请输入公司名称" v-model="company"/>
      </label>
      <label for>
        <span>公司电话：</span>
        <input type="text" placeholder="请输入面试联系人电话" v-model="phone" maxlength="11"/>
      </label>
      <label for>
        <span>面试时间：</span>
        <!-- <input type="text" placeholder="2019-08-06 17:00" /> -->
        <p>
          <view class="section">
            <picker
              mode="multiSelector"
              :range="dateRange"
              :value="info.date"
              @change="dateChange"
              @columnchange="columnChange"
            ><view class="date">{{dateShow}}</view>
            </picker>
          </view>
        </p>
        <i class="icon" @click="toast">!</i>
      </label>
      <label for>
        <span>面试地址：</span>
        <p><input v-model="address" name="address" placeholder="请选择面试地址" @click="toAddress"></p>
      </label>
    </div>
    <div class="title">备注信息</div>
    <textarea name id cols="30" rows="10" class="comment" placeholder="备注信息（可选，100个字以内" v-model="description"></textarea>
    <button :class="btnEnable?'': 'disable'" form-type="submit">确认</button>
  </form>
</template>
<script>
import { mapState, mapActions } from 'vuex'
const moment = require('moment')
const range = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ['00分','10分','20分','30分','40分','50分']
];
export default {
  props: {},
  components: {},
  data() {
    return {
      address:'',
      company: "",
      phone: "",
      date: new Date().toLocaleDateString(),
      //.replace(/\//g,"-"),
      description:"",
      info: {
        date: [0,0,0],
      }
    };
  },

  onLoad: function(options) {
          // 页面创建时执行
          this.address=options.address
          // console.log(this.address)
        },
  computed: {
    // ...mapState({
    //   checkAddress:state=>state.interview.checkAddress,
    //   checkAddressLocation: state=>state.interview.checkAddressLocation,
    // }),


     btnEnable(){
             //这是公司名称
             if(!this.company){
                 return false
             }  
             //这是手机号码
             if(!/^1(3|5|7|8|9)\d{9}$/.test(this.phone)){
                 return false
             }  
             //关于公司地址
             if(!this.address){
                 return false
             }
             return true
         },
    // 处理面试日期
    dateRange(){
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]){
        dateRange[1] = dateRange[1].filter(item=>{
          return item>moment().hour();
        })
      }else{
        dateRange[1] = range[1]
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item=>{
        return item+'点'
      })
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item=>{
        return moment().add(item, 'days').date()+'号'
      })
      return dateRange;
    },
    // 显示的日期
    dateShow(){
      return moment()
      .add(moment().hour()==23?this.info.date[0]-1:this.info.date[0], 'd')
      .add(this.info.date[1]+1, 'h')
      .minute(this.info.date[2]*10)
      .format('YYYY-MM-DD HH:mm');
    }
  },
  methods: {
    ...mapActions({
      addSign: 'interview/addSign'
    }),
    //确认
    submit(e){
      if(this.company===""&&this.phone===""){
        wx.showToast({
          title: '请完善您的面试信息！！',
          icon: 'none',
          duration: 2000
        })
         return
      }
     if(!/^1(3|5|7|8|9)\d{9}$/.test(this.phone)){
        wx.showToast({
          title: '请填写正确的手机号！',
          icon: 'none',
          duration: 2000
        })
        return 
      }
      let obj={
        company: this.company,
        phone: this.phone,
        form_id: e.target.formId,
        address: this.address,
        latitude: this.latitude,
        longitude: this.longitude,
        start_time: new Date(this.dateShow).getTime(),
        description: this.description
      }
      let that= this;
      wx.showModal({
        title: '温馨提示',
        content: '确定添加面试吗？',
        success (res) {
          if (res.confirm) {
            that.addSign(obj)
            wx.navigateTo({
              url:"../interview/main?obj="+obj.company+'&phone='+obj.phone,
            })
          }
        }
      })
    },
    //提示
    toast(){
      wx.showToast({
        title: '我们会在提前一个小时通知您！',
        icon: 'none',
        duration: 2000
      })
    },
    //跳转
    toAddress(){
      wx.navigateTo({
          url:"../Message/main",
      })
    },
    // 监听多列选择器每列变化
    columnChange(e){
      let {column, value} = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
  },
  created() {
    // 如果当前时间是十一点之后，过滤掉今天
    if (moment().hour() == 23){
      this.info.date = [1,0,0];
    }
  },
  mounted() {
    
  }
};
</script>
<style scoped lang="">
.title {
  width: 100%;
  line-height: 80rpx;
  background: #f6f6f6;
  padding: 0 25rpx;
  font-weight: bold;
}
form {
  display: inline-block;
  width: 100%;
}
label {
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  border-bottom: 1rpx solid #eee;
  padding-left: 40rpx;
}
label span {
  width: 22%;
  text-align: center;
  color: #9b9b9b;
  font-size: 32rpx
}
label input {
  height: 100%;
  padding-left: 20rpx;
}
label p {
  flex: 1;
  height: 100%;
  line-height: 100rpx;
  padding-left: 20rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 5%;
  font-size:35rpx;
}
label:nth-last-child(1) {
  border-bottom: none;
}
.icon {
  display: inline-block;
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  background: #197dbf;
  text-align: center;
  line-height: 50rpx;
  color: #fff;
  margin-right: 90rpx;
}
/* .btnEnable {
  width: 100%;
  height: 100rpx;
  background: #999999;
  text-align: center;
  line-height: 100rpx;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 0;
} */

button{
  margin-top: 50rpx;
  color: #fff;
  background: #197DBF;
}
button.disable{
  background: #999;
}
.comment {
  width: 90%;
  height: 250rpx;
  border: 1rpx solid #999999;
  margin: 40rpx 5%;
  border-radius: 2%;
  padding: 10rpx;
  box-sizing: border-box;
}
</style>