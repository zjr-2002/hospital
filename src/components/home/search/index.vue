<template>
  <div class="search">
    <el-autocomplete
      v-model="state"
      :prefix-icon="Search"
      class="inline-input w-50"
      placeholder="点击输入医院名称"
      >
      <template #suffix><span class="searchBtn">搜索</span></template>
    </el-autocomplete>
        
  </div>

</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import {ref } from 'vue'
const state = ref('')
</script>

<style scoped lang='scss'>
.search{
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  
  ::v-deep(.el-input__wrapper){
    width:800px;
    height: 60px;
    .searchBtn{
      color: rgb(78, 121, 202);
      font-weight: bold;
      font-size: 17px;
    }
    .searchBtn:hover{
      color: rgb(131, 168, 237);
    }
  }
}
</style>