<template>
  <div>
    <el-card>
      <div style="text-align: center;">
        <iframe
            src="/webgl-game/index.html"
            style="width: 100%; height: 800px; border: none;"
        ></iframe>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const data = reactive({});
</script>