<template>
  <div class="top NotSelect">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.png" />
        <span>医疗通 预约挂号统一平台</span>
      </div>
      <div class="right">
        <Dark />
        <span class="help">帮助中心</span>
        <span class="login">登陆/注册</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import Dark from "@/components/dark/index.vue"
components:{Dark}
</script>

<style lang="scss">

.top {

  border-bottom: 1px solid var(--border-color);
  height: var(--header-height);
  padding: 0 12px 0 24px;
  background-image: radial-gradient(transparent 1px,var(--bg-color) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
  top: 0;

  z-index: 9999;
  position: fixed; // 固定在顶部
  // top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1); // 应用底部阴影效果
  width: 100%;
  // height: 70px;
  display: flex;
  justify-content: center;

  .content {
    width: 1200px; // 内容宽度
    height: 70px; // 内容高度
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      font-size: 20px;
      color: #557bb8; // 字体颜色为蓝色

      img {
        height: 55px; // 图片高度
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      color: #666666; // 字体颜色为灰色

      .help {
        margin-right: 20px; // 右边距
      }
    }

    span:hover {
      color: #5a92eb; // 鼠标悬停时的字体颜色为蓝色
    }
  }
}
</style>