<template>
    <div style="border: 1px solid #ccc; width: 50%;">
        <div style=" top: 50%;
             left: 50%;">
            <Editor style="height: 100px; overflow-y: hidden;" v-model="htmlTitle" :defaultConfig="editorConfig" :mode="mode"
            @onCreated="onCreated" />
            <el-divider style="border-style: hidden; color: black" />
        </div>
        <el-button type="primary" round="true" class="right" @click="submitPassage">提交</el-button>
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
            htmlTitle: '<p></p>',
            htmlContent: '<p></p>',
            toolbarConfig: {},
            editorConfig: {
                placeholder: '请输入标题...',
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
    position: absolute;
    left:700px;
    border: 3px solid #73AD21;
    padding: 10px;

}
</style>