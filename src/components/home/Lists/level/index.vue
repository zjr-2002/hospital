<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul>
        <li class="active">全部</li>
        <li>1部</li>
        <li>2部</li>
        <li>2部</li>
        <li>2部</li>
        <li>3部</li>
      </ul>
    </div>
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li class="active">全部</li>
        <li>1地</li>
        <li>2地</li>
        <li>2地</li>
        <li>2地</li>
        <li>3地</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.level {
  color: #7d7b7b;
  h1 {
    color: #484848;
    font-weight: 900;
    font-size: 20px;
    margin: 15px 0px;
  }
  .content {
    display: flex;
    margin-bottom: 15px;
  }
  ul {
    li {
      float: left;
      margin-right: 30px;
      &.active {
        color: #55a6fe;
        font-weight: 900;
      }
    }
    li:hover {
      color: #55a6fe;
      cursor: pointer;
    }
  }
  .left {
    margin-right: 20px;
  }
}
</style>