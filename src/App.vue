

<template>
  <div class="app">
    <div class="l">
      <LeftNav></LeftNav>
    </div>
    <div class="r">
      <TopNav></TopNav>
      <router-view></router-view>
    </div>
  </div>
 
</template>
<script setup lang="ts">
import TopNav from './component/TopNav/index.vue'
import LeftNav from './component/LeftNav/index.vue'
import { Ref, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

</script>
<style lang="less">
body{
  background-color: #efefef;
}
*{
  padding: 0;
  margin: 0;
}
.icon{
  width: 2vw;
  height: 1em;
  vertical-align: -0.25vw;
  fill: currentColor;
  overflow: hidden;
}
:root {
  --themeColor: #fff; // 字体色
  --themeBgColor: red; // 背景色
  --themeBorderColor:#fff; // 边框色
  --themeBgColor5:rgba(0,0,0,.5); // 半色背景色
  --themeFontSize: 2vw;
}
.app{
  display: flex;
  height: 100vh;
}
</style>
