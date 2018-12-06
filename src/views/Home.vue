<template>
  <div>
    <div class="content">
      <img src="@/assets/logo.png" class="logo">
      <span class="homebtn">首页</span>
      <span class="registerbtn" @click="goToRegister">注册</span>

      <div class="box">
        <img src="@/assets/xiaomucoder.png">
        <div class="buttonGroup">
          <span style="color: #7a787c; font-size: 45px; margin: 20px">小木编程</span>
          <a href="http://106.14.148.139/xiaomucoder/XiaoMuCoder.air"><img
              style="width: 219px; height: 60px; margin: 10px" src="@/assets/download_mac_normal.png"></a>
          <a href="http://106.14.148.139/xiaomucoder/XiaoMuCoder.air"><img
              style="width: 219px; height: 60px; margin: 10px" src="@/assets/download_win_normal.png"></a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="copyright">© 2017-2018 www.hefeixiaomu.com All Rights
        Reserved. 皖ICP备17017819号-1</span>
    </div>
    <Modal title="用户注册" v-model="registerVisible" :closable="false"
      :mask-closable="false">
      <Form :label-width="60">
        <FormItem label="用户名">
          <i-input v-model="usernameValue" placeholder="请输入用户名"></i-input>
        </FormItem>
        <FormItem label="密码">
          <i-input v-model="passwordValue" placeholder="请输入用户名"></i-input>
        </FormItem>
      </Form>
      <div slot="footer" style="text-align: right">
        <Button ref="submitButton" type="primary" @click="onSubmit">提交</Button>
        <Button type="text" @click="onCancel">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      registerVisible: false,
      usernameValue: '',
      passwordValue: ''
    }
  },
  methods: {
    goToRegister() {
      this.registerVisible = true
    },
    onSubmit() {
      if (this.isEmpty(this.usernameValue)) {
        this.$Message.warning("用户名不能用空")
        return
      } else if (this.isEmpty(this.passwordValue)) {
        this.$Message.warning("密码不能为空")
        return
      } else {
        this.axios.post('xiaomu/register', {
          username: this.usernameValue,
          password: this.passwordValue
        }).then(response => {
          if (response && response.data) {
            if (response.data.result == 0) {
              this.$Message.success(response.data.message)
              this.usernameValue = ''
              this.passwordValue = ''
              this.registerVisible = false
            } else {
              this.$Message.error(response.data.message)
            }
          } else {
            this.$Message.error("注册失败")
          }
        })
      }
    },
    onCancel() {
      this.usernameValue = ''
      this.passwordValue = ''
      this.registerVisible = false
    },
    isEmpty(obj) {
      if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
      } else {
        return false;
      }
    }
  },
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
  height: 30px;
  text-align: center;
  line-height: 30px;
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

.copyright {
  color: #6c6c6c;
  font-size: 12px;
}

.buttonGroup {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
