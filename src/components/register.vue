<template>
    <div v-if="showLogin">
      <el-row v-if="success">
        
      </el-row>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="pass">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import { register } from '@/http/api';
  import '@/../node_modules/element-plus'
  
  export default {
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
              this.showLogin = false;
              this.$message({
                type: 'success',
                message: '注册成功',
              });
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
  .el-form {
    text-align: center;
    background-color: #fff;
    width: 50%;
    height: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  </style>