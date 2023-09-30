<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content1">
      <div class="left">等级:</div>
      <ul class="NotSelect">
        <li :class="{active:SelectIndex==''}" @click="select('')">全部</li>
        <li 
          v-for="level in levelArr"
          @click="select(level.value)"
          :class="{active:SelectIndex==level.value}"
        >{{level.name}}</li>
      </ul>
    </div>
    <div class="content2">
      <div class="left">地区:</div>
      <ul class="NotSelect">
        <li :class="{active:SelectIndexLocal==''}" @click="selectLocal('')">全部</li>
        <li 
          v-for="local in localArr"
          @click="selectLocal(local.value)"
          :class="{active:SelectIndexLocal==local.value}"
        >{{local.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {reqHospitalLevel} from '@/api/home/index'
//储存级别
let levelArr = ref([])
//储存地址
let localArr = ref([])

onMounted(()=>{
  GetLevel()
  GetLocal()
})
//获取级别
const GetLevel = async()=>{
  let result = await reqHospitalLevel('HosType');
  levelArr.value = result.data.data
  if(result.data.code == 200){
    console.log('级别',levelArr.value);
  }
}
//获取地址
const GetLocal = async()=>{
  let result = await reqHospitalLevel('beijin');
  localArr.value = result.data.data
  if(result.data.code == 200){
    console.log('地址',localArr.value);
  }
}


//级别高亮
let SelectIndex = ref(0)
const select = (i)=>{
  SelectIndex.value = i
}
//地址高亮
let SelectIndexLocal = ref(0)
const selectLocal = (i)=>{
  SelectIndexLocal.value = i
}

</script>

<style scoped lang="scss">
.level {
  color: #7d7b7b;
  h1 {
    color: #484848;
    font-weight: 900;
    font-size: 20px;
    margin: 15px 0px;
  }
  .content1 {
    display: flex;
    margin-bottom: 15px;
    .left {
      margin-right: 20px;
    }
  }
  .content2 {
    display: flex;
    margin-bottom: 15px;
    .left {
      width: 82px;
    }
  }
  ul {
    li {
      height: 30px;
      float: left;
      margin-right: 30px;
      &.active {
        color: #55a6fe;
        font-weight: 900;
      }
    }
    li:hover {
      color: #55a6fe;
      cursor: pointer;
    }
  }

}
</style>