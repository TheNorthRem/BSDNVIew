<template>
    <div>
      <div class="topBar">
          <img src="../assets/BSDN-logo.png" href="#/" style="width: 8%;height: 8%;">
          <!-- <a href="#/">
            <img src="../assets/BSDN-logo.png" style="width: 20%;height: 20%;">
          </a> 
          这个不要删 -->
        <div class="menuBox">
          <ul>
            <li><a href="#/">首页</a></li>
            <li><a href="#">博客</a></li>
            <li><a href="#">社区</a></li>
            <li><a href="#">学习</a></li>
            <div class="dropdown">
              <a href="#/category" class="dropbtn">文章分类</a>
              <div class="dropdown-content">
                <a href="#">分类1</a>
                <a href="#">分类2</a>
                <a href="#">分类3</a>
              </div>
            </div>
          </ul>
        </div>
        <!--搜索框 -->
        <el-input
          v-model="input" class="w-20 m-2" style="width: 35%" placeholder="Please Input">
          <template #prefix>
            <el-icon><search /></el-icon>
          </template>
        </el-input>
        <div class="rightMenu">
          <el-button  size="large" link @click="changeRegister">注册</el-button>
          <el-divider direction="vertical" />
          <el-button  link @click="changeLogin">登录</el-button>
          <el-button type="primary" color="#000" @click="toEditorPassage">
            发布<el-icon class="el-icon--right"><Upload /></el-icon>
          </el-button> 
        </div>

      </div>
      <login v-if="loginFlag" />
      <register v-if="registerFlag" />
    </div>
  </template>
  
  <script>

  import { ElButton, ElDivider, ElIcon, ElInput } from '@/../node_modules/element-plus'
  import { Upload } from '@element-plus/icons-vue'
  import { Search} from '@element-plus/icons-vue'

  import login from '@/components/login'
  import register from '@/components/register'
  export default {
    name: 'bsHeader',
    components: {
      ElButton,
      ElDivider,
      ElIcon,
      ElInput,
      Upload,
      Search,
      login,
      register
    },
    data() {
      return {
        loginFlag: false,
        registerFlag: false,
        input: '',

      }
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
        this.$router.push({ path: '/editorPassage' })
      }
    }
  }
  
  </script>
  
  <style>
  .topBar{
      width: 100%;
      min-width: 1400px;/* 最小宽度 控制缩放时的布局不变形 */
      display: flex; /* 块级元素转换为行内元素 */
      background: #FBFBFA;
      align-items: center;/* 垂直居中 */
      justify-content: space-between;/* 两端对齐 */
      /* border-radius: 30px; */
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

  .rightMenu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-right: 10%; */
    padding-right: 2%;
    
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
      display: inline-block;
  }
  
  .dropdown-content {
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
  