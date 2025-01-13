<template>
  <div>
    <el-space wrap>
      <!-- 建筑卡片 -->
      <el-card
          v-for="(item, index) in data.allData"
          :key="index"
          class="box-card"
          style="width: 220px"
      >
        <template #header>
          <div class="card-header">
            <span>{{ item.archiName }}</span>
          </div>
        </template>
        <div style="display: flex; justify-content: center">
          <el-empty v-if="!item.archiPerspective" :image-size="35" @click="handlePdfPreview(item)"/>
          <img
              v-if="item.archiPerspective"
              style="width: 200px; height: 160px"
              :src="getAvatar(item)"
              alt=""
              @click="handleImagePreview(item)"
          />
        </div>
      </el-card>
    </el-space>
  </div>

  <el-dialog v-model="data.dialogVisible" width="900px" @close="data.currentImage = ''">
    <el-watermark :content="['湖北省校园文化遗产数字信息管理平台']">
    <div class="image-container">
      <img :src="data.currentImage" alt="预览图" style="width: 890px; height: 680px;"/>
    </div>
    </el-watermark>
  </el-dialog>
</template>

<script setup>
import {reactive} from "vue";
import request from "@/utils/request.js";

// 数据状态
const data = reactive({
  allData: [], // 建筑数据
  dialogVisible: false,
});

// 加载建筑数据
const load = () => {
  request
      .get("/system/whuarchi/selectPage", {
        params: {
          pageNum: 1,
          pageSize: 100000,
        },
      })
      .then((res) => {
        if (res.data) {
          data.allData = res.data.list;
        } else {
          console.error("接口返回的数据格式不正确");
        }
      })
      .catch((error) => {
        console.error("请求失败:", error);
      });
};
load();

// 获取建筑图片路径
const getAvatar = (item) => {
  return `${request.defaults.baseURL}/system/whuarchi/download/${item.archiPerspective}`;
};

const handleImagePreview = (imageUrl) => {
  data.currentImage = getAvatar(imageUrl); // 设置当前图片地址
  data.dialogVisible = true; // 显示图片预览弹窗
  data.form = JSON.parse(JSON.stringify(imageUrl))
}
</script>
