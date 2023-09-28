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
            shadow="hover"
            />
        </div>
      </el-col>
      <!-- 右侧 -->
      <el-col :span="5"> 公告 </el-col>
    </el-row>
  </div>
</template>

<script>
import Level from "@/components/home/Lists/level/index.vue";
import Call from '@/components/home/Lists/call/index.vue'
export default {
  components: { Level ,Call},
};
</script>

<style scoped lang="scss">
.hospitalList {
  margin-top: 30px;
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