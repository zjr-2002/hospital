<template>
  <div :class="class1()">
    <div class="content">
      <div class="left">Copyright © 2023 Jerry All Rights Reserved  ICP备案号 粤ICP备2023030454号</div>
      <div class="right NotSelect">
         <span>联系我们</span>
         <span>合作伙伴</span>
         <span>用户协议</span>
         <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()
// 底部暗色切换
const class1 = ()=>{if (isDark.value) {return 'bottom night'}else{return 'bottom white'}}

</script>

<style scoped lang="scss">
  
//默认颜色
.white{
  background: #fafafa;
}
.bottom {
  margin-top: 50px;
  height: 50px;
  display: flex;
  font-size: 12px;
  color: #666666;
  justify-content: center;
  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right{
        span{
            margin: 0px 5px;
        }
        span:hover{
          color: #5a92eb;
        }
    }
  }
}
</style>
