<template>
 <div class="nav">
      <div class="logo">
        <img src="../../assets/logo.png" alt="">
        <p>很赞音乐</p>
      </div>
      <div class="search">
        <a-input-search v-model:value="value" class="search-input" placeholder="搜索歌曲"/>
      </div>
      <div class="login">
       <a-popover title="登录/注册" trigger="click">
        <div class="login-btn" :long="true">
          <a-avatar :style="{ backgroundColor: '#3370ff' }" :size="64">
            <IconUser />
          </a-avatar>
          <span>未登录</span>
        </div>
          <template #content class="btn-box">
            <a-button type="primary" style="margin-right: 1px; background-color: var(--themeBgColor);">登录</a-button>
            <a-button type="primary" style="background-color: var(--themeBgColor);" @click="reg">注册</a-button>
          </template>
        </a-popover>
      </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed, Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

/**
* 仓库
*/
const value: Ref<string> = ref('')

/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
* 数据部分
*/
function reg() {
  router.push('/user/register')
}
const data = reactive({})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
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
      width: 4vw;
      height: 8vh;
    }
  }
  .search{
    .search-input{
      width: 30vw;
      height: 5vh;
      color: black;
    }
  }
  .login{
    margin-right: 10px;
    .login-btn{
      span{
        color: var(--themeColor);
      }
    }
  }
}
 /deep/ .arco-popover-popup-content{
          display: flex;
          width: 20vw;
}
</style>