

<template>
  <div>
    <div class="nav">
      <div class="logo">
        <img src="./assets/logo.png" alt="">
        <p>很赞音乐</p>
      </div>
      <div class="search">
        <a-input-search class="search-input" placeholder="搜索歌曲"/>
      </div>
      <div class="login">
       
      </div>
    </div>
    <router-view></router-view>
  </div>
 
</template>
<script setup lang="ts">

import { Ref, ref } from 'vue'
const value: Ref<string> = ref('')

const lgoin = () => {

}
</script>
<style lang="less">
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
.nav{
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  background-color: var(--themeBgColor);
  .logo{
    display: flex;
    align-items: center;
    color: var(--themeColor);
    font-size: var(--themeFontSize);
    img{
      display: block;
      width: 10vw;
      height: 10vh;
    }
  }
  .search{
    .search-input{
      width: 30vw;
      height: 5vh;
      color: rgb(255, 255, 255);
    }
  }
  .login{
    margin-right: 10px;
    .login-btn{
      height: 7vh;
      width: 8vw;
    }
  }
}
</style>
