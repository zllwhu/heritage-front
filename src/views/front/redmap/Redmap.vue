<template>
  <div>
    <div style="display: flex; padding-top: 30px; padding-bottom: 30px;">
      <el-card style="width: 220px; min-height: calc(100vh - 160px)">
        <el-menu router :default-active="activePath" style="border: 0" active-text-color="#f56c6c">
          <el-menu-item index="/front/redmap/spirit-1">
            <el-icon>
              <Place/>
            </el-icon>
            建党精神
          </el-menu-item>
          <el-menu-item index="/front/redmap/spirit-2">
            <el-icon>
              <TrophyBase/>
            </el-icon>
            抗战精神
          </el-menu-item>
          <el-menu-item index="/front/redmap/spirit-3">
            <el-icon>
              <User/>
            </el-icon>
            三牛精神
          </el-menu-item>
          <el-menu-item index="/front/redmap/spirit-4">
            <el-icon>
              <Coin/>
            </el-icon>
            科学家精神
          </el-menu-item>
          <el-menu-item index="/front/redmap/spirit-5">
            <el-icon>
              <Coin/>
            </el-icon>
            革命精神
          </el-menu-item>
          <el-menu-item index="/front/redmap/spirit-6">
            <el-icon>
              <Coin/>
            </el-icon>
            艰苦创业精神
          </el-menu-item>
          <el-menu-item index="/front/redmap/spirit-7">
            <el-icon>
              <Coin/>
            </el-icon>
            改革开放精神
          </el-menu-item>
          <el-menu-item index="/front/redmap/spirit-8">
            <el-icon>
              <Coin/>
            </el-icon>
            新时代伟大奋斗精神
          </el-menu-item>
        </el-menu>
      </el-card>

      <div style="flex: 1; width: 0; padding-left: 10px">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, computed} from "vue";
import {useRoute} from "vue-router";
import {Coin, Place, TrophyBase, User} from "@element-plus/icons-vue";

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