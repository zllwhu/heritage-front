<script setup>
import {reactive, computed, ref, onMounted} from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';
import {ArrowLeft, ArrowRight} from "@element-plus/icons-vue";

// 可选样式
import 'vue-pdf-embed/dist/styles/annotationLayer.css';
import 'vue-pdf-embed/dist/styles/textLayer.css';

// 数据和 PDF 列表
const data = reactive({
  selectedItem: '', // 当前选择的建筑
  options: [
    {value: 'Option1', label: '武大校园历史建筑历史沿革', pdf: '/nowadays/001武大校园历史建筑历史沿革.pdf'},
    {value: 'Option2', label: '武大校园历史建筑影响因素', pdf: '/nowadays/002武大校园历史建筑影响因素.pdf'},
    {value: 'Option3', label: '武大校园历史建筑分析与评估', pdf: '/nowadays/003武大校园历史建筑分析与评估.pdf'},
    {value: 'Option4', label: '武大校园建筑现状调查总表', pdf: '/nowadays/004武大校园建筑现状调查总表.pdf'},
    {value: 'Option5', label: '武大校园文保单位', pdf: '/nowadays/005武大校园文保单位.pdf'},
    // {value: 'Option6', label: '文保单位保护控制图则', pdf: '/nowadays/006文保单位保护控制图则.pdf'},
  ],
});

// PDF 页数状态
const currentPage = ref(1);
const totalPages = ref(0);

// 根据 `selectedItem` 获取当前 PDF 的源文件
const selectedPdf = computed(() => {
  const selectedOption = data.options.find(option => option.value === data.selectedItem);
  return selectedOption ? selectedOption.pdf : '';
});

// 当 PDF 加载完成时更新总页数
const onPdfLoaded = (pdf) => {
  totalPages.value = pdf.numPages;
  currentPage.value = 1; // 切换文件时重置为第一页
};

// 翻页功能
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

// 设置默认选项
onMounted(() => {
  if (data.options.length > 0) {
    data.selectedItem = data.options[0].value;
  }
});
</script>

<template>
  <div>
    <!-- 文件选择 -->
    <el-card style="margin-bottom: 10px; font-size: 16px">
      请选择文件：
      <el-select v-model="data.selectedItem" placeholder="请选择文件" style="width: 300px">
        <el-option v-for="item in data.options" :key="item.value" :label="item.label" :value="item.value"/>
      </el-select>
    </el-card>

    <!-- PDF 显示 -->
    <el-card v-if="selectedPdf" style="margin-bottom: 10px; padding: 20px;">
      <!-- 翻页按钮 -->
      <div style="margin-bottom: 10px; text-align: center;">
        <el-button :icon="ArrowLeft" @click="prevPage" :disabled="currentPage === 1" style="margin-right: 10px;">
          上一页
        </el-button>
        <span style="font-size: 16px">第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
        <el-button @click="nextPage" :disabled="currentPage === totalPages" style="margin-left: 10px;">
          下一页
          <el-icon class="el-icon--right">
            <ArrowRight/>
          </el-icon>
        </el-button>
      </div>

      <!-- PDF 内容 -->
      <VuePdfEmbed
          class="pdf"
          style="border: 2px solid #eeeeee; width: 100%"
          annotation-layer
          text-layer
          :source="selectedPdf"
          :page="currentPage"
          @loaded="onPdfLoaded"
      />
    </el-card>
  </div>
</template>
