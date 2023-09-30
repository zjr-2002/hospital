<template>
  <el-card class="box-card" shadow="hover">
    <div class="content">
      <div class="left">
        <div class="hospital_name">{{ hospital.hosname }}</div>
        <div class="hospital_content">
          <span class="span_left">
            <svg
              t="1695957682214"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10719"
              width="16"
              height="16"
            >
              <path
                d="M192.07 447.3m63.63 0l0 0q63.63 0 63.63 63.63l0 192.14q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-192.14q0-63.63 63.63-63.63Z"
                fill="#bfbfbf"
                p-id="10720"
              ></path>
              <path
                d="M449.43 320.29m63.63 0l0 0q63.63 0 63.63 63.63l0 319.16q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-319.16q0-63.63 63.63-63.63Z"
                fill="#bfbfbf"
                p-id="10721"
              ></path>
              <path
                d="M703.34 193.2m63.63 0l0 0q63.63 0 63.63 63.63l0 446.24q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-446.24q0-63.63 63.63-63.63Z"
                fill="#bfbfbf"
                p-id="10722"
              ></path>
            </svg>
            {{ hospital.param.hostypeString }}
          </span>
          <span class="spam_right">
            <svg
              t="1695957806110"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11867"
              width="16"
              height="16"
            >
              <path
                d="M511.333 127.333c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.301-20.006 97.583-30.15 149.451-30.15m0-64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z"
                fill="#bfbfbf"
                p-id="11868"
              ></path>
              <path
                d="M702.856 543.333H511.333c-17.673 0-32-14.326-32-32v-286.73c0-17.673 14.327-32 32-32s32 14.327 32 32v254.73h159.522c17.673 0 32 14.327 32 32s-14.326 32-31.999 32z"
                fill="#bfbfbf"
                p-id="11869"
              ></path>
            </svg>
            每天{{ hospital.bookingRule?.releaseTime }}放号
          </span>
        </div>
      </div>
      <div class="right NotSelect">
        <img :src="`data:image/jpeg;base64,${hospital.logoData}`" />
      </div>
    </div>
  </el-card>
</template>

<script setup lang='ts'>
defineProps(["hospital"]);
</script>

<style scoped lang="scss">
.box-card:hover .hospital_name {
  font-weight: bold;
}
.hospital_name {
  margin-top: 10px;
  color: #333333;
  font-size: 16px;
  transition: all 0.2s ease;
  transition-behavior: normal;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: all;
}
.content {
  display: flex;
  justify-content: space-between;
  .right {
    height: 80px;
    width: 80px;
    img {
      width: 100%;
    }
  }
  .left {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .hospital_content {
      display: flex;
      color: #999999;
      justify-content: space-between;
      .span_left,
      .span_right {
        display: flex;
      }
    }
  }
}
</style>