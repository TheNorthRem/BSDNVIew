<template>
    <div class="viewSettings">
        <div class="gird-item">
            <div class="grid-container">
                <!-- 左侧展示搜索结果 -->
                <section class="block">
                    <span v-for="(article, index) in articles" :key="index">
                        <div class="blockInside">
                            <!-- 文章作者的相关信息 -->
                            <header class="blockHeader" >
                                <!-- 文章作者的头像 -->
                                <div class="avatar">
                                        <img src="../assets/avatar/avatar0.png" class="avatarImg"/>
                                </div>
                                <!-- 文章作者的昵称 -->
                                <span class="username">
                                    {{ article.author.name }}
                                </span>
                            </header>
                            <!-- 简略展示文章信息 -->
                            <div class="showContent">
                                {{ article.content }}
                            </div>
                        </div>
                        <!-- 文章标题   -->
                        <div class="passageTitle">
                            {{ article.title }}
                        </div>
                    </span>
                </section>
                <!-- 右侧放置用户简介 -->
                <section class="profile">
                    <!-- 用户头像 -->
                    <div class="avatarBox">
                        <img class="avatarImgInProfile" src="../assets/avatar/avatar0.png" />
                    </div>
                    <!-- 用户信息的简略展示 -->
                    <div class="profileBox">
                        <!-- 用户名 -->
                        <span class="userProfileName">
                            {{ user.name }}
                        </span>
                        <!-- 点赞数 -->
                        <span class="Likes">
                            Likes:{{ user.likes }}
                        </span>
                    </div>
                
                </section>
            </div>
        </div>
    </div>
</template>
    
    <script>
    export default {
      name: 'Search',
      data(){
        return{
            user:{
                name:"UserName",
                likes:10,
            },
            articles: [
                {
                title: '文章标题1',
                content: '文章内容1...',
                author: {
                    name: '作者1姓名'
                },
                link: '链接1'
                },
                {
                title: '文章标题2',
                content: '文章内容2...',
                author: {
                    name: '作者2姓名'
                },
                link: '链接2'
                },
                {
                title: '文章标题3',
                content: '文章内容3...',
                author: {
                    name: '作者3姓名'
                },
                link: '链接3'
                },
            ]
        };
      }
    }
    
    </script>
    
    <style>
   
    .viewSettings{
        width: 100%;
        min-width: 1400px;/* 最小宽度 控制缩放时的布局不变形 */
    }
    .gird-item{
        padding-top:8%;
        margin-left:8%;
        margin-right:8%;
        grid-column: span 12;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 923px 170px;
        gap: 24px;
        
    }
    .block{
        height: 742px; /* 适当的高度 */
        overflow-y: scroll;
        width: 100%;
        position: relative;
    }
    .blockInside{
        border: 2px solid #F6F5F4;
        width:88%;
        height:25%;
        border-radius: 12px;
        background-color: #FBFBFA;
        transition: background-color .15s ease-in-out,border-color .15s ease-in-out;
        flex-direction: column;
        gap: 8px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left:15px;
        break-inside: avoid-column;
        cursor: auto;
    }
    .passageTitle{
        padding-left: 15px;
        color: #050505;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.13px;
        padding-top:13px;
        margin-bottom: 26px;
    }
    .showContent{
        height:100%;
        padding:15px;
        width:870px;
        word-wrap: break-word;
    }
    .blockHeader {
        align-items: center;
        display: flex;
    }
    .avatarImg{
        height: 48px;
        width: 48px;
    }
    .avatarBox{
        width: 247px;
        height:150px;
    }
    .avatarImgInProfile{
        z-index:99;
        height: 150px;
        width: 150px;
        padding-left:48.5px;
    }
    .avatar{
        z-index:99;
        position: relative;
        border-radius: 50%;
        height: 48px;
        width: 48px;
        margin-right: 8px;
        overflow: hidden;
        width: 48px;
    }
    .profileBox{
        border: 2px solid #F6F5F4;
        margin-top:50px;
        padding:30px;
        border-radius: 12px;
        background: #FBFBFA;
        width:247px;
        height:170px;
        display: flex;
        flex-direction: column;
    }
    .userProfileName{
        color: #050505;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.13px;
    }
    .Likes{
        margin-top:5px;
        color: #0A85D1;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
        gap: 16px;
    }
    .profile{
        position: sticky;
    top: 0;
    }
    .username{
        margin-right: 8px;
        font-weight: 700;
        font-size:0.9375rem;
    }
    </style>