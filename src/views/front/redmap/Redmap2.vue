<template>
  <div>
    <img style="width: 100%" :src="banner" alt="">
    <el-card style="margin-bottom: 10px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;抗战精神内涵主要包括：天下兴亡、匹夫有责的爱国情怀；视死如归、宁死不屈的民族气节；不畏强暴、血战到底的英雄气概；百折不挠、坚忍不拔的必胜信念。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）天下兴亡、匹夫有责的爱国情怀。爱国情怀是人们对自己祖国的一种深厚情感，是愿意为祖国奋斗献身的价值取向。在民族生死存亡之际，中国人民的爱国情怀被充分激发出来，举国上下用血肉筑起一座抵御侵略者的钢铁长城。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）视死如归、宁死不屈的民族气节。民族气节是为了维护国家和民族尊严而永不屈服的精神品质和高尚追求。抗战时期，面对日本帝国主义的疯狂侵略，无数中华儿女奋起抗争、前赴后继，表现出了视死如归、宁死不屈的高尚气节。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）不畏强暴、血战到底的英雄气概。英雄气概是为了祖国利益不惜流血牺牲的崇高精神。抗战时期，中国军民面对敌人的炮火勇往直前，面对死亡威胁义无反顾，表现出了中华儿女的英雄气概。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）百折不挠、坚忍不拔的必胜信念。必胜信念是最终战胜日本侵略者的坚定信心和顽强信念。抗战不仅是武力的较量，更是民族意志与信念的较量。持续14年的抗日战争，中国人民在持久抗战中顽强抗击敌人，全国军民始终保持抗战必胜的坚定信心，百折不挠、坚忍不拔，最终打败穷凶极恶的日本侵略者。
    </el-card>

    <el-space wrap>
      <el-card v-for="(building, index) in data.buildings" :key="index" class="box-card" style="width: 228px">
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
import banner from "@/assets/img/海报-抗战精神.jpg";

const data = reactive({
  buildings: [
    { name: '周恩来故居', image: '/redmap2/1.jpg' },
    { name: '郭沫若故居', image: '/redmap2/2.png' },
    { name: '学生饭厅及礼堂', image: '/redmap2/3.png' },
    { name: '鄂西苏维埃军政干校', image: '/redmap1/12.jpg' },
    { name: '红三军团医院旧址', image: '/redmap1/13.jpg' },
    { name: '黄冈实验小学教学楼', image: '/redmap1/14.jpeg' },
    {name: '雷天明故居', image: '/redmap1/15.jpeg'},
    {name: '石桥铺会议旧址', image: '/redmap1/16.jpeg'},
    {name: '王家坪烈士陵园', image: '/redmap1/17.jpg'},
    {name: '新四军第五师兵工厂', image: '/redmap1/18.jpg'},
    {name: '郧山书院旧址（红楼）', image: '/redmap1/19.jpeg'},
    {name: '工农红四方面军南化塘战斗旧址', image: '/redmap1/20.jpg'},
    {name: '中共松滋县第一届委员会遗址', image: '/redmap1/21.jpeg'},
    {name: '中共郧阳地下党支部旧址', image: '/redmap1/22.jpg'},
    { name: '宜昌市夷陵区南边抗日将士陵园', image: '/redmap2/4.png' },
    { name: '鄂南抗日根据地指挥中心旧址', image: '/redmap2/16.jpg' },
    { name: '新四军第五师纪念馆', image: '/redmap2/17.jpg' },
    { name: '汉口新四军军部旧址纪念馆', image: '/redmap1/6.jpg' },
    { name: '鄂豫边区革命烈士陵园', image: '/redmap2/19.jpg' }
  ],
})

const handleImagePreview = (imageUrl) => {
  data.currentImage = imageUrl; // 设置当前图片地址
  data.dialogVisible = true; // 显示图片预览弹窗
}
</script>