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
        <div style="display: flex; justify-content: center">
          <img style="width: 200px;" :src="building.image" alt=""
               @click="handleImagePreview(building.image)"/>
        </div>
      </el-card>
    </el-space>
  </div>

  <el-dialog v-model="data.dialogVisible" width="700px" @close="data.currentImage = ''">
    <div class="image-container">
      <img :src="data.currentImage" alt="预览图" style="width: 668px; height: 501px;"/>
    </div>
  </el-dialog>
</template>

<script setup>
import '@google/model-viewer';
import {reactive, ref} from 'vue';

const data = reactive({
  buildings: [
    {name: '三维扫描 水工所模型', image: '/models/水工所/三维扫描 水工所模型.png'},
    {name: '门', image: '/models/水工所/门.png'},
    {name: '栏杆', image: '/models/水工所/栏杆.png'},
    {name: '铺作', image: '/models/水工所/铺作.png'},
    {name: '双壁柱', image: '/models/水工所/双壁柱.png'},
    {name: '庑殿顶 正脊', image: '/models/水工所/庑殿顶 正脊.png'},
    {name: '歇山顶 正脊', image: '/models/水工所/歇山顶 正脊.png'},
    {name: '歇山顶 垂脊', image: '/models/水工所/歇山顶 垂脊.png'},
    {name: '歇山顶 戗脊', image: '/models/水工所/歇山顶 戗脊.png'},
    {name: '歇山顶 山花', image: '/models/水工所/歇山顶 山花.png'},
  ],
})

const handleImagePreview = (imageUrl) => {
  data.currentImage = imageUrl; // 设置当前图片地址
  data.dialogVisible = true; // 显示图片预览弹窗
}

const modelPath = ref('/models/王树中国美术馆象山校区.glb');
</script>
