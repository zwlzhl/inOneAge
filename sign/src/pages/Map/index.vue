<template>
    <div class="MapPage">
         <Map></Map>
         <div class="MapPosition">
           <div class="p"><i class="icon icon-dingwei"></i></div>
           <div class="p"><i class="icon icon-user"></i></div>
         </div>
         <navigator url="/pages/AddExam/main">    
             <p @click="toAddExam">添加面试</p>
         </navigator>
         
    </div>
</template>

<script>
export default {
    render(){
        return{

        }
    }
}
</script>

<style lang="scss">
   page{
        width:100%;
        height:100%;
        background:#ccc;
    }
    .MapPage{
         width:100%;
        height:100%;
        position:relative;
        Map{
            width:100%;
            height:100%;
        }
        p{
            width:100%;
            height:90rpx;
            background:#000;
            color:#fff;
            position: absolute;
            left:0;
            bottom:0;
            line-height:90rpx;
            text-align:center;
            font-size:40rpx;
        }
        .MapPosition{
            width:100%;
            height:90rpx;
            // background:#f00;
            position: absolute;
            left:0;
            bottom:120rpx;
           position:relative;
            
            .p:nth-child(1){
                width:100rpx;
                height:100rpx;
              position:fixed;
              left:50rpx;
              bottom:120rpx;
            //   background:#ccc;
              i{
                  color:#00f;
                  display:inline-block;
                  font-size:60rpx;
              }
            }
            .p:nth-child(2){
                width:100rpx;
                height:100rpx;
              position:fixed;
              left:600rpx;
              bottom:120rpx;
              i{
                  color:#00f;
                  background:#00f;
                  display:inline-block;
                  font-size:60rpx;
              }
            }
            
        }
    }
    
</style>
