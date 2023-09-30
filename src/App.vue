<template>
  <div class="container">
    <!--顶部全局组件-->
    <HospitalTop />
    <!-- 展示路由组件的区域 -->
    <div class="content">
      <!-- 展示路由组件的区域 -->
      <router-view></router-view>
    </div>
  </div>
  <HospitalBottom class="Bottom"/>
</template>

<script setup lang="ts">
import request from '@/utils/request'
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 55px;
  .content {
    width: 1200px;
    margin-top: 70px;
    min-height: 700px;
  }
}
.Bottom{
  position: fixed;
  bottom:0;
  width: 100%;
}
</style>
