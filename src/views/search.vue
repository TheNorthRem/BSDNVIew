<template>
    <div class="viewSettings">
        <div class="grid-item">
            <div class="articleBox">
                <span v-for="i in articleArrayLength" v-bind:key="i" style="padding-bottom: 5%;">
                    <showEditor_brief :uploaderId=this.Articles[i-1].uploaderId
                        :uploaderNickName=this.Articles[i-1].nickName :brief=this.Articles[i-1].brief
                        :title=this.Articles[i-1].title :uploadTime=this.Articles[i-1].uploadTime
                        :nickName=this.Articles[i-1].nickName :articleId=this.Articles[i-1].articleId></showEditor_brief>
                </span>
            </div>
            <div class="paginationBlock">
                <el-pagination layout="prev, pager, next" :total="1000" />
            </div>
        </div>

    </div>
</template>
    
<script>
import { ElPagination } from '@/../node_modules/element-plus'
import showEditor_brief from '@/components/showEditor_brief.vue';
export default {
    name: 'Search',
    components: {
        ElPagination,
        showEditor_brief
    },
    data() {
        return {
            articleArrayLength: 0,
            Articles: [],
        };
    },
    created() {
        // console.log(JSON.parse(this.$route.query.searchResults));
        // console.log(this.$route.query.searchResults);
        // 传参 将路由参数转换为json格式并赋给本地变量
        this.Articles = JSON.parse(this.$route.query.searchResults);
        this.articleArrayLength = this.Articles.length
        for (let i = 0; i < this.articleArrayLength; i++) {
            this.Articles[i].brief = "<h3>简介：".concat(this.Articles[i].brief).concat("......</h3>")
            console.log(this.Articles[i].brief)
        }
        console.log(this.Articles.length)
        console.log(this.Articles[1].title);
    },

}
</script>
    
<style>
.viewSettings {
    width: 100%;
    min-width: 1400px;
    /* 最小宽度 控制缩放时的布局不变形 */
}

.grid-item {
    padding-top: 8%;
    margin-left: 8%;
    margin-right: 8%;
    grid-column: span 12;

}

.grid-container {
    display: grid;
    gap: 24px;
}

.block {
    height: 742px;
    /* 适当的高度 */
    overflow-y: scroll;
    width: 100%;
    position: relative;
}

.blockInside {
    border: 2px solid #F6F5F4;
    width: 88%;
    height: 25%;
    border-radius: 12px;
    background-color: #FBFBFA;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out;
    flex-direction: column;
    gap: 8px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    break-inside: avoid-column;
    cursor: auto;
}

.passageTitle {
    padding-left: 15px;
    color: #050505;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    /* 133.333% */
    letter-spacing: -0.13px;
    padding-top: 13px;
    margin-bottom: 26px;
}

.showContent {
    height: 100%;
    padding: 15px;
    width: 870px;
    word-wrap: break-word;
}

.blockHeader {
    align-items: center;
    display: flex;
}

.avatarImg {
    height: 48px;
    width: 48px;
}

.avatarBox {
    width: 247px;
    height: 150px;
}

.avatarImgInProfile {
    z-index: 99;
    height: 150px;
    width: 150px;
    padding-left: 48.5px;
}

.avatar {
    z-index: 99;
    position: relative;
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin-right: 8px;
    overflow: hidden;
    width: 48px;
}

.profileBox {
    border: 2px solid #F6F5F4;
    margin-top: 50px;
    padding: 30px;
    border-radius: 12px;
    background: #FBFBFA;
    width: 247px;
    height: 170px;
    display: flex;
    flex-direction: column;
}

.userProfileName {
    color: #050505;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    /* 133.333% */
    letter-spacing: -0.13px;
}

.Likes {
    margin-top: 5px;
    color: #0A85D1;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 150% */
}

.icon {
    display: block;
    width: 26px;
    height: 26px;
    color: var(--color-link);
    margin-bottom: 10px;
}

.moreButton {
    color: #0a85d1;
}

.more {
    position: relative;
    line-height: 24px;
}

.more:hover {
    text-decoration: underline;
}

.rightBlocks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    gap: 16px;
}

.profile {
    position: sticky;
    top: 0;
}

.username {
    margin-right: 8px;
    font-weight: 700;
    font-size: 0.9375rem;
}

.paginationBlock {
    display: inline-flex;
    justify-content: center;
    padding-inline: 35%;
    padding-block: 2%;

}

.articleBox {
    width: 65%;
    /* 垂直方向对齐*/
    display: flex;
    position: relative;
    /* background-color: rgba(251, 251, 250, 1); */
    align-items: center;
    /* 垂直居中 */
    flex-direction: column;
    /* 垂直排列 */
    /* padding: 10% 0% 0% 0%; */
    margin-left: 17%;
    margin-right: 8%;
}
</style>