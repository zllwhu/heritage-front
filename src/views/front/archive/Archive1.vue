<template>
  <el-watermark :content="['湖北省校园文化遗产数字信息智慧平台']">
    <div>
      <div style="display: flex;">
        <el-card style="width: 220px; min-height: calc(100vh - 160px)">
          <el-menu router :default-active="activePath" style="border: 0" active-text-color="#f56c6c">
            <el-menu-item index="/front/archive/whu/nowadays">
              <el-icon>
                <Document/>
              </el-icon>
              现状分析
            </el-menu-item>
            <el-menu-item index="/front/archive/whu/items">
              <el-icon>
                <Document/>
              </el-icon>
              遗产简介
            </el-menu-item>
            <el-menu-item index="1">
              <el-icon>
                <Document/>
              </el-icon>
              三维模型
            </el-menu-item>
            <el-menu-item index="1">
              <el-icon>
                <Document/>
              </el-icon>
              专家解读
            </el-menu-item>
          </el-menu>
        </el-card>

        <div style="flex: 1; width: 0; padding-left: 10px">
          <RouterView/>
        </div>
      </div>
    </div>
  </el-watermark>
</template>

<script setup>
import {computed, reactive} from "vue";
import {Document, School, User} from "@element-plus/icons-vue";
import {useRoute} from "vue-router";

const data = reactive({})

const route = useRoute();
const activePath = computed(() => route.path);
</script>

<style>
.el-menu-item:hover {
  background: floralwhite !important;
  color: #f56c6c !important;
}

.el-menu-item.is-active {
  background: floralwhite !important;
  color: #f56c6c !important;
}
</style>