<template>  
    <div>
        <!-- 回到顶部 -->
        <el-backtop :right="100" :bottom="100" />
        <!-- 整个主页盒子 --> 
        <div class = "homeBox"> 
            <!-- 主体部分 -->    
            <div class = "mainBox">
                <div class="topPeekiBox"><br><br><br><br><br>
                    <img src="../assets/homeSlogan.png" style="margin-left:35%; height: 75%; width: auto;">
                    <img class="topPeeki" src="../assets/topPeeki.png" style="height: 150px; width: auto;">
                </div>
                <!-- 轮播图 -->     
                <div class="pictureBox">
                    <el-carousel height="100%" style="width:100%">
                    <el-carousel-item v-for="(item, index) in items" :key="index">
                        <img :src="item" alt="Carousel Image">
                    </el-carousel-item>
                    </el-carousel>
                </div> 
                <!-- 文章列表 -->  
                <div class="articleBox">
                    <showEditor_brief></showEditor_brief>
                </div> 
            </div>
            <!-- 侧栏 -->
            <div class = "asideBox"> 
                <!-- 头像 -->
                <div class = "iconBox">
                        
                        <img src="../assets/avatar/avatar0.png" style="height:45%; width: 45%;">
                </div>
                <!-- 个人信息 -->
                <div class = "infoBox">
                    <div class="info">
                        <h2>{{nickName}}</h2>
                        <h3>{{userName}}</h3>
                        <h3>{{intro}}</h3>
                        <h3><a href="#/profile">More</a></h3>
                    </div>
                    <!-- <div v-if="!hideLogin" class="info"><h2>请先登录！</h2></div> -->
                </div>
                <img src="../assets/underAsideBox.webp" style="margin-top:30%; height:auto;width:15%;position: fixed;right: 10%;bottom: 0;" >
            </div>
        </div>
    </div>
</template>

<script>
import { ElCarousel, ElCarouselItem, ElBacktop} from '@/../node_modules/element-plus';
import {Mounted, onBeforeMount,} from "vue"
import showEditor_brief from '@/components/showEditor_brief.vue';
import { getUserInfo } from '../http/api.js';
export default { 
    name: 'bsHome',
    components:{
        ElCarousel,
        ElCarouselItem,
        ElBacktop,
        onBeforeMount,
        Mounted,
        showEditor_brief
    },
    data(){
        return{
            nickName:"nickName",
            userName:'userName',
            intro: "Introduction",
            items: [
                        require('../assets/carousel/test1.jpg'),
                        require('../assets/carousel/test2.jpg'),
                        require('../assets/carousel/test3.jpg'),
                        require('../assets/carousel/test4.jpg')
                    ],
        }
    },
    created() {
        this.Reload();
    },
    methods:{
        Reload() {
            //判断用户的登录状态
            let userID=localStorage.getItem('ID');
            let IDForm = {
                id: userID,
            }
            console.log("userID",userID);
            if(userID == null) return;
            else{
                getUserInfo(IDForm) 
                .then(result => {
                    console.log(result)
                    this.userName = result.data.data.userName;
                    this.nickName = result.data.data.nickName;
                    this.intro = result.data.data.intro;
                })
                .catch(error => {
                    console.error('获取用户信息失败:', error);
                });
            }
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
    padding: 2.5% 5% 5% 7%;
}
.topPeekiBox{
    display: flex; 
    justify-items: center;
    align-items: center;
    /* 调整图片的水平位置*/
    padding-left: 5%;
    padding-right: 5%;
}
.topPeeki{
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
.el-carousel__item img {
    width:100%;
    height:100%;
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
    height: 100%;
    display: flex; /* 块级元素转换为行内元素 */
    align-items: center;/* 垂直居中 */
    flex-direction: column;/* 垂直排列 */
    justify-items: space-between;/* 两端对齐 */
    padding: 3% 5% 0% 0%;
}
.iconBox{
    display: flex;
    align-items:start;
    justify-content: center;
    /* 头像和个人信息之间的垂直间隔 */
    padding-block-start: 3%;
    padding-block-end: 13%;  
}
.infoBox{
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: flex-start;
    border-radius: 12px;
    border: 2px solid #F6F5F4;
    background: #FBFBFA;
    flex-direction: column;/* 垂直排列 */
}
.info{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: flex-start;
    flex-direction: column;/* 垂直排列 */
    padding: 5% 10%;
}

</style>