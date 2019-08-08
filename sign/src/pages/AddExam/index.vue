<template>
    <form @submit="submit" report-submit>
    <p>面试信息</p>
    <ul>
      <li>
        <lable for="">公司名称</lable>
        <input type="text" v-model="current.company" placeholder="请输入公司名称" focus>
      </li>
       <li>
        <lable for="">公司电话</lable>
        <input type="number" v-model="current.phone" placeholder="请输入面试联系人电话" maxlength="11">
      </li>
       <li>
        <lable>面试时间</lable>
        <picker
         mode="multiSelector"
         :range="dateRange"
         :value="info.date"
         @change="dateChange"
         @columnChange="columnChange"
        ><view class="date">{{dateShow}}</view>
        </picker>
      </li>
       <li>
        <lable for="">面试地址</lable>
        <input v-model="current.address" placeholder="请选择面试地址" @click="toMessage">
      </li>
    </ul>
    <p>备注信息</p>
    <textarea type="text" v-model="current.description" placeholder="备注信息(可选，100个字以内)"/>
    <button :class="btnEnable?'': 'disable'"  form-type="submit">确认</button>
  </form>
</template>

<script>
 import {mapState, mapMutations, mapActions} from 'vuex';
  var moment = require('moment');
   
    const range=[
        [0,1,2,3,4,5,6,7,8,9],
        [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        ['00分','10分','20分','30分','40分','50分']
    ];
export default {
    data(){
        return{
          info:{
            date:[0,0,0]
          }
        }
    },
    //如果时间过十一点 +1天
    created(){
      if(moment().hour()==23){
         this.info.date=[1,0,0]
      }
    },
    computed:{
       ...mapState({
           current:state=>state.interview.current
       }),
        //判断input框的内容
        btnEnable(){
             //这是公司名称
             if(!this.current.company){
                 return false
             }  
             //这是手机号码
             if(!/^1(3|5|7|8|9)\d{9}$/.test(this.current.phone)){
                 return false
             }  
             //关于公司地址
             if(!this.current.address){
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
      .add(this.info.date[0], 'd')
      .add(this.info.date[1]+1, 'h')
      .minute(this.info.date[2]*10)
      .format('YYYY-MM-DD HH:mm');
    }
    },
    methods:{
       ...mapActions({
            submitInterview: 'InterView/submit'
        }),
       ...mapMutations({
            updateState: 'InterView/updateState'
         }),
         // 监听多列选择器每列变化
    columnChange(e){
      let {column, value} = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
    //跳转到面试列表
    toMessage(){
      wx.navigateTo({
        url:'../Message/main'
      })
    },
         //点击提交
          submit(e){
              // //判断提交的状态
              //  if (this.submiting){
              //     return false;
              //   },
              //这是公司名称
             if(!this.current.company){
                 wx.showToast({
                     title: '公司名称不能为空',
                     icon: 'none',
                 });
                 return false
             }
               //这是手机号码
             if(!/^1(3|5|7|8|9)\d{9}$/.test(this.current.phone)){
                 wx.showToast({
                     title: '手机号不符',
                     icon: 'none',
                 });
                  return false
             }
              //关于公司地址
              if(!this.current.address){
                 wx.showToast({
                     title: '请输入公司地址',
                     icon: 'none',
                 });
                   return false
              }
               // 添加时间戳到表单
               this.current.start_time = moment(this.dateShow).unix()*1000;
              // 添加form_id  the formId is a mock one
              this.current.form_id=e.target.formId
              this.submiting=true;
              let data= this.submitInterview(this.currrent)
              // console.log(data,'4444444444')
              this.submiting=false;
              // 处理添加结果 
             if (data.code == 0){
        wx.showModal({
          title: '系统提示', //提示的标题,
          content: data.msg, //提示的内容,
          showCancel: false,
          confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: '#197DBF', //确定按钮的文字颜色,
          success: res => {
            if (res.confirm) {
             this.updateState({
                form_id: '',
                company: '',
                address: '',
                phone: ''
             })
            //  wx.navigateTo({ url: '/pages/sign/list/main' });
            }
          }
        });
      }else{
        wx.showToast({
          title: data.msg, //提示的内容,
          icon: 'fail'//图标,
        });
      }
         }
    },
}
</script>
<style lang="scss">
    .wrap{
  height: 100%;
}
p{
  font-size: 34rpx;
  padding: 15rpx 0 15rpx 30rpx;
  background: #f6f6f6;
}
ul{
  border-top: 1rpx solid #eee;
  border-bottom: 1rpx solid #eee;
  background: #fff;
}
li{
  width: 720rpx;
  height: 88rpx;
  margin-left: 30rpx;
  border-bottom: 1rpx solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  lable{
    color: #666;
    width: 170rpx;
    font-size: 30rpx;
  }
  input,picker{
    flex: 1;
    font-size: 30rpx;
    // background: #eee;
    color: #333;
    height: 88rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 30rpx;
    box-sizing: border-box;
  }
  .date{
    width: 100%;
    line-height: 88rpx;
  }
}
li:last-child{
  border: none;
}
textarea{
  font-size: 30rpx;
  // background: #eee;
  color: #333;
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  box-sizing: border-box;
  padding: 10rpx;
  border: 1rpx solid #c0c0c0;
  border-radius: 5rpx;
}
button{
  margin-top: 50rpx;
  color: #fff;
  background: #197DBF;
}
button.disable{
  background: #999;
}
</style>
