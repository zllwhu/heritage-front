<template>
  <div>
    <!--    <el-card style="margin-bottom: 10px">-->
    <!--      <template #header>-->
    <!--        <div class="card-header">-->
    <!--          <span>中国美术馆象山校区</span>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--      <model-viewer-->
    <!--          :src="modelPath"-->
    <!--          alt="A 3D model of a helmet"-->
    <!--          auto-rotate-->
    <!--          camera-controls-->
    <!--          ar-->
    <!--          style="width: 100%; height: 500px; background-color: #eee;"/>-->
    <!--    </el-card>-->
    <el-space wrap>
      <el-card v-for="(building, index) in data.buildings" :key="index" class="box-card" style="width: 236px">
        <template #header>
          <div class="card-header">
            <span>{{ building.name }}</span>
          </div>
        </template>
        <div style="height: 200px; display: flex; justify-content: center; align-items: center">
          <img
              style="max-width: 100%; max-height: 100%; object-fit: contain;"
              :src="building.image"
              alt=""
              @click="handleImagePreview(building.url)"
          />
        </div>
      </el-card>
    </el-space>
  </div>

  <el-dialog
      v-model="data.dialogVisible"
      width="50%"
      @close="data.currentUrl = ''"
  >
    <iframe
        v-if="data.currentUrl"
        :src="data.currentUrl"
        style="width: 100%; height: 500px;"
    ></iframe>
  </el-dialog>
</template>

<script setup>
import '@google/model-viewer';
import {reactive, ref} from 'vue';

const data = reactive({
  buildings: [
    {
      name: '三维扫描 水工所模型',
      image: '/models/水工所/institute/三维扫描 水工所模型.webp',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174385&hash=81a3f193d6d9795cd283487a34bad101'
    },
    {
      name: '台基层 栏杆',
      image: '/models/水工所/institute/台基层 栏杆.png',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174108&hash=87ad772556cd824645da79587e4b6170'
    },
    {
      name: '屋身层 双檐柱',
      image: '/models/水工所/institute/屋身层 双檐柱.png',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174109&hash=c61487b383886e8ae4c2a6c0f84f2fa8'
    },
    {
      name: '屋身层 门',
      image: '/models/水工所/institute/屋身层 门.png',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174110&hash=61ea526a180cd200d5dee32799226248'
    },
    {
      name: '铺作层 斗拱',
      image: '/models/水工所/institute/铺作层 斗拱.png',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174113&hash=ef50426b7ea4f6ee6af2033abdab9d45'
    },
    {
      name: '庑殿顶 正脊',
      image: '/models/水工所/institute/庑殿顶 正脊.png',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174116&hash=148aac4f55b54863d0b0bc815e0f5386'
    },
    {
      name: '歇山顶 正脊',
      image: '/models/水工所/institute/歇山顶 正脊.png',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174123&hash=e88d97ffd44479ee0d95d10322bb413a'
    },
    {
      name: '歇山顶 垂脊',
      image: '/models/水工所/institute/歇山顶 垂脊.png',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174128&hash=782c976500a3339e505299004b7393ba'
    },
    {
      name: '歇山顶 戗脊',
      image: '/models/水工所/institute/歇山顶 戗脊.png',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174129&hash=000eec65c0da476bb69d32d8f5d11d6d'
    },
    {
      name: '歇山顶 山花',
      image: '/models/水工所/institute/歇山顶 山花.png',
      url: 'https://www.ccbim.com/front/index.html#/moreFileShare?qrcodeid=174130&hash=ff164e6f57e14e40c0812ce88834aeb7'
    },
  ],
})

const handleImagePreview = (url) => {
  data.currentUrl = url; // 设置当前图片地址
  data.dialogVisible = true; // 显示图片预览弹窗
}

const modelPath = ref('/models/王树中国美术馆象山校区.glb');
</script>
