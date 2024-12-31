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
    {value: 'Option1', label: '红色沃土绽放文旅之花 湖北红色旅游高质量发展走笔', pdf: '/information/红色沃土绽放文旅之花 湖北红色旅游高质量发展走笔.pdf'},
    {value: 'Option2', label: '湖北6条线路入选“建党百年红色旅游百条精品线路', pdf: '/information/湖北6条线路入选“建党百年红色旅游百条精品线路.pdf'},
    {value: 'Option3', label: '湖北发布10条红色旅游主题线路', pdf: '/information/湖北发布10条红色旅游主题线路.pdf'},
    {value: 'Option4', label: '湖北省红色旅游“双十佳”评选结果出炉', pdf: '/information/湖北省红色旅游“双十佳”评选结果出炉.pdf'},
    {value: 'Option5', label: '省文化和旅游厅关于印发《湖北省文物事业发展“十四五”规划》的通知', pdf: '/information/省文化和旅游厅关于印发《湖北省文物事业发展“十四五”规划》的通知.pdf'},
    {value: 'Option6', label: '文旅信息', pdf: '/information/文旅信息.pdf'},
    {value: 'Option7', label: '走进英雄城市 踏访红色武汉', pdf: '/information/走进英雄城市 踏访红色武汉.pdf'},
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
    <el-card style="margin-bottom: 10px">
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
        <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
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
