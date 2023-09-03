<template>
  
    <div>
        <el-backtop :right="100" :bottom="100" />
                <!-- 整个主页盒子 --> 
        <div class = "homeBox"> 
            <!-- 主体部分 -->    
            <div class = "mainBox">
                <div class="topPeekiBox"><br><br><br><br><br>
                    <img src="../assets/topPeeki.png" style="height: 150px; width: auto;">
                </div>
                <!-- 轮播图 -->     
                <div class="pictureBox">
                    <!-- <div style="align-content: center; padding: 20%;">
                        <h1>轮播图</h1>
                    </div> -->
                    <el-carousel height="100%" style="width:100%">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 text="2xl">{{ item }}</h3>
                    </el-carousel-item>
                    </el-carousel>
                </div> 
                <!-- 文章列表 -->  
                <div class="articleBox">
                    <span v-for="(article, index) in articles" :key="index" style= "padding-bottom: 5%;">
                        <div class="articleInfo">
                           <div class="contentBox">
                                <h2>{{ article.title }}</h2>
                                <h4>{{ article.content }}</h4>
                           </div>
                           <footer>
                                <img src= "../assets/avatar/avatar1.png" style="width: 8%; padding-right:3%;"/>
                                <div>
                                    <h3>
                                        {{ article.author.name }}
                                    </h3>
                                    <p>{{ article.author.profile }}</p>
                                </div>
                           </footer>
                        </div>
                    </span>   
                </div> 
            </div>
            <!-- 侧栏 -->
            <div class = "asideBox"> 
                <!-- 头像 -->
                <div class = "iconBox">
                    <img src="../assets/avatar/avatar0.png" style="height:100%; width: 200%;">
                </div>
                <!-- 个人信息 -->
                <div class = "infoBox">
                    <h2>UserName</h2>
                    <h3>Profile</h3>
                    <h3>Tags</h3>
                    <h3>PageTitle1</h3>
                    <h3>PageTitle2</h3>
                    <h3>PageTitle3</h3>
                    <h3>PageTitle4</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ElCarousel, ElCarouselItem, ElBacktop} from '@/../node_modules/element-plus';
export default {
    name: 'bsHome',
    components:{
        ElCarousel,
        ElCarouselItem,
        ElBacktop
    },
    data(){
        return{
            articles: [
                    {
                        title: '文章标题1',
                        content: '文章内容1',
                        author: {
                            name: '作者1姓名',
                            pic: '../assets/avatar/avatar1.png',
                            profile: '简介1'
                        },
                        link: '链接1'
                    },
                    {
                        title: '文章标题2',
                        content: '文章内容2',
                        author: {
                            name: '作者2姓名',
                            pic: '../assets/avatar/avatar2.png',
                            profile: '简介2'
                        },
                        link: '链接2'
                    },
                    {
                        title: '文章标题3',
                        content: '文章内容3',
                        author: {
                            name: '作者3姓名',
                            profile: '简介3'
                        },
                        link: '链接3'
                },
            ]
        }
    }
}
</script>

<style scoped>
.headerSpace{
    height: 80px;
    width: 100%;
    background-color: #FBFBFA;
}
.homeBox{
    /* background: #c0c0b7; */
    min-width: 1400px;
    display: flex; 
    justify-content: space-between;/* 两端对齐 */
    flex-direction: row;/* 水平排列 */
    padding:2% 0%;
}


.mainBox{
    /* height: 100%; */
    width: 70%;
    display: flex; 
    position: relative; 
    flex-direction: column;/* 垂直排列 */
    padding: 3% 5% 5% 5%;
}
.topPeekiBox{
    display: flex; 
    /* 调整图片的水平位置*/
    padding-left: 5%;
    padding-right: 90%;
}
.topPeekiBox img{
    /* z-index: 2;  */
    position: absolute;
    top:10px;
}
.pictureBox{
    /* z-index: 1; */
    width: 100%;
    height: 400px;
    border-radius: 12px;
    border: 2px solid #F6F5F4;
    background: #FBFBFA;
    display: flex;
    justify-content: center;
    align-content: center;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 350px;
  margin: 0;
  text-align: center;
}


.articleBox{
    width: 95%; /* 垂直方向对齐*/
    display: flex; 
    position: relative; 
    /* background-color: rgba(251, 251, 250, 1); */
    align-items: center;/* 垂直居中 */
    flex-direction: column;/* 垂直排列 */
    padding: 10% 0% 0% 0%;
}

.articleInfo{
    width: 100%;
    height: 250px;
    border-radius: 12px;
    border: 2px solid #F6F5F4;
    background: #FBFBFA;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    padding: 3%; 
    flex-direction: column;
}

div footer{
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: row;
}


.asideBox{
    width: 30%;
    display: flex; /* 块级元素转换为行内元素 */
    position: relative; /* 设置相对定位 */
    align-items: center;/* 垂直居中 */
    flex-direction: column;/* 垂直排列 */
    padding: 3% 5% 0% 0%;
}
.iconBox{
    display: flex;
    align-items:start;
    justify-content: center;
    /* 头像和个人信息之间的垂直间隔 */
    padding-block-start: 30%;
    padding-block-end: 15%;     
}
.infoBox{
    width: 80%;
    height: 72%;/* 侧栏高度 */
    display: flex;
    align-items: center;
    justify-items: flex-start;
    border-radius: 12px;
    border: 2px solid #F6F5F4;
    background: #FBFBFA;
    flex-direction: column;/* 垂直排列 */
}
</style>