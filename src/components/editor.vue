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
import {ElButton,ElDivider} from "@/../node_modules/element-plus"
import {uploadPassage} from "@/http/api"

export default{
    components: { Editor, Toolbar,ElButton,ElDivider },
    data() {
        return {
            editor: null,
            htmlTitle: '<h1>标题：</h1>',
            html: '<p></p>',
            toolbarConfig: {},
            editorConfig: {
                placeholder: '请输入内容...',
                MENU_CONF: {
                    uploadImage:{
                        server: "http://localhost:8081/ImageUpload",
                        fieldName: 'image',
                        maxFileSize: 100 * 1024 * 1024, // 1M
                    }
                },
            },
            mode: 'default', // or 'simple',
            uploadData:{
                
            },
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
        submitPassage(){
            uploadPassage(this.html).then(
                res=>console.log(res)
                
            )
        }
    },
    watch: {
        html: {
            handler() {
                console.log(this.html)
            },
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
