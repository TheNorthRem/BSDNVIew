<template>
    <div>
         <!-- 导航栏预留空间 -->
        <div class = "headerSpace"></div>   
        <!-- 整个主页盒子 --> 
        <div class = "homeBox"> 
            <!-- 主体部分 -->    
            <div class = "mainBox">
                <!-- 轮播图 -->     
                <div class="pictureBox"></div> 
                <!-- 文章列表 -->   
                <div class="articleBox"></div>    
            </div>
            <!-- 侧栏 -->
            <div class = "asideBox"> 
                <!-- 头像 -->
                <div class = "iconBox">

                </div>
                <!-- 个人信息 -->
                <div class = "infoBox"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bsHome'
}
</script>

<style>
.headerSpace{
    height: 80px;
    width: 100%;
    background-color: #FBFBFA;
}
.homeBox{
    height: auto;
    width: 100%;
    display: flex; /* 块级元素转换为行内元素 */
    position: relative; /* 设置相对定位 */
    align-items: center;/* 垂直居中 */
    justify-content: space-between;/* 两端对齐 */
    flex-direction: row;/* 水平排列 */
}

.mainBox{
    height: 100%;
    width: 70%;
    display: flex; 
    position: relative; 
    align-items: center;
    flex-direction: column;/* 垂直排列 */
    padding: 5% 9%;
}
.pictureBox{
    width: 100%;
    height: 400px;
    /* background-color: rgb(230, 230, 225); */
    border-radius: 12px;
    border: 2px solid #F6F5F4;
    background: #FBFBFA;
}
.articleBox{
    width: 100%;
    display: flex; 
    position: relative; 
    background-color: rgba(251, 251, 250, 1);
    align-items: center;/* 垂直居中 */
    flex-direction: column;/* 垂直排列 */
}
.asideBox{
    width: 30%;
    display: flex; /* 块级元素转换为行内元素 */
    position: relative; /* 设置相对定位 */
    align-items: center;/* 垂直居中 */
    flex-direction: column;/* 垂直排列 */
    padding: 5% 0%;
}
</style>