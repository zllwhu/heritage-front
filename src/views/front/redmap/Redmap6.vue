<template>
  <div>
    <img style="width: 100%" :src="banner" alt="">
    <el-card style="margin-bottom: 10px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艰苦创业精神。这是社会主义革命和建设时期的中国共产党精神，是中国共产党精神次第演进中产生的第二个主要形态。这一时期党担负着开国奠基的创业重任，即建立中华人民共和国、奠定新中国政治制度及经济社会国防等各方面基础，为进一步发展准备条件。习近平总书记高度评价这一时期在党史国史上的地位，指出：“中国特色社会主义是在改革开放历史新时期开创的，但也是在新中国已经建立起社会主义基本制度并进行了二十多年建设的基础上开创的。”其所体现的鲜明时代精神是：独立自主、自力更生，艰苦奋斗、奋发图强，团结一心、积极探索等，概言之就是艰苦创业精神。邓小平同志把“解放初期精神”和“六十年代克服困难的精神”与延安精神相提并论；经中央审定的《中国共产党的九十年》专列论述“艰苦奋斗、奋发图强的创业精神”。可见，艰苦创业精神是中国共产党精神代际交替中的独立阶段，它既不同于前面的革命精神，又与后面改革开放精神相区别，表现了站起来了的中国人意气风发的特有精神风貌。
      <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这一时期党培育产生的具体精神形态主要有：抗美援朝精神（含上甘岭精神），老西藏精神及“两路”精神，垦荒精神（含兵团精神、北大荒精神等），西迁精神，大庆精神及铁人精神，劳模及英模精神（含雷锋精神、王杰精神、焦裕禄精神等），“两弹一星”精神，红旗渠精神，三线建设精神，援外医疗队精神，抗震精神等。创造这些精神的主体人物喊出的“雄赳赳，气昂昂，跨过鸭绿江”“宁肯少活20年，拼命也要拿下大油田”“一不怕苦，二不怕死”“到农村去，到边疆去，到祖国最需要的地方去”等铿锵有力的誓言口号，是这一时代精神的最强音符。尽管党在这一时期出现了严重失误，但合奏出的催人奋进的战曲乐章，永远回响在历史天空。
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
import banner from "@/assets/img/艰苦创业.png";

const data = reactive({
  allData: [],
  dialogVisible: false,
  currentImage: ''
})

// 加载数据并根据分页参数传递分页信息
const load = () => {
  request.get('/system/architecture/spirit', {
    params: {
      spirit: "艰苦创业精神",
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