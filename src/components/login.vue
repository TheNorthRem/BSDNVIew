<template>
  <!-- <div v-if="showLogin"> -->
  <el-dialog v-model="dialogVisible" width="500px" align-center="true" style="height:523px;">
      <span class="dialog-footer">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="pass">
            <div class="login">登录</div>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input placeholder="账号" type="text" v-model="ruleForm.username" autocomplete="off" class="input"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input placeholder="密码" type="password" v-model="ruleForm.password" autocomplete="off" class="input"></el-input>
          </el-form-item>
          <el-form-item>
            <img src="../assets/home-hero.webp" class="img">
          </el-form-item>
          <el-form-item>
            <el-button  class="loginButton" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </span>
  </el-dialog>
  <!-- </div> -->
</template>

<script>
import { login } from '@/http/api';
import { ElDialog, ElForm, ElFormItem, ElButton, ElInput, ElMessage } from '@/../node_modules/element-plus'

export default {
  components: {
    ElDialog, ElForm, ElFormItem, ElButton, ElInput
  },
  data() {
    var username = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (this.ruleForm.checkPass >= 6 && this.ruleForm.checkPass <= 10) {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var password = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: true,
      showLogin: true,
      success: false,
      ruleForm: {
        username: '',
        password: '',
      },
      token: {
        data: '',
      },
      rules: {
        pass: [
          { validator: username, trigger: 'blur' }
        ],
        checkPass: [
          { validator: password, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm).then(res => {
            if (res.data.code == 200) {
              localStorage.setItem('token', res.data.data.token)
              localStorage.setItem('ID', res.data.data.userId)
              console.log("token: " + localStorage.getItem('token'))
              console.log("ID: " + localStorage.getItem('ID'))
              this.dialogVisible = false
              ElMessage({
                showClose: true,
                message: '登陆成功！',
                type: 'success',
              })
            } else if (res.data.code == 500) {
              console.log("登录失败")
              console.log(res.data.message)
              ElMessage({
                showClose: true,
                message: '账号或密码错误，请重新输入',
                type: 'error',
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>

<style>
.login{
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */
  letter-spacing: -0.13px;
}
.el-dialog__body{
  width:50%;
}
.img{
  padding-left:10%;
  width:307px;
}
.demo-ruleForm{
  width:100%;
  height:100%;
}
.el-form {
  text-align: center;
  background-color: #fff;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 35%;
  top: 35%;
  transform: translate(-50%, -50%);
}

.el-form-item{
  width:409px;
  height:64px;
}
.input{
  width:409px;
  height:64px;
  border-radius: 12px;
  border: 1px solid #FFF;
  background: #F7F7F4;
  color: #A7A7A6;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 100% */
  letter-spacing: -0.13px;
}
</style>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.loginButton{
  width:409px;
  height:64px;
  color: #E94457;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 100% */
  letter-spacing: -0.13px;
  border-radius: 12px;
  border: 1px solid #F8DAD7;
  background: #FDF5F2;
}
</style>