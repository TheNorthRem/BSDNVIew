<template>
  <el-dialog v-model="dialogVisible" width="500px" align-center="true" style="height:700px;">
    <span class="dialog-footer">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="custom-form">
        <div class="register">注册</div>
        <el-input placeholder="账号" type="text" v-model="ruleForm.username" autocomplete="off" class="input"></el-input>
        <el-input placeholder="密码" type="password" v-model="ruleForm.password" autocomplete="off"
          class="input"></el-input>
        <el-input placeholder="QQ" type="text" v-model="ruleForm.QQ" autocomplete="off" class="input"></el-input>
        <el-input placeholder="生日" type="date" v-model="ruleForm.birthday" autocomplete="off" class="input"></el-input>
        <el-input placeholder="简介" type="text" v-model="ruleForm.intro" autocomplete="off" class="input"></el-input>
        <img src="../assets/notion-parade.webp" class="img">
        <el-button class="registerButton" type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-form>
    </span>
  </el-dialog>
</template>
  
<script>
import { register } from '@/http/api';
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
      showLogin: true,
      success: false,
      dialogVisible: true,
      ruleForm: {
        username: '',
        password: '',
        QQ: '',
        birthday: Date,
        intro: ''
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
            if (res.data.code === 200) {
              ElMessage({
                showClose: false,
                message: res.data.message,
                type: 'success',
              })
              this.dialogVisible = false;
            } else {
              ElMessage({
                showClose: false,
                message: res.data.message,
                type: 'error'
              })
            }
          }
          ).catch(error => {
            ElMessage({
              showClose: false,
              message: error.data.message,
              type: 'error',
            })
          });
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
.custom-form {
  width: 70% !important;
  left: 35%;
  text-align: center;
  background-color: #fff;
  height: 50%;
  position: absolute;
  left: 50% !important;
  top: 35%;
  transform: translate(-50%, -50%);
}

.register {
  text-align: center;
  /* 水平居中 */
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  margin-bottom: 37px;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  /* 100% */
  letter-spacing: -0.13px;
  height: 10%;
  /* 设置一个高度，以便垂直居中 */
}

.img {
  padding-left: 0 !important;
  width: 240px !important;
}

.el-input__wrapper {
  width: 400px;
  height: 64px;
}

.input {
  margin-bottom: 37px;
}

.el-input__inner {
  color: #A7A7A6;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* 100% */
  letter-spacing: -0.13px;
}

.button-container {
  text-align: center;
  /* 水平居中 */
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  height: 100%;
  /* 设置适当的高度，确保按钮在容器内居中 */
}
</style>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.registerButton {
  width: 350px;
  height: 48px;
  color: #E94457;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  /* 100% */
  letter-spacing: -0.13px;
  border-radius: 12px;
  border: 1px solid #F8DAD7;
  background: #FDF5F2;
  text-align: center;
  /* 水平居中 */
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
}
</style>