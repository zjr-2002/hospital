<template>
  <div class="search">
    <el-autocomplete
      v-model="state"
      :prefix-icon="Search"
      class="inline-input w-50"
      placeholder="点击输入医院名称"
       :fetch-suggestions="querySearch"
      >
      <template #suffix><span class="searchBtn NotSelect">搜索</span></template>
    </el-autocomplete>
        
  </div>

</template>

<script setup lang="ts">
import {ref,onMounted } from 'vue'
import {reqHosSearch} from '@/api/home/index'
//图标
import { Search } from '@element-plus/icons-vue'
import { log } from 'console'
const state = ref('')
let SearchResultArr = ref([])
onMounted(()=>{
})
// const getHosSearch = async(queryString)=>{
//   let result = reqHosSearch(queryString)
//   result.then((result)=>{
//     SearchResultArr.value = result.data.data
//     console.log(SearchResultArr.value);
//   })
// }
const querySearch = async(queryString: string, cb: any) => {
  let result = await reqHosSearch(queryString)
  // showData = ''
  if (result.data.data !== null) {
    let showData = result.data.data.map(item=>{
      return{
        value:item.hosname
      }
    })
  cb(showData)
  }
  console.log('搜索结果' ,result.data.data);

  
}
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