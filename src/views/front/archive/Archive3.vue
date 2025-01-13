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
          <el-empty v-if="!item.archiCover" :image-size="35" @click="handlePdfPreview(item)"/>
          <img
              v-if="item.archiCover"
              style="width: 200px; height: 160px"
              :src="getAvatar(item)"
              alt=""
              @click="handlePdfPreview(item)"
          />
        </div>
      </el-card>
    </el-space>

    <!-- PDF 预览弹窗 -->
    <el-dialog v-model="data.dialogVisible" width="80%" @close="closeDialog">
      <el-watermark :content="['湖北省校园文化遗产数字信息管理平台']">
        <div v-if="selectedPdf">
          <!-- PDF 内容 -->
          <VuePdfEmbed
              class="pdf"
              style="border: 2px solid #eeeeee; width: 100%"
              annotation-layer
              text-layer
              :source="selectedPdf"
              @loaded="onPdfLoaded"
              @error="onPdfError"
          />
        </div>
        <el-empty v-else description="未找到对应的 PDF 文件"/>
      </el-watermark>
    </el-dialog>
  </div>
</template>

<script setup>
import {reactive, ref, computed} from "vue";
import VuePdfEmbed from "vue-pdf-embed";
import request from "@/utils/request.js";

// 数据状态
const data = reactive({
  allData: [], // 建筑数据
  dialogVisible: false, // PDF 预览弹窗
  currentPdf: "", // 当前 PDF 文件路径
  currentLabel: "", // 当前 PDF 文件名称
});

const currentPage = ref(1); // 当前页码
const totalPages = ref(0); // 总页数

// 获取 PDF 文件路径
const getPdfPath = (item) => {
  // 假设 PDF 文件存放在 public/pdf 目录中
  return `/whu_archi/${item.archiName}.pdf`;
};

// 打开 PDF 预览
const handlePdfPreview = (item) => {
  data.currentPdf = getPdfPath(item);
  data.currentLabel = item.archiName;
  data.dialogVisible = true;
  currentPage.value = 1; // 重置到第一页
  console.log("Selected PDF Path:", data.currentPdf);
};

// 当 PDF 加载完成时更新总页数
const onPdfLoaded = (pdf) => {
  totalPages.value = pdf.numPages;
};

// 捕获 PDF 加载错误
const onPdfError = (error) => {
  console.error("PDF 加载失败:", error);
};

// 关闭弹窗
const closeDialog = () => {
  data.currentPdf = "";
};

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
  return `${request.defaults.baseURL}/system/whuarchi/download/${item.archiCover}`;
};

// 计算当前 PDF 文件
const selectedPdf = computed(() => data.currentPdf);
const currentPdfLabel = computed(() => data.currentLabel);
</script>
