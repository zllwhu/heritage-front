<template>
  <div style="background: linear-gradient(to bottom, #c90b16, #F7CDB7FF, #c90b16);">
    <div>
      <div style="height: 70px; background-color: #ec8346; display: flex; align-items: center;">
        <div style="width: fit-content; display: flex; align-items: center; padding-left: 30px">
          <img style="width: 50px" src="/icon.png" alt=""/>
          <div
              style="display: flex; flex-direction: column; align-items: center; justify-content: center; margin-left: 10px">
            <span
                style="font-size: 20px; color: #c90b16; font-weight: bold; font-family: 'Heiti SC',serif; margin-bottom: 3px; margin-top: 5px">湖北省校园文化遗产数字信息管理平台</span>
            <span style="font-size: 9px; color: #c90b16; font-family: 'Heiti SC',serif">Hubei Province campus cultural heritage digital information intelligent platform</span>
          </div>
        </div>
        <div style="flex: 1"/>
        <div style="width: 400px; display: flex; align-items: center; padding-right: 30px;">
          <!--          <img :src="getAvatar(data.user.avatar) || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"-->
          <!--               alt=""-->
          <!--               style="width: 40px; height: 40px; border-radius: 50%"/>-->
          <!--          <span style="color: white; margin-left: 10px; font-size: 16px">{{ data.user.name }}</span>-->
          <div style="width: 100%; overflow: visible; font-family: 'Heiti SC',serif">
            <el-menu router :default-active="activePath" mode="horizontal" active-text-color="#f56c6c">
              <el-menu-item style="border-bottom: none" index="/front/feedback/message">交互反馈</el-menu-item>
              <el-menu-item style="border-bottom: none" index="/front/information/user">个人信息</el-menu-item>
            </el-menu>
          </div>
        </div>
      </div>

      <div style="width: calc(100vw - 60px); height: 1px; background-color: #c90b16; margin: 0 auto;"></div>

      <div style="height: 50px; font-family: 'Heiti SC',serif">
        <el-menu router :default-active="activePath" mode="horizontal" active-text-color="#f56c6c">
          <el-menu-item index="/front/home">平台主页</el-menu-item>
          <el-menu-item index="/front/about/introduction">关于平台</el-menu-item>
          <el-menu-item index="/front/heritage/1">遗产名录</el-menu-item>
          <el-menu-item index="/front/redmap/spirit-1">红色图谱</el-menu-item>
          <el-menu-item index="/front/archive">遗产档案</el-menu-item>
          <el-menu-item index="/front/digital/album">数字展示</el-menu-item>
          <el-menu-item index="/front/smartmanage/health">智慧管理</el-menu-item>
          <el-menu-item index="/front/expert/experts">专家观点</el-menu-item>
          <el-menu-item index="/front/tourism/policy">文旅信息</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div style="padding-left: 100px; padding-right: 100px;">
      <RouterView @updateUser="updateUser"/>
    </div>

    <div
        style="padding-top: 20px; padding-left: 100px; padding-right: 100px; display: flex; justify-content: center; align-items: center;">
      <img style="width: 600px" :src="slogan" alt=""/>
    </div>

    <div
        style="position: relative; display: flex; justify-content: center; align-items: center; width: 100%; height: 150px;">
      <img style="width: 100%; height: 100%;" :src="bottom" alt=""/>
      <div
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <div>版权声明 相关链接</div>
        <div>电话：12345678 邮箱：1234567890@163.com</div>
        <div>版权所有：武汉大学 建设运营：武汉大学</div>
        <div>武汉大学@公网备案：123456712345</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onBeforeUnmount, onMounted, reactive} from "vue";
import {useRoute} from "vue-router";
import request from "@/utils/request.js";
import slogan from '@/assets/img/slogan.png'
import bottom from '@/assets/img/bottom.png'

const data = reactive({
  user: JSON.parse(localStorage.getItem("heritage-user"))
})

const route = useRoute();
const activePath = computed(() => {
  const path = route.path;
  if (route.path.startsWith("/front/about")) {
    return "/front/about/introduction";
  }
  if (route.path.startsWith("/front/heritage")) {
    return "/front/heritage/1";
  }
  if (route.path.startsWith("/front/archive")) {
    return "/front/archive";
  }
  if (route.path.startsWith("/front/redmap")) {
    return "/front/redmap/spirit-1";
  }
  if (route.path.startsWith("/front/digital")) {
    return "/front/digital/album";
  }
  if (route.path.startsWith("/front/smartmanage")) {
    return "/front/smartmanage/health";
  }
  if (route.path.startsWith("/front/expert")) {
    return "/front/expert/experts";
  }
  if (route.path.startsWith("/front/tourism")) {
    return "/front/tourism/policy";
  }
  if (route.path.startsWith("/front/feedback")) {
    return "/front/feedback/message";
  }
  if (route.path.startsWith("/front/information")) {
    return "/front/information/user";
  }
  return path;
});

const getAvatar = (avatar) => {
  return request.defaults.baseURL + "/files/download/" + avatar;
}

const updateUser = () => {
  data.user = JSON.parse(localStorage.getItem("heritage-user"))
}

onMounted(() => {
  window.addEventListener("info-updated", updateUser);
});

onBeforeUnmount(() => {
  window.removeEventListener("info-updated", updateUser);
});
</script>

<style scoped>
.el-menu {
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: #ec8346;
  border-bottom: 0;
}

.el-menu-item {
  font-size: 16px;
  color: #fef2cb;
}

.el-menu-item:hover {
  background: #d97840 !important;
  color: #c90b16 !important;
}

.el-menu-item.is-active {
  background: #d97840 !important;
  color: #c90b16 !important;
  border-color: #c90b16 !important;
}
</style>