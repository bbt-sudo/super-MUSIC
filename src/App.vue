

<template>
  <div>
    <div class="nav">
      <div class="logo">
        <img src="./assets/logo.png" alt="">
        <p>很赞音乐</p>
      </div>
      <div class="search">
        <n-input class="ser" size="large" v-model:value="value" type="text" placeholder="基本的 Input" />
      </div>
      <div class="login">
        <n-button class="login-btn" color="#8a2be2" @click="lgoin">
          登录
      </n-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
 
</template>
<script setup lang="ts">
import { useDialog } from 'naive-ui';
import { Ref, ref } from 'vue'
const value: Ref<string> = ref('')

const lgoin = () => {
  useDialog().info(({
      title: "提示",
      content: "您确定要退出登录吗",
      positiveText: "确定",
      negativeText: "取消",
  }));
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
    .ser{
      width: 30vw;
      height: 5vh;
      background-color: var(--themeBgColor);
      color: var(--themeColor);
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
