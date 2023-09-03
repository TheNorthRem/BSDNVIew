<template>
    <div style="border: 1px solid #ccc; width: 50%;">
        <div style=" top: 50%;
             left: 50%;">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
            <Editor style="height: 500px; overflow-y: hidden;" v-model="html" :defaultConfig="editorConfig" :mode="mode"
            @onCreated="onCreated" />
        </div>
        <el-button type="primary" round="true" class="right" @click="submitPassage">提交</el-button>
    </div>
    
</template>

<script>
// import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {ElButton} from "@/../node_modules/element-plus"
import {uploadPassage} from "@/http/api"

export default{
    components: { Editor, Toolbar,ElButton },
    data() {
        return {
            editor: null,
            html: '<p></p>',
            toolbarConfig: {},
            editorConfig: {
                placeholder: '请输入内容...',
                MENU_CONF: {
                    uploadImage:{
                        server: "http://localhost:8081/uploadImage"
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
        // 模拟 ajax 请求，异步渲染编辑器
        // setTimeout(() => {
        //     this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
        // }, 1500)

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
    position: absolute;
    left:700px;
    border: 3px solid #73AD21;
    padding: 10px;

}
</style>