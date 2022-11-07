

<template>
  <div>
    <Nav></Nav>
    <router-view></router-view>
  </div>
 
</template>
<script setup lang="ts">
import Nav from './component/Nav/index.vue'
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

:root {
  --themeColor: #fff; // 字体色
  --themeBgColor: red; // 背景色
  --themeBorderColor:#fff; // 边框色
  --themeBgColor5:rgba(0,0,0,.5); // 半色背景色
  --themeFontSize: 2vw;
}

</style>
