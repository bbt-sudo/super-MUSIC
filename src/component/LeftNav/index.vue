<template>
  <div >
    <div class="left-nav">
        <div class="top-logo">
          <img src="../../assets/logo.png" alt="">
          <p>很赞音乐</p>
          
        </div>
        <div class="nav-list" @click="articve">
          <p>在线音乐</p>
          <span @click="router.push('/recommend')" tabindex="1">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tuijian1"></use>
            </svg>
            推荐
          </span>
          <span tabindex="2">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yinleyule"></use>
            </svg>
            音乐馆
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shipin"></use>
            </svg>
            视频
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-diantai"></use>
            </svg>
            电台
          </span>
        </div>
        <div class="nav-list">
          <p>我的音乐</p>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xihuanfill"></use>
            </svg>
            我喜欢
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-diannao"></use>
            </svg>
            本地和下载
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zuijinlaifang"></use>
            </svg>
            最近播放
          </span>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shiting"></use>
            </svg>
            试听列表
          </span>
        </div>
      </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
/**
* 仓库
*/

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
function articve (e: any) {
  console.log(e.tigger);
  
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
.left-nav{
  background-color: #fff;
  height: 100vh;
}
.l{
  background-color: #fff;
  .left-nav{
    width: 15vw;
    height: 97.5vh;
  }
  .top-logo{
    display: flex;
    align-items: center;
    color: var(--themeColor);
    font-size: var(--themeFontSize);
    flex-direction: column;
    align-content: center;
    img{
      display: block;
      width: 4vw;
      height: 8vh;
    }
    p{
      color: black
    }
  }
  .nav-list{
    margin-top: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
      width: 8vw;
      color: #4d4b4bea;
      height: 4vh;
      line-height: 4vh;
      font-size: 1vw;
    }
    span{
      width: 11vw;
      font-size: 1.5vw;
      height: 4vh;
      line-height: 4vh;
      margin-bottom: 0.8vw;
    }
    span:hover {
      background-color: #C5E99B;
      border-radius: 0.5vw;
      border: 1px black solid;
    }
  }
}
.articve{
    background-color: #C5E99B;
}
</style>