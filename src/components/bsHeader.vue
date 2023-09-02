
<template>
    <div>
      <div class="topBar">
        <div class="iconBox">
          <img src="../assets/logo.png" style="height:45%;width: 45%;">
          <div class="textBox">BSDN</div>
        </div>
        <div class="menuBox">
          <ul>
            <li><a href="#">主页</a></li>
            <li><a href="#">button1</a></li>
            <li><a href="#">button2</a></li>
            <li><a href="#">button3</a></li>
            <div class="dropdown">
              <a href="#" class="dropbtn">文章分类</a>
              <div class="dropdown-content">
                <a href="#">分类1</a>
                <a href="#">分类2</a>
                <a href="#">分类3</a>
              </div>
            </div>
          </ul>
        </div>
        <div class="searchBox">
          <a href="#"><img src="" width="25px"></a>
          <input type="text" class="input" placeholder="热搜">
        </div>
        <div class="rightBox">
          <!-- <el-button type="text" class="register" @click="changeRegister">注册</el-button>|
          <el-button type="text" class="login" @click="changeLogin">登录</el-button>
          <el-button plain size="mini" class="post">发布</el-button> -->
          <!-- <el-button
            v-for="button in buttons"
            :key="button.text"
            :type="button.type"
            link
            >{{ button.text }}
            </el-button> -->
            <!-- <el-button type="" @click="changeRegister" link>注册</el-button>| -->
            <ul>
                <li><a href="#">注册</a></li>
                <li><a href="#">登录</a></li>
            </ul>
            <!-- <el-button  @click="test">发布</el-button>   -->
        </div>
      </div>
      <!-- <login v-if="loginFlag" />
      <register v-if="registerFlag" /> -->
    </div>
  </template>
  
  <script>
  import { ElButton,ElContainer } from '@/../node_modules/element-plus'
//   import login from '@/components/lSogin/login'
//   import register from '@/components/login/register'
  export default {
    name: 'bsHeader',
    components: {
    //   login,
    //   registerS
    ElButton,
    ElContainer
    },
    data() {
      return {
        loginFlag: false,
        registerFlag: false,
        input1: '',
        // buttons: [
        //   { text: '注册', type: 'plain', link: '/register' },
        //   { text: '登录', type: 'plain', link: '/login' }
        // ]
      }
    },
    methods: {
    //   head() {
    //     this.$router.push({ path: '/' })
    //   },
    //   category() {
    //     this.$router.push({ path: '/category' })
    //   },
    //   changeLogin() {
    //     this.loginFlag = !this.loginFlag
    //     this.registerFlag = false
    //   },
    //   changeRegister() {
    //     this.registerFlag = !this.registerFlag
    //     this.loginFlag = false
    //   }
    }
  }
  
  </script>
  
  <style>
  .topBar{
      width: 100%;
      min-width: 1400px;/* 最小宽度 控制缩放时的布局不变形 */
      z-index: 1;  /* 设置堆叠顺序 */
      display: flex; /* 块级元素转换为行内元素 */
      position: relative; /* 设置相对定位 */
      background-color: rgba(251, 251, 250, 1);
      align-items: center;/* 垂直居中 */
      justify-content: space-between;/* 两端对齐 */
      /* padding: 0 10% 0 0;  */
      /* margin-right: 10%; */
  }
  .iconBox{
      /* z-index: 2; */
      height: 100%;
  }
  .textBox{
    /* z-index: 3;
    position: relative; */
    /* 不知道为什么层级不起作用 */
    position: absolute;/* 绝对定位 */
    color: #000;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    top: 18%;
    left: 2%;
    /* -webkit-text-stroke: 0.5px rgb(255, 255, 255); */
  }
  .menuBox{
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .leftButton{
      padding: 0% 6% 0% 0%;
      color:#000;
  }
  .input{
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 2px solid #E6E6E6;
    background: #FFF;
    outline: none;
    padding-left: 4%;
    /* font-size: 90%; */
  }
  input::-webkit-input-placeholder {
    color: #C4C4C4;
    font-size: 100%;
  }
  .searchBox{
      width: 30%;
      background-color: rgba(251, 251, 250, 1);
      display: flex;
      align-items: center;
      height: 100%;
  }
  /* .divisionLine{
    width: 1px;
    height: 20px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.10);
  } */
  .rightMenu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-right: 10%; */
    padding-right: 50%;
  }
  .register{
    color:#000;
    font-style: normal;
    margin-right: 10px;
  }
  
  .login{
    color:#000;
    font-style: normal;
    margin-right: 10px;
  }
  .post{
    background-color:#437dcf;
    color:azure;
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
  li a:hover, .dropdown:hover, .dropbtn:hover {
      background-color: #f1f1f1;/* 鼠标悬停时改变背景色 */
      color:#437dcf;
  }
  li a, .dropbtn {
      display: inline-block;/* 设置内联块元素 */
      color: rgb(0, 0, 0);
      text-align: center;
      padding: 25px 10px;/* 上下 左右 */
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
  