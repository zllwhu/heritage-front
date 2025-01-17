<template>
  <div>
    <img style="width: 100%" :src="banner" alt="">
    <el-card style="margin-bottom: 10px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;伟大建党精神，指的是坚持真理、坚守理想，践行初心、担当使命，不怕牺牲、英勇斗争，对党忠诚、不负人民。扎根于中国具体实际，厚植于中华优秀传统文化。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）坚持真理、坚守理想。我们党是否坚强有力，既要看全党在理想信念上是否坚定不移，更要看每一位党员在理想信念上是否坚定不移。95年来，共产主义远大理想激励了一代又一代共产党人英勇奋斗，成千上万的烈士为了这个理想献出了宝贵生命。“砍头不要紧，只要主义真”，“敌人只能砍下我们的头颅，决不能动摇我们的信仰”，这些视死如归、大义凛然的誓言生动表达了共产党人对远大理想的坚贞。理想之光不灭，信念之光不灭。我们一定要铭记烈士们的遗愿，永志不忘他们为之流血牺牲的伟大理想。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）践行初心、担当使命。不忘初心，方得始终。中国共产党人的初心和使命，就是为中国人民谋幸福，为中华民族谋复兴。这个初心和使命是激励中国共产党人不断前进的根本动力。全党同志一定要永远与人民同呼吸、共命运、心连心，永远把人民对美好生活的向往作为奋斗目标，以永不懈怠的精神状态和一往无前的奋斗姿态，继续朝着实现中华民族伟大复兴的宏伟目标奋勇前进。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）不怕牺牲、英勇斗争。共产党人的斗争是有方向、有立场、有原则的，大方向就是坚持中国共产党领导和我国社会主义制度不动摇。凡是危害中国共产党领导和我国社会主义制度的各种风险挑战，凡是危害我国主权、安全、发展利益的各种风险挑战，凡是危害我国核心利益和重大原则的各种风险挑战，凡是危害我国人民根本利益的各种风险挑战，凡是危害我国实现“两个一百年”奋斗目标、实现中华民族伟大复兴的各种风险挑战，只要来了，我们就必须进行坚决斗争，而且必须取得斗争胜利。我们的头脑要特别清醒、立场要特别坚定，牢牢把握正确斗争方向，做到在各种重大斗争考验面前“不畏浮云遮望眼”，“乱云飞渡仍从容”。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）对党忠诚、不负人民。带领人民创造幸福生活，是我们党始终不渝的奋斗目标。我们要顺应人民群众对美好生活的向往，坚持以人民为中心的发展思想，以保障和改善民生为重点，发展各项社会事业，加大收入分配调节力度，打赢脱贫攻坚战，保证人民平等参与、平等发展权利，使改革发展成果更多更公平惠及全体人民，朝着实现全体人民共同富裕的目标稳步迈进。
    </el-card>
    <el-space wrap>
      <el-card v-for="(building, index) in data.allData" :key="index" class="box-card" style="width: 228px">
        <template #header>
          <div class="card-header">
            <span>{{ building.archiName }}</span>
          </div>
        </template>
        <div style="display: flex; justify-content: center">
          <img style="width: 200px; height: 150px" :src="getAvatar(building)" alt="" @click="handleImagePreview(building)"/>
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
import { reactive } from "vue";
import banner from "@/assets/img/海报-建党精神.jpg";

const data = reactive({
  allData: [],
  dialogVisible: false,
  currentImage: ''
})

// 加载数据并根据分页参数传递分页信息
const load = () => {
  request.get('/system/architecture/spirit', {
    params: {
      spirit: "建党精神",
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