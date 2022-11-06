

<template>
  <div>
    <div class="nav">
      <div class="logo">
        <img src="./assets/logo.png" alt="">
        <p>很赞音乐</p>
      </div>
      <div class="search">
        <n-input placeholder="搜索">
          
        </n-input>
      </div>
    </div>
    <router-view></router-view>
  </div>
 
</template>
<script setup lang="ts">
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
    n-input{
      width: 40vw;
      height: 10vh;
      display: block;
    }
  }
}
</style>
