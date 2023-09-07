<template>
  <div class="viewSettings">
    <div class="pageContent">
      <div class="user">
        <div class="userInside">
          <img src="../assets/avatar/avatar0.png" style="height:70px; width: 70px;" class="avatarImg">
          <div class="userDetail">
            <div class="smallBox">
                <div class="userName">{{nickName}}</div>
                <el-button class="subscribeBox">
                  <div class="subscribe">关注</div>
                </el-button>
                <el-button class="editBox" @click="printout">
                  <div class="subscribe" >编辑信息</div>
                </el-button>
                <!-- 编辑个人主页信息按钮的弹窗 -->
                <el-dialog title="修改用户个人信息" v-model="dialogFormVisible" width="700px">
                  <el-form :model="form">
                    <el-form-item label="个人昵称" :label-width="formLabelWidth">
                      <el-input v-model="ruleForm.nickName" autocomplete="off" class="custom-input"></el-input>
                    </el-form-item>
                    <el-form-item label="个人简介" :label-width="formLabelWidth">
                      <el-input v-model="ruleForm.intro" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="qq账号" :label-width="formLabelWidth">
                      <el-input v-model="ruleForm.qq" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="生日" :label-width="formLabelWidth">
                      <el-input v-model="ruleForm.birthday" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="上传头像" :label-width="formLabelWidth">
                        <input type="file" name="multifile" multiple @change="onUpload" />
                        <keep-alive>
                          <img :src= this.imageUrl  class="avatars"/> 
                        </keep-alive>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="editUser">确 定</el-button>
                  </div>
                </el-dialog>
            </div>
            
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
                          :class="index===2? 'active':''">收藏</span>
                    <span @click="show(3)"
                          :class="index===3? 'active':''">私信</span>
                </div>
                <!-- 面板一 -->
                <div class="one"
                    v-show="index===1 && isShow">
                    文章列表
                    <span v-for="i in articles.length" v-bind:key="i" style="padding-bottom: 5%;">
                        <showEditor_brief
                        :uploaderId= this.articles[i-1].uploaderId
                        :uploaderNickName= this.articles[i-1].nickName
                        :brief= this.articles[i-1].brief
                        :title= this.articles[i-1].title
                        :uploadTime= this.articles[i-1].uploadTime
                        :nickName= this.articles[i-1].nickName
                        :articleId=this.articles[i-1].articleId
                        ></showEditor_brief>
                    </span>
                </div>
                <!-- 面板二 -->
                <div class="two"
                    v-show="index===2 && isShow">
                    <span v-for="i in favorites.length" v-bind:key="i" style="padding-bottom: 5%;">
                        <showEditor_brief
                        :uploaderId= this.favorites[i-1].uploaderId
                        :uploaderNickName= this.favorites[i-1].nickName
                        :brief= this.favorites[i-1].brief
                        :title= this.favorites[i-1].title
                        :uploadTime= this.favorites[i-1].uploadTime
                        :nickName= this.favorites[i-1].nickName
                        :articleId=this.favorites[i-1].articleId
                        ></showEditor_brief>
                    </span>
                </div>
                <!-- 面板三 -->
                <div class="three"
                    v-show="index===3 && isShow">
                    <Message/>
                </div>
              </div>
          </div>
      </div>
    </div>
      
  </div>
  </template>
  
  <script>
  import { ElDialog, ElForm, ElFormItem, ElButton, ElInput } from '@/../node_modules/element-plus'
  import { detailedUserInfo,uploadUserAvatar,editUserInfo,getArticlesByUser,getFavoriteArticlesByUser } from '../http/api.js';
  import Message from '../components/Message.vue'
  import showEditor_brief from '../components/showEditor_brief.vue'


  export default {
    components: {
    ElDialog, ElForm, ElFormItem, ElButton, ElInput,
    Message,showEditor_brief
  
  },
    data(){
      return{
        imageUrl: '',
        formLabelWidth: '120px',
        dialogFormVisible: false,

        ruleForm:{
          nickName:'',
          qq:'',
          intro:'',
          birthday:'',
          avatar:'',
          InformationId:''

        },
          userID:'',
        
        name: 'Category',
        qq:'qq',
        birthday:'birthday',
        clickCounts:0,
        likes:0,
        intro:"Introduction",
          nickName:'nickName',
          // 控制切换按钮后按钮改变样式
          index: 1,
          // 控制点击按钮后子组件显示，再次点击隐藏
          isShow: true,
          articles:[],
          favorites:[]
      }
    }
    ,

    methods:{
      getUserInfo(){
        let userID=localStorage.getItem('ID');
            let IDForm = {
                userId: userID,
            }
            console.log(this.id);
            if(userID == null) return;
            else{
              detailedUserInfo(IDForm) 
                .then(result => {
                    console.log(result)
                    console.log("个人主页信息获取成功");
                    this.qq = result.data.data[0].qq;
                    this.nickName = result.data.data[0].nickName;
                    this.birthday = result.data.data[0].birthday;
                    this.likes = result.data.data[0].favoriteCount;
                    this.clickCounts = result.data.data[0].clickCounts;
                    this.intro = result.data.data[0].intro;
                    this.imageUrl=result.data.data[0].avatar;
                    this.ruleForm.avatar=result.data.data[0].avatar;
                    this.ruleForm.InformationId=result.data.data[0].informationId;
                    this.ruleForm.qq = result.data.data[0].qq;
                    this.ruleForm.nickName = result.data.data[0].nickName;
                    this.ruleForm.birthday = result.data.data[0].birthday;
                    this.ruleForm.intro = result.data.data[0].intro;

                })
                .catch(error => {
                    console.error('个人主页信息失败:', error);
                });
            }
        getArticlesByUser({
          'userId': localStorage.getItem('ID')
        }).then(res=>{
          console.log(res)
          this.articles=res.data.data
        })
        
        getFavoriteArticlesByUser({
          'userId': localStorage.getItem('ID')
        }).then(res=>{
          console.log(res)
          this.favorites=res.data.data
        })
      },
      printout(){
        this.dialogFormVisible=true
        console.log("dialogFormVisible",this.dialogFormVisible);
        
      },
      show (value) {
        this.index === value ? this.isShow = !this.isShow : this.isShow = true
        this.index = value
      },
      editUser(){
        this.dialogFormVisible = false
        editUserInfo({
          "informationId": this.ruleForm.InformationId,
          "birthday": this.ruleForm.birthday,
          "intro": this.ruleForm.intro,
          "nickName": this.ruleForm.nickName,
          "avatar": this.ruleForm.avatar,
          "qq": this.ruleForm.qq
        })
        .then(result => {
          console.log(result);
          console.log("上传用户所编辑的信息成功");
          this.getUserInfo();
        })
        .catch(error => {
          console.error('上传用户所编辑的信息失败:', error);
        });
      },
      onUpload(e){
        var files = e.target.files[0];
        var formFile = new FormData();
        formFile.append('image', files);
        uploadUserAvatar(formFile).then(res=>{
          console.log(res)
          this.imageUrl=res.data.data.url;
          this.ruleForm.avatar=res.data.data.url;
          console.log(this.imageUrl)
        })
      }
    },
    created(){
      this.getUserInfo();
    }
}
  
  </script>
  
  <style>

    .avatars{
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border-width: 1;
      border-style: solid;
    }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .smallBox{
    display:flex;
    flex-direction: row;
  }
  .subscribeBox{
    width:49px;
    height:28px;
    margin-left:17px;
    border-radius: 8px;
    border: 1px solid #FCF1EE;
    background: #FDF5F2;
  }
  .editBox{
    width:77px;
    height:28px;
    margin-left:17px;
    border-radius: 8px;
    border: 1px solid #FCF1EE;
    background: #FDF5F2;
  }
  .subscribe{
    height:100%;
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    color: #E94457;
    font-family: Inter;
    font-size: 13.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px; /* 140.741% */
    letter-spacing: 0.101px;
    text-shadow: -1px -1px 0 white,  
                  1px -1px 0 white,
                  -1px 1px 0 white,
                  1px 1px 0 white;
  }
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
  .avatarImg{
    margin-left:1%;
    margin-top:1%;
  }
  .user{
    display: flex;
    width: 100%;
    height: 104px;
    align-items: center;
    flex-shrink: 0;
    margin-left:5%;
    margin-right:5%;
    padding-top:2%;
    padding-inline: 10%;
  }
  .userInside{
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 2px solid #F6F5F4;
    background: #FBFBFA;
    display: flex;
    align-items: center;
    justify-items: flex-start;
    flex-direction: row;
    margin-inline: 5%;
  }
  .pageContent{
    width: 100% !important;
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
  margin-left:0%;
  width:100%;
  height: 100%;
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
      width: 100%!important;
      height:100%;
      min-width: 1400px;/* 最小宽度 控制缩放时的布局不变形 */
  }
  .svg{
      z-index:99;
      left:1%;
      position: relative;
  }
  .gird-item{
      width:85%;
      padding-top:1.5%;
      padding-right: 5%;
      margin-left:5%;
      margin-right:5%;
      grid-column: span 12;
  }
  .grid-container {
      width: 100%;
      align-items: center;
      flex-shrink: 0;
      padding-top: 2%;
      display: grid;
      grid-template-columns: 250px 2fr;
      padding-left: 0px;
      padding-right: 10%;
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
      width:100%;
      display: flex;
      flex-direction: column;
  }
  </style>