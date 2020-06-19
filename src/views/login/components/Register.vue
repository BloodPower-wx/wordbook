<template>
    <div class="login_b">
      <div class="login_bt">
        <el-form :model="loginfrom" label-width="0px" class="login_from" :rules="loginRules">
          <el-form-item prop="username"> 
            <el-input
              v-model="loginfrom.username"
              placeholder="请输入用户名"
              prefix-icon="el-icon-s-custom"
            ></el-input>
          </el-form-item>
           <el-form-item prop="phone">
            <el-input
              v-model="loginfrom.phone"
              placeholder="请输入你的手机号码"
              prefix-icon="el-icon-phone-outline"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginfrom.password"
              placeholder="请输入6-16位的密码"
              prefix-icon="el-icon-lock"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" class="btns" size="medium" round>注 册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login_bb">
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <div class="grid-content">
               <router-link to="userlogin"> <a>用户名登录</a> </router-link>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content">
               <router-link to="phonelogin"> <a>手机号登录</a> </router-link>   
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>


<script>
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      //这是表单的数据
      loginfrom: {
        username: "",
        password: "",
        phone:""
      },
      //表单验证规则对象
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名的长度在3-10之间",
            trigger: "blur"
          }
        ],
         phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入正确的手机号码",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16 个字符之间",
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.login_b {
  height: 61%;
  background-color: white;
}

.login_bt {
  height: 70%;
  position: relative;
}
.login_bb {
  height: 30%;
}
.login_from {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
    margin-top: 30px;
  width: 100%;
  letter-spacing: 5px;
  font-size: 18px;
}
a {
	text-decoration: none;
	color: #409eff;;
}
</style>