<template>
  <div>{{$route.query.hoscode}}</div>
</template>

<script setup lang='ts'>
import {useRoute} from 'vue-router'
let $route = useRoute()
console.log($route.query.hoscode)
</script>

<style scoped lang='scss'>
div {
  height: 1200px;
}
</style>