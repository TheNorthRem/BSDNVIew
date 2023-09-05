<template>
    <!--  -->
    <span v-for= "i in arrayLength" style="padding-bottom: 5%;">
        <div class="articleInfo">
            <div style="border: 1px solid #652828;border-radius: 3px;">
                <Editor style="height: 200px; overflow-y: hidden; width: 800px; " v-model=this.content[i-1]
                    :defaultConfig="editorConfig" :mode="mode" @onCreated="onCreated" />
            </div>
            <footer style="display: inline-flex;padding-top: 2%;">
                <!-- 等待替换动态头像资源
                :src=this.profilePhotoPath[i-1] -->
                <img src="../assets/avatar/avatar1.png" style="width: 10%;height: auto; padding-right:3%;" />
                <div>
                    <h3>
                        UserName：{{nickName[i-1]}}
                    </h3>
                    <p>ID：{{ uploaderId[i-1] }}</p>
                </div>
                <!-- 绑定：articleId router传递需要的内容参数给新的页面，渲染页面 -->
                <h4><a href="#/passageDetail" style="padding-left: 900%;" @click="MoreRouter">More...</a></h4>
            </footer>
            
        </div>
    </span>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { getTopArticles } from "@/http/api"
import {ElButton} from '@/../node_modules/element-plus';
import { toRaw } from '@vue/reactivity'
import {Mounted} from "vue"

export default {
    components: { Editor, Toolbar, getTopArticles, Mounted, ElButton },
    data() {
        return {
            arrayLength: 0,
            toArticleId: 0,
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
            profilePhotoPath: [],
            articleId: [],
        }
    },
    methods: {
        // 显示热门文章
        MoreRouter(){
        //     console.log(this.toArticleId)
        //     this.$router.push({
        //         path:"/passageDetail",
        //         query:{
        //             id: this.toArticleId,
        //         }
        // })
        },
        async getTopArticlesFunction() {
            await getTopArticles().then(res => {
                if (res.data.code == 200) {
                    console.log("获取热门文章成功！")
                    console.log(res.data.data)
                    this.arrayLength = toRaw(res.data.data).length
                    for(let i = 0; i < this.arrayLength; i++){
                        this.uploaderId.push(res.data.data[i].uploaderId)
                        this.articleId.push(res.data.data[i].articleId)
                        this.nickName.push(res.data.data[i].nickName)
                        this.content.push(res.data.data[i].content)
                        this.articleId.push(res.data.data[i].articleId)
                        // 等待头像资源
                        // this.profilePhotoPath.push(res.data.data[i].profilePhotoPath)
                    }
                } else {
                    console.log("获取热门文章失败！")
                }
            }
            )
        },
        async onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
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