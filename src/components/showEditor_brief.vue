<template>
    <!-- v-for="(article,index) in JSON.parse(JSON.stringify(articles))" :key="index"  -->
    <span style="padding-bottom: 5%;">
        <div class="articleInfo">
            <div style="border: 1px solid #652828;border-radius: 3px;">
                <Editor style="height: 200px; overflow-y: hidden; width: 800px; " v-model="html"
                    :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" />
            </div>
            <footer style="display: inline-flex;padding-top: 2%;">
                <img src="../assets/avatar/avatar1.png" style="width: 10%;height: auto; padding-right:3%;" />
                <div>
                    <h3>
                        <!-- {{ article.author.name }} -->
                        name
                    </h3>
                    <!-- <p>{{ article.author.profile }}</p> --> profile
                </div>
            </footer>
        </div>
    </span>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { getTopArticles } from "@/http/api"
import { toRaw } from '@vue/reactivity'

export default {
    components: { Editor, Toolbar, getTopArticles },
    data() {
        return {
            editor: null,
            html: '<p>hello</p>',
            toolbarConfig: {},
            editorConfig: {
                placeholder: '请输入内容...',
                readOnly: true
            },
            mode: 'default', // or 'simple',
            articles: [],
            article: {
                articlesId: 0,
                category: "",
                title: "",
                uploadTime: "",
                uploadId: "",
            },
        }
    },
    methods: {
        // 显示热门文章
        async getTopArticlesFunction() {
            await getTopArticles().then(res => {
                if (res.data.code == 200) {
                    console.log("获取热门文章成功！")
                    // console.log(res.data.data)
                    this.articles = toRaw(res.data.data)
                    console.log(toRaw(res.data.data))
                    console.log("1111")
                    console.log(this.articles)
                    // console.log(toRaw(this.articles))
                    for (let i = 0; i < res.data.data.length; i++) {
                        // console.log(JSON.parse(JSON.stringify(this.article))[i])
                        // this.html = JSON.parse(JSON.stringify(this.article))[i].content
                        // this.articles.push(JSON.parse(JSON.stringify(this.test))[i])
                    }
                } else {
                    console.log("获取热门文章失败！")
                }
                console.log("222")
                console.log(this.articles)
            }
            )
        },
        async onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
            // this.html = JSON.parse(JSON.stringify(this.article))[i].content
            await this.getTopArticlesFunction()
            console.log("2")
            console.log(toRaw(this.articles))
            // setTimeout("",5000)

        },
    },
    mounted() {
       
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
    watch: {
        html: {
            handler() {
                console.log(this.html)
            }
        },
    },
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>