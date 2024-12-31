<template>
  <div>
    <!-- 选择建筑 -->
    <el-card style="margin-bottom: 10px">
      请选择视频：
      <el-select v-model="data.selectedItem" placeholder="请选择建筑" style="width: 300px">
        <el-option v-for="item in data.options" :key="item.value" :label="item.label" :value="item.value"/>
      </el-select>
    </el-card>

    <!-- 显示视频 -->
    <el-card v-if="selectedVideo" style="padding: 20px">
      <div style="display: flex; justify-content: center">
        <!-- 添加 key，确保每次选项切换时，视频会重新渲染 -->
        <video v-if="selectedVideo.url" :key="data.selectedItem" controls style="width: 100%">
          <source :src="selectedVideo.url" type="video/mp4"/>
          您的浏览器不支持 HTML5 视频标签。
        </video>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {reactive, computed, onMounted} from "vue";

// 数据和视频列表
const data = reactive({
  selectedItem: '', // 当前选择的建筑
  options: [
    {value: 'Option1', label: '关强'},
    {value: 'Option2', label: '李晓峰'},
    {value: 'Option3', label: '刘锡诚'},
    {value: 'Option4', label: '万幼楠'},
    {value: 'Option5', label: '王其亨'},
  ],
  videos: {
    Option1: {title: '关强', url: '/src/assets/video/关强.mp4'},
    Option2: {title: '李晓峰', url: '/src/assets/video/李晓峰.mp4'},
    Option3: {title: '刘锡诚', url: '/src/assets/video/刘锡诚.mp4'},
    Option4: {title: '万幼楠', url: '/src/assets/video/万幼楠.mp4'},
    Option5: {title: '王其亨', url: '/src/assets/video/王其亨.mp4'},
  },
});

// 根据 selectedItem 显示视频
const selectedVideo = computed(() => {
  return data.videos[data.selectedItem] || null;
});

// 设置默认选择第一个选项
onMounted(() => {
  if (data.options.length > 0) {
    data.selectedItem = data.options[0].value;
  }
});
</script>