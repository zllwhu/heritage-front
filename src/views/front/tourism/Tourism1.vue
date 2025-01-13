<script setup>
import {reactive, ref, computed} from 'vue';
import VuePdfEmbed from 'vue-pdf-embed';
import {ArrowLeft, ArrowRight} from "@element-plus/icons-vue";

// 可选样式
import 'vue-pdf-embed/dist/styles/annotationLayer.css';
import 'vue-pdf-embed/dist/styles/textLayer.css';

// 数据和 PDF 列表
const data = reactive({
  selectedItem: '', // 当前选择的文件
  options: [
    {value: 'Option1', label: '保用并重 盘活红色资源', pdf: '/policy/保用并重 盘活红色资源.pdf'},
    {
      value: 'Option2',
      label: '国家文物局关于印发《革命文物保护利用“十四五”专项规划》的通知',
      pdf: '/policy/国家文物局关于印发《革命文物保护利用“十四五”专项规划》的通知.pdf'
    },
    {
      value: 'Option3',
      label: '国务院办公厅关于印发“十四五”文物保护和科技创新规划的通知',
      pdf: '/policy/国务院办公厅关于印发“十四五”文物保护和科技创新规划的通知.pdf'
    },
    {value: 'Option4', label: '红色资源 习近平高度重视', pdf: '/policy/红色资源 习近平高度重视.pdf'},
    {value: 'Option5', label: '数字赋能红色资源的保护传承', pdf: '/policy/数字赋能红色资源的保护传承.pdf'},
    {
      value: 'Option6',
      label: '数字化为红色文化资源保护传承再添动能',
      pdf: '/policy/数字化为红色文化资源保护传承再添动能.pdf'
    },
    {
      value: 'Option7',
      label: '习近平总书记：加强文化遗产保护传承 弘扬中华优秀传统文化',
      pdf: '/policy/习近平总书记：加强文化遗产保护传承 弘扬中华优秀传统文化.pdf'
    },
    {
      value: 'Option8',
      label: '习近平总书记：用好红色资源 赓续红色血脉 努力创造无愧于历史和人民的新业绩',
      pdf: '/policy/习近平总书记：用好红色资源 赓续红色血脉 努力创造无愧于历史和人民的新业绩.pdf'
    },
    {value: 'Option9', label: '在新时代大力弘扬红色文化', pdf: '/policy/在新时代大力弘扬红色文化.pdf'},
    {
      value: 'Option10',
      label: '中共中央办公厅 国务院办公厅印发《关于实施革命文物保护利用工程（2018－2022年）的意见》',
      pdf: '/policy/中共中央办公厅 国务院办公厅印发《关于实施革命文物保护利用工程（2018－2022年）的意见》.pdf'
    },
  ],
  dialogVisible: false, // 控制弹窗显示
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

// 点击文件名时打开弹窗
const openPdfDialog = (value) => {
  data.selectedItem = value;
  data.dialogVisible = true;
};
</script>

<template>
  <div>
    <!-- 文件列表 -->
    <el-card style="margin-bottom: 10px;">
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li
            v-for="item in data.options"
            :key="item.value"
            style="padding: 10px; border-bottom: 1px solid #ebebeb; cursor: pointer;"
            @click="openPdfDialog(item.value)"
        >
          <el-link>{{ item.label }}</el-link>
        </li>
      </ul>
    </el-card>

    <!-- 弹窗 -->
    <el-dialog v-model="data.dialogVisible" width="80%">
      <!-- PDF 显示 -->
      <div v-if="selectedPdf">
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
            style="border: 2px solid #eeeeee; width: 100%;"
            annotation-layer
            text-layer
            :source="selectedPdf"
            :page="currentPage"
            @loaded="onPdfLoaded"
        />
      </div>
    </el-dialog>
  </div>
</template>