<template>
  <div class="search NotSelect">
    <el-autocomplete
      v-model="state"
      :prefix-icon="Search"
      class="inline-input w-50"
      placeholder="点击输入医院名称"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      @select="goDetail"
      >
      <template #suffix><span class="searchBtn NotSelect">搜索</span></template>
    </el-autocomplete>
        
  </div>

</template>

<script setup lang="ts">
import {ref } from 'vue'
import {useRouter} from 'vue-router'
import {reqHosSearch} from '@/api/home/index'
//图标
import { Search } from '@element-plus/icons-vue'
import { log } from 'console'
import router from '@/router/index'
const state = ref('')

//储存搜索医院结果
let SearchResultArr = ref([])

let $router = useRouter()

//获取搜索医院数据
const querySearch = async(queryString: string, cb: any) => {
  let result = await reqHosSearch(queryString)
  SearchResultArr.value = result
  //判断是否有结果
  if (result.data.data !== null) {
    // 遍历结果 = showData.value
    let showData = result.data.data.map(item=>{
      return{
        value:item.hosname,    //医院的名称
        hoscode:item.hoscode  //医院的编码
      }
    })
    //key值必须为value
    cb(showData)  
  }
}

//跳转详情页
const goDetail = (item)=>{
  $router.push({ path: '/hospital', query: {hoscode:item.hoscode } });
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