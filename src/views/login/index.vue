<template>
  <div class="login_c">
    <div class="login_t">
      <div class="login_tc">
        <p>单词本</p>
        <p>English Word Book</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.login_c {
  height: 100%;
}
.login_t {
  height: 39%;
  background-color: #409eff;
  position: relative;
}
.login_tc {
  /* 把div放到正中间 */
  /* background-color: white; */
  width: 160px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login_t p:first-child {
  width: 160px;
  height: 64px;
  margin: 0px;
  background-color: white;
  color: #409eff;
  border-radius: 4px;
  box-shadow: 0 0 10px #ddd;
  font-size: 50px;
  font-weight: bolder;
  font-family: "STKaiti";
}
.login_t p:nth-child(2) {
  color: white;
  text-align: center;
  letter-spacing: 2px;
  font-family: "STLiti";
}
</style>