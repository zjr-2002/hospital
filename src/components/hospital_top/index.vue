<template>
<div class="placeholder"></div>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.png">
        <span>医疗通 预约挂号统一平台</span>
      </div>
      <div class="right">
        <span class="help">帮助中心</span>
        <span class="login">登陆/注册</span>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss">
.placeholder {
  height: 70px/* 设置为被固定元素的高度 */;
}
.top{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 70px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  .content{
    width: 1200px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #557bb8;
      img{
        height: 55px;
      }
    }
    .right{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: #666666;
      .help{
        margin-right: 20px;
      }
    span:hover{
      color: #5a92eb;
    }
    }
  }
}
</style>