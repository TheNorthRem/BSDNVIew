<template>
  <el-dialog v-model="dialogVisible" width="45%" align-center="true" style="height:59%;">
    <div class="contnet">
      <span class="dialog-footer">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <div class="centered-content">
            <el-form-item prop="pass">
              <el-input placeholder="账号" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input placeholder="密码" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            </el-form-item>
          </div>
        </el-form>
      </span>
    </div>
  </el-dialog>
</template>
  
<script>
import { register } from '@/http/api';
import {ElDialog,ElForm,ElFormItem,ElButton,ElInput} from '@/../node_modules/element-plus'

export default {
  components: {
    ElDialog,ElForm,ElFormItem,ElButton,ElInput
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
      showLogin: true,
      success: false,
      dialogVisible: true,
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
          register(this.ruleForm).then(res => {
            // localStorage.setItem('token', res.data.token)
            console.log("注册成功，请登录")
            this.dialogVisible = false;
          }
          )
        } else {
          console.log('error submit!!');
          return false;
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
.content {
  width: 100%;
  text-align: center; /* 居中文本 */
}

.centered-content {
  display: inline-block; /* 让内部元素水平居中 */
  text-align: left; /* 内部元素左对齐 */
}
.img{
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
}

.el-input__inner{
  display:flex;
  align-items: center;
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