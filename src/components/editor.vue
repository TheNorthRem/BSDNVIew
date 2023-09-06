<template>
    <div class="editorViewBox">
        <img src="../assets/e1.png" style="height: 15%;width: 15%; padding-inline: 3%;">
        <div class="editorBox">
            <Toolbar class="toolBarBox" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
            <Editor style="height: 10%; overflow-y: hidden;" v-model="title" :defaultConfig="editorConfig" :mode="mode"
                @onCreated="onCreated" />
            <el-divider border-style="solid" />
            <Editor style="height: 400px; overflow-y: hidden;" v-model="html" :defaultConfig="editorConfig" :mode="mode"
                @onCreated="onCreated" />
            <el-divider border-style="solid" />
            <el-button type="primary"  round="true" class="right" @click="submitPassage">提 交</el-button>
        </div>
        <img src="../assets/e2.png" style="height: 15%;width: 15%; padding-inline: 3%;">
    </div>
    
</template>

<script>
// import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElButton, ElDivider, ElMessage, ElTag } from "@/../node_modules/element-plus"
import { uploadPassage } from "@/http/api"

export default {
    components: { Editor, Toolbar, ElButton, ElDivider, ElTag },
    data() {
        return {
            editor: null,
            title: '<h2>标题：</h2>',
            html: '<p></p>',
            toolbarConfig: {},
            editorConfig: {
                placeholder: '请输入内容...',
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
                tag:this.$route.query.name
            },
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
            this.id = localStorage.getItem("ID")
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
            ).catch(error => {
                //加上响应代码
                console.error("被拦截器拦住了!")
                console.error(error)
            })
        }
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
.editorBox{
    width:60%;
    /* border: #E94457 10px; */
}
.toolBarBox{
    border-bottom: 1px solid #ccc;
    /* border-radius: 10px; */
}
/deep/ .el-divider--horizontal{
    margin: 0px 0px 0px 0px;
}
</style>
