<template>

    <el-carousel height="350px" class="NotSelect">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../../../assets/images/web-banner-1.png" alt="" srcset="">
      </el-carousel-item>
    </el-carousel>

</template>

<style scoped lang='scss'>
  img{
    width: 100%;
    height:350px ;
  }
</style>
