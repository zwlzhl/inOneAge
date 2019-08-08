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
         
        ><view class="date"></view>
        </picker>
      </li>
       <li>
        <lable for="">面试地址</lable>
        <input v-model="current.address" placeholder="请选择面试地址">
      </li>
    </ul>
    <p>备注信息</p>
    <textarea type="text" v-model="current.description" placeholder="备注信息(可选，100个字以内)"/>
    <button :class="btnEnable?'': 'disable'"  form-type="submit">确认</button>
  </form>
</template>

<script>
 import {mapState, mapMutations, mapActions} from 'vuex';
    // const range=[
    //     [0,1,2,3,4,5,6,7,8,9],
    //     [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
    //     ['00分','10分','20分','30分','40分','50分']
    // ];
export default {
    data(){
        return{
          
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

    },
    methods:{
       ...mapActions({
            submitInterview: 'interview/submit'
        }),
       ...mapMutations({
            updateState: 'interview/updateState'
         }),
         //点击提交
          submit(e){
              console.log(e)
              //判断提交的状态

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
              // 添加form_id  the formId is a mock one
              this.current.form_id=e.target.formId
            //   this.submiting=true;
            //   let data=await this.submitInterview(this.currrent)
            //   console.log(data,'4444444444')
            //   this.submiting=false;
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
