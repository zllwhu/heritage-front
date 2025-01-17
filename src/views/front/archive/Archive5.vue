<template>
  <div>
    <el-card>
      <template #footer>
        <div class="card-footer">
          <span>视频来源：...</span>
        </div>
      </template>
      <div style="display: flex; justify-content: center">
        <video controls style="width: 100%">
          <source src="/src/assets/video/童乔慧.mp4" type="video/mp4"/>
          您的浏览器不支持 HTML5 视频标签。
        </video>
      </div>
    </el-card>
  </div>
</template>

<script setup>

</script>
