<template>
  <div>
    <img style="width: 100%" :src="banner" alt="">
    <el-card style="margin-bottom: 10px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;科学家精神是胸怀祖国、服务人民的爱国精神，勇攀高峰、敢为人先的创新精神，追求真理、严谨治学的求实精神，淡泊名利、潜心研究的奉献精神，集智攻关、团结协作的协同精神，甘为人梯、奖掖后学的育人精神。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020年9月11日，习近平总书记在北京主持召开科学家座谈会并发表重要讲话，他指出：“科学成就离不开精神支撑。科学家精神是科技工作者在长期科学实践中积累的宝贵精神财富。”
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大力弘扬科学家精神，在全社会形成尊重知识、崇尚创新、尊重人才、热爱科学、献身科学的浓厚氛围，必将进一步鼓舞和激励广大科技工作者争做重大科研成果的创造者、建设科技强国的奉献者、崇高思想品格的践行者、良好社会风尚的引领者，不断向科学技术广度和深度进军。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021年9月，党中央批准了中央宣传部梳理的第一批纳入中国共产党人精神谱系的伟大精神，科学家精神被纳入。
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
import banner from "@/assets/img/革命精神.png";

const data = reactive({
  allData: [],
  dialogVisible: false,
  currentImage: ''
})

// 加载数据并根据分页参数传递分页信息
const load = () => {
  request.get('/system/architecture/spirit', {
    params: {
      spirit: "革命精神",
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