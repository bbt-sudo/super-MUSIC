<template>
  <div class="reg-box">
      <div class="reg-l">
        <img src="../../../assets/logo.png" alt="">
      </div>
      <div class="reg-r">
        <form >
          <div class="reg-input">
            <label>昵称</label>
            <input type="text" v-model="form.nickname">
          </div>
          <div class="reg-input">
            <label>手机号</label>
            <input type="text" v-model="form.phone">
          </div>
          <div class="reg-input">
            <label>密码</label>
            <input type="password" v-model="form.password">
          </div>
          <div class="reg-input">
            <label>验证码</label>
            <input type="text" v-model="form.captcha">
            <span class="reg-verification" @click="sendvf">{{ seconds }}</span>
          </div>
          <span class="reg-submit" @click="submit">注册</span>
        </form>
      </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed, getCurrentInstance, Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios'
const { proxy } = getCurrentInstance() as any
/**
* 仓库
*/
let seconds: Ref<any> = ref('发送验证码');
const form = reactive({
  nickname: '',
  phone: '',
  password: '',
  captcha: ''
})
/**
* 路由对象
*/
const route = useRoute();
/**
* 路由实例
*/
const router = useRouter();

/**
 *  方法函数
 */
function regSubmit() {

}
function sendvf(){
  seconds.value = 60
  const timer = setInterval(() => {
    seconds.value = seconds.value - 1
    if(seconds.value === 0){
      clearInterval(timer)
      seconds.value = '发送验证'
    }
  }, 1000)
  axios.get('http://43.138.56.64:3000/captcha/sent',{
    params: {
      phone: form.phone
    }
  }).then(res => {
    console.log(res);
  })
  
}
function submit() {
  axios.get('http://43.138.56.64:3000/register/cellphone',{
    params: {
      ...form
    }
  }).then(res => {
    console.log(res.status);
    if(res.status === 200) {
      setTimeout(() => {
        router.push('/')
        proxy.$notification.success('注册成功!')
      })
    }
  })
}
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
.reg-box{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
form{
  width: 50vw;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 1vh;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1vw;
}
.reg-input{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1vh 0;
  position: relative;
  label{
    width: 4vw;
    display: block;
  }
    input{
      width: 30vw;
      height: 3vh;
      font-style: 0.8vw;
    }
    input:focus {
      outline: none;
      border: 3px solid var(--themeBgColor);
      border-radius: 2px;
      font-size: 1vw;
    }
    .reg-verification{
      display: block;
      position: absolute;
      right: 1vw;
      width: 6vw;
      height: 3vh;
      line-height: 3vh;
      text-align: center;
      background-color: var(--themeBgColor);
      border: none;
      color: var(--themeColor);
      border-radius: 0.3vw;
    }
  }
.reg-submit{
  width: 30vw;
  height: 6vh;
  border-radius: 1vw;
  background-color: var(--themeBgColor);
  border:2px solid var(--themeBgColor);
  margin-left: 12vw;
  display: block;
  line-height: 6vh;
  text-align: center;
  color: var(--themeColor)
}
.reg-l{
  background-color: #efefef;
  img{
    width: 33vw;
    height: 75vh;
  }
}
</style>