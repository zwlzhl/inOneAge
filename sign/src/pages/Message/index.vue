<template>
    <div class="wrap">
        <header>
            <span>北京</span>
            <input type="text" placeholder="请输入搜索地址" v-model="address" @change="changeon" focus>
        </header>
        <ul>
            <li v-for="(item,index) in addressList" :key="index"  @click="select(index)" hover-class="hover">
                <image src="/static/images/logo.png" />
                <div>
                    <p>{{item.title}}</p>
                    <p>{{item.address}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {debounce} from '@/utils/bounch';
import '@/pages/index.vue';
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
    data(){
        return{
             address: '',
        }
    },
 watch: {
    // 监听input框变化，调用智能提示
    address(val, oldVal){
      this.search(val);
    }
  },

    computed:{
        ...mapState({
           addressList:state=>state.message.searchList
        })
    },
    methods:{
        ...mapMutations({
         updateState:'message/addressList'
        }),
        ...mapActions({
             submitMessage: 'message/getSuggestion'
        }),
         select(index){
             let Address=this.addressList[index].address
             console.log(Address)
             this.updateState({
                addressList:this.addressList[index]
             })
               wx.navigateTo({
                   url:'../AddExam/main?address='+Address
                })
         },
         changeon(){
            //  console.log(this.address)
            this.submitMessage(this.address)
         }
    },
    // mounted(){
    // //   this.submitMessage('八维')
    // },

    created () {
    var that = this;
    // 使用函数防抖控制事件触发频率
    this.search = debounce((val)=>{
      this.search({
        keyword: val,
        region: '北京',
        success: function (res) {
          that.suggestion = res.data;
        }
      })
    }, 300);
  }
    
}
</script>
<style lang="scss">
    .wrap{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
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
        ul{
            width:100%;
            height:100%;
            flex:1;
            font-size:35rpx;
            overflow:auto;
            li{
                height:150rpx;
                border-bottom:1rpx solid #ccc;
                display:flex;
                image{
                    // flex:2;
                    padding:20rpx 30rpx;
                    width:40rpx;
                    height:80rpx;

                }
                div{
                    flex:7;
                    p{
                        padding-top:15rpx;
                    }
                }
            }

        }
    }
</style>
