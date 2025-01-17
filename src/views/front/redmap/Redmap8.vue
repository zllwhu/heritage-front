<template>
  <div>
    <img style="width: 100%" :src="banner" alt="">
    <el-card style="margin-bottom: 10px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新时代伟大奋斗精神。中国特色社会主义新时代是一个新的历史阶段。它既与改革开放新时期有着紧密联系，又呈现许多不同历史特点。国内外形势和社会主要矛盾发生的重大变化，对党的精神状态提出了新的更高要求。这就需要在继承以往精神特别是接续伟大改革开放精神基础上，提出新的精神要求，确定新的精神主题，培育新的精神形态。党的十八大以来，习近平总书记强调最多的是奋斗精神，鲜明提出“我们要永远保持建党时中国共产党人的奋斗精神，永远保持对人民的赤子之心”；警醒“全党千万不能在一片喝彩声、赞扬声中丧失革命精神和斗志，逐渐陷入安于现状、不思进取、贪图享乐的状态”，要求“切实把奋斗精神贯彻到进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想全过程”。完全可以说，新时代伟大奋斗精神，就是中国共产党精神在新时代的集中体现，就是新时代中国共产党精神的主题，就是中国共产党精神次第演化中的最新主要形态。新时代伟大奋斗精神所包含的艰苦奋斗、不懈奋斗、开拓奋斗、砥砺奋斗、接续奋斗、竞相奋斗、团结奋斗等新内涵新要求，使党的奋斗精神升华到一个新的境界。在这一正在发展着的中国特色社会主义新时代，党已经提出及产生的具体精神形态主要包括：新的伟大斗争精神、新的自我革命精神、钉钉子精神、宪法和法治精神、工匠精神、知识分子爱国创业精神、科学家精神、企业家精神、右玉精神、塞罕坝精神、蒙古马精神、抗疫精神、新时代硬骨头精神、新时代北斗精神等。所有这些，都从不同方面彰显了新时代伟大奋斗精神。随着党和国家事业、中国社会进步的加速度发展，中国共产党带领人民在创造出更多更大奇迹的同时，一定能谱写出中国共产党精神更为精彩的新篇章。
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
import banner from "@/assets/img/新时代伟大奋斗.png";

const data = reactive({
  allData: [],
  dialogVisible: false,
  currentImage: ''
})

// 加载数据并根据分页参数传递分页信息
const load = () => {
  request.get('/system/architecture/spirit', {
    params: {
      spirit: "新时代伟大奋斗精神",
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