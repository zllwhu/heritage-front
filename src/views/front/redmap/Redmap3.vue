<template>
  <div>
<!--    <img style="width: 100%" :src="banner" alt="">-->
    <el-card style="margin-bottom: 10px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“三牛”精神是指为民服务孺子牛、创新发展拓荒牛、艰苦奋斗老黄牛的精神。面对人民群众日益增长的美好生活需要，争当为民服务、无私奉献的孺子牛；面对新发展阶段的新挑战新任务，争当创新发展、攻坚克难的拓荒牛；面对民族复兴伟大梦想，争当艰苦奋斗、吃苦耐劳的老黄牛。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）推动高质量发展，要发扬为民服务“孺子牛”。牛代表勤劳，踏实，可靠，服务精神。实现高质量发展，离不开高素质干部队伍。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）推动高质量发展，要做创新发展的“拓荒牛”。拓荒牛粗犷雄伟，坚韧不拔，是刚毅和力量的象征。惟改革者进，惟创新者强，惟改革创新者胜。既要当好已有事业创新的突破者，也要当好未有事业创新的开拓者。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）推动高质量发展，要做艰苦奋斗的“老黄牛”。“块块荒田水和泥，深耕细作走东西，老牛亦解韶光贵，不等扬鞭自奋蹄”。
    </el-card>
    <el-space wrap>
      <el-card v-for="(building, index) in data.allData" :key="index" class="box-card" style="width: 228px">
        <template #header>
          <div class="card-header">
            <span>{{ building.archiName }}</span>
          </div>
        </template>
        <div style="display: flex; justify-content: center">
          <img style="width: 200px; height: 150px" :src="getAvatar(building)" alt=""
               @click="handleImagePreview(building)"/>
        </div>
      </el-card>
    </el-space>
  </div>
  <el-dialog v-model="data.dialogVisible" width="700px" @close="data.currentImage = ''">
    <div class="image-container">
      <img :src="data.currentImage" alt="预览图" style="width: 668px; height: 501px;"/>
    </div>
  </el-dialog>
</template>

<script setup>
import request from "@/utils/request.js";
import {reactive} from "vue";
// import banner from "@/assets/img/海报-三牛精神.jpg";

const data = reactive({
  allData: [],
  dialogVisible: false,
  currentImage: ''
})

// 加载数据并根据分页参数传递分页信息
const load = () => {
  request.get('/system/architecture/spirit', {
    params: {
      spirit: "三牛精神",
    }
  }).then(res => {
    if (res.data) {
      data.allData = res.data;  // 存储全部数据
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
</script>