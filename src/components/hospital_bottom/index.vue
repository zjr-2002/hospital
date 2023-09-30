<template>
  <div class="bottom">
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

<script setup lang="ts"></script>

<style scoped lang="scss">
.bottom {
  margin-top: 50px;
  height: 50px;
  background: #fafafa;
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
