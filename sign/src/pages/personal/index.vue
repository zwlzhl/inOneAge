<template>
  <div class="wrap">
    <div class="nav">
      <dl>
        <dt>
          <img
            src="data:image/jpeg;base64,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8ar8b9RCvi22JaJlnjPK52nik/t7xLb8TaVv+kbf0pW8S61ZErcaQWjXhWCsuR255FPTx1Gv+u0+VPo3+NUQR/8ACZahH/rtIYH/AIEv8xSf8J24+9pTf9/cf+y1cXxzpx+9DOv4A/1qQeNtJ7icf8A/+vTAz/8AhPHP3dLP/f3/AOxo/wCEz1CT/VaST/30f6VoHxtpPYTn/gH/ANeon8c6cPuwzt+AFAGbqF7q2p25tX0eOeB1BKyQlgCfr0IrkLn4cXBSW6e3e2iUF2UOOB7Dmu8m8WCxwEs3lMw80fNjAPaqN34l1a/tJol03ZbupDvsZtq9znpWdSEWm2a0pyjJJM4GLwtYocu0snsTj+VattZ29om2CFIx3wOT+NT0oBJAAyT2FeWeuMSKOP7iKv8AujFXbDTrnUrgQ26Enux6KPetfSfCtxdlZbvdBD12/wATf4V2lpZwWMAht4wiD07/AFropYdy1lojlq4mMdI6sp6RotvpMOE+eZh88hHJ+noK06KK74xUVZHnSk5O7CiiimIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAgurO3vYjHcQrIvuOlcvqHgzq9hL/2zkP9a6+ionTjPdGkKs4fCzira/17QoFgl03zbZM7SBkjn1FXbfxfbXubVreaKZwQAcEdK6iq81jbTnMkKFh0baMj8apKysRJ8zbKEHiTSJFCi9jUjjDgr/OrQutNuefOtZPqVNUZ/CWjzEn7OYyf7jkVRk8C2DH93cTp+INMRtmw0yXk29q3/ARTf7E0pv8Alwtj/wBsxWA3gVR9zUZB9U/+vTD4Gm7aq3/fs/8AxVAHRf2JpK/8uFsP+ACj7DpMPPkWifUKK50eBpe+qt/37P8A8VT18CRk/vdQlYey4oA1rW80+1jc3E0ETbyRuIBxVfUte067sLi0tZjPPJGVVY0Y8n3xVl/DOmzXAmuI2lYADDNx+QrSt7S2tE2W8EcS+iKBSaurDTs7nEWHhK+ucNcYt4z/AHuW/Kuq07QbHTQGjj3y/wDPR+T+HpWnRWcKMIbGtSvOe7CiiitTEKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//Z"
            alt
          />
        </dt>
        <dd>{{getDecrpytList.phoneNumber}}</dd>
      </dl>
    </div>
    <div class="cont">
      <ul>
        <li @click="myinterview">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1759276186,859120128&fm=26&gp=0.jpg"
            alt
          />
          <span class="middle">我的面试</span>
          <span class="right">></span>
        </li>
        <li @click="myCustomer">
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1759276186,859120128&fm=26&gp=0.jpg"
            alt
          />
          <span class="middle">客服中心</span>
          <span class="right">></span>
        </li>
      </ul>
    </div>
    <div class="phone" v-if="showPhone">
      <p>为了更好的使用我们的服务，我们需要获取你的手机号码</p>
      <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">同意</button>
    </div>

  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      list: "",
      showPhone:true
    }
  },
  computed: {
    ...mapState({
      getDecrpytList: state => state.personal.getDecrpytList
    })
    
  },
  created() {

  },
  methods: {
    ...mapActions({
      getDecrpytData: "personal/getDecrpytData",
      upphoneData: "personal/upphoneData"
    }),
    myinterview() {
      wx.navigateTo({
        url: "../interview/main"
      });
    },
    myCustomer() {
      wx.navigateTo({
        url: "../servers/main"
      });
    },
    getPhoneNumber(e) {
      this.showPhone = false
      this.getDecrpytData({
        iv: e.target.iv,
        encryptedData: e.target.encryptedData
      }); 
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.nav {
  width: 100%;
  height: 300rpx;
  background: #f5f6fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav dl dt img {
  width: 110rpx;
  height: 110rpx;
  border-radius: 50%;
  margin-left: 50rpx;
}
.cont > ul > li {
  width: 120%;
  height: 120rpx;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  color: #858585;
}
.cont > ul > li > img {
  width: 40rpx;
  height: 40rpx;
  margin-left: 20rpx;
}
.middle {
  font-size: 35rpx;
  padding-left: 30rpx;
}
.right {
  padding-left: 430rpx;
  font-size: 55rpx;
}
button {
  width: 100%;
  height: 300rpx;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
}
.none {
  display: none;
}
.block {
  display: block;
}
.phone {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.phone p {
  border-top-left-radius: 20rpx;
  border-top-right-radius: 20rpx;
  width: 70%;
  background: #fff;
  padding: 20rpx 15rpx;
  line-height: 1.5;
  font-size: 34rpx;
  box-sizing: border-box;
}
.phone button {
  width: 71%;
  height: 100rpx;
  background: #197dbf;
  color: #fff;
  border-bottom-left-radius: 20rpx;
  border-bottom-right-radius: 20rpx;
  margin-top: 670rpx;
  margin-left: 110rpx
}

</style>
