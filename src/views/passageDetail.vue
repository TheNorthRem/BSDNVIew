<template>
    <div class="editorViewBox">
        <img src="../assets/e1.png" style="height: auto;width: 15%; position: fixed; padding-inline: 3%;left: 2%;bottom: 0;">
        <div class="passageBox">
            
            <div style="display: inline-flex;">
                <img src="../assets/avatar/avatar1.png" style="width: 10%;height: auto; padding-right:3%;" />
                <div>
                    <h3>
                        {{nickName}}<!-- UserName：{{nickName[i-1]}} -->
                    </h3>
                    {{userID}}<!-- <p>ID：{{ uploaderId[i-1] }}</p> -->
                </div>

            </div>
            
            <Editor style="height: 80%; overflow-y: hidden;" v-model="content" :defaultConfig="editorConfig" :mode="mode"
                @onCreated="onCreated" />
                <div class="buttomBox">
                    <el-button @click="visible = true; getComment()" style="width:9%" text>
                        🗣 评论 
                    </el-button>
                    <el-button @click="visible = true" style="width:9%" text>
                        👍 收藏 
                    </el-button>
                </div>
                
                <el-drawer v-model="visible" :show-close="false">
                    <template #header="{ close, titleId, titleClass }">
                    <h4 :id="titleId" :class="titleClass">评 论</h4>
                    <el-button type="danger" @click="close">
                        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
                    </el-button>
                    </template>
                    <div class="comments">
                        评论区
                        
                    </div>
                </el-drawer>
        </div>
        <img src="../assets/e2.png" style="height: auto;width: 15%; position: fixed;padding-inline: 3%;right: 2%;bottom: 0;">
    </div>
    
</template>

<script>
// import Vue from 'vue'
import { Editor,  } from '@wangeditor/editor-for-vue'
import { ElMessage, ElIcon, ElDrawer, ElButton} from "@/../node_modules/element-plus"
import { CircleCloseFilled } from '@element-plus/icons-vue'
import { uploadPassage,detailedPassageInfo,getComments } from "@/http/api"
export default {
    components: { Editor, ElIcon, ElDrawer, ElButton, CircleCloseFilled },
    data() {
        return {
            nickName:"NickName",
            content:"content",
            userID:"userID",
            commentForm:{
                articleId:1 ,
                page:1
            },
            visible: false,
            editor: null,
            title: '<h2>标题</h2>',
            html: '<p></p>',
            toolbarConfig: {},
            editorConfig: {
                readOnly:true,
                placeholder: '文章...',
                MENU_CONF: {
                    uploadImage: {
                        server: "http://localhost:8081/ImageUpload",
                        fieldName: 'image',
                        maxFileSize: 100 * 1024 * 1024, // 1M
                    }
                },
            },
            mode: 'default', // or 'simple',
            uploadData: {
                title: this.title,
                content: this.html,
                id: localStorage.getItem("ID"),
            },
        }
    },
    // create(){
        
        
    // },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
            this.id = localStorage.getItem("ID");
            console.log("passageID",localStorage.getItem("ID"));
            this.getPassage();
        },
        getPassage(){
                    let IDForm = {
                        id: this.id,
                    }
                    console.log("passageID:",localStorage.getItem("ID"));
                    if(this.id == null) return;
                    else{
                        detailedPassageInfo(IDForm)
                            .then(result => {
                                console.log(result)
                                console.log("获取文章详情信息成功");
                                this.nickName=result.data.data.nickName;
                                this.content=result.data.data.content;
                                this.userID=result.data.data.content;
                            })
                            .catch(error => {
                                console.error('获取文章详情信息失败:', error);
                            });
                    }
            },
        getComment(){
            getComments().then(result => {
                                console.log(result)
                                console.log("获取文章评论成功");
                                this.nickName=result.data.data.nickName;
                                this.content=result.data.data.content;
                                this.userID=result.data.data.content;
                            })
                            .catch(error => {
                                console.error('获取文章评论失败:', error);
                            });
        }
        },
        submitPassage() {
            console.log(this.uploadData)
            uploadPassage(this.uploadData).then(res => {
                if (res.data.code == 200) {
                    console.log(res.data)
                    console.log("发布成功！")
                    ElMessage({
                        showClose: true,
                        message: '发布成功！',
                        type: 'success',
                    })
                }
                else {
                    console.log("发布失败")
                    ElMessage({
                        showClose: true,
                        message: '发布失败！',
                        type: 'error',
                    })
                }
            }
            )
        },
    watch: {
        html: {
            handler() {
                this.uploadData.content = this.html
                // console.log(this.uploadData)
            }
        },
        title: {
            handler() {
                this.uploadData.title = this.title
                // console.log(this.uploadData)
            }
        }
    },
    mounted() {

    },
    beforeUnmount() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    }
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped>
.buttomBox{
    display:flex;
    flex-direction: row;
}
.editorViewBox{
    width: 100%;  
    height:100%; 
    background: #FFFEFC;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: row;
    padding-block:1%;/* 上下留白 */
}
.right {
    margin-top:2%;
    margin-left:auto;
    margin-right:auto;
    color:#E94457;
    background: #FDF5F2;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 24px;
    font-weight: 900;
    border: 3px solid #F8DAD7;
    padding: 2%;
    width:13%;
    height:auto;

}
.passageBox{
    padding-inline: 25%;
    display: flex;
    flex-direction: column;
    width:60%;
    height: 100%;  
    border: #E94457 10px;/* 边框 没用*/
}
/deep/ .el-divider--horizontal{
    margin: 0px 0px 0px 0px;
}
</style>
