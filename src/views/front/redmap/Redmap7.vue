<template>
  <div>
    <img style="width: 100%" :src="banner" alt="">
    <el-card style="margin-bottom: 10px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;改革开放精神。这是改革开放和社会主义现代化建设新时期的中国共产党精神，其鲜明标识是改革开放，是中国共产党精神次第演进中产生的第三个主要形态。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;改革开放精神是在改革开放过程中不断淬炼提升的。“改革开放精神”作为一个科学概念，很早就有理论文章论及，但公开的党的文献及主要领导人的讲话，在党的十八大前，使用的多是同一范畴的其他概念，如“创造精神”“开拓精神”“创新精神”“改革的精神”“变革创新精神”“改革创新精神”等。在此基础上，习近平总书记在庆祝改革开放40周年大会上的讲话，第一次明确提出了“伟大改革开放精神”，指出：“改革开放铸就的伟大改革开放精神，极大丰富了民族精神内涵，成为当代中国人民最鲜明的精神标识！”这表明，伟大改革开放精神不是某个领域、某个地方、某一时间段、某一时间点上的具体精神形态，而是涵盖改革开放全方位全过程的主要精神形态，是这一时期各种具体精神形态主题的集中概括。改革开放精神要求解放思想、实事求是，提倡敢闯敢试、开拓创新，主张开放包容、兼容并蓄，强调科学发展、务求实效等内涵，必然体现在党和国家的各项工作中，并通过各种形式表现出来。这一时期党培育产生的具体精神形态主要包括：小岗精神，拓荒牛精神和特区精神，女排精神，浦东精神，九八抗洪精神，载人航天精神，抗击非典精神，抗震救灾精神，北京奥运精神，改革先锋精神（含孔繁森精神、杨善洲精神等）等。这些都是不同时空条件下的改革开放精神。伟大改革开放精神与伟大改革开放实践互为支撑、相互促进、相得益彰，在走向中华民族复兴道路上矗立起了新的丰碑。
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
import banner from "@/assets/img/改革开放.png";

const data = reactive({
  allData: [],
  dialogVisible: false,
  currentImage: ''
})

// 加载数据并根据分页参数传递分页信息
const load = () => {
  request.get('/system/architecture/spirit', {
    params: {
      spirit: "改革开放精神",
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