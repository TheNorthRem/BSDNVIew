<template>
  <!-- <div v-if="showLogin"> -->
  <el-dialog v-model="dialogVisible" width="30%" align-center="true" style="height:30%;">
    <template #footer>
      <span class="dialog-footer">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="pass">
            <el-input placeholder="账号" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input placeholder="密码" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </span>
    </template>
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
              localStorage.setItem('UserID', this.ruleForm.username)
              console.log("token: " + localStorage.getItem('token'))
              console.log("UserId: " + localStorage.getItem('UserID'))
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

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>