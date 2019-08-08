<template>
    <div class="wrap">
        <header>
            <span>北京</span>
            <input type="text" placeholder="请输入搜索地址" v-model="address" focus>
        </header>
    </div>
</template>
<script>
import {debounce} from '@/utils/bounch'
import {mapActions,mapMutations} from 'vuex'
export default {
    data(){
        return{
             address: '',
             suggestion:[]
        }
    },

    watch:{
        address(val,oldval){  
            this.search(val)
            console.log(val)
        }
    },
    methods:{
        ...mapMutations({
         updateState:'message/updateState'
        }),
     
    },

//     created () {
//     var that = this;
//     // 使用函数防抖控制事件触发频率
//     this.search = debounce((val)=>{
//         // console.log('ff')
//       this.search({
//         keyword: val,
//         region: '北京',
//         success: function (res) {
//           console.log(res);
//           that.suggestion = res.data;
//         }
//       })
//     }, 300);
//   }
    
}
</script>
<style lang="scss">
    .wrap{
        width:100%;
        height:100%;
        header{
            width:100%;
            height:120rpx;
            border-bottom:1rpx solid #ccc;
            display:flex;
            line-height:120rpx;
           span{
               flex:2;
               padding-left:40rpx;
               font-size:40rpx;
               text-align:center;
           }
           input{
               flex:5;
               display:block;
               height:120rpx;
               line-height:120rpx;
           }
        }
    }
</style>
