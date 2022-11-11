<template>
  <div id="recommend">
    <p id="title">
      推荐
    </p>
    <div class="jrtj">
      <p>name今日为你推荐</p>
      <div class="recommend-box">
        <div class="gxdt-box">
          <img src="https://image.meiye.art/pic_1628409280386?imageMogr2/thumbnail/450x/interlace/1" alt="">
          <div class="gxdt-content">
            <p>一世人不了解</p>
            <p>大川Dietry1</p>
            <div class="gxdt-bt">
              <a-button><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xiayigexiayishou"></use></svg></a-button>
              <a-button> <svg class="icon" aria-hidden="true"><use xlink:href="#icon-shoucang"></use></svg></a-button>
              <a-button> <svg class="icon" aria-hidden="true"><use xlink:href="#icon-icon"></use></svg></a-button>
              <a-button> <svg class="icon" aria-hidden="true"><use xlink:href="#icon-pinglun"></use></svg></a-button>
            </div>
          </div>
        </div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
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
#recommend{
  
  width: 83vw;
  height: 87.5vh;
  
  margin: 0 auto;
  margin-top: 1vw;
  overflow: hidden;
}
#title{
  font-size: 2.8vw;
  font-weight: bold;
}
.jrtj{
  p{
    font-size: 1.5vw;
    margin-top: 1vw;
  }
  .recommend-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1vw;
    .gxdt-box{
    width: 23vw;
    height: 22vh;
    border-radius: 0.5vw;
    background-color: black;
    color: var(--themeColor);
  }
  .box{
    width: 15vw;
    height: 15vh;
    background-color: aquamarine;
  }
  }
  
}
.gxdt-box{
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 10vw;
    height: 13vh;
    border-radius: 0.5vw;
  }
  .gxdt-content p:nth-child(2){
    font-size: 1vw;
    color: #6e6b6b;
  }
  .gxdt-bt{
    margin-top: 0.5vw;
    width: 12vw;
    display: flex;
    justify-content: space-between;
    .arco-btn{
      padding: 0;
    }
    .icon{
      width: 2.5vw;
      height: 3vh;
    }
    button{
      background-color: rgb(85 0 0 / 10%);
    }
  }
}
</style>