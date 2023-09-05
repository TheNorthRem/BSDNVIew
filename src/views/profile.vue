<template>
  <div class="viewSettings">
    <div class="pageContent">
      <div class="user">
        <div class="userInside">
          <img src="../assets/avatar/avatar0.png" style="height:70px; width: 70px;" class="avatar">
          <div class="userDetail">
            <div class="userName">{{nickName}}</div>
            <div class="moreDetail">
              {{qq}} | {{birthday}} | 简介
            </div>
          </div>
        </div>
      </div>
      <div class="gird-item">
          <div class="grid-container">
              <!-- 分类1的格子，也是左侧的唯一的格子 -->
              <section class="block1">
                      <!-- 个人信息 -->
                      <div class = "infoBox">
                          <div class="info">
                              <div clas="blockIcon">
                                <img class="svg" src="../assets/categoryIcon/Icon4.svg" />
                              </div>
                              <div class="infocontent">
                                <div class="likes">Likes :</div>
                                <div class="likes">{{ likes }}</div>
                              </div>
                              <div class="infocontent">
                                <div class="likes">点击量 :</div>
                                <div class="likes">{{ clickCounts }}</div>
                              </div>
                          </div>
                      </div>  
                      <div class="img">
                            <img src="../assets/projects-illo.webp" style="width:222px;"/>
                      </div>
              </section>
              <!-- 右侧 -->
              <div class="rightBlocks">
                <div class="button">
                    <span @click="show(1)"
                          :class="index===1? 'active':''">文章</span>
                    <span @click="show(2)"
                          :class="index===2? 'active':''">粉丝</span>
                    <span @click="show(3)"
                          :class="index===3? 'active':''">关注</span>
                </div>
                <!-- 面板一 -->
                <div class="one"
                    v-show="index===1 && isShow">
                    文章列表
                </div>
                <!-- 面板二 -->
                <div class="two"
                    v-show="index===2 && isShow">
                    粉丝列表
                </div>
                <!-- 面板三 -->
                <div class="three"
                    v-show="index===3 && isShow">
                    关注列表
                </div>
              </div>
          </div>
      </div>
    </div>
      
  </div>
  </template>
  
  <script>
  import { detailedUserInfo } from '../http/api.js';
  export default {
    name: 'Category',
    qq:'qq',
    birthday:'birthday',
    clickCounts:0,
    likes:0,
    intro:"Introduction",
    data(){
      return{
          nickName:'nickName',
          // 控制切换按钮后按钮改变样式
          index: 1,
          // 控制点击按钮后子组件显示，再次点击隐藏
          isShow: true
      }
    },
    methods:{
        show (value) {
        this.index === value ? this.isShow = !this.isShow : this.isShow = true
        this.index = value
      }
    },
    created(){
      let userID=localStorage.getItem('ID');
            let IDForm = {
                userId: userID,
            }
            if(userID == null) return;
            else{
              detailedUserInfo(IDForm) 
                .then(result => {
                    console.log(result)
                    this.qq = result.data.data[0].qq;
                    this.nickName = result.data.data[0].nickName;
                    this.birthday = result.data.data[0].birthday;
                    this.likes = result.data.data[0].favoriteCount;
                    this.clickCounts = result.data.data[0].clickCounts;
                    this.intro = result.data.data[0].intro;
                })
                .catch(error => {
                    console.error('获取用户信息失败:', error);
                });
            }
    }
  }
  
  </script>
  
  <style>
  .img{
    margin-top:150px;
  }
  .moreDetail{
    margin-top:0.7%;
  }
  .userDetail{
    width:100%;
    margin-left:2%;
    display: flex;
    justify-items: flex-start;
    flex-direction: column;
  }
  .userName{
    color: #050505;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.13px;
  }
  .avatar{
    margin-left:1%;
    margin-top:1%;
  }
  .user{
    display: flex;
    width: 1490px;
    height: 104px;
    align-items: center;
    flex-shrink: 0;
    
    margin-left:5%;
    margin-right:5%;
    padding-top:2%;
  }
  .userInside{
    width: 1490px;
    height: 104px;
    border-radius: 12px;
    border: 2px solid #F6F5F4;
    background: #FBFBFA;
    display: flex;
    align-items: center;
    justify-items: flex-start;
    flex-direction: row;
  }
  .pageContent{
    display: flex;
    align-items: center;
    justify-items: flex-start;
    flex-direction: column;
  }
.button span {
  color: #121212;
  border-radius: 5px;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 75px;
  border: 2px solid #F6F5F4;
  cursor: pointer;
  margin-right:10px;
  margin-bottom:10px;
}

.button span.active {
  color: #121212;
  background: rgba(0, 0, 0, 0.10);
}

.one {
  margin-left:10px;
  height: 600px;
}

.two {
  margin-left:10px;
  height: 600px;
}

.three {
  margin-left:10px;
  height: 600px;
}

  .blockIcon{
    display: block;
    width: 26px;
    height: 26px;
    color: #0a85d1;
    position:relative;
    margin-bottom: 5%;
  } 
  .likes{
    white-space: nowrap;
    overflow: auto;
    width:100px;
    margin-right:10%;
    margin-left:10%;
    color: #0A85D1;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    display: flex;
    align-items: center;
    justify-items: flex-start;
  }
  .info{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: flex-start;
    flex-direction: column;/* 垂直排列 */
    padding: 5% 5%;
}
.infocontent{
    margin-top:5%;
    display: flex;
    align-items: center;
    justify-items: flex-start;
    flex-direction: row;
}
  .infoBox{
      width: 100%;
      height: 80%;
      border-radius: 12px;
      border: 2px solid #F6F5F4;
      background: #FBFBFA;
      display:flex;
      flex-direction: column;/* 垂直排列 */
  }
  .viewSettings{
      width: 100%;
      min-width: 1400px;/* 最小宽度 控制缩放时的布局不变形 */
  }
  .svg{
      z-index:99;
      left:1%;
      position: relative;
  }
  .gird-item{
      padding-top:1.5%;
      margin-left:5%;
      margin-right:5%;
      grid-column: span 12;
  }
  .grid-container {
      width: 1500px;
      align-items: center;
      flex-shrink: 0;
      padding-top: 2%;
      display: grid;
      grid-template-columns: 250px 2fr;
      padding-left: 0px;
      padding-right: 0px;
      gap: 24px;
      
  }
  .block1{
      border-radius: 12px;
      width: 100%;
      height: 100%;
      position: relative;
      display:flex;
      flex-direction: column;
  }
  .blockHeader {
      max-width: 512px;
  }
  .icon{
      display: block;
      width: 26px;
      height: 26px;
      color: var(--color-link);
      margin-bottom: 10px;
  }
  .moreButton{
      color: #0a85d1;
  }
  .more{
      position: relative;
      line-height: 24px;
  }
  .more:hover{
      text-decoration:underline;
  }
  .rightBlocks{
      display: flex;
      flex-direction: column;
  }
  </style>