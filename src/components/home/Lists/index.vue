<template>
  <div class="hospitalList">
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="19">
        <!-- 等级 -->
        <Level
          @getlevel='getlevel'
          @getlocal='getlocal'
        />
        <!-- 医院卡片堆 -->
        <div class="hospital">
          <Call
            class="call"
            v-for="(item, index) in hospitalArr"
            :key="index"
            :hospital="item"
          />
          <div class="bigText NotSelect" v-if="loading==''">加载中...</div>
          <div class="bigText NotSelect" v-else-if="total==0">暂无数据</div>
        </div>
        <!-- 医院分页 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[6, 10, 20, 30, 40]"
          :background="true"
          layout=" prev, pager, next, jumper,->,sizes,total"
          :total="total"
          @current-change="currentChange"
          @size-change="sizeChange"
        />
      </el-col>
      <!-- 右侧 -->
      <el-col :span="5" class="right">
        <el-affix :offset="90"> 右侧静态公告 </el-affix>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { throttle } from "lodash"; // 使用 Lodash 库中的节流函数
import Level from "@/components/home/Lists/level/index.vue";
import Call from "@/components/home/Lists/call/index.vue";
import { reqHospital } from "@/api/home/index";

import { ref, onMounted } from "vue";
components: {
  Level, Call;
}
//分页器页码
let pageNo = ref<number>(1);
//一页展示几条数据
let pageSize = ref<number>(10);
//存储已有医院
let hospitalArr = ref([]);
// 储存医院个数
let total = ref(0);
//存储医院的等级相应数据
let hostype = ref<string>("");
//存储医院的地区
let districtCode = ref<string>("");
//加载状态
let loading = ref(true)
//挂载后执行
onMounted(() => {
  getHospitalInfo();
});

//获取已有医院
const getHospitalInfo = async () => {
  //加载中
  loading.value = false
  let result: any = await reqHospital(
    pageNo.value, 
    pageSize.value,
    hostype.value,
    districtCode.value  
  );
  if (result.data.code == 200) {
    loading.value = true
    hospitalArr.value = result.data.data.content
    total.value = result.data.data.totalElements
  }
};

//节流
const throttledGetHospitalInfo = throttle(async () => {
  await getHospitalInfo();
}, 1000);
//切换页码
const currentChange = async () => {
  throttledGetHospitalInfo();
};
//切换每页几个
const sizeChange = async () => {
  pageNo.value = 1;
  throttledGetHospitalInfo();
};

//收集子组件的级别
const getlevel = (i)=>{
  hostype.value = i
  // 更新页面
  getHospitalInfo();
}
//收集子组件的地区
const getlocal = (i)=>{
  districtCode.value = i
  // 更新页面
  console.log(i);
  
  getHospitalInfo();
}


</script>

<style scoped lang="scss">
.hospitalList {
  margin-top: 30px;
  .right {
    margin: 15px 0px;
  }
}
.hospital {
  display: flex;
  flex-wrap: wrap;
  .call {
    margin: 0.5%;
    width: 48%;
  }
  .bigText{
    width: 100%;
    height: 250px;
    text-align: center;
    font-size: 30px;
    color: #333;
    line-height: 1.4;
  }
}
</style>