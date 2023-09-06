<template>
    <div>
      <div class="topBar">
          <img src="../assets/logo.png" style="padding-left:2%; width: 11%;height: 50%;">

        <div class="menuBox">
          <ul>
            <li><a href="#/">🏠首页</a></li>
            <li><a href="#">博客</a></li>
            <li><a href="#">社区</a></li>
            <li><a href="https://www.icourse163.org/">学习</a></li>
            <div class="dropdown">
              <a href="#/category" class="dropbtn">文章分类</a>
              <div class="dropdown-content">
                <a href="#/search">前端</a>
                <a href="#/search">后端</a>
                <a href="#/search">数据库</a>
                <a href="#/search">生活</a>
                <a href="#/search">编程语言</a>
                <a href="#/search">其他</a>
              </div>
            </div>
          </ul>
        </div>
        <div class="mt-4" style="width:30%;">
          <!-- 点击回车或者搜索按钮进行搜索 可清空 -->
          <el-input
            v-model="Input.content"
            placeholder="Please input"
            class="w-20 m-2"
            clearable 
            @keyup.enter.native="Search()"
          >
            <template #prefix>
              <el-icon><search /></el-icon>
            </template>
            <template #append>
              <el-button @click="Search()">搜索</el-button>
            </template>
          </el-input>
        </div>
        <div class="rightMenu">
          <div style="margin-right: 10%; display:inline-flex;">
            <div v-if="!hideLogin" style="display: inline-flex;">
              <el-button  size="large" link @click="changeRegister">注册</el-button>
              <el-divider direction="vertical" />
              <el-button  link @click="changeLogin">登录</el-button>
            </div>
            <!-- 登陆成功后显示“注销”和“登出”按钮 -->
            <div v-if="hideLogin" style="display: inline-flex;">
              <el-button  size="large" link >注销</el-button>
              <el-divider direction="vertical" />
              <el-button  link @click="logOut">登出</el-button>
            </div>
          </div>
          <!-- 点击发布先让用户选择标签，再跳转到编辑页面 -->
          <el-button type="primary" color="#000" @click="toEditorPassage">
            发布<el-icon class="el-icon--right"><Upload /></el-icon>
          </el-button> 
        </div>
      </div>
      <login v-if="loginFlag" v-bind:hideLogin ="hideLogin" v-on:loginSuccess="logSuc($event)"/>
      <register v-if="registerFlag" />
      <tagSelector v-if="showTagDialog" />
    </div>
</template>
  
<script>

  import { ElButton, ElDivider, ElIcon, ElInput } from '@/../node_modules/element-plus'
  import { Upload } from '@element-plus/icons-vue'
  import { Search} from '@element-plus/icons-vue'

  import { searchPassage } from '../http/api.js';
  import login from '@/components/login'
  import register from '@/components/register'
  import tagSelector from '@/components/tagSelector'
  export default {
    name: 'bsHeader',
    components: {
      ElButton,
      ElDivider,
      ElIcon,
      ElInput,
      Upload,
      Search,
      tagSelector,
      login,
      register
    },
    data() {
      return {
        LoginVisible: true,
        loginFlag: false,
        registerFlag: false,
        Input:{
          content: '',
          page:1
        },    
        hideLogin: false,// 登陆成功时隐藏登陆注册按钮
        showTagDialog: false,// 发布文章时选择标签的对话框
      }
    },
    create(){
        // 在页面加载时获取用户信息，仅执行一次
        this.fetchUserInfo();
    },
    methods: {
      toHome(){
        this.$router.push({ path: '/' })
      },
      toCategory() {
        this.$router.push({ path: '/category' })
      },
      changeLogin() {
        this.loginFlag = !this.loginFlag
        this.registerFlag = false
      },
      changeRegister() {
        this.registerFlag = !this.registerFlag
        this.loginFlag = false
      },
      toEditorPassage(){
        //点击发布，显示选择标签的对话框
        this.showTagDialog = true
      },
      // 将Login组件返回的值赋给hideLogin
      logSuc(msg) {
        this.hideLogin = msg
      },
      toSearch(){
        this.$router.push({ path: '/search' })
      },
      Search() {
            searchPassage(this.Input) // 发送GET请求，传递搜索查询参数
            .then(result => {
                this.searchResults = result; // 将搜索结果存储到searchResults数组中
                console.log(this.searchResults);
                // 获取信息成功后跳转到搜索结果页面
                this.toSearch();
                console.log(result.data.data.records);
                this.$router.push({
                    name: 'search', // 路由名称，需要根据你的路由配置来设置
                    params: { userData: this.user } // 传递用户数据作为参数
                });
              })
            .catch(error => {
              console.log(this.Input);
                console.error('搜索失败:', error);
             });
      },
      fetchUserInfo() {
        // 发送GET请求获取用户信息
        getUserInfo(localStorage.getItem('token')) // 用于获取用户信息的接口 '/user-info'
            .then(result => {
                this.user = result.data.data.records; // 将获取的用户信息存储到searchResults中的user属性中
                
             })
            .catch(error => {
                console.error('获取用户信息失败:', error);
            });
        }
    }
  }
  
</script>
  
<style scoped>
  .topBar{
      z-index: 9999;
      width: 100%;
      min-width: 1400px;/* 最小宽度 控制缩放时的布局不变形 */
      display: inline-flex; /* 块级元素转换为行内元素 */
      background: #FBFBFA;
      align-items: center;/* 垂直居中 */
      justify-content: space-between;/* 两端对齐 */
      border-bottom-right-radius:0.5em;
      border-bottom-left-radius:0.5em;
      border-bottom: 1px solid rgb(235, 235, 227);
  }
  .iconBox{
      display: flex; /* 块级元素转换为行内元素 */
      width:20%;
 
  }
  .menuBox{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
/deep/.el-input__wrapper{
    width:100%;
    height:100%;
  }
  .rightMenu{
    width:15%;
    display: inline-flex;
    align-items: center;
    /* justify-items:end; */
    justify-content: end;
  }
  
  ul {
      list-style-type: none;/* 去掉ul前面的点 */
      margin: 0;
      padding: 0;
      overflow: hidden;
  }
  li {
      float: left;/* 设置横向浮动 */
  }
  li el-divider{
    padding: 25px 0px;
  }
  li a:hover, .dropdown:hover, .dropbtn:hover {
      background-color: #f1f1f1;/* 鼠标悬停时改变背景色 */
      color:#437dcf;
  }
  li a, .dropbtn {
      display: inline-block;/* 设置内联块元素 */
      color: rgb(0, 0, 0);
      text-align: center;
      padding: 25px 20px;/* 上下 左右 */
      text-decoration: none;
  }
  .dropdown {
      z-index: 9999;
      display: inline-block;
  }
  
  .dropdown-content {
    z-index: 9999;  
      display: none;/* 隐藏下拉菜单 */
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }
  
  .dropdown-content a {
      color: rgb(0, 0, 0);
      padding: 12px 16px;
      text-decoration: none;
      display: block;/* 设置块级元素 */
  }
  .dropdown-content a:hover {
    background-color: #f1f1f1;
    color:#437dcf;
  }
  .dropdown:hover .dropdown-content {
      display: block;/* 鼠标悬停时显示下拉菜单 */
  }
</style>
  