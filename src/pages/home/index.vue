<template>
  <div>
    <!-- 图片轮播 -->
    <CarouselImg />
    <!-- 搜索 -->
    <Search />

    <!-- 医院list -->
    <Lists />
  </div>
</template>

<script>
import CarouselImg from "@/components/home/carouselImg/index.vue";
import Search from "@/components/home/search/index.vue";
import Lists from "@/components/home/Lists/index.vue";
export default {
  components: { CarouselImg, Search,Lists },
};
</script>

<style scoped lang='scss'>
</style>