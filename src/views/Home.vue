<template>
  <div>
    <div class="content">
      <img src="@/assets/logo.png" class="logo">
      <span class="homebtn">首页</span>
      <a href="#/register"><span class="registerbtn">注册</span></a>

      <div class="box">
        <img src="@/assets/xiaomucoder.png">
        <div class="buttonGroup">
          <span style="color: #7a787c; font-size: 45px; margin: 20px">小木编程</span>
          <a href="http://106.14.148.139/xiaomucoder/XiaoMuCoder.air"><img style="width: 219px; height: 60px; margin: 10px" src="@/assets/download_mac_normal.png"></a>
          <a href="http://106.14.148.139/xiaomucoder/XiaoMuCoder.air"><img style="width: 219px; height: 60px; margin: 10px" src="@/assets/download_win_normal.png"></a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="copyright">© 2017-2018 www.hefeixiaomu.com  All Rights Reserved. 皖ICP备17017819号-1</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

<style>
html {
  margin: 0px;
  font-family: "Courier New", Courier, monospace;
}

body {
  margin: 0px;
}

.content {
  background: #ffdd00;
  height: 768px;
}

.bottom {
  background: #ffffff;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}

.logo {
  height: 30px;
  position: absolute;
  left: 20px;
  top: 15px;
}

.homebtn {
  line-height: 60px;
  color: #ffffff;
  position: absolute;
  left: 150px;
  font-weight: bold;
  font-size: 18px;
  top: 2px;
}

.registerbtn {
  line-height: 60px;
  color: #ffffff;
  position: absolute;
  right: 50px;
  font-weight: bold;
  font-size: 18px;
  top: 2px;
}

.box {
  display: flex;
  justify-content: center;
  padding-top: 150px;
}

.buttonGroup {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
