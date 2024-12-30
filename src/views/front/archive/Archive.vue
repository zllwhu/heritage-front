<template>
  <div style="display: flex; justify-content: center; padding-top: 30px; flex-direction: column">
    <el-space v-if="data.total" wrap style="display: flex; justify-content: center; margin-bottom: 30px" size="large">
      <el-card class="box-card" style="width: 260px" @click="loadWhu">
        <template #header>
          <div class="card-header">
            <span>武汉大学建筑</span>
          </div>
        </template>
        <div style="display: flex; justify-content: center">
          <img style="width: 240px; height: 180px" src="@/assets/img/武汉大学早期建筑分布图.svg" alt=""/>
        </div>
        <template #footer>
          <div class="card-footer">
            现址：<span>武汉大学</span>
          </div>
        </template>
      </el-card>
      <el-card v-for="(item, index) in data.allData" :key="index" class="box-card" style="width: 260px">
        <template #header>
          <div class="card-header">
            <span>{{ item.archiName }}</span>
          </div>
        </template>
        <div style="display: flex; justify-content: center">
          <el-empty v-if="!item.archiCover" :image-size="55" @click="handleImagePreview(item)"/>
          <img v-if="item.archiCover" style="width: 240px; height: 180px" :src="getAvatar(item)" alt=""
               @click="handleImagePreview(item)"/>
        </div>
        <template #footer>
          <div class="card-footer">
            现址：<span>{{ item.archiSchool }}</span>
          </div>
        </template>
      </el-card>
    </el-space>
  </div>

  <el-dialog v-model="data.dialogVisible" width="79%" @close="data.currentImage = ''">
    <!--    <div class="image-container">-->
    <!--      <img :src="data.currentImage" alt="预览图" style="width: 668px; height: 501px;"/>-->
    <!--    </div>-->
    <el-form ref="formRef" :rules="data.rules" :model="data.form" label-width="auto"
             style="padding-right: 20px; padding-top: 20px" disabled>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="封面图案：" label-position="right" prop="archiCover">
            <img :src="data.currentImage" alt="预览图" style="height: 180px"/>
          </el-form-item>
          <el-form-item label="名称：" label-position="right" prop="archiName">
            <el-input v-model="data.form.archiName" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="别名：" label-position="right" prop="archiNickname">
            <el-input v-model="data.form.archiNickname" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="年代：" label-position="right" prop="archiYear">
            <el-input v-model="data.form.archiYear" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="年代说明：" label-position="right" prop="archiYearinfo">
            <el-input v-model="data.form.archiYearinfo" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="文物类别：" label-position="right" prop="archiCategory">
            <el-input v-model="data.form.archiCategory" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="保护级别：" label-position="right" prop="archiLevel">
            <el-input v-model="data.form.archiLevel" autocomplete="off"/>
          </el-form-item>

        </el-col>

        <el-col :span="12">
          <el-form-item label="公布年份：" label-position="right" prop="archiAnnouncementYear">
            <el-input-number style="width: 200px" v-model="data.form.archiAnnouncementYear" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="公布批次：" label-position="right" prop="archiAnnouncementBatch">
            <el-input-number style="width: 200px" v-model="data.form.archiAnnouncementBatch" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="省份：" label-position="right" prop="archiProvince">
            <el-input v-model="data.form.archiProvince" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="城市：" label-position="right" prop="archiCity">
            <el-input v-model="data.form.archiCity" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="区：" label-position="right" prop="archiDistrict">
            <el-input v-model="data.form.archiDistrict" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="街道：" label-position="right" prop="archiStreet">
            <el-input v-model="data.form.archiStreet" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="学校：" label-position="right" prop="archiSchool">
            <el-input v-model="data.form.archiSchool" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="经度：" label-position="right" prop="archiLongitude">
            <el-input v-model="data.form.archiLongitude" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="纬度：" label-position="right" prop="archiLatitude">
            <el-input v-model="data.form.archiLatitude" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="海拔：" label-position="right" prop="archiHeight">
            <el-input-number style="width: 200px" v-model="data.form.archiHeight" autocomplete="off"/>
          </el-form-item>

        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col>
          <el-form-item label="红色精神：" label-position="right" prop="archiSpirit">
            <el-input v-model="data.form.archiSpirit" autocomplete="off"/>
          </el-form-item>
          <el-form-item label="建筑简介：" label-position="right" prop="archiDetail">
            <el-input :rows="2" type="textarea" v-model="data.form.archiDetail"/>
          </el-form-item>
          <el-form-item label="红色故事：" label-position="right" prop="archiStoryabstract">
            <el-input :rows="2" type="textarea" v-model="data.form.archiStoryabstract" autocomplete="off"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>

  <el-dialog v-model="data.dialogWhuVisible" width="79%" @close="data.currentImage = ''">
    <RouterView/>
  </el-dialog>
</template>

<script setup>
import {reactive} from "vue";
import request from "@/utils/request.js";
import router from "@/router/index.js";

const data = reactive({
  allData: [],
  total: 0,
  dialogVisible: false,
  dialogWhuVisible: false,
  currentImage: '',
  form: {},
})

// 加载数据并根据分页参数传递分页信息
const load = () => {
  request.get('/system/architecture/selectPage', {
    params: {
      pageNum: 1,
      pageSize: 100000,
    }
  }).then(res => {
    if (res.data) {
      data.allData = res.data.list;  // 存储全部数据
      data.total = res.data.total;  // 总数据条数
      console.log(res)
    } else {
      console.error("接口返回的数据格式不正确");
    }
  }).catch(error => {
    console.error("请求失败:", error);
  });
};
load();

const getAvatar = (item) => {
  if (item.tag === 1) {
    return request.defaults.baseURL + "/system/whuarchi/download/" + item.archiCover;
  } else {
    return request.defaults.baseURL + "/system/architecture/download/" + item.archiCover;
  }
}

const handleImagePreview = (imageUrl) => {
  data.currentImage = getAvatar(imageUrl); // 设置当前图片地址
  data.dialogVisible = true; // 显示图片预览弹窗
  data.form = JSON.parse(JSON.stringify(imageUrl))
}

const loadWhu = () => {
  data.dialogWhuVisible = true;
  router.push('/front/archive/whu')
}
</script>