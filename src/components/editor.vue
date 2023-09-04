<template>
    <div style=" width: 60%;  height:70%; margin: 0 auto; border-radius:12px;">

        <div style=" top: 50%;
             left: 50%;border-radius:12px; border:3px solid #F6F5F4;">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
            <Editor style="height: 100px; overflow-y: hidden;" v-model="htmlTitle" :defaultConfig="editorConfig" :mode="mode"
            @onCreated="onCreated" />
            <el-divider style="border-style: hidden; color: black" />
            <Editor style="height: 500px; overflow-y: hidden;" v-model="html" :defaultConfig="editorConfig" :mode="mode"
            @onCreated="onCreated" />
        </div>
        <el-button type="primary"  round="true" class="right" @click="submitPassage">提交</el-button>
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
<style>

.right {
    margin-top:3%;
    margin-left:auto;
    margin-right:auto;
    color:#E94457;
    background: #FDF5F2;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    border: 3px solid #F8DAD7;
    padding: 10px;
    width:306px;
    height:48px;

}
</style>