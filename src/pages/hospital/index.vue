<template>
  <el-row> 
    <!-- 左侧导航 -->
    <el-col :span="4">
       <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo NotSelect"
      >
        <el-menu-item 
          index="/hospital"
          @click="changeActive('/hospital')
        ">
          <span>预约挂号</span>
        </el-menu-item>

        <el-menu-item 
          index="/hospital/details"
          @click="changeActive('/hospital/details')"
        >
          <span>医院详情</span>
        </el-menu-item>

        <el-menu-item
          index="/hospital/notice"
          @click="changeActive('/hospital/notice')"
        >
          <span>预约须知</span>
        </el-menu-item>
        
        <el-menu-item
          index="/hospital/closure"
          @click="changeActive('/hospital/closure')"
        >
          <span>停诊信息</span>
        </el-menu-item>

        <el-menu-item 
          index="/hospital/queryCancel"
          @click="changeActive('/hospital/queryCancel')"
        >
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <!-- 右侧内容 -->
    <el-col :span="20">
    <router-view></router-view>
    </el-col>
  </el-row>
 
</template>

<script setup lang='ts'>
import { useRouter, useRoute } from "vue-router";
//获取路由器
let $router = useRouter();
//获取当前路由的信息
let $route = useRoute();
console.log($route.query.hoscode)
const changeActive = (path: string) => {
  //跳转到对应二级路由
  $router.push({ path, query: { hoscode: $route.query.hoscode } });
};
</script>

<style scoped lang='scss'>
  .el-menu-item:active > span {
    font-weight: bold; /* 将被选择的菜单项文本设为加粗 */
  }
</style>