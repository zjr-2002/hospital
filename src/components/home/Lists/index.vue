<template>
  <div class="hospitalList">
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :span="19">
        <!-- 等级 -->
        <Level />
        <!-- 医院lists -->
        <div class="hospital">
          <Call
            class="call"
            v-for="(item, index) in hospitalArr"
            :key="index"
            :hospital="item"
          />
        </div>
        <!-- 分页 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[8, 10, 20, 30, 40]"
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

onMounted(() => {
  getHospitalInfo();
});

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

//获取已有医院
const getHospitalInfo = async () => {
  let result: any = await reqHospital(pageNo.value, pageSize.value);
  if (result.data.code == 200) {
    (hospitalArr.value = result.data.data.content),
      (total.value = result.data.data.totalElements);
    // console.log("全部医院", hospitalArr.value);
    // console.log("医院个数", total.value);
  }
};
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
}
</style>