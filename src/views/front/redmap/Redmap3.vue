<template>
  <div>
    <el-card style="margin-bottom: 10px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“三牛”精神是指为民服务孺子牛、创新发展拓荒牛、艰苦奋斗老黄牛的精神。面对人民群众日益增长的美好生活需要，争当为民服务、无私奉献的孺子牛；面对新发展阶段的新挑战新任务，争当创新发展、攻坚克难的拓荒牛；面对民族复兴伟大梦想，争当艰苦奋斗、吃苦耐劳的老黄牛。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）推动高质量发展，要发扬为民服务“孺子牛”。牛代表勤劳，踏实，可靠，服务精神。实现高质量发展，离不开高素质干部队伍。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）推动高质量发展，要做创新发展的“拓荒牛”。拓荒牛粗犷雄伟，坚韧不拔，是刚毅和力量的象征。惟改革者进，惟创新者强，惟改革创新者胜。既要当好已有事业创新的突破者，也要当好未有事业创新的开拓者。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）推动高质量发展，要做艰苦奋斗的“老黄牛”。“块块荒田水和泥，深耕细作走东西，老牛亦解韶光贵，不等扬鞭自奋蹄”。
    </el-card>

    <el-space wrap>
      <el-card v-for="(building, index) in data.buildings" :key="index" class="box-card" style="width: 236px">
        <template #header>
          <div class="card-header">
            <span>{{ building.name }}</span>
          </div>
        </template>
        <div style="display: flex; justify-content: center">
          <img style="width: 200px; height: 150px" :src="building.image" alt="" @click="handleImagePreview(building.image)"/>
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
import {reactive} from "vue";

const data = reactive({
  buildings: [
    { name: '武大测绘遥感信息工程国重', image: '/redmap4/1.webp' },
    { name: '地大（武汉）逸夫博物馆', image: '/redmap4/2.jpg' },
    { name: '华科同济医学院', image: '/redmap4/3.jpeg' },
  ],
})

const handleImagePreview = (imageUrl) => {
  data.currentImage = imageUrl; // 设置当前图片地址
  data.dialogVisible = true; // 显示图片预览弹窗
}
</script>