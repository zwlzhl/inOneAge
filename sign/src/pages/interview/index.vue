<template>
  <div class="wrap">
    <div class="test">
      <div class="testNav">
        <div :class="{'selected':tab === 1,'testTitle':true}" @click="changTab(1)">未开始</div>
        <div :class="{'selected':tab === 2,'testTitle':true}" @click="changTab(2)">已打卡</div>
        <div :class="{'selected':tab === 3,'testTitle':true}" @click="changTab(3)">已放弃</div>
        <div :class="{'selected':tab === 4,'testTitle':true}" @click="changTab(4)">全部</div>
      </div>
      <div class="none" v-if="list.length === 0">
          <p>当前分类还没有面试!</p>
      </div>
      <div class="content" v-else>
        <div v-if="tab===1">1</div>
        <div v-else-if="tab===2">2</div>
        <div v-else-if="tab===3">3</div>
        <div v-else>4</div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 1,
      list: []
    };
  },
  methods: {
    changTab(index) {
      this.tab = index;
    }
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
}
.testNav {
    width: 100%;
    height: 100rpx;
    display: flex;
}
.testNav div {
    flex: 1;
    line-height: 100rpx;
    text-align: center
}
.selected {
    color: #217AB7;
    border-bottom: 1px solid #217AB7
}
.content {
    margin: 0;
    padding: 0
}
.none {
    width: 100%;
    height: 200rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc
}
</style>
