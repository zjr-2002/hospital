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
            v-for="item in 10"
            />
        </div>
        <!-- 分页 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background='true'
          layout=" prev, pager, next, jumper,->,sizes,total"
          :total="400"
        />
      </el-col>
      <!-- 右侧 -->
      <el-col :span="5" class="right"> 
         <el-affix :offset="90">
                <el-progress :percentage="50" />
                <el-progress :percentage="100" :format="format" />
                <el-progress :percentage="100" status="success" />
               <el-progress :percentage="100" status="warning" />
               <el-progress :percentage="50" status="exception" />
        </el-affix>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Level from "@/components/home/Lists/level/index.vue";
import Call from '@/components/home/Lists/call/index.vue'
import {reqHospital} from '@/api/home/index'

import { ref,onMounted } from 'vue'
components: {Level,Call}
//分页器页码
let pageNo = ref<number>(1);
//一页展示几条数据
let pageSize = ref<number>(10);
onMounted(()=>{
  getHospitalInfo()
})

//获取已有医院
const getHospitalInfo = async()=>{
  let result:any = await reqHospital(pageNo.value,pageSize.value)
  console.log(result);
  
}
  

</script>

<style scoped lang="scss">
.hospitalList {
  margin-top: 30px;
  .right{
    margin: 15px 0px;
  }
}
.hospital{
  display: flex;
  flex-wrap: wrap;
  .call{
    margin: 0.5%;
    width: 48%;
  }
}
</style>