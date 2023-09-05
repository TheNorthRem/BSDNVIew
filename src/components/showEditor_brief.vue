<template>
    <!--  -->
    <span v-for= "i in arrayLength" style="padding-bottom: 5%;">
        <div class="articleInfo">
            <div style="border: 1px solid #652828;border-radius: 3px;">
                <Editor style="height: 200px; overflow-y: hidden; width: 800px; " v-model=this.content[i-1]
                    :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" />
            </div>
            <footer style="display: inline-flex;padding-top: 2%;">
                <img src="../assets/avatar/avatar1.png" style="width: 10%;height: auto; padding-right:3%;" />
                <div>
                    <h3>
                        UserName：{{nickName[i-1]}}
                    </h3>
                    <p>ID：{{ uploaderId[i-1] }}</p>
                </div>
            </footer>
        </div>
    </span>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { getTopArticles } from "@/http/api"
import { toRaw } from '@vue/reactivity'
import {Mounted} from "vue"

export default {
    components: { Editor, Toolbar, getTopArticles, Mounted },
    data() {
        return {
            arrayLength: 0,
            editor: null,
            html: '<p>hello</p>',
            toolbarConfig: {},
            editorConfig: {
                placeholder: '请输入内容...',
                readOnly: true,
                MENU_CONF: {
                    uploadImage: {
                        server: "http://localhost:8081/ImageUpload",
                        fieldName: 'image',
                        maxFileSize: 100 * 1024 * 1024, // 1M
                    }
                },
            },
            mode: 'default', // or 'simple',
            articles: [],
            nickName: [],
            uploaderId: [],
            articleId: [],
            content: [],
        }
    },
    methods: {
        // 显示热门文章
        async getTopArticlesFunction() {
            await getTopArticles().then(res => {
                if (res.data.code == 200) {
                    console.log("获取热门文章成功！")
                    this.articles
                    console.log(res.data.data)
                    this.arrayLength = toRaw(res.data.data).length
                    for(let i = 0; i < this.arrayLength; i++){
                        this.uploaderId.push(res.data.data[i].uploaderId)
                        this.articleId.push(res.data.data[i].articleId)
                        this.nickName.push(res.data.data[i].nickName)
                        this.content.push(res.data.data[i].content)
                        console.log(res.data.data[i].uploaderId)
                    }
                } else {
                    console.log("获取热门文章失败！")
                }
            }
            )
        },
        async onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
            this.html = this.content[3]
        },
    },
    async mounted() {
        await this.getTopArticlesFunction()

    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
    watch: {
        html: {
            handler() {
                // console.log(this.html)
            }
        },
    },
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>