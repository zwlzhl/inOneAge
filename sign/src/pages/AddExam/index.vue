//  添加面试
<template>
    <div class="AddExamPage">
        <h5>面试信息</h5>
        <div class="AddExamBox">
           <p><span>公司名称</span><input type="text" placeholder="请输入公司名称"></p>
            <p><span>公司电话</span><input type="phone" placeholder="请输入公司电话"></p>
            <p></p>
            <p><span>面试地址</span><input type="Address" placeholder="请输入公司地址"></p>
               
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
page {
  width: 100%;
  height: 100%;
}
.AddExamPage {
  width: 100%;
  height: 100%;
  background: #ccc;
  h5 {
    height: 90rpx;
    line-height: 90rpx;
    padding: 0 20rpx;
  }
  .AddExamBox {
    width: 100%;
    height: 400rpx;
    background: #fff;
     
    p {
      height: 100rpx;
      border-bottom: 1rpx solid #ccc;
      display:flex;
      span{
       line-height:100rpx;
       padding:0 20rpx;
      }
      input{
          display:block;
          line-height:100rpx;
          height:90rpx;
          padding:10rpx 20rpx;
          border:1rpx solid #ccc;
      }
      
    }
  }
}
</style>
